/* ============================================================
   HOY.JS — Desafío del día (05/10/2026)
   ------------------------------------------------------------
   Una tarjeta flotante que aparece una vez por día al abrir el
   inicio (si el alumno ya empezó alguna unidad), y que se puede
   reabrir con la tarjeta «Hoy» del inicio. Propone un ejercicio de
   la unidad en la que está el alumno (la del último módulo que
   abrió, az_ultimo):
     U1 letra del día (escuchar y escribir una palabra)
     U2 frase del día (traducir al ruso)
     U3 palabra del día (una frase con la palabra)
     U4 palabra del día (una frase donde reciba la acción: acusativo)
     U5 verbo del día (una frase en presente)
     U6 lugar del día (dónde está alguien o algo: в / на + prepositivo)
     U7 ¿qué hora es? (reloj dibujado)
     U8 verbo del día en pasado (qué hiciste ayer)
   Reglas (Manu, 05/10/2026): nada de la respuesta a la vista; la
   ayuda va detrás de «💡 Pista»; la corrección dice Bien, Casi o Mal
   según la consigna y habla de la forma que escribió el alumno.

   Los datos de la unidad se cargan recién al abrir el desafío
   (azHoyCargar), con las mismas dependencias que su página.
   Guarda az_hoy: { fecha, mostrado, hecho, nivel, unidad }.
   ============================================================ */
const AZ_HOY_DEPS = {
  1: ["data/data-alphabet.js", "data/data-unidad-1.js"],
  2: ["data/data-casos.js", "data/data-verbos.js", "data/data-frases.js", "data/data-dialogos.js", "data/data-mapa.js", "data/data-unidad-2.js"],
  3: ["data/data-casos.js", "data/data-verbos.js", "data/data-frases.js", "data/data-dialogos.js", "data/data-unidad-3.js"],
  4: ["data/data-casos.js", "data/data-verbos.js", "data/data-frases.js", "data/data-dialogos.js", "data/data-unidad-4.js"],
  5: ["data/data-casos.js", "data/data-verbos.js", "data/data-frases.js", "data/data-dialogos.js", "data/data-unidad-5.js"],
  6: ["data/data-casos.js", "data/data-verbos.js", "data/data-frases.js", "data/data-dialogos.js", "data/data-mapa.js", "data/data-unidad-6.js"],
  7: ["data/data-casos.js", "data/data-verbos.js", "data/data-frases.js", "data/data-dialogos.js", "data/data-unidad-7.js"],
  8: ["data/data-casos.js", "data/data-verbos.js", "data/data-frases.js", "data/data-dialogos.js", "data/data-unidad-8.js"]
};
const AZ_HOY_CARGADOS = {};
function azHoyCargar(n) {
  const deps = AZ_HOY_DEPS[n] || [];
  return deps.reduce((p, src) => p.then(() => new Promise(res => {
    if (AZ_HOY_CARGADOS[src] || document.querySelector('script[src="' + src + '"]')) { AZ_HOY_CARGADOS[src] = true; return res(); }
    const s = document.createElement("script"); s.src = src;
    s.onload = s.onerror = () => { AZ_HOY_CARGADOS[src] = true; res(); };
    document.head.appendChild(s);
  })), Promise.resolve());
}
function azHoyFecha() { return new Date().toISOString().slice(0, 10); }
function azHoyNumero() { const d = new Date(); return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000); }
/* La unidad del desafío: la del último módulo abierto (hasta la 8) */
async function azHoyUnidad() { const u = await azGet("az_ultimo", null); return u && u.unidad ? Math.min(8, Math.max(1, u.unidad)) : null; }

