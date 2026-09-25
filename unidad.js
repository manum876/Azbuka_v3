/* ============================================================
   UNIDAD.JS — Motor de práctica compartido por las unidades
   ------------------------------------------------------------
   Versión 25/09/2026. Arma una sesión de ejercicios del banco de la
   unidad con el selector de progress.js (contador más bajo primero,
   errores que vuelven, mezcla de tipos, dificultad que se ajusta),
   la muestra a pantalla completa, corrige con corrector.js y guarda
   cada resultado en az_progress.

   Cargar después de progress.js, corrector.js y burbuja.js:
     <script src="unidad.js"></script>

   Uso:
     h(AzPractica, {
       unidad: 1,                 // número de la unidad (progreso)
       titulo: "Letras amigas",   // lo que se practica
       pool: [...ejercicios],     // el banco ya filtrado
       mezcla: { dictado: 3, … }, // pesos por tipo (opcional)
       n: 12,                     // ejercicios por sesión
       objetivo: [...ids],        // palabras que se enlazan (burbuja)
       dark, onSalir,
       aviso: "…",                // recuadro destacado al empezar (opcional)
       examen: { intro, partes: [{ nombre, tipos, n }], aprobado: .8 },  // modo evaluación
       onReforzar: parte => …     // en el examen, «Practicar <parte>»
     })
   Modo evaluación: n ejercicios por parte, sin «Intentar de nuevo»;
   Bien = 1 punto, Casi = ½; guarda { pct, aprobado, fecha } en
   az_progress.units[N].examen y el mejor puntaje en mejorExamen.

   Formas de ejercicio (campo forma):
     elegir    { pide, grande?, audio?, opciones, correcta }
     escribir  { pide, grande?, audio?, pista?, esperadas, idioma, mayus?, completa? }
     ordenar   { pide, audio?, fichas, esperada }
     vf        { afirmacion, verdadero }
     emparejar { pide, pares: [[izq, der], …], audioIzq? }  (audioIzq: la izquierda es audio)
   Todos: { id, tipo, dificultad, explicacion, recordar?, audio?, audioManual?, oir? }
     audio: botón ▶ (suena solo al aparecer salvo que haya «grande» o audioManual)
     oir: lo que suena al responder (la respuesta correcta)
   Criterios (Manu, 25/09/2026): audio en casi todo; nada de practicar
   transliteración; desordenar lo mismo no es un ejercicio nuevo.
   El resultado de cada uno es AZ_BIEN / AZ_CASI / AZ_MAL.
   ============================================================ */
