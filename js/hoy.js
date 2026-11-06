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
     U9 plan del día (qué vas a hacer mañana: бу́ду + infinitivo)
     U10 lo que no tienes (у меня́ нет + genitivo)
     U13 pregunta del día (una pregunta de las conversaciones B1, contestada
         con respuesta libre y corregida por intención, como en la U11)
     U12 pareja del día (aspecto: el resultado en pasado, o el futuro
         perfectivo; «бу́ду + perfectivo» es Mal, el imperfectivo es Casi)
     U11 situación del día (qué dices; se corrige por intención, azSituacion:
         ✓ Bien · 💬 Se entiende · ✗ No se entiende)
   Reglas (Manu, 05/10/2026): nada de la respuesta a la vista; la
   ayuda va detrás de «💡 Pista»; la corrección dice Bien, Casi o Mal
   según la consigna y habla de la forma que escribió el alumno.

   Los datos de la unidad se cargan recién al abrir el desafío
   (azHoyCargar), con las mismas dependencias que su página.
   Guarda az_hoy: { fecha, mostrado, hecho, nivel, unidad }.

   ABECÉ (06/11/2026): el mismo desafío para el curso de español, con los
   textos en ruso (borrador para Iván) y la unidad de az_ultimo_es. Guarda
   az_hoy_es (cada curso lleva su propio desafío). Corrige con
   corrector-es.js (azCorregirEs, azSituacionEs: la tilde que falta es Casi):
     U1 диктант дня (escuchar una palabra de la U1 y escribirla)
     U2 фраза дня (traducir al español una frase de la U1–U2, FRASES_ES)
     U3 слово дня (un sustantivo de la U3 en una frase propia; el artículo
        que no concuerda es Casi)
     U4 глагол дня (una frase sobre uno mismo en presente, con yo)
     U5 число или цена дня (un número o un precio, en letras; un día cada uno)
     U6 указание дня (la frase entera con el imperativo de tú)
   Las unidades de Abecé sin desafío propio usan el de la última que lo
   tiene (AZ_HOY_ES_MAX).
   ============================================================ */
const AZ_HOY_ES = typeof AZ_DIRECCION !== "undefined" && AZ_DIRECCION.id === "abece";
const AZ_HOY_K = AZ_HOY_ES ? "az_hoy_es" : "az_hoy";
const AZ_HOY_ES_MAX = 6;
/* Abecé: lo mismo que carga abece-N.html (las unidades anteriores, para las palabras ya vistas).
   [src, global]: si la página ya pidió ese archivo y todavía no llegó, se espera a que llegue. */