/* ── Ayudas para revisar ─────────────────────────────────────── */
const azHoyPal = t => t.match(/[А-Яа-яЁё\u0301-]+/g) || [];
const azHoyK = w => azFormaClave(w);
function azHoyDist(a, b) {
  const m = a.length, n = b.length, d = [...Array(m + 1)].map((_, i) => [i].concat(Array(n).fill(0)));
  for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[m][n];
}
const azHoyFrase = t => azHoyPal(t).map(azHoyK).join(" ");
/* Formas de una palabra en el texto: [{ w (como la escribió), f (con acento), et (etiqueta) }] */
function azHoyFormasDe(txt, id) {
  const idx = azIndiceFormas(), out = [];
  azHoyPal(txt).forEach(w => { const r = idx.get(azHoyK(w)) || []; const x = r.find(y => y[0] === id); if (x) out.push({ w, f: x[1], et: x[2] || "" }); });
  return out;
}

/* Pronombre + verbo que no coinciden («Я покупа́ет»): mensaje o null (05/10/2026) */
function azHoyConcordancia(txt) {
  const PR = { "я": 0, "ты": 1, "он": 2, "она": 2, "мы": 3, "вы": 4, "они": 5 }, PL = ["я", "ты", "он / она́", "мы", "вы", "они́"];
  const w = azHoyPal(txt), idx = azIndiceFormas();
  for (let i = 0; i < w.length; i++) {
    const p = PR[azHoyK(w[i])]; if (p == null) continue;
    let j = i + 1; if (w[j] && azHoyK(w[j]) === "не") j++;
    if (!w[j]) continue;
    for (const x of idx.get(azHoyK(w[j])) || []) {
      const v = typeof verboById === "function" ? verboById(x[0]) : null; if (!v || !v.presente) continue;
      const k = v.presente.findIndex(f => azHoyK(f) === azHoyK(w[j]));
      if (k >= 0 && k !== p && !(p === 2 && k === 2)) return "Pero ojo con el verbo: con " + w[i] + " va **" + v.presente[p] + "**, no «" + w[j] + "».";
      if (k >= 0) break;
    }
  }
  return null;
}