(function () {
  const h = React.createElement;
  const { useState, useEffect, useRef } = htmPreact;
  const VERDE = "#4CAF82", NARANJA = "#E2884A", ROJO = "#B5605C";

  function hablar(t) { if (typeof azHablarRu === "function") azHablarRu(t); }
  function mezclar(a) { return a.slice().sort(() => Math.random() - .5); }

  function Estilos({ c }) {
    return h("style", null, `
      .pr{position:fixed;inset:0;z-index:300;background:${c.bg};color:${c.text};font-family:'Noto Sans',sans-serif;overflow-y:auto;-webkit-overflow-scrolling:touch;}
      .pr-in{max-width:640px;margin:0 auto;padding:6vh 3vw 4vh;min-height:100%;display:flex;flex-direction:column;}
      .pr-x{position:fixed;top:6vh;right:3vw;width:36px;height:36px;border-radius:10px;background:${c.bg3};border:1px solid ${c.border};color:${c.text};font-size:15px;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;z-index:301;font-family:inherit;}
      .pr-kick{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${c.gold};padding-right:48px;}
      .pr-bar{height:4px;border-radius:2px;background:${c.bg3};margin:10px 48px 18px 0;overflow:hidden;}
      .pr-bar > div{height:100%;background:${c.gold};transition:width .3s ease;}
      .pr-card{background:${c.card};border:1px solid ${c.border};border-radius:16px;padding:20px 18px;}
      .pr-pide{font-size:17px;font-weight:700;line-height:1.4;}
      .pr-grande{font-size:clamp(34px,11vw,48px);font-weight:800;color:${c.gold};text-align:center;margin:18px 0 6px;line-height:1.15;word-break:break-word;letter-spacing:.5px;}
      .pr-oir{display:flex;justify-content:center;margin:16px 0 4px;}
      .pr-oir button{width:64px;height:64px;border-radius:32px;background:${c.gold}22;border:1px solid ${c.gold};color:${c.gold};font-size:22px;cursor:pointer;font-family:inherit;}
      .pr-pista{font-size:13px;color:${c.textMuted};text-align:center;margin-top:6px;}
      .pr-ops{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:18px;}
      .pr-ops.una{grid-template-columns:1fr;}
      .pr-op{min-height:52px;padding:10px 12px;border-radius:12px;background:${c.bg2};border:1px solid ${c.border};color:${c.text};font-size:16px;font-weight:600;cursor:pointer;font-family:inherit;line-height:1.3;}
      .pr-op.ok{background:${VERDE}22;border-color:${VERDE};color:${VERDE};}
      .pr-op.mal{background:${ROJO}22;border-color:${ROJO};color:#D9776F;}
      .pr-op:disabled{cursor:default;}
      .pr-in-row{display:flex;gap:8px;margin-top:18px;}
      .pr-input{flex:1;min-width:0;font-size:18px;padding:12px 12px;border-radius:10px;background:${c.bg3};border:1px solid ${c.border};color:${c.text};}
      .pr-btn{display:flex;align-items:center;justify-content:center;gap:6px;padding:13px 16px;border-radius:10px;border:1px solid ${c.gold};background:${c.gold};color:${c.bg};font-size:14.5px;font-weight:700;cursor:pointer;font-family:inherit;}
      .pr-btn.sec{background:${c.bg3};border-color:${c.border};color:${c.text};}
      .pr-btn:disabled{opacity:.45;cursor:default;}
      .pr-exp{margin-top:14px;font-size:14px;line-height:1.55;color:${c.textSub};}
      .pr-exp b{color:${c.text};}
      .pr-rec{margin-top:8px;font-size:13.5px;line-height:1.5;color:${c.textSub};padding-left:10px;border-left:2px solid ${c.gold}66;}
      .pr-res{display:inline-block;font-size:13px;font-weight:800;border-radius:8px;padding:3px 10px;margin-top:14px;}
      .pr-pie{margin-top:auto;padding-top:18px;}
      .pr-fichas{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-top:14px;min-height:48px;}
      .pr-ficha{min-width:44px;height:48px;padding:0 10px;border-radius:10px;background:${c.bg2};border:1px solid ${c.border};color:${c.text};font-size:22px;font-weight:700;cursor:pointer;font-family:inherit;}
      .pr-armado{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;min-height:56px;padding:4px;border-bottom:2px solid ${c.gold}66;margin-top:14px;}
      .pr-armado .pr-ficha{background:${c.gold}22;border-color:${c.gold};}
      .pr-em{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:16px;}
      .pr-em .pr-op.sel{border-color:${c.gold};background:${c.gold}22;color:${c.gold};}
      .pr-em .pr-op.hecho{opacity:.35;}
      .pr-lista{margin-top:10px;}
      .pr-lista > div{padding:10px 0;border-top:1px solid ${c.border};font-size:14px;line-height:1.45;}
    `);
  }

  function Oir({ texto, auto }) {
    useEffect(() => { if (auto && texto) { const t = setTimeout(() => hablar(texto), 250); return () => clearTimeout(t); } }, [texto]);
    return h("div", { className: "pr-oir" }, h("button", { onClick: () => hablar(texto), "aria-label": "Escuchar" }, "▶"));
  }

  function Explicacion({ ej, r }) {
    const col = r === AZ_BIEN ? VERDE : r === AZ_CASI ? NARANJA : ROJO;
    const txt = r === AZ_BIEN ? "✓ Bien" : r === AZ_CASI ? "≈ Casi" : "✗ Mal";
    return h("div", null,
      h("span", { className: "pr-res", style: { color: col, background: col + "22", border: "1px solid " + col } }, txt),
      ej.explicacion && h("div", { className: "pr-exp" }, ej.explicacion),
      r !== AZ_BIEN && ej.recordar && h("div", { className: "pr-rec" }, "Para recordarlo: " + ej.recordar));
  }

  /* ── Formas ── */
  function Elegir({ ej, onRes, hecho }) {
    const [elegida, setElegida] = useState(null);
    const ops = ej.opciones;
    const larga = ops.some(o => o.length > 14);
    const tocar = o => { if (elegida) return; setElegida(o); onRes(o === ej.correcta ? AZ_BIEN : AZ_MAL); };
    return h(React.Fragment, null,
      h("div", { className: "pr-pide" }, ej.pide),
      ej.grande && h("div", { className: "pr-grande", lang: "ru" }, ej.grande),
      ej.audio && h(Oir, { texto: ej.audio, auto: !ej.grande }),
      h("div", { className: "pr-ops" + (larga ? " una" : "") }, ops.map(o => {
        const cls = !elegida ? "" : o === ej.correcta ? " ok" : o === elegida ? " mal" : "";
        return h("button", { key: o, className: "pr-op" + cls, disabled: !!elegida, onClick: () => tocar(o), lang: "ru" }, o);
      })),
      hecho != null && h(Explicacion, { ej, r: hecho }));
  }

  function Escribir({ ej, onRes, hecho, dark, c, examen }) {
    const [txt, setTxt] = useState("");
    const [r, setR] = useState(null);
    const ref = useRef(null);
    const ru = ej.idioma === "ru";
    const comprobar = () => {
      if (!txt.trim()) return;
      const res = azCorregir(txt, ej.esperadas, { idioma: ej.idioma });
      setR(res);
      if (hecho == null) onRes(res.resultado);
    };
    const reintentar = () => { setTxt(""); setR(null); if (ref.current) ref.current.focus(); };
    return h(React.Fragment, null,
      h("div", { className: "pr-pide" }, ej.pide),
      ej.grande && h("div", { className: "pr-grande", lang: "ru" }, ej.grande),
      ej.audio && h(Oir, { texto: ej.audio, auto: !ej.grande && !ej.audioManual }),
      ej.pista && h("div", { className: "pr-pista" }, ej.pista),
      h("div", { className: "pr-in-row" },
        h("input", {
          ref, className: "pr-input", value: txt, lang: ru ? "ru" : "es",
          autocapitalize: "off", autocorrect: "off", spellcheck: false, autocomplete: "off",
          placeholder: ru ? "Escribí en ruso…" : ej.idioma === "es" ? "Escribí en español…" : "Escribí con letras latinas…",
          onInput: e => { setTxt(e.target.value); setR(null); },
          onKeyDown: e => { if (e.key === "Enter") comprobar(); }
        }),
        h("button", { className: "pr-btn", onClick: comprobar, disabled: !txt.trim() || (r && r.resultado === AZ_BIEN) }, "Comprobar")),
      r && h(AzCorreccion, { r, dark }),
      hecho != null && r && h("div", { className: "pr-exp" }, ej.explicacion),
      hecho != null && r && r.resultado !== AZ_BIEN && ej.recordar && h("div", { className: "pr-rec" }, "Para recordarlo: " + ej.recordar),
      r && r.resultado !== AZ_BIEN && !examen && h("button", { className: "pr-btn sec", style: { marginTop: 12, width: "100%" }, onClick: reintentar }, "Intentar de nuevo"));
  }

  function Ordenar({ ej, onRes, hecho }) {
    const [armado, setArmado] = useState([]);          /* índices de fichas usadas */
    const [r, setR] = useState(null);
    const libres = ej.fichas.map((f, i) => i).filter(i => armado.indexOf(i) < 0);
    const palabra = armado.map(i => ej.fichas[i]).join("");
    const comprobar = () => {
      const ok = palabra.toLowerCase() === ej.esperada.toLowerCase();
      setR(ok ? AZ_BIEN : AZ_MAL);
      onRes(ok ? AZ_BIEN : AZ_MAL);
    };
    return h(React.Fragment, null,
      h("div", { className: "pr-pide" }, ej.pide),
      ej.audio && h(Oir, { texto: ej.audio, auto: false }),
      h("div", { className: "pr-armado", lang: "ru" }, armado.map((i, k) =>
        h("button", { key: k, className: "pr-ficha", disabled: r != null, onClick: () => setArmado(a => a.filter(x => x !== i)) }, ej.fichas[i]))),
      h("div", { className: "pr-fichas", lang: "ru" }, libres.map(i =>
        h("button", { key: i, className: "pr-ficha", disabled: r != null, onClick: () => setArmado(a => a.concat(i)) }, ej.fichas[i]))),
      r == null && h("button", { className: "pr-btn", style: { width: "100%", marginTop: 16 }, disabled: libres.length > 0, onClick: comprobar }, "Comprobar"),
      r != null && r !== AZ_BIEN && h("div", { className: "pr-exp" }, "Armaste «" + palabra + "»."),
      hecho != null && h(Explicacion, { ej, r: hecho }));
  }

  function VF({ ej, onRes, hecho }) {
    const [elegida, setElegida] = useState(null);
    const tocar = v => { if (elegida != null) return; setElegida(v); onRes(v === ej.verdadero ? AZ_BIEN : AZ_MAL); };
    const cls = v => elegida == null ? "" : v === ej.verdadero ? " ok" : v === elegida ? " mal" : "";
    return h(React.Fragment, null,
      h("div", { className: "pr-pide" }, ej.audio ? "Escuchá. ¿Verdadero o falso?" : "¿Verdadero o falso?"),
      ej.audio && h(Oir, { texto: ej.audio, auto: true }),
      h("div", { className: "pr-grande", style: { fontSize: 24, color: "inherit", fontWeight: 700 }, lang: "ru" }, ej.afirmacion),
      h("div", { className: "pr-ops" },
        h("button", { className: "pr-op" + cls(true), disabled: elegida != null, onClick: () => tocar(true) }, "Verdadero"),
        h("button", { className: "pr-op" + cls(false), disabled: elegida != null, onClick: () => tocar(false) }, "Falso")),
      hecho != null && h(Explicacion, { ej, r: hecho }));
  }

  function Emparejar({ ej, onRes, hecho }) {
    const [der] = useState(() => mezclar(ej.pares.map(p => p[1])));
    const [sel, setSel] = useState(null);
    const [listos, setListos] = useState([]);
    const [fallos, setFallos] = useState(0);
    const [malo, setMalo] = useState(null);
    const tocarDer = d => {
      if (sel == null || listos.indexOf(sel) >= 0) return;
      if (ej.pares[sel][1] === d) {
        const l = listos.concat(sel); setListos(l); setSel(null);
        if (l.length === ej.pares.length) onRes(fallos === 0 ? AZ_BIEN : fallos === 1 ? AZ_CASI : AZ_MAL);
      } else { setFallos(f => f + 1); setMalo(d); setTimeout(() => setMalo(null), 500); }
    };
    return h(React.Fragment, null,
      h("div", { className: "pr-pide" }, ej.pide),
      h("div", { className: "pr-em" },
        h("div", { style: { display: "flex", flexDirection: "column", gap: 8 } }, ej.pares.map((p, i) =>
          h("button", { key: i, lang: "ru", className: "pr-op" + (listos.indexOf(i) >= 0 ? " ok hecho" : sel === i ? " sel" : ""),
            "aria-label": ej.audioIzq ? "Sonido " + (i + 1) : null,
            onClick: () => { if (ej.audioIzq) hablar(p[0]); if (listos.indexOf(i) < 0) setSel(i); } }, ej.audioIzq ? "▶ " + (i + 1) : p[0]))),
        h("div", { style: { display: "flex", flexDirection: "column", gap: 8 } }, der.map(d => {
          const usada = listos.some(i => ej.pares[i][1] === d);
          return h("button", { key: d, className: "pr-op" + (usada ? " ok hecho" : malo === d ? " mal" : ""), disabled: usada, onClick: () => tocarDer(d) }, d);
        }))),
      hecho == null && h("div", { className: "pr-pista", style: { marginTop: 12 } }, ej.audioIzq ? "Tocá ▶ para escuchar y después la letra que corresponde." : "Tocá uno de la izquierda y después su pareja."),
      hecho != null && h(Explicacion, { ej, r: hecho }));
  }

  const FORMAS = { elegir: Elegir, escribir: Escribir, ordenar: Ordenar, vf: VF, emparejar: Emparejar };

  /* ── Sesión ── */
  function AzPractica({ unidad, titulo, pool, mezcla, n, dark, onSalir, aviso, examen, onReforzar }) {
    const c = azColors(dark !== false);
    const [fase, setFase] = useState("inicio");     /* inicio · ej · fin */
    const [lista, setLista] = useState([]);
    const [i, setI] = useState(0);
    const [res, setRes] = useState({});             /* id → resultado */

    const empezar = () => {
      if (examen) {
        /* Examen: n ejercicios por parte, sin filtro de dificultad; se marcan con su parte */
        const sel = [];
        examen.partes.forEach(p => {
          const pp = pool.filter(e => p.tipos.indexOf(e.tipo) >= 0 && !sel.some(x => x.grupo && x.grupo === e.grupo));
          azPickExercises(pp, { n: p.n, repaso: 0 }).forEach(e => sel.push(Object.assign({}, e, { parte: p.nombre })));
        });
        setLista(sel); setI(0); setRes({}); setFase("ej");
        return;
      }
      const dif = azTargetDifficulty(unidad, 1);
      const cerca = pool.filter(e => e.dificultad <= dif + 2);   /* nunca más de dos escalones arriba */
      const base = cerca.length >= (n || 12) * 2 ? cerca : pool;
      setLista(azPickExercises(base, { n: n || 12, mezcla: mezcla || {}, dificultad: dif }));
      setI(0); setRes({}); setFase("ej");
    };
    const ej = lista[i];
    const anotar = r => {
      if (res[ej.id] != null) return;
      azRecordExercise(ej.id, r, unidad);
      const sol = ej.oir || (ej.forma !== "emparejar" && ej.audio);
      if (sol) setTimeout(() => hablar(sol), 450);   /* escuchar la respuesta siempre refuerza */
      setRes(x => Object.assign({}, x, { [ej.id]: r }));
    };
    const siguiente = () => {
      if (i + 1 < lista.length) { setI(i + 1); window.scrollTo(0, 0); return; }
      if (examen) {
        const pts = e => res[e.id] === AZ_BIEN ? 1 : res[e.id] === AZ_CASI ? .5 : 0;
        const pct = Math.round(lista.reduce((a, e) => a + pts(e), 0) / Math.max(1, lista.length) * 100);
        const u = azUnitProgress(unidad);
        u.examen = { pct: pct, aprobado: pct >= examen.aprobado * 100, fecha: new Date().toISOString().slice(0, 10) };
        if (!u.mejorExamen || pct > u.mejorExamen) u.mejorExamen = pct;
        azSaveProgress();
      }
      setFase("fin");
    };

    let cuerpo;
    if (fase === "inicio") {
      cuerpo = h(React.Fragment, null,
        h("div", { className: "pr-kick" }, examen ? "Evaluación" : "Práctica"),
        h("div", { style: { fontSize: 26, fontWeight: 800, marginTop: 6, paddingRight: 48 } }, titulo),
        h("div", { className: "pr-exp", style: { fontSize: 15 } }, examen ? examen.intro : (n || 12) + " ejercicios elegidos entre " + pool.length + ". Primero salen los que menos practicaste, y los que te costaron vuelven."),
        aviso && h("div", { style: { marginTop: 14, background: c.gold + "14", border: `1px solid ${c.gold}66`, borderRadius: 10, padding: "12px 14px", fontSize: 14.5, lineHeight: 1.5, fontWeight: 600 } }, aviso),
        h("div", { className: "pr-pie" }, h("button", { className: "pr-btn", style: { width: "100%" }, onClick: empezar }, "Empezar")));
    } else if (fase === "ej" && ej) {
      const F = FORMAS[ej.forma];
      const hecho = res[ej.id];
      cuerpo = h(React.Fragment, null,
        h("div", { className: "pr-kick" }, titulo + " · " + (i + 1) + " de " + lista.length),
        h("div", { className: "pr-bar" }, h("div", { style: { width: ((i + (hecho != null ? 1 : 0)) / lista.length * 100) + "%" } })),
        examen && h("div", { className: "pr-pista", style: { textAlign: "left", margin: "-8px 0 10px" } }, "Parte: " + ej.parte),
        h("div", { className: "pr-card", key: ej.id }, F ? h(F, { ej, onRes: anotar, hecho, dark, c, examen: !!examen }) : "Ejercicio desconocido"),
        h("div", { className: "pr-pie" },
          h("button", { className: "pr-btn", style: { width: "100%" }, disabled: hecho == null, onClick: siguiente }, i + 1 < lista.length ? "Siguiente" : "Ver resultado")));
    } else if (examen) {
      const pts = e => res[e.id] === AZ_BIEN ? 1 : res[e.id] === AZ_CASI ? .5 : 0;
      const total = lista.reduce((a, e) => a + pts(e), 0) / Math.max(1, lista.length);
      const partes = examen.partes.map(p => {
        const es = lista.filter(e => e.parte === p.nombre);
        return { p, pct: es.reduce((a, e) => a + pts(e), 0) / Math.max(1, es.length) };
      });
      const ok = total >= examen.aprobado;
      const flojas = partes.filter(x => x.pct < examen.aprobado);
      cuerpo = h(React.Fragment, null,
        h("div", { className: "pr-kick" }, "Resultado de la evaluación"),
        h("div", { style: { fontSize: 44, fontWeight: 800, marginTop: 8, color: ok ? VERDE : NARANJA } }, Math.round(total * 100) + " %"),
        h("div", { style: { fontSize: 17, fontWeight: 700, marginTop: 4 } }, ok ? "Unidad aprobada." : "Todavía no: conviene reforzar antes de seguir."),
        h("div", { className: "pr-card", style: { marginTop: 16, padding: "6px 16px" } }, partes.map(x =>
          h("div", { key: x.p.nombre, style: { display: "flex", justifyContent: "space-between", padding: "10px 0", borderTop: x === partes[0] ? "none" : `1px solid ${c.border}` } },
            h("span", { style: { fontWeight: 600 } }, x.p.nombre),
            h("span", { style: { fontWeight: 800, color: x.pct >= examen.aprobado ? VERDE : x.pct >= .5 ? NARANJA : ROJO } }, Math.round(x.pct * 100) + " %")))),
        flojas.length > 0 && h(React.Fragment, null,
          h("div", { className: "pr-kick", style: { marginTop: 22 } }, "Para reforzar"),
          flojas.map(x => h("button", { key: x.p.nombre, className: "pr-btn sec", style: { width: "100%", marginTop: 8 }, onClick: () => onReforzar && onReforzar(x.p) }, "Practicar " + x.p.nombre.toLowerCase()))),
        h("div", { className: "pr-pie", style: { display: "flex", flexDirection: "column", gap: 10 } },
          h("button", { className: "pr-btn" + (ok ? " sec" : ""), onClick: empezar }, "Repetir la evaluación"),
          h("button", { className: "pr-btn sec", onClick: onSalir }, "Volver a la unidad")));
    } else {
      const vals = lista.map(e => res[e.id]);
      const bien = vals.filter(v => v === AZ_BIEN).length, casi = vals.filter(v => v === AZ_CASI).length, mal = vals.filter(v => v === AZ_MAL).length;
      const costaron = lista.filter(e => res[e.id] != null && res[e.id] !== AZ_BIEN);
      cuerpo = h(React.Fragment, null,
        h("div", { className: "pr-kick" }, "Resultado"),
        h("div", { style: { fontSize: 26, fontWeight: 800, marginTop: 6, paddingRight: 48 } }, titulo),
        h("div", { style: { display: "flex", gap: 8, marginTop: 16 } },
          [["Bien", bien, VERDE], ["Casi", casi, NARANJA], ["Mal", mal, ROJO]].map(([t, v, col]) =>
            h("div", { key: t, className: "pr-card", style: { flex: 1, textAlign: "center", padding: "12px 6px" } },
              h("div", { style: { fontSize: 24, fontWeight: 800, color: col } }, v),
              h("div", { style: { fontSize: 12, color: c.textMuted, marginTop: 2 } }, t)))),
        costaron.length
          ? h(React.Fragment, null,
              h("div", { className: "pr-kick", style: { marginTop: 22 } }, "Para repasar"),
              h("div", { className: "pr-exp", style: { marginTop: 6 } }, "Estos vuelven en las próximas sesiones hasta que te salgan bien."),
              h("div", { className: "pr-lista" }, costaron.map(e => h("div", { key: e.id },
                h("div", { style: { fontWeight: 700 } }, e.pide || e.afirmacion, e.grande ? " " + e.grande : ""),
                h("div", { style: { color: c.textSub } }, e.explicacion)))))
          : h("div", { className: "pr-exp", style: { marginTop: 18, fontSize: 15 } }, "Todo bien en esta sesión."),
        h("div", { className: "pr-pie", style: { display: "flex", flexDirection: "column", gap: 10 } },
          h("button", { className: "pr-btn", onClick: empezar }, "Otra sesión"),
          h("button", { className: "pr-btn sec", onClick: onSalir }, "Volver a la unidad")));
    }

    return h("div", { className: "pr", role: "dialog" },
      h(Estilos, { c }),
      h("button", { className: "pr-x", onClick: onSalir, "aria-label": "Salir de la práctica" }, "✕"),
      h("div", { className: "pr-in" }, cuerpo));
  }

  window.AzPractica = AzPractica;
})();
