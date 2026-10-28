/* ============================================================
   CORRECTOR-ES.JS — Abecé: corrección de respuestas escritas
   (28/10/2026). Cargar después de core.js y js/corrector.js:
     <script src="js/corrector.js"></script>
     <script src="js/corrector-es.js"></script>
   Usa las piezas de corrector.js (azTokens, azDiff, azParseEsperada,
   azAlinear) y devuelve lo mismo que azCorregir, así AzCorreccion lo
   muestra igual. Los motivos y el resumen van en ruso (borrador para
   Iván).

   azCorregirEs(respuesta, esperadas, opts)
     opts.lengua: "es" (por defecto) → la respuesta es en ESPAÑOL, la
       lengua que se aprende. Decisiones de Manu (PROGRAMA_ABECE.md §7):
       · falta o sobra una tilde → Casi, con aviso;
       · la tilde cambia la palabra (tu / tú, esta / está, hablo / habló)
         y esa palabra es lo que se evalúa (opts.foco) → Mal; si no, Casi
         con aviso de que es otra palabra;
       · ¿ y ¡ no se exigen: Bien, con un aviso si faltan;
       · variantes americanas y voseo (computadora, manejar, ustedes por
         vosotros, tenés) → Bien con una nota «в Испании говорят…»,
         salvo opts.variantes === "mal" (el ejercicio evalúa esa forma);
       · los artículos y las preposiciones cuentan (no se quitan, como
         en el modo "es" de Azbuka): si falta uno, Mal;
       · otra forma de la misma palabra (bueno por buena, hablo por
         habla) → Mal con la explicación (Casi con opts.formaCasi), si
         la página tiene data-formas-es.js y js/verbos-es.js;
       · error de tipeo (1 letra; 2 en palabras de 7 o más) → Casi.
     opts.lengua: "ru" → la respuesta es en RUSO, la lengua del alumno:
       se corrige con tolerancia (е = ё, sin acentos, mayúsculas ni
       puntuación; un error de tipeo es Casi).
     opts.foco: palabras de la esperada que el ejercicio evalúa (lista) o
       true (todas). Solo cambia la regla de la tilde.
   ============================================================ */