/* ── Los desafíos ────────────────────────────────────────────── */
function azHoyDesafio(n) {
  const num = azHoyNumero();
  const cap = t => t.charAt(0).toUpperCase() + t.slice(1);

  if (n === 1 && typeof ALPHABET !== "undefined") {
    const letras = ALPHABET.filter(a => a.words && a.words.length);
    const L = letras[num % letras.length], w = L.words[num % L.words.length];
    return { titulo: "Letra del día", grande: L.upper + " " + L.lower, sub: L.name + " · " + (L.pronunciation || "").replace(/\*\*/g, ""),
      audio: w.cyrillic, consigna: "Escuchá la palabra (▶) y escribila en ruso.", pista: "Empieza con " + L.upper + ", tiene " + w.cyrillic.length + " letras y significa «" + w.meaning + "».",
      revisar: txt => { const a = azHoyK(txt.trim()), b = azHoyK(w.cyrillic);
        if (a === b) return { nivel: "bien", msg: "**" + w.cyrillic + "** (" + w.meaning + ")." };
        if (azHoyDist(a, b) <= 1) return { nivel: "casi", msg: "Casi: es **" + w.cyrillic + "** (" + w.meaning + ")." };
        return { nivel: "mal", msg: "Era **" + w.cyrillic + "** (" + w.meaning + "). Escuchala de nuevo." }; } };
  }
  if (n === 2 && typeof U2_FRASES !== "undefined") {
    const fr = U2_FRASES.filter(f => f.ru && f.es && f.ru.split(" ").length >= 2);
    const F = fr[num % fr.length];
    return { titulo: "Frase del día", grande: "«" + F.es[0] + "»", sub: "Escribila en ruso", audio: null, consigna: "Escribí esta frase en ruso.",
      pista: "Empieza con «" + F.ru.split(" ")[0].replace(/[!?.,]/g, "") + "» y tiene " + F.ru.split(" ").length + " palabras.",
      revisar: txt => { const a = azHoyFrase(txt), b = azHoyFrase(F.ru);
        if (a === b) return { nivel: "bien", msg: "**" + F.ru + "**", oir: F.ru };
        if (azHoyDist(a, b) <= 2) return { nivel: "casi", msg: "Casi: **" + F.ru + "**", oir: F.ru };
        return { nivel: "mal", msg: "Se dice **" + F.ru + "**", oir: F.ru }; } };
  }
  if (n === 3 && typeof u3PalabraDelDia === "function") {
    const p = u3PalabraDelDia();
    return { titulo: "Palabra del día", emoji: p.emoji, grande: p.ac, id: p.id, sub: p.es + " · " + ({ m: "masculino", f: "femenino", n: "neutro" }[p.g] || ""), audio: p.ru,
      consigna: "Escribí una frase propia con esta palabra.", pista: "Podés empezar con э́то: «Э́то " + p.ac + "…»",
      revisar: txt => { const usa = azHoyFormasDe(txt, p.id);
        if (usa.length) return { nivel: "bien", msg: "Usaste **" + usa[0].w + "**." };
        return { nivel: "mal", msg: "No encuentro " + p.ac + " en tu frase." }; } };
  }
  if (n === 4 && typeof u4PalabraDelDia === "function") {
    const p = u4PalabraDelDia();
    return { titulo: "Palabra del día", emoji: p.emoji, grande: p.ac, id: p.id, sub: p.es, audio: p.nom,
      consigna: "Escribí una frase donde " + p.ac + " reciba la acción.", pista: "En acusativo: " + p.acc + ".",
      tips: UNIDAD_4.modulos.find(m => m.id === "u4m10").consejos, concordancia: true,
      revisar: txt => { const usa = azHoyFormasDe(txt, p.id);
        if (!usa.length) return { nivel: "mal", msg: "No encuentro " + p.ac + " en tu frase." };
        const bien = usa.find(u => azHoyK(u.w) === azHoyK(p.acc));
        if (bien) return { nivel: "bien", msg: "**" + bien.w + "** está en acusativo: recibe la acción." };
        return { nivel: "mal", msg: "Usaste «" + usa[0].w + "», pero si recibe la acción va en acusativo: **" + p.acc + "**." }; } };
  }
  if (n === 5 && typeof u5Datos === "function") {
    const lista = Object.values(u5Datos().verb).filter(v => !v.amp && v.grupo !== "e"), v = lista[num % lista.length];
    const PL = ["я", "ты", "он / она́", "мы", "вы", "они́"], PR = { "я": 0, "ты": 1, "он": 2, "она": 2, "мы": 3, "вы": 4, "они": 5 };
    return { titulo: "Verbo del día", grande: v.ac, id: v.id, sub: v.es, audio: v.ac, consigna: "Escribí una frase en presente con este verbo.",
      pista: "{я} " + v.f[0] + " · ты " + v.f[1] + " · он / она́ " + v.f[2],
      revisar: txt => { const w = azHoyPal(txt);
        for (let i = 0; i < w.length; i++) { const k = v.f.findIndex(f => azHoyK(f) === azHoyK(w[i]));
          if (k < 0) continue;
          let j = i - 1; if (j >= 0 && azHoyK(w[j]) === "не") j--;   /* я не чита́ю */
          const p = j >= 0 ? PR[azHoyK(w[j])] : undefined;
          if (p != null && p !== k) return { nivel: "casi", msg: "Usaste «" + w[i] + "», que es la forma de " + PL[k] + "; con " + w[j] + " va **" + v.f[p] + "**." };
          return { nivel: "bien", msg: "**" + w[i] + "**: la forma de " + PL[k] + "." }; }
        if (w.some(x => azHoyK(x) === azHoyK(v.ac))) return { nivel: "mal", msg: "Usaste el infinitivo; en una frase va conjugado: {я} " + v.f[0] + ", ты " + v.f[1] + "…" };
        return { nivel: "mal", msg: "No encuentro " + v.ac + " en tu frase." }; } };
  }
  if (n === 6 && typeof u6Datos === "function") {
    const lista = Object.values(u6Datos().lug).filter(s => !s.amp && s.tipo === "lugar"), s = lista[num % lista.length];
    return { titulo: "Lugar del día", emoji: s.emoji, grande: s.ac, id: s.id, sub: s.es, audio: s.nom, consigna: "Escribí dónde está alguien o algo, con este lugar.",
      pista: "¿Dónde? " + s.pr + " " + s.prep + (s.pr === "на" ? " (va con на, de memoria)" : ""),
      tips: UNIDAD_6.modulos.find(m => m.id === "u6m11").consejos, concordancia: true,
      revisar: txt => { const w = azHoyPal(txt);
        for (let i = 1; i < w.length; i++) { const u = azHoyFormasDe(w[i], s.id); if (!u.length) continue;
          const pr = azHoyK(w[i - 1]), k = azHoyK(w[i]);
          if (k === azHoyK(s.prep) && pr === s.pr) return { nivel: "bien", msg: "**" + s.pr + " " + s.prep + "**: dónde, en prepositivo." };
          if (k === azHoyK(s.prep)) return { nivel: "casi", msg: s.ac + " va con " + s.pr + ": **" + s.pr + " " + s.prep + "**." };
          if (k === azHoyK(s.acc) && (pr === "в" || pr === "на")) return { nivel: "casi", msg: "«" + w[i - 1] + " " + w[i] + "» es adónde (acusativo). Para decir dónde está: **" + s.pr + " " + s.prep + "**." };
          return { nivel: "mal", msg: "Después de " + s.pr + ", para decir dónde, va **" + s.pr + " " + s.prep + "**." }; }
        return { nivel: "mal", msg: "No encuentro " + s.ac + " con в o на en tu frase." }; } };
  }
  if (n === 7 && typeof u7Datos === "function") {
    const h = 1 + (num % 12), { hora } = u7Datos(), ok = cap(hora(h));
    return { titulo: "¿Qué hora es?", reloj: h, sub: "Кото́рый час?", audio: null, consigna: "Mirá el reloj y escribí la hora en ruso.",
      pista: "1 → час · 2, 3, 4 → часа́ · de 5 a 12 → часо́в",
      revisar: txt => { const a = azHoyFrase(txt).replace(/^сейчас /, ""), b = azHoyFrase(ok);
        if (a === b || (h === 1 && a === "один час")) return { nivel: "bien", msg: "**" + ok + "**", oir: ok };
        if (azHoyK(a.split(" ")[0] || "") === azHoyK(U7_NUM[h]) || (h === 1 && /час/.test(a))) return { nivel: "casi", msg: "El número está bien; con " + h + " va **" + ok + "**.", oir: ok };
        return { nivel: "mal", msg: "Son las " + (h === 1 ? "una" : U7_NUM_ES[h]) + ": **" + ok + "**", oir: ok }; } };
  }
  if (n === 8 && typeof u8Datos === "function") {
    const lista = Object.values(u8Datos().verb).filter(v => v.tipo === "a" && v.ac !== "жить"), v = lista[num % lista.length];
    const G = { "он": "m", "она": "f", "мы": "pl", "вы": "pl", "они": "pl" }, LBL = { m: "masculino", f: "femenino", n: "neutro", pl: "plural" };
    return { titulo: "Verbo del día, en pasado", grande: v.ac, id: v.id, sub: v.es, audio: v.ac, consigna: "Escribí qué hiciste ayer con este verbo.",
      pista: v.p.m + " · " + v.p.f + " · " + v.p.pl,
      tips: UNIDAD_8.modulos.find(m => m.id === "u8m12").consejos,
      revisar: txt => { const w = azHoyPal(txt);
        for (let i = 0; i < w.length; i++) { const g = ["m", "f", "n", "pl"].find(x => azHoyK(v.p[x]) === azHoyK(w[i]));
          if (!g) continue;
          let j = i - 1; if (j >= 0 && azHoyK(w[j]) === "не") j--;
          const s = j >= 0 ? G[azHoyK(w[j])] : undefined;
          if (s && s !== g) return { nivel: "casi", msg: "Con " + w[j] + " va el " + LBL[s] + ": **" + v.p[s] + "**." };
          return { nivel: "bien", msg: "**" + w[i] + "**: pasado, " + LBL[g] + "." }; }
        if (v.pres && w.some(x => v.pres.some(f => azHoyK(f) === azHoyK(x)))) return { nivel: "mal", msg: "Eso es presente; para ayer va el pasado: " + v.p.m + ", " + v.p.f + "…" };
        return { nivel: "mal", msg: "No encuentro " + v.ac + " en pasado en tu frase." }; } };
  }
  return null;
}