function azHoyDepsEs(n) {
  const out = [["data/data-lexicon-es.js", "LEXICON_ES"], ["data/data-formas-es.js", "FORMAS_ES"], ["data/data-verbos-es.js", "VERBOS_ES"],
    ["data/data-alfabeto-es.js", "ALFABETO_ES"], ["data/data-dialogos-es.js", "FRASES_ES"], ["js/corrector.js", "azCorregir"], ["js/corrector-es.js", "azCorregirEs"], ["js/tilde-es.js", "tdAnalizar"]];
  for (let k = 1; k <= n; k++) out.push(["data/data-unidad-es-" + k + ".js", "UNIDAD_ES_" + k]);
  return out;
}
const AZ_HOY_DEPS = {
  1: ["data/data-alphabet.js", "data/data-unidad-1.js"],
  2: ["data/data-casos.js", "data/data-verbos.js", "data/data-frases.js", "data/data-dialogos.js", "data/data-mapa.js", "data/data-unidad-2.js"],
  3: ["data/data-casos.js", "data/data-verbos.js", "data/data-frases.js", "data/data-dialogos.js", "data/data-unidad-3.js"],
  4: ["data/data-casos.js", "data/data-verbos.js", "data/data-frases.js", "data/data-dialogos.js", "data/data-unidad-4.js"],
  5: ["data/data-casos.js", "data/data-verbos.js", "data/data-frases.js", "data/data-dialogos.js", "data/data-unidad-5.js"],
  6: ["data/data-casos.js", "data/data-verbos.js", "data/data-frases.js", "data/data-dialogos.js", "data/data-mapa.js", "data/data-unidad-6.js"],
  7: ["data/data-casos.js", "data/data-verbos.js", "data/data-frases.js", "data/data-dialogos.js", "data/data-unidad-7.js"],
  8: ["data/data-casos.js", "data/data-verbos.js", "data/data-frases.js", "data/data-dialogos.js", "data/data-unidad-8.js"],
  9: ["data/data-casos.js", "data/data-verbos.js", "data/data-frases.js", "data/data-dialogos.js", "data/data-unidad-9.js"],
  10: ["data/data-casos.js", "data/data-verbos.js", "data/data-frases.js", "data/data-dialogos.js", "data/data-unidad-10.js"],
  11: ["data/data-casos.js", "data/data-verbos.js", "data/data-frases.js", "data/data-dialogos.js", "js/corrector.js", "data/data-unidad-11.js"],
  12: ["data/data-casos.js", "data/data-verbos.js", "data/data-frases.js", "data/data-dialogos.js", "data/data-unidad-12.js"],
  13: ["data/data-casos.js", "data/data-verbos.js", "data/data-frases.js", "data/data-dialogos.js", "js/corrector.js", "data/data-unidad-13.js"]
};
const AZ_HOY_CARGADOS = {};
const azHoyHay = g => { try { return new Function("return typeof " + g + " !== 'undefined'")(); } catch (e) { return false; } };
function azHoyCargar(n) {
  const deps = AZ_HOY_ES ? azHoyDepsEs(n) : (AZ_HOY_DEPS[n] || []);
  return deps.reduce((p, dep) => p.then(() => new Promise(res => {
    const src = Array.isArray(dep) ? dep[0] : dep, g = Array.isArray(dep) ? dep[1] : null;
    if (AZ_HOY_CARGADOS[src] || (g && azHoyHay(g))) { AZ_HOY_CARGADOS[src] = true; return res(); }
    if (document.querySelector('script[src="' + src + '"]')) {
      /* Ya pedido por la página (el léxico del inicio): esperar a que llegue, hasta 20 s */
      if (!g) { AZ_HOY_CARGADOS[src] = true; return res(); }
      let t = 0; const iv = setInterval(() => { if (azHoyHay(g) || ++t > 200) { clearInterval(iv); AZ_HOY_CARGADOS[src] = true; res(); } }, 100);
      return;
    }
    const s = document.createElement("script"); s.src = src;
    s.onload = s.onerror = () => { AZ_HOY_CARGADOS[src] = true; res(); };
    document.head.appendChild(s);
  })), Promise.resolve());
}
function azHoyFecha() { return new Date().toISOString().slice(0, 10); }
function azHoyNumero() { const d = new Date(); return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000); }
/* La unidad del desafío: la del último módulo abierto (hasta la 8) */
async function azHoyUnidad() {
  if (AZ_HOY_ES) { const u = await azGet("az_ultimo_es", null); return u && u.unidad ? Math.min(AZ_HOY_ES_MAX, Math.max(1, u.unidad)) : null; }
  const u = await azGet("az_ultimo", null); return u && u.unidad ? Math.min(11, Math.max(1, u.unidad)) : null;
}

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
  if (AZ_HOY_ES) return azHoyDesafioEs(n);
  const num = azHoyNumero();
  const cap = t => t.charAt(0).toUpperCase() + t.slice(1);

  if (n === 1 && typeof ALPHABET !== "undefined") {
    const letras = ALPHABET.filter(a => a.words && a.words.length);
    const L = letras[num % letras.length], w = L.words[num % L.words.length];
    return { titulo: "Letra del día", grande: L.upper + " " + L.lower, sub: L.name + " · " + (L.pronunciation || "").replace(/\*\*/g, ""),
      audio: w.cyrillic, consigna: "Escucha la palabra (▶) y escríbela en ruso.", pista: "Empieza con " + L.upper + ", tiene " + w.cyrillic.length + " letras y significa «" + w.meaning + "».",
      revisar: txt => { const a = azHoyK(txt.trim()), b = azHoyK(w.cyrillic);
        if (a === b) return { nivel: "bien", msg: "**" + w.cyrillic + "** (" + w.meaning + ")." };
        if (azHoyDist(a, b) <= 1) return { nivel: "casi", msg: "Casi: es **" + w.cyrillic + "** (" + w.meaning + ")." };
        return { nivel: "mal", msg: "Era **" + w.cyrillic + "** (" + w.meaning + "). Escúchala de nuevo." }; } };
  }
  if (n === 2 && typeof U2_FRASES !== "undefined") {
    const fr = U2_FRASES.filter(f => f.ru && f.es && f.ru.split(" ").length >= 2);
    const F = fr[num % fr.length];
    return { titulo: "Frase del día", grande: "«" + F.es[0] + "»", sub: "Escríbela en ruso", audio: null, consigna: "Escribe esta frase en ruso.",
      pista: "Empieza con «" + F.ru.split(" ")[0].replace(/[!?.,]/g, "") + "» y tiene " + F.ru.split(" ").length + " palabras.",
      revisar: txt => { const a = azHoyFrase(txt);
        /* Valen todas las formas rusas de esa traducción (u2Equivalentes, 22/10/2026): «¡Hola, Ana!» → Здра́вствуйте o Приве́т */
        const vale = (typeof u2Equivalentes === "function" ? u2Equivalentes(F) : [F.ru]).map(ru => ({ ru, d: azHoyDist(a, azHoyFrase(ru)) })).sort((x, y) => x.d - y.d)[0];
        if (vale.d === 0) return { nivel: "bien", msg: "**" + vale.ru + "**", oir: vale.ru };
        if (vale.d <= 2) return { nivel: "casi", msg: "Casi: **" + vale.ru + "**", oir: vale.ru };
        return { nivel: "mal", msg: "Se dice **" + F.ru + "**", oir: F.ru }; } };
  }
  if (n === 3 && typeof u3PalabraDelDia === "function") {
    const p = u3PalabraDelDia();
    return { titulo: "Palabra del día", emoji: p.emoji, grande: p.ac, id: p.id, sub: p.es + " · " + ({ m: "masculino", f: "femenino", n: "neutro" }[p.g] || ""), audio: p.ru,
      consigna: "Escribe una frase propia con esta palabra.", pista: "Puedes empezar con э́то: «Э́то " + p.ac + "…»",
      revisar: txt => { const usa = azHoyFormasDe(txt, p.id);
        if (usa.length) return { nivel: "bien", msg: "Usaste **" + usa[0].w + "**." };
        return { nivel: "mal", msg: "No encuentro " + p.ac + " en tu frase." }; } };
  }
  if (n === 4 && typeof u4PalabraDelDia === "function") {
    const p = u4PalabraDelDia();
    return { titulo: "Palabra del día", emoji: p.emoji, grande: p.ac, id: p.id, sub: p.es, audio: p.nom,
      consigna: "Escribe una frase donde " + p.ac + " reciba la acción.", pista: "En acusativo: " + p.acc + ".",
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
    return { titulo: "Verbo del día", grande: v.ac, id: v.id, sub: v.es, audio: v.ac, consigna: "Escribe una frase en presente con este verbo.",
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
    return { titulo: "Lugar del día", emoji: s.emoji, grande: s.ac, id: s.id, sub: s.es, audio: s.nom, consigna: "Escribe dónde está alguien o algo, con este lugar.",
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
    return { titulo: "¿Qué hora es?", reloj: h, sub: "Кото́рый час?", audio: null, consigna: "Mira el reloj y escribe la hora en ruso.",
      pista: "1 → час · 2, 3, 4 → часа́ · de 5 a 12 → часо́в",
      revisar: txt => { const a = azHoyFrase(txt).replace(/^сейчас /, ""), b = azHoyFrase(ok);
        if (a === b || (h === 1 && a === "один час")) return { nivel: "bien", msg: "**" + ok + "**", oir: ok };
        if (azHoyK(a.split(" ")[0] || "") === azHoyK(U7_NUM[h]) || (h === 1 && /час/.test(a))) return { nivel: "casi", msg: "El número está bien; con " + h + " va **" + ok + "**.", oir: ok };
        return { nivel: "mal", msg: "Son las " + (h === 1 ? "una" : U7_NUM_ES[h]) + ": **" + ok + "**", oir: ok }; } };
  }
  if (n === 8 && typeof u8Datos === "function") {
    const lista = Object.values(u8Datos().verb).filter(v => v.tipo === "a" && v.ac !== "жить"), v = lista[num % lista.length];
    const G = { "он": "m", "она": "f", "мы": "pl", "вы": "pl", "они": "pl" }, LBL = { m: "masculino", f: "femenino", n: "neutro", pl: "plural" };
    return { titulo: "Verbo del día, en pasado", grande: v.ac, id: v.id, sub: v.es, audio: v.ac, consigna: "Escribe qué hiciste ayer con este verbo.",
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
  if (n === 9 && typeof u9Datos === "function") {
    const D = u9Datos(), lista = Object.keys(U9_VERBOS).map(k => D.verb[D.sin(k)]).filter(v => v && D.sin(v.ac) !== "жить"), v = lista[num % lista.length];
    const PR = { "я": 0, "ты": 1, "он": 2, "она": 2, "мы": 3, "вы": 4, "они": 5 }, BU = D.budu.map(azHoyK);
    return { titulo: "Plan del día", grande: v.ac, id: v.id, sub: v.es, audio: v.ac, consigna: "Escribe qué vas a hacer mañana con este verbo.",
      pista: "За́втра я бу́ду " + v.ac + "…",
      tips: UNIDAD_9.modulos.find(m => m.id === "u9m12").consejos,
      revisar: txt => { const w = azHoyPal(txt), k = w.map(azHoyK);
        const i = k.findIndex(x => BU.indexOf(x) >= 0);
        if (i < 0) return { nivel: "mal", msg: "Para el futuro: **бу́ду " + v.ac + "**." };
        const sig = k[i + 1] === "не" ? k[i + 2] : k[i + 1];
        if (sig !== azHoyK(v.ac)) { const conj = v.presente && v.presente.some(f => azHoyK(f) === sig);
          return { nivel: conj ? "casi" : "mal", msg: conj ? "Después de " + w[i] + " va el infinitivo: **" + v.ac + "**." : "No encuentro «" + w[i] + " " + v.ac + "» en tu frase." }; }
        let j = i - 1; if (j >= 0 && k[j] === "не") j--;
        const p = j >= 0 ? PR[k[j]] : undefined;
        if (p != null && BU[p] !== k[i]) return { nivel: "casi", msg: "Con " + w[j] + " va **" + D.budu[p] + "**, no «" + w[i] + "»." };
        return { nivel: "bien", msg: "**" + w[i] + " " + v.ac + "**: futuro." }; } };
  }
  if (n === 10 && typeof u10Datos === "function") {
    const D = u10Datos(), lista = Object.keys(U10_COSAS).filter(k => !/рабо́та|вре́мя/.test(k)).map(k => Object.assign(D.sust(k) || {}, { emoji: U10_COSAS[k][2], bare: U10_COSAS[k][1] })).filter(x => x.id);
    const s = lista[num % lista.length];
    return { titulo: "Palabra del día", emoji: s.emoji, grande: s.ac, id: s.id, sub: s.bare, audio: s.nom, consigna: "Escribe que no tienes esto (con нет).",
      pista: "У меня́ нет + genitivo: " + s.gen + ".",
      tips: UNIDAD_10.modulos.find(m => m.id === "u10m12").consejos,
      revisar: txt => { const w = azHoyPal(txt), k = w.map(azHoyK);
        const i = k.indexOf("нет");
        const usa = azHoyFormasDe(txt, s.id);
        if (!usa.length) return { nivel: "mal", msg: "No encuentro " + s.ac + " en tu frase." };
        if (i < 0) return { nivel: "mal", msg: "La consigna es decir que no lo tienes: **У меня́ нет " + s.gen + "**." };
        if (usa.some(u => azHoyK(u.w) === azHoyK(s.gen))) return { nivel: "bien", msg: "**нет " + s.gen + "**: después de нет, genitivo." };
        return { nivel: "mal", msg: "Usaste «" + usa[0].w + "», pero después de нет va el genitivo: **" + s.gen + "**." }; } };
  }
  if (n === 11 && typeof ejerciciosUnidad11 === "function" && typeof azSituacion === "function") {
    const lista = ejerciciosUnidad11().filter(e => e.forma === "situacion" && (e.tipo === "situacion" || e.tipo === "mensaje") && !e.contexto);
    const e = lista[num % lista.length];
    const modelo = e.sit.modelos[0];
    return { titulo: "Situación del día", emoji: e.escena || "💬", grande: null, sub: null, consigna: e.pide.replace(/\{(.)\}/g, "$1"),
      pista: "Tiene que aparecer: " + e.sit.necesita.map(x => x.es).join(", ") + ". Empieza, por ejemplo, con «" + modelo.split(" ")[0].replace(/[,.!?]/g, "") + "».",
      revisar: txt => { const r = azSituacion(txt, e.sit);
        const formas = r.elementos.filter(x => x.estado === "forma").map(x => "«" + x.escrito + "» → mejor **" + x.mejor + "**");
        if (r.nivel === 2) return { nivel: "bien", msg: "Se entiende y está correcto. Otra forma: **" + modelo + "**", oir: modelo };
        if (r.nivel === 1) return { nivel: "casi", etiqueta: "💬 Se entiende", msg: formas.join(". ") + ". Así queda perfecto: **" + modelo + "**", oir: modelo };
        return { nivel: "mal", etiqueta: r.consigna ? "✗ Mal" : "✗ No se entiende", msg: r.resumen + " Una forma de decirlo: **" + modelo + "**", oir: modelo }; } };
  }
  if (n === 13 && typeof U13_CONVERS === "function" && typeof azSituacion === "function") {
    const pasos = [].concat(...U13_CONVERS().map(T => T.pasos.map(p => Object.assign({ quien: T.quien, genero: T.genero }, p))), U13_CONV_FINAL().pasos.map(p => Object.assign({ quien: "А́нна", genero: "f" }, p)));
    const p = pasos[num % pasos.length], modelo = p.sit.modelos[0];
    return { titulo: "Pregunta del día", emoji: "💬", grande: p.bot, sub: p.es, audio: p.bot, consigna: p.tarea,
      pista: "Tiene que aparecer: " + p.sit.necesita.map(x => x.es).join(", ") + ". Empieza, por ejemplo, con «" + modelo.split(" ")[0].replace(/[,.!?]/g, "") + "».",
      revisar: txt => { const r = azSituacion(txt, p.sit);
        const formas = r.elementos.filter(x => x.estado === "forma").map(x => "«" + x.escrito + "» → mejor **" + x.mejor + "**");
        if (r.nivel === 2) return { nivel: "bien", msg: "Se entiende y está correcto. Otra forma: **" + modelo + "**", oir: modelo };
        if (r.nivel === 1) return { nivel: "casi", etiqueta: "💬 Se entiende", msg: formas.join(". ") + ". Así queda perfecto: **" + modelo + "**", oir: modelo };
        return { nivel: "mal", etiqueta: r.consigna ? "✗ Mal" : "✗ No se entiende", msg: r.resumen + " Una forma de decirlo: **" + modelo + "**", oir: modelo }; } };
  }
  if (n === 12 && typeof u12Datos === "function") {
    const D = u12Datos(), a = U12_ASP[Math.floor(num / 2) % U12_ASP.length], vi = D.verbo(a[0]), vp = D.verbo(a[1]);
    const fut = num % 2 === 1;   /* un día pasado, otro futuro */
    const K = azHoyK, k2 = f => K(f);
    const pasP = Object.values(vp.pasado).map(k2), pasI = Object.values(vi.pasado).map(k2), futP = vp.futuro.map(k2);
    const BU = ["буду", "будешь", "будет", "будем", "будете", "будут"];
    return { titulo: "Pareja del día", emoji: "⏳", grande: vi.ac + " / " + vp.ac, id: vp.id, sub: a[6], audio: vp.ac,
      consigna: fut ? "Escribe qué vas a hacer mañana con este verbo, mirando el resultado (perfectivo)." : "Escribe qué terminaste ayer con este verbo (resultado: perfectivo).",
      pista: fut ? "Futuro perfectivo: я " + vp.futuro[0] + ", ты " + vp.futuro[1] + "… (sin бу́ду)." : "Pasado perfectivo: " + vp.pasado.m + " / " + vp.pasado.f + ".",
      revisar: txt => { const w = azHoyPal(txt), k = w.map(K);
        const i = k.findIndex(x => pasP.indexOf(x) >= 0), j = k.findIndex(x => pasI.indexOf(x) >= 0), f = k.findIndex(x => futP.indexOf(x) >= 0), b = k.findIndex(x => BU.indexOf(x) >= 0);
        if (fut) {
          if (f >= 0 && b >= 0 && b === f - 1) return { nivel: "mal", msg: "Nunca бу́ду + perfectivo: sin бу́ду, **" + w[f] + "** ya es futuro." };
          if (f >= 0) return { nivel: "bien", msg: "**" + w[f] + "**: futuro perfectivo, el resultado." };
          if (b >= 0 && k[b + 1] === K(vi.ac)) return { nivel: "casi", msg: "«" + w[b] + " " + w[b + 1] + "» está bien, pero es proceso. Para el resultado: **" + vp.futuro[0] + "**." };
          if (i >= 0) return { nivel: "casi", msg: "«" + w[i] + "» es pasado. La consigna pide futuro: **" + vp.futuro[0] + "**." };
          return { nivel: "mal", msg: "No encuentro " + vp.ac + " en futuro en tu frase." };
        }
        if (i >= 0) return { nivel: "bien", msg: "**" + w[i] + "**: pasado perfectivo, la acción terminada." };
        if (j >= 0) return { nivel: "casi", msg: "«" + w[j] + "» es imperfectivo (proceso). Para el resultado: **" + vp.pasado.m + "** / **" + vp.pasado.f + "**." };
        if (f >= 0) return { nivel: "casi", msg: "«" + w[f] + "» es futuro. La consigna pide pasado: **" + vp.pasado.m + "** / **" + vp.pasado.f + "**." };
        return { nivel: "mal", msg: "No encuentro " + vp.ac + " en pasado en tu frase." }; } };
  }
  return null;
}

/* ── Abecé: los desafíos (06/11/2026, textos en ruso: borrador para Iván) ── */
const azHoyEsTok = t => (typeof azTokens === "function" ? azTokens(t) : String(t || "").split(/\s+/)).map(w => String(w).toLowerCase());
/* Lo que devuelve azCorregirEs, como nivel y mensaje del desafío */
function azHoyEsCorr(txt, esperadas, opts, glosa) {
  const r = azCorregirEs(txt, esperadas, opts || {});
  const nivel = r.resultado === 2 ? "bien" : r.resultado === 1 ? "casi" : "mal";
  const ok = (r.correcta && r.correcta.length ? r.correcta.map(x => x.t).join("") : r.esperada) || esperadas[0];
  /* Los motivos, si son pocos (con todo mal, la forma correcta ya lo dice) */
  const malas = (r.palabras || []).filter(p => p.estado !== "ok" && p.motivo);
  const mot = malas.length <= 2 ? [...new Set(malas.map(p => p.motivo))].join(" ") : "";
  const g = glosa ? " (" + glosa + ")" : "", pt = /[.!?…]$/.test(ok) && !g ? "" : ".";
  return { nivel, oir: ok, msg: nivel === "bien" ? "**" + ok + "**" + g + pt : (nivel === "casi" ? "Почти: " : "Правильно: ") + "**" + ok + "**" + g + pt + (mot ? " " + mot : "") };
}
function azHoyEsLex(id) { return typeof LEXICON_ES !== "undefined" ? LEXICON_ES.find(e => e.id === id) : null; }
const azHoyEsRu = e => e && e.senses && e.senses[0] ? e.senses[0].ru : "";
function azHoyDesafioEs(n) {
  const num = azHoyNumero();
  const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
  if (typeof azCorregirEs !== "function") return null;

  if (n === 1 && typeof ES1_DELETREO !== "undefined") {
    const lista = [...new Set(ES1_DELETREO.concat(typeof ES1_TONICA !== "undefined" ? ES1_TONICA : []))].filter(w => es1Id(w));
    const w = lista[num % lista.length], ru = azHoyEsRu(azHoyEsLex(es1Id(w)));
    return { titulo: "Диктант дня", emoji: "🎧", sub: "Послушай (▶) и напиши слово по-испански.", audio: w, consigna: "Напиши слово, которое слышишь.",
      pista: "Начинается на «" + w.charAt(0).toUpperCase() + "», в нём " + [...w].length + " " + (/[2-4]$/.test([...w].length) && !/1[2-4]$/.test([...w].length) ? "буквы" : "букв") + (ru ? ", значит «" + ru + "»" : "") + ".",
      revisar: txt => azHoyEsCorr(txt, [w], {}, ru) };
  }
  if (n === 2 && typeof FRASES_ES !== "undefined") {
    const seg = t => String(t).replace(/\([^)]*\)/g, "").split(/(?<=[!?.])\s+/).map(x => x.trim()).filter(Boolean);
    const fr = FRASES_ES.filter(f => f.unidad && f.unidad <= 2 && f.es && f.ru && f.es.split(" ").length >= 2);
    const F = fr[num % fr.length], ru = seg(F.ru)[0] || F.ru;
    const nr = t => t.toLowerCase().replace(/[!?.,«»]/g, "").trim();
    const validas = [F.es].concat(FRASES_ES.filter(f => f !== F && f.es && f.ru && seg(f.ru).some(x => nr(x) === nr(ru))).map(f => f.es));
    const p0 = F.es.replace(/^[¿¡]/, "").split(" ")[0].replace(/[!?.,]/g, "");
    return { titulo: "Фраза дня", grande: "«" + ru + "»", sub: "Напиши по-испански", consigna: "Переведи эту фразу на испанский.",
      pista: "Начинается с «" + p0 + "», в ней " + F.es.split(" ").length + " " + (F.es.split(" ").length < 5 ? "слова" : "слов") + ".",
      revisar: txt => azHoyEsCorr(txt, validas) };
  }
  if (n === 3 && typeof UNIDAD_ES_3 !== "undefined" && typeof es3Vocab === "function") {
    const ids = [...new Set([].concat(...UNIDAD_ES_3.modulos.map(m => es3Vocab(m))))];
    const nombres = ids.map(azHoyEsLex).filter(e => e && e.posNormalized === "sustantivo" && (e.gender === "m" || e.gender === "f"));
    const e = nombres[num % nombres.length], m = e.gender === "m", soloPl = e.numberClass === "pluraliaTantum";
    const formas = typeof formasEsLista === "function" ? formasEsLista(e.id) : [{ f: e.es, k: soloPl ? "pl" : "sg" }];
    const lista = [...new Set([e.es].concat(formas.map(x => x.f)))];
    const art = soloPl ? (m ? ["los", "unos"] : ["las", "unas"]) : m ? ["el", "un"] : ["la", "una"];
    return { titulo: "Слово дня", grande: e.es, sub: azHoyEsRu(e) + " · " + (m ? "мужской род" : "женский род") + (soloPl ? ", только множественное число" : ""), audio: e.es,
      consigna: "Напиши свою фразу с этим словом: что где находится? (hay… / … está…)",
      pista: "Род " + (m ? "мужской" : "женский") + ": **" + art[0] + " / " + art[1] + "** " + e.es + ". Например: «En mi casa hay " + art[1] + " …»",
      revisar: txt => {
        const r = azSituacionEs(txt, { necesita: [{ es: azHoyEsRu(e), formas: lista }] }), el = r.elementos[0];
        if (r.nivel === 0) return { nivel: "mal", msg: "Не нахожу в твоей фразе слово **" + e.es + "**." };
        const T = azHoyEsTok(txt), w = T[el.pos], prev = T[el.pos - 1];
        const pl = formas.some(x => x.k === "pl" && x.f.toLowerCase() === (el.mejor || w || "").toLowerCase());
        const ART = { el: "m0", un: "m0", la: "f0", una: "f0", los: "m1", unos: "m1", las: "f1", unas: "f1" };
        const debe = (m ? "m" : "f") + (pl ? 1 : 0);
        if (prev && ART[prev] && ART[prev] !== debe) {
          const bueno = { m0: ["el", "un"], f0: ["la", "una"], m1: ["los", "unos"], f1: ["las", "unas"] }[debe], palabra = el.mejor || w;
          return { nivel: "casi", msg: "Почти: «" + prev + " " + palabra + "» — слово " + (m ? "мужского" : "женского") + " рода: **" + bueno[0] + " " + palabra + "** / **" + bueno[1] + " " + palabra + "**." };
        }
        if (r.nivel === 1) return { nivel: "casi", msg: "Почти: **" + el.mejor + "**, а не «" + el.escrito + "»." };
        return { nivel: "bien", msg: "Есть **" + w + "**: " + azHoyEsRu(e) + "." };
      } };
  }
  if (n === 4 && typeof ES4_CONJ !== "undefined" && typeof es4Pres === "function") {
    const verbos = [...new Set(ES4_CONJ.map(x => x[1]))].filter(v => es4Pres(v, 0));
    const inf = verbos[num % verbos.length], yo = es4Pres(inf, 0), refl = /se$/.test(inf);
    const lex = typeof LEXICON_ES !== "undefined" ? LEXICON_ES.find(e => e.es === inf && e.posNormalized === "verbo") : null;
    return { titulo: "Глагол дня", grande: inf, sub: azHoyEsRu(lex), audio: inf,
      consigna: "Напиши фразу о себе с этим глаголом: что ты делаешь (**yo**, настоящее время)?",
      pista: (refl ? "Возвратный глагол: с yo — **me** + глагол. " : "") + "Например: «Normalmente… » или «Todos los días…».",
      revisar: txt => {
        const r = azSituacionEs(txt, { necesita: [{ es: inf, formas: [yo] }] }), el = r.elementos[0];
        if (r.nivel === 2) return { nivel: "bien", msg: "**" + yo + "** — форма yo." };
        if (r.nivel === 1) return { nivel: "casi", msg: "Почти: с yo — **" + yo + "**, а не «" + el.escrito + "»." };
        if (refl) { const b = azSituacionEs(txt, { necesita: [{ es: inf, formas: [yo.split(" ").pop()] }] });
          if (b.nivel > 0) return { nivel: "casi", msg: "Почти: глагол возвратный, нужно **" + yo + "** (с **me**)." }; }
        const otro = azSituacionEs(txt, { necesita: [{ es: inf, formas: [inf] }] });
        if (otro.nivel > 0) return { nivel: "casi", msg: "Почти: о себе (yo) — **" + yo + "**." };
        return { nivel: "mal", msg: "Не нахожу в твоей фразе глагол **" + inf + "**. С yo: **" + yo + "**." };
      } };
  }
  if (n === 5 && typeof es5Num === "function" && typeof ES5_NUMEROS !== "undefined") {
    if (num % 2 && typeof ES5_PRECIOS !== "undefined") {
      const P = ES5_PRECIOS[Math.floor(num / 2) % ES5_PRECIOS.length];
      return { titulo: "Цена дня", grande: P[0], sub: "Как сказать эту цену?", consigna: "Напиши цену словами по-испански.",
        pista: /,/.test(P[0]) ? "Евро и центы соединяются словом **con**." : "После числа — **euro / euros**.",
        revisar: txt => azHoyEsCorr(txt, [P[1]].concat(P[2] || [])) };
    }
    const N = ES5_NUMEROS[Math.floor(num / 2) % ES5_NUMEROS.length], w = es5Num(N);
    return { titulo: "Число дня", grande: N.toLocaleString("es-ES"), sub: "Как сказать это число?", consigna: "Напиши число словами по-испански.",
      pista: N >= 1000 ? "Тысяча — **mil** (без «un»), миллион — **un millón**." : N >= 200 ? "Сотни согласуются: dos**cientos**, quin**ientos**." : "Сто ровно — **cien**, дальше — **ciento**…",
      revisar: txt => azHoyEsCorr(txt, [w]) };
  }
  if (n === 6 && typeof ES6_IMP !== "undefined" && typeof es6Imp === "function") {
    const lista = ES6_IMP.filter(x => es6Imp(x[1])), X = lista[num % lista.length];
    const imp = es6Imp(X[1]), base = X[0].replace(/\s*\([^)]*\)\s*$/, "");
    const frase = base.replace(/(^|¡)___/, (a, b) => b + cap(imp));
    const irreg = /irregular/.test(X[3] || ""), raiz = typeof ES6_IMP_NOTA !== "undefined" && ES6_IMP_NOTA[X[1]] && !irreg;
    return { titulo: "Указание дня", grande: X[0], sub: "Говоришь другу, на «tú»", audio: null,
      consigna: "Напиши всю фразу с повелительной формой глагола **" + X[1] + "**.",
      pista: irreg ? "Это одна из неправильных форм: ven, di, sal, haz, ten, ve, pon, sé." : raiz ? "Как форма **él** в настоящем — с той же особенностью корня." : "Как форма **él** в настоящем: él habla → ¡habla!",
      revisar: txt => {
        if (azHoyEsTok(txt).length === 1) return azHoyEsCorr(txt, [imp], { foco: [imp] });
        return azHoyEsCorr(txt, [frase], { foco: [imp] });
      } };
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
  /* Abecé (06/11/2026): textos en ruso, voz en español, se escribe en español */
  const T = AZ_HOY_ES ? { hoy: "Сегодня · Урок ", def: "Задание дня", cargando: "Загрузка…", nada: "Для этого урока задания дня пока нет.", oir: "Послушать", escribe: "Пиши по-испански…",
      pista: "💡 Подсказка", revisar: "Проверить", et: { bien: "✓ Верно", casi: "≈ Почти", mal: "✗ Неверно" }, cuaderno: "＋ Тетрадь", listo: "Готово", cerrar: "Закрыть", reloj: "Часы", lang: "es" }
    : { hoy: "Hoy · Unidad ", def: "Desafío del día", cargando: "Cargando…", nada: "Todavía no hay desafío para esta unidad.", oir: "Escuchar", escribe: "Escribe en ruso…",
      pista: "💡 Pista", revisar: "Revisar", et: { bien: "✓ Bien", casi: "≈ Casi", mal: "✗ Mal" }, cuaderno: "＋ Cuaderno", listo: "Listo", cerrar: "Cerrar", reloj: "Reloj", lang: "ru" };
  const hablar = t => (AZ_HOY_ES ? azHablarEs(t) : azHablarRu(t));
  useEffect(() => { let vivo = true; azHoyCargar(unidad).then(() => { if (vivo) setD(azHoyDesafio(unidad) || false); }); return () => { vivo = false; }; }, [unidad]);
  const revisar = async () => {
    let r = d.revisar(txt);
    /* Si la consigna está bien pero el verbo no coincide con el pronombre: Casi */
    if (d.concordancia && !AZ_HOY_ES && r.nivel === "bien") { const m = azHoyConcordancia(txt); if (m) r = { nivel: "casi", msg: r.msg + " " + m }; }
    /* Consejos del proyecto de la unidad (funciones propias, sin depender de unidad-ui.js) */
    let tips = d.tips ? [...new Set([].concat(...d.tips.map(k => k.fn ? (k.fn(txt) || []) : [])))] : [];
    /* Sin repetir lo que ya dice la corrección (misma forma en negrita) */
    const negr = (r.msg.match(/\*\*([^*]+)\*\*/g) || []).map(x => azHoyK(x));
    tips = tips.filter(tp => !(tp.match(/\*\*([^*]+)\*\*/g) || []).some(x => negr.indexOf(azHoyK(x)) >= 0));
    setRes(Object.assign({ tips }, r));
    const prev = await azGet(AZ_HOY_K, {});
    await azSet(AZ_HOY_K, Object.assign(prev, { fecha: azHoyFecha(), hecho: true, nivel: r.nivel, unidad }));
  };
  const reloj = n => {
    const S = 132, r = S / 2 - 6, cx = S / 2, a = (n % 12) / 12 * 2 * Math.PI;
    return h("svg", { viewBox: "0 0 " + S + " " + S, width: S, height: S, role: "img", "aria-label": T.reloj },
      h("circle", { cx, cy: cx, r, fill: c.bg2, stroke: c.gold, "stroke-width": 3 }),
      [...Array(12)].map((_, k) => { const b = k / 12 * 2 * Math.PI; return h("line", { key: k, x1: cx + Math.sin(b) * (r - 4), y1: cx - Math.cos(b) * (r - 4), x2: cx + Math.sin(b) * (r - (k % 3 ? 10 : 15)), y2: cx - Math.cos(b) * (r - (k % 3 ? 10 : 15)), stroke: c.textMuted, "stroke-width": k % 3 ? 2 : 3 }); }),
      h("line", { x1: cx, y1: cx, x2: cx + Math.sin(a) * r * 0.5, y2: cx - Math.cos(a) * r * 0.5, stroke: c.text, "stroke-width": 6, "stroke-linecap": "round" }),
      h("line", { x1: cx, y1: cx, x2: cx, y2: cx - r * 0.78, stroke: c.gold, "stroke-width": 4, "stroke-linecap": "round" }),
      h("circle", { cx, cy: cx, r: 5, fill: c.gold }));
  };
  const colRes = res ? { bien: VERDE, casi: "#C9B369", mal: "#D9776F" }[res.nivel] : null;
  const soloEmoji = !!(d && d.emoji && !d.grande && !d.sub && !d.audio && !d.reloj);
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
    h("div", { className: "az-hoy", role: "dialog", "aria-modal": "true", "aria-label": T.def },
      h("div", { className: "az-hoy-top" },
        h("div", null, h("div", { className: "az-hoy-k" }, T.hoy + unidad), h("div", { className: "az-hoy-t" }, d ? d.titulo : T.def)),
        h("button", { className: "az-hoy-x", onClick: onCerrar, "aria-label": T.cerrar }, "✕")),
      d === null && h("div", { className: "az-hoy-c", style: { color: c.textMuted } }, T.cargando),
      d === false && h("div", { className: "az-hoy-c" }, T.nada),
      d && h(React.Fragment, null,
        /* Si solo hay emoji (situación del día), no hay recuadro: el emoji va al lado de la consigna */
        !soloEmoji && h("div", { className: "az-hoy-pres" },
          d.reloj ? reloj(d.reloj) : d.emoji ? h("div", { style: { fontSize: 40 } }, d.emoji) : null,
          h("div", { style: { flex: 1, minWidth: 0 } },
            d.grande && h("div", { className: "az-hoy-g", lang: AZ_HOY_ES ? (d.titulo === "Фраза дня" ? "ru" : "es") : d.titulo === "Frase del día" ? "es" : "ru" }, d.id && !AZ_HOY_ES && typeof AzPalabra === "function" ? h(AzPalabra, { texto: d.grande, id: d.id }) : d.grande),
            d.sub && h("div", { className: "az-hoy-s" }, d.sub)),
          d.audio && h("button", { className: "play", onClick: () => hablar(d.audio), "aria-label": T.oir }, "▶")),
        soloEmoji
          ? h("div", { className: "az-hoy-c", style: { display: "flex", alignItems: "center", gap: 12 } },
              h("div", { style: { fontSize: 32, lineHeight: 1, flexShrink: 0 }, "aria-hidden": "true" }, d.emoji),
              h("div", { style: { flex: 1, minWidth: 0 } }, azFmt(d.consigna)))
          : h("div", { className: "az-hoy-c" }, azFmt(d.consigna)),
        h("input", { className: "az-hoy-in", lang: T.lang, value: txt, placeholder: T.escribe, onInput: e => { setTxt(e.target.value); setRes(null); },
          autocapitalize: "off", autocorrect: "off", spellcheck: false, autocomplete: "off" }),
        h("div", { className: "az-hoy-row" },
          h("button", { className: "az-hoy-b2", onClick: () => setPista(!pista) }, T.pista),
          h("button", { className: "az-hoy-b", disabled: !txt.trim(), onClick: revisar }, T.revisar)),
        pista && h("div", { className: "az-hoy-p" }, azFmt(d.pista)),
        res && h("div", { className: "az-hoy-r" },
          h("div", { style: { fontWeight: 800, color: colRes } }, res.etiqueta || T.et[res.nivel]),
          h("div", { style: { display: "flex", alignItems: "center", gap: 10, marginTop: 4 } }, h("div", { style: { flex: 1 } }, azFmt(res.msg)),
            res.oir && h("button", { className: "play", onClick: () => hablar(res.oir), "aria-label": T.oir }, "▶")),
          res.tips && res.nivel !== "bien" && res.tips.map((t, i) => h("div", { key: i, style: { marginTop: 6, color: c.textSub } }, azFmt(t))),
          res.nivel === "bien" && h("button", { className: "az-hoy-b2", style: { marginTop: 10, width: "100%" }, onClick: () => { azGuardarEnCuaderno(txt, { titulo: (AZ_HOY_ES ? "Сегодня · " : "Hoy · ") + d.titulo, href: "index.html" }); } }, T.cuaderno),
          h("button", { className: "az-hoy-b2", style: { marginTop: 8, width: "100%" }, onClick: onCerrar }, T.listo)))));
}

/* Tarjeta «Hoy» del inicio (cuadrada, al lado de «Seguir estudiando») */
function AzHoyTarjeta({ c, hecho, onAbrir, alto }) {
  const h = React.createElement;
  const ES = AZ_HOY_ES;
  return h("button", { onClick: onAbrir, "aria-label": ES ? "Задание дня" : "Desafío del día",
    style: { width: alto, minHeight: alto, flexShrink: 0, borderRadius: 16, background: c.card, border: `1px solid ${hecho ? c.border : c.gold + "88"}`, color: c.text, cursor: "pointer",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, fontFamily: "inherit", padding: 8 } },
    h("div", { style: { fontSize: 26 } }, hecho ? "✅" : "🎯"),
    h("div", { style: { fontSize: 15, fontWeight: 800, color: c.gold } }, ES ? "Сегодня" : "Hoy"),
    h("div", { style: { fontSize: 11, color: c.textMuted, lineHeight: 1.2, textAlign: "center" } }, hecho ? (ES ? "Сделано" : "Hecho") : ES ? "Задание дня" : "Desafío del día"));
}

window.AzHoy = AzHoy;
window.AzHoyTarjeta = AzHoyTarjeta;
window.azHoyUnidad = azHoyUnidad;
window.azHoyFecha = azHoyFecha;
window.azHoyDesafio = azHoyDesafio;
window.azHoyCargar = azHoyCargar;
window.AZ_HOY_K = AZ_HOY_K;
window.AZ_HOY_ES = AZ_HOY_ES;