(function () {
  const BIEN = 2, CASI = 1, MAL = 0;

  /* Clave sin tildes (para alinear) y clave exacta (para la tilde) */
  const sinTildes = t => String(t || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").normalize("NFC");
  /* la ñ es una letra propia: «ano» ≠ «año» */
  const claveEs = t => String(t || "").toLowerCase().replace(/ñ/g, "\u0001").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\u0001/g, "ñ").normalize("NFC");
  const exacta = t => String(t || "").toLowerCase().normalize("NFC");
  const claveRu = t => String(t || "").toLowerCase().normalize("NFC").replace(/[́̀]/g, "").replace(/ё/g, "е");

  /* Variantes regionales: las tablas de corrector.js (voseo y palabras americanas) */
  const VOSEO = typeof AZ_VOSEO_ES !== "undefined" ? AZ_VOSEO_ES : {};
  const REGION = typeof AZ_REGION_ES !== "undefined" ? AZ_REGION_ES : {};
  /* Además: ustedes por vosotros y sus formas (Latinoamérica, Canarias, Andalucía occidental) */
  const USTEDES = { ustedes: "vosotros" };
  const variante = k => VOSEO[k] || REGION[k] || USTEDES[k] || null;

  /* ¿Existe esta palabra en español? (léxico, formas, formas verbales) */
  let conocidas = null;
  function existe(w) {
    if (!conocidas) {
      conocidas = new Set();
      if (typeof LEXICON_ES !== "undefined") LEXICON_ES.forEach(e => { exacta(e.es).split(/\s+/).forEach(x => conocidas.add(x)); if (e.femenino && e.femenino.es) conocidas.add(exacta(e.femenino.es)); });
      if (typeof formasEsIndice === "function") Object.keys(formasEsIndice()).forEach(k => conocidas.add(k));
      if (typeof VERBOS_ES !== "undefined") Object.values(VERBOS_ES).forEach(v => ["pres", "indef", "imperf", "fut", "cond", "subj", "subjImp"].forEach(t => (v[t] || []).forEach(f => f && conocidas.add(exacta(f)))));
      if (typeof VERBOS_ES !== "undefined") Object.values(VERBOS_ES).forEach(v => ["impTu", "ger", "part"].forEach(k => v[k] && conocidas.add(exacta(v[k]))));
    }
    return conocidas.has(exacta(w));
  }
  /* Las parejas con tilde diacrítica (siempre son palabras distintas) */
  const DIACRITICAS = { tu: "tú", el: "él", mi: "mí", si: "sí", te: "té", de: "dé", se: "sé", mas: "más", que: "qué", quien: "quién", como: "cómo", donde: "dónde", cuando: "cuándo", cual: "cuál", cuanto: "cuánto", aun: "aún", solo: "sólo" };
  const esOtraPalabra = (u, e) => exacta(u) !== exacta(e) && (DIACRITICAS[exacta(u)] === exacta(e) || DIACRITICAS[exacta(e)] === exacta(u) || (existe(u) && existe(e)));

  /* ¿De qué palabra es esta forma? (bueno → bueno m., buena → bueno f.) */
  const K_RU = typeof AZ_FES_K !== "undefined" ? AZ_FES_K : {};
  function formaDe(w) {
    const out = [];
    if (typeof formasEsIndice === "function") (formasEsIndice()[exacta(w)] || []).forEach(x => out.push({ id: x.id, et: K_RU[x.k] || "" }));
    if (typeof vesBuscarForma === "function") (vesBuscarForma(w) || []).filter(x => exacta(x.forma) === exacta(w)).forEach(x => out.push({ id: x.id, et: (x.etiquetas || []).join(" / ") }));
    if (typeof LEXICON_ES !== "undefined") LEXICON_ES.forEach(e => { if (exacta(e.es) === exacta(w)) out.push({ id: e.id, et: "" }); });
    return out;
  }

  function clasificarEs(u, e, opts, enFoco) {
    const r = { escrito: u, esperado: e, estado: "ok", motivo: "", letras: null };
    const ku = claveEs(u), ke = claveEs(e);
    /* variante americana o voseo: Bien con nota (o Mal si el ejercicio evalúa la forma) */
    const vu = variante(sinTildes(u)), ve = sinTildes(e);
    if (ku !== ke && vu && claveEs(vu) === claveEs(ve)) {
      if (opts.variantes === "mal") { r.estado = "mal"; r.motivo = "Здесь нужна форма, которую говорят в Испании: «" + e + "»."; return r; }
      r.nota = "«" + u + "» говорят в Латинской Америке. В Испании говорят «" + e + "».";
      return r;
    }
    if (ku === ke) {
      if (exacta(u) === exacta(e)) return r;
      /* solo cambia la tilde */
      r.letras = azDiff(exacta(u), exacta(e)).letras;
      if (esOtraPalabra(u, e)) {
        r.estado = enFoco ? "mal" : "casi";
        r.motivo = "«" + u + "» и «" + e + "» — разные слова: знак ударения меняет смысл. Здесь нужно «" + e + "».";
      } else {
        r.estado = "casi";
        r.motivo = /[áéíóú]/.test(e) && !/[áéíóú]/.test(u) ? "Не хватает знака ударения: «" + e + "»." :
          !/[áéíóú]/.test(e) ? "Знак ударения здесь не нужен: «" + e + "»." : "Знак ударения стоит на другой гласной: «" + e + "».";
      }
      return r;
    }
    r.letras = azDiff(exacta(u), exacta(e)).letras;
    /* otra forma de la misma palabra */
    const fu = formaDe(u), fe = formaDe(e);
    const comun = fu.filter(x => fe.some(y => y.id === x.id))[0];
    if (comun) {
      const ye = fe.filter(y => y.id === comun.id)[0];
      /* forma de ustedes donde se esperaba la de vosotros (son / sois): variante americana */
      const ustedU = fu.some(x => x.id === comun.id && /ustedes/.test(x.et)), vosE = fe.some(y => y.id === comun.id && /vosotros/.test(y.et));
      if (ustedU && vosE && opts.variantes !== "mal") {
        r.nota = "«" + u + "» — форма для ustedes, как говорят в Латинской Америке. В Испании к «вы» (многим) — «" + e + "».";
        return r;
      }
      r.estado = opts.formaCasi ? "casi" : "mal";
      r.motivo = "«" + u + "»" + (comun.et ? " (" + comun.et + ")" : "") + " — другая форма. Здесь нужно «" + e + "»" + (ye && ye.et ? " (" + ye.et + ")" : "") + ".";
      return r;
    }
    const dif = azDiff(ku, ke);
    const tope = ke.length >= 7 ? 2 : 1;
    if (dif.dist <= tope && ke.length > 3 && !existe(u)) { r.estado = "casi"; r.motivo = "Опечатка: правильно «" + e + "»."; return r; }
    r.estado = "mal";
    r.motivo = "Здесь нужно «" + e + "».";
    return r;
  }

  function clasificarRu(u, e) {
    const r = { escrito: u, esperado: e, estado: "ok", motivo: "", letras: null };
    const ku = claveRu(u), ke = claveRu(e);
    if (ku === ke) return r;
    r.letras = azDiff(ku, ke).letras;
    const tope = ke.length >= 7 ? 2 : 1;
    if (azDiff(ku, ke).dist <= tope && ke.length > 3) { r.estado = "casi"; r.motivo = "Опечатка: правильно «" + e + "»."; return r; }
    r.estado = "mal"; r.motivo = "Здесь нужно «" + e + "».";
    return r;
  }

  /* Alinear (como azAlinear de corrector.js, con nuestra clave) */
  function alinear(U, E, clave) {
    const n = E.length, m = U.length;
    const costo = (e, u) => {
      const a = clave(u), b = clave(e.t);
      if (a === b) return 0;
      const d = azDiff(a, b).dist / Math.max(a.length, b.length);
      return d <= 0.6 ? 0.2 + d : 1.8;
    };
    const D = [], P = [];
    for (let i = 0; i <= n; i++) { D[i] = []; P[i] = []; }
    D[0][0] = 0;
    for (let i = 1; i <= n; i++) { D[i][0] = D[i - 1][0] + (E[i - 1].opc ? 0 : 1); P[i][0] = "f"; }
    for (let j = 1; j <= m; j++) { D[0][j] = D[0][j - 1] + 1; P[0][j] = "s"; }
    for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++) {
      const par = D[i - 1][j - 1] + costo(E[i - 1], U[j - 1]);
      const fal = D[i - 1][j] + (E[i - 1].opc ? 0 : 1);
      const sob = D[i][j - 1] + 1;
      if (par <= fal && par <= sob) { D[i][j] = par; P[i][j] = "p"; }
      else if (fal <= sob) { D[i][j] = fal; P[i][j] = "f"; }
      else { D[i][j] = sob; P[i][j] = "s"; }
    }
    const ops = [];
    for (let i = n, j = m; i > 0 || j > 0;) {
      const p = P[i][j];
      if (p === "p") { ops.push({ e: E[i - 1], u: U[j - 1] }); i--; j--; }
      else if (p === "f") { ops.push({ e: E[i - 1] }); i--; }
      else { ops.push({ u: U[j - 1] }); j--; }
    }
    return { costo: D[n][m], ops: ops.reverse() };
  }

  const plural = (n, a, b, c) => { const d = n % 10, cc = n % 100; return d === 1 && cc !== 11 ? a : d >= 2 && d <= 4 && (cc < 12 || cc > 14) ? b : c; };

  function azCorregirEs(respuesta, esperadas, opts) {
    opts = opts || {};
    const ru = opts.lengua === "ru";
    const lista = (Array.isArray(esperadas) ? esperadas : [esperadas]).filter(Boolean);
    const clave = ru ? claveRu : (t => { const k = claveEs(t); const v = variante(sinTildes(t)); return v ? claveEs(v) : k; });
    const U = azTokens(respuesta);
    const out = { resultado: MAL, esperada: lista[0] || "", palabras: [], notas: [], resumen: "" };
    if (!U.length) { out.resumen = "Ответа нет."; return out; }

    let mejor = null;
    lista.forEach(s => {
      const E = azParseEsperada(s);
      const al = alinear(U, E, clave);
      if (!mejor || al.costo < mejor.al.costo) mejor = { s, E, al };
    });
    out.esperada = mejor.s;
    const foco = opts.foco === true ? null : (opts.foco || []).map(exacta);
    const enFoco = e => opts.foco === true || (foco && foco.indexOf(exacta(e)) >= 0);

    let peor = BIEN;
    const bajar = r => { if (r < peor) peor = r; };
    mejor.al.ops.forEach(o => {
      if (o.e && o.u) {
        const c = ru ? clasificarRu(o.u, o.e.t) : clasificarEs(o.u, o.e.t, opts, enFoco(o.e.t));
        c.i = o.e.i;
        if (c.nota) out.notas.push(c.nota);
        if (c.estado === "casi") bajar(CASI);
        if (c.estado === "mal") bajar(MAL);
        out.palabras.push(c);
      } else if (o.e) {
        if (o.e.opc) return;
        /* en español cuentan también los artículos y las preposiciones */
        out.palabras.push({ i: o.e.i, escrito: "", esperado: o.e.t, estado: "falta", grave: true, motivo: "Не хватает «" + o.e.t + "»." });
        bajar(MAL);
      } else {
        out.palabras.push({ escrito: o.u, esperado: "", estado: "sobra", motivo: "Лишнее слово: «" + o.u + "»." });
        bajar(CASI);
      }
    });

    /* ¿Mismas palabras en otro orden? Casi (solo si de verdad cambió el orden:
       una tilde que falta no es un problema de orden) */
    const seq = T => T.filter(t => !t.opc).map(t => clave(t.t || t)).join(" ");
    if (peor < BIEN && seq(U) !== seq(mejor.E)) {
      const bolsa = T => T.filter(t => !t.opc).map(t => clave(t.t || t)).sort().join(" ");
      const bu = bolsa(U);
      if (lista.some(s => bolsa(azParseEsperada(s)) === bu)) {
        peor = CASI; out.orden = true;
        out.palabras = U.map(t => ({ escrito: t, esperado: t, estado: "ok", motivo: "" }));
        out.notas.push("Слова верные, но порядок другой: " + mejor.s);
      }
    }

    /* ¿ y ¡ no se exigen: solo un aviso */
    if (!ru && peor === BIEN) {
      const sinAbre = (abre, cierra) => mejor.s.indexOf(abre) >= 0 && String(respuesta).indexOf(abre) < 0;
      if (sinAbre("¿")) out.notas.push("В испанском вопрос начинается со знака «¿».");
      if (sinAbre("¡")) out.notas.push("В испанском восклицание начинается со знака «¡».");
    }
    out.resultado = peor;

    const cola = out.palabras.filter(p => p.estado !== "falta");
    let q = 0;
    out.tuya = U.map(t => { const p = cola[q]; if (p && p.escrito === t) { q++; return { t, estado: p.estado }; } return { t, estado: "ok" }; });

    const marcar = {};
    out.palabras.forEach(p => { if (p.i != null && p.estado !== "ok") marcar[p.i] = true; });
    const txt = (mejor.s || "").normalize("NFC").replace(/[()]/g, "");
    out.correcta = [];
    let pos = 0;
    azParseEsperada(mejor.s).forEach(t => {
      const k = txt.indexOf(t.t, pos);
      if (k < 0) return;
      if (k > pos) out.correcta.push({ t: txt.slice(pos, k) });
      out.correcta.push({ t: t.t, marca: !!marcar[t.i] });
      pos = k + t.t.length;
    });
    if (pos < txt.length) out.correcta.push({ t: txt.slice(pos) });
    const n = out.palabras.filter(p => p.estado !== "ok").length;
    out.resumen = peor === BIEN ? "Всё верно." : out.orden ? "Проверь порядок слов." :
      peor === CASI ? "Проверь " + n + " " + plural(n, "деталь", "детали", "деталей") + "." :
      n + " " + plural(n, "ошибка", "ошибки", "ошибок") + ".";
    return out;
  }

  window.azCorregirEs = azCorregirEs;
})();