/* ── La tarjeta flotante ─────────────────────────────────────── */
function AzHoy({ c, unidad, onCerrar }) {
  const h = React.createElement;
  const { useState, useEffect, useRef } = htmPreact;
  const [d, setD] = useState(null);
  const capa = useRef(null);   /* fondo sin scroll y ajuste al teclado (core.js) */
  const [txt, setTxt] = useState("");
  const [pista, setPista] = useState(false);
  const [res, setRes] = useState(null);
  const VERDE = "#4CAF82";
  useEffect(() => { let vivo = true; azHoyCargar(unidad).then(() => { if (vivo) setD(azHoyDesafio(unidad) || false); }); return () => { vivo = false; }; }, [unidad]);
  const revisar = async () => {
    let r = d.revisar(txt);
    /* Si la consigna está bien pero el verbo no coincide con el pronombre: Casi */
    if (d.concordancia && r.nivel === "bien") { const m = azHoyConcordancia(txt); if (m) r = { nivel: "casi", msg: r.msg + " " + m }; }
    /* Consejos del proyecto de la unidad (funciones propias, sin depender de unidad-ui.js) */
    let tips = d.tips ? [...new Set([].concat(...d.tips.map(k => k.fn ? (k.fn(txt) || []) : [])))] : [];
    /* Sin repetir lo que ya dice la corrección (misma forma en negrita) */
    const negr = (r.msg.match(/\*\*([^*]+)\*\*/g) || []).map(x => azHoyK(x));
    tips = tips.filter(tp => !(tp.match(/\*\*([^*]+)\*\*/g) || []).some(x => negr.indexOf(azHoyK(x)) >= 0));
    setRes(Object.assign({ tips }, r));
    const prev = await azGet("az_hoy", {});
    await azSet("az_hoy", Object.assign(prev, { fecha: azHoyFecha(), hecho: true, nivel: r.nivel, unidad }));
  };
  const reloj = n => {
    const S = 132, r = S / 2 - 6, cx = S / 2, a = (n % 12) / 12 * 2 * Math.PI;
    return h("svg", { viewBox: "0 0 " + S + " " + S, width: S, height: S, role: "img", "aria-label": "Reloj" },
      h("circle", { cx, cy: cx, r, fill: c.bg2, stroke: c.gold, "stroke-width": 3 }),
      [...Array(12)].map((_, k) => { const b = k / 12 * 2 * Math.PI; return h("line", { key: k, x1: cx + Math.sin(b) * (r - 4), y1: cx - Math.cos(b) * (r - 4), x2: cx + Math.sin(b) * (r - (k % 3 ? 10 : 15)), y2: cx - Math.cos(b) * (r - (k % 3 ? 10 : 15)), stroke: c.textMuted, "stroke-width": k % 3 ? 2 : 3 }); }),
      h("line", { x1: cx, y1: cx, x2: cx + Math.sin(a) * r * 0.5, y2: cx - Math.cos(a) * r * 0.5, stroke: c.text, "stroke-width": 6, "stroke-linecap": "round" }),
      h("line", { x1: cx, y1: cx, x2: cx, y2: cx - r * 0.78, stroke: c.gold, "stroke-width": 4, "stroke-linecap": "round" }),
      h("circle", { cx, cy: cx, r: 5, fill: c.gold }));
  };
  const colRes = res ? { bien: VERDE, casi: "#C9B369", mal: "#D9776F" }[res.nivel] : null;
  return h("div", { className: "az-hoy-velo", ref: azRefCapa(capa), onClick: e => { if (e.target === e.currentTarget) onCerrar(); } },
    h("style", null, `
      .az-hoy-velo{position:fixed;inset:0;z-index:520;background:rgba(0,0,0,.55);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;padding:6vh 16px 4vh;animation:azHoyIn .2s ease both;}
      .az-hoy{width:100%;max-width:360px;max-height:100%;overflow-y:auto;background:${c.card};border:1px solid ${c.border};border-radius:16px;box-shadow:0 16px 40px rgba(0,0,0,.4);padding:16px;color:${c.text};font-family:'Noto Sans',sans-serif;}
      @keyframes azHoyIn{from{opacity:0;}to{opacity:1;}}
      @media (prefers-reduced-motion:reduce){.az-hoy-velo{animation:none;}}
      .az-hoy-top{display:flex;align-items:flex-start;gap:10px;}
      .az-hoy-k{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${c.gold};}
      .az-hoy-t{font-size:19px;font-weight:800;margin-top:2px;}
      .az-hoy-x{width:32px;height:32px;border-radius:9px;background:${c.bg3};border:1px solid ${c.border};color:${c.textSub};font-size:13px;display:flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;padding:0;font-family:inherit;margin-left:auto;}
      .az-hoy-pres{display:flex;align-items:center;gap:12px;margin-top:14px;padding:12px;border-radius:12px;background:${c.bg2};border:1px solid ${c.border};}
      .az-hoy-g{font-size:26px;font-weight:800;color:${c.gold};line-height:1.2;}
      .az-hoy-s{font-size:13px;color:${c.textSub};margin-top:2px;}
      .az-hoy-c{font-size:14.5px;line-height:1.45;margin-top:14px;}
      .az-hoy-in{width:100%;box-sizing:border-box;margin-top:8px;background:${c.bg3};border:1px solid ${c.border};border-radius:10px;padding:11px 12px;color:${c.text};font-size:16px;font-family:inherit;}
      .az-hoy-row{display:flex;gap:8px;margin-top:10px;}
      .az-hoy-b{flex:1;padding:12px;border-radius:10px;border:none;background:${c.gold};color:${c.bg};font-size:15px;font-weight:800;font-family:inherit;cursor:pointer;}
      .az-hoy-b:disabled{opacity:.5;cursor:default;}
      .az-hoy-b2{padding:12px 14px;border-radius:10px;border:1px solid ${c.border};background:${c.bg3};color:${c.text};font-size:14px;font-weight:700;font-family:inherit;cursor:pointer;}
      .az-hoy-p{margin-top:10px;padding:9px 12px;border-radius:10px;border-left:3px solid ${c.gold};background:${c.gold}14;font-size:14px;line-height:1.45;}
      .az-hoy-r{margin-top:12px;font-size:14px;line-height:1.5;}
      .az-hoy .play{width:36px;height:36px;border-radius:10px;background:${c.bg3};border:1px solid ${c.border};color:${c.text};font-size:14px;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;padding:0;font-family:inherit;}   /* igual que .play de unidad-ui.js */
    `),
    h("div", { className: "az-hoy", role: "dialog", "aria-modal": "true", "aria-label": "Desafío del día" },
      h("div", { className: "az-hoy-top" },
        h("div", null, h("div", { className: "az-hoy-k" }, "Hoy · Unidad " + unidad), h("div", { className: "az-hoy-t" }, d ? d.titulo : "Desafío del día")),
        h("button", { className: "az-hoy-x", onClick: onCerrar, "aria-label": "Cerrar" }, "✕")),
      d === null && h("div", { className: "az-hoy-c", style: { color: c.textMuted } }, "Cargando…"),
      d === false && h("div", { className: "az-hoy-c" }, "Todavía no hay desafío para esta unidad."),
      d && h(React.Fragment, null,
        h("div", { className: "az-hoy-pres" },
          d.reloj ? reloj(d.reloj) : d.emoji ? h("div", { style: { fontSize: 40 } }, d.emoji) : null,
          h("div", { style: { flex: 1, minWidth: 0 } },
            d.grande && h("div", { className: "az-hoy-g", lang: d.titulo === "Frase del día" ? "es" : "ru" }, d.id && typeof AzPalabra === "function" ? h(AzPalabra, { texto: d.grande, id: d.id }) : d.grande),
            d.sub && h("div", { className: "az-hoy-s" }, d.sub)),
          d.audio && h("button", { className: "play", onClick: () => azHablarRu(d.audio), "aria-label": "Escuchar" }, "▶")),
        h("div", { className: "az-hoy-c" }, azFmt(d.consigna)),
        h("input", { className: "az-hoy-in", lang: "ru", value: txt, placeholder: "Escribí en ruso…", onInput: e => { setTxt(e.target.value); setRes(null); },
          autocapitalize: "off", autocorrect: "off", spellcheck: false, autocomplete: "off" }),
        h("div", { className: "az-hoy-row" },
          h("button", { className: "az-hoy-b2", onClick: () => setPista(!pista) }, "💡 Pista"),
          h("button", { className: "az-hoy-b", disabled: !txt.trim(), onClick: revisar }, "Revisar")),
        pista && h("div", { className: "az-hoy-p" }, azFmt(d.pista)),
        res && h("div", { className: "az-hoy-r" },
          h("div", { style: { fontWeight: 800, color: colRes } }, { bien: "✓ Bien", casi: "≈ Casi", mal: "✗ Mal" }[res.nivel]),
          h("div", { style: { display: "flex", alignItems: "center", gap: 10, marginTop: 4 } }, h("div", { style: { flex: 1 } }, azFmt(res.msg)),
            res.oir && h("button", { className: "play", onClick: () => azHablarRu(res.oir), "aria-label": "Escuchar" }, "▶")),
          res.tips && res.nivel !== "bien" && res.tips.map((t, i) => h("div", { key: i, style: { marginTop: 6, color: c.textSub } }, azFmt(t))),
          res.nivel === "bien" && h("button", { className: "az-hoy-b2", style: { marginTop: 10, width: "100%" }, onClick: () => { azGuardarEnCuaderno(txt, { titulo: "Hoy · " + d.titulo, href: "index.html" }); } }, "＋ Cuaderno"),
          h("button", { className: "az-hoy-b2", style: { marginTop: 8, width: "100%" }, onClick: onCerrar }, "Listo")))));
}

/* Tarjeta «Hoy» del inicio (cuadrada, al lado de «Seguir estudiando») */
function AzHoyTarjeta({ c, hecho, onAbrir, alto }) {
  const h = React.createElement;
  return h("button", { onClick: onAbrir, "aria-label": "Desafío del día",
    style: { width: alto, minHeight: alto, flexShrink: 0, borderRadius: 16, background: c.card, border: `1px solid ${hecho ? c.border : c.gold + "88"}`, color: c.text, cursor: "pointer",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, fontFamily: "inherit", padding: 8 } },
    h("div", { style: { fontSize: 26 } }, hecho ? "✅" : "🎯"),
    h("div", { style: { fontSize: 15, fontWeight: 800, color: c.gold } }, "Hoy"),
    h("div", { style: { fontSize: 11, color: c.textMuted, lineHeight: 1.2, textAlign: "center" } }, hecho ? "Hecho" : "Desafío del día"));
}

window.AzHoy = AzHoy;
window.AzHoyTarjeta = AzHoyTarjeta;
window.azHoyUnidad = azHoyUnidad;
window.azHoyFecha = azHoyFecha;
window.azHoyDesafio = azHoyDesafio;
window.azHoyCargar = azHoyCargar;
