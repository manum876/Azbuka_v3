/* ============================================================
   CORRECTOR.JS — Corrección de respuestas escritas (compartido)
   ------------------------------------------------------------
   Versión 25/09/2026. Lo usan las unidades, el examen y cualquier
   ejercicio donde se escribe. Cargar después de core.js:
     <script src="core.js"></script>
     <script src="corrector.js"></script>
   Si la página tiene data-casos.js y data-verbos.js, el corrector
   reconoce qué forma escribiste (кни́ги = genitivo de кни́га) y lo
   explica. Sin esos archivos igual corrige, con explicaciones más
   simples.

   TRES RESULTADOS (mismos valores que AZ_BIEN / AZ_CASI / AZ_MAL
   de progress.js, así el resultado se guarda tal cual):
     2 Bien  → exacto, o solo cambia acento, е/ё, mayúsculas o
               puntuación (se avisa si faltó la ё).
     1 Casi  → lo que se evalúa está bien, pero hay un error de
               tipeo en la raíz, falta una palabrita no esencial,
               sobra una palabra o el orden no es el esperado.
     0 Mal   → falla lo evaluado: terminación, caso, persona, o la
               palabra es otra. Una letra de la terminación es Mal.

   USO:
     azCorregir(respuesta, esperadas, { idioma: "ru" | "es" | "translit" })
       esperadas: un texto o una lista de textos válidos. Entre
       paréntesis van las palabras optativas: "(Я) чита́ю кни́гу."
     → { resultado, esperada, tuya, correcta, palabras: [...], notas: [...], resumen }
       tuya: lo escrito, palabra por palabra, con su estado
       correcta: la esperada en tramos [{ t, marca }]; marca = palabra corregida
       palabras: { escrito, esperado, estado: "ok"|"casi"|"mal"|
                   "falta"|"sobra", motivo, letras }
       letras: diferencia letra a letra [{ t: "=", s }, { t: "-", s }, { t: "+", s }]
               ("-" lo que sobra de lo escrito, "+" lo que faltaba)
   ============================================================ */

const AZ_R_BIEN = 2, AZ_R_CASI = 1, AZ_R_MAL = 0;

/* Letras latinas que se confunden con cirílicas al tipear */
const AZ_LAT_CYR = { a: "а", c: "с", e: "е", o: "о", p: "р", x: "х", y: "у", k: "к" };
const AZ_ARTICULOS_ES = new Set(["el", "la", "los", "las", "un", "una", "unos", "unas", "lo"]);
const AZ_POS_MENOR = new Set(["partícula", "conjunción", "interjección"]);

function azSinAcento(s) { return (s || "").normalize("NFC").replace(/[\u0301\u0300]/g, ""); }

/* Tokens de un texto: palabras con guion interno, sin puntuación */
function azTokens(s) {
  return (s || "").normalize("NFC").replace(/\u0300/g, "").replace(/[.,!?¿¡;:«»"“”„()\[\]—–…]/g, " ").split(/\s+/)
    .map(function (t) { return t.replace(/^-+|-+$/g, ""); }).filter(Boolean);
}

/* Clave de comparación de una palabra */
function azClaveRu(t) {
  let w = azSinAcento(t).toLowerCase();
  if (/[а-яё]/.test(w)) w = w.replace(/[acepxyk]/g, function (ch) { return AZ_LAT_CYR[ch]; });
  return w.replace(/ё/g, "е");
}
/* Transliteración: además, y = i y sin apóstrofos ('ya' = 'ia', «syest» = «s'yest») */
function azClaveTr(t) {
  return azClaveEs(t).replace(/y/g, "i").replace(/['"`’ʼ]/g, "");
}
function azClaveEs(t) {
  return azSinAcento(t).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").normalize("NFC");
}

/* Distancia de edición con las operaciones, para mostrar la diferencia */
function azDiff(a, b) {
  const n = a.length, m = b.length, d = [];
  for (let i = 0; i <= n; i++) { d[i] = [i]; }
  for (let j = 1; j <= m; j++) d[0][j] = j;
  for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++) {
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  }
  const ops = [];
  let i = n, j = m;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && a[i - 1] === b[j - 1] && d[i][j] === d[i - 1][j - 1]) { ops.push(["=", a[i - 1]]); i--; j--; }
    else if (i > 0 && j > 0 && d[i][j] === d[i - 1][j - 1] + 1) { ops.push(["+", b[j - 1]]); ops.push(["-", a[i - 1]]); i--; j--; }
    else if (i > 0 && d[i][j] === d[i - 1][j] + 1) { ops.push(["-", a[i - 1]]); i--; }
    else { ops.push(["+", b[j - 1]]); j--; }
  }
  ops.reverse();
  const out = [];
  ops.forEach(function (o) {
    const last = out[out.length - 1];
    if (last && last.t === o[0]) last.s += o[1]; else out.push({ t: o[0], s: o[1] });
  });
  return { dist: d[n][m], letras: out };
}

/* ── Análisis de formas (usa el índice de core.js) ── */
function azFormasDePalabra(t) {
  if (typeof azIndiceFormas !== "function" || (typeof CASOS === "undefined" && typeof VERBOS === "undefined")) return [];
  const idx = azIndiceFormas();
  return idx.get(azClaveRu(azSinAcento(t))) || [];   // [[id, forma, etiqueta], …]
}
/* Qué es una palabra escrita: [{ id, lema, etiquetas: [...] }] */
function azAnalizarPalabra(t) {
  const porId = {};
  azFormasDePalabra(t).forEach(function (r) {
    const e = porId[r[0]] || (porId[r[0]] = { id: r[0], forma: r[1], etiquetas: [] });
    if (e.etiquetas.indexOf(r[2]) < 0) e.etiquetas.push(r[2]);
  });
  const lex = typeof lexComerById === "function" ? lexComerById : function () { return null; };
  if (typeof LEXICON_COMER !== "undefined") {
    const k = azClaveRu(azSinAcento(t));
    LEXICON_COMER.forEach(function (e) {
      if (!porId[e.id] && azClaveRu(e.ru) === k) porId[e.id] = { id: e.id, forma: e.acento || e.ru, etiquetas: ["forma de diccionario"] };
    });
  }
  return Object.keys(porId).map(function (id) {
    const e = lex(id);
    const r = porId[id];
    r.lema = e ? (e.acento || e.ru) : "";
    r.pos = e ? e.posNormalized : "";
    r.es = e ? (e.senses || []).map(function (s) { return s.es; }).slice(0, 2).join(", ") : "";
    return r;
  });
}
/* Raíz común de todas las formas de una palabra (lo que no cambia) */
function azRaiz(id) {
  if (typeof azFormasDe !== "function") return null;
  const fs = azFormasDe(id).map(function (f) { return azClaveRu(azSinAcento(f[0])); }).filter(function (f) { return f.indexOf(" ") < 0; });
  if (!fs.length) return null;
  let p = fs[0];
  fs.forEach(function (f) { while (f.indexOf(p) !== 0) p = p.slice(0, -1); });
  return p.length;
}
function azEtiq(a) {
  if (!a) return "";
  const et = a.etiquetas.filter(function (x) { return x !== "forma de diccionario"; });
  return et.length ? et.join(" / ") : "forma de diccionario";
}

/* ── Esperadas: "(Я) чита́ю кни́гу." → [{ t, opc }] ── */
function azParseEsperada(s) {
  const out = [];
  (s || "").replace(/\(([^)]*)\)|([^()]+)/g, function (_, opc, fijo) {
    azTokens(opc != null ? opc : fijo).forEach(function (t) { out.push({ t: t, opc: opc != null, i: out.length }); });
    return "";
  });
  return out;
}

/* ── Clasificar una palabra escrita contra la esperada ── */
function azClasificar(u, e, modo, formaCasi) {
  const clave = modo === "ru" ? azClaveRu : modo === "translit" ? azClaveTr : azClaveEs;
  const ku = clave(u), ke = clave(e);
  const r = { escrito: u, esperado: e, estado: "ok", motivo: "", letras: null };
  if (ku === ke) {
    if (modo === "ru" && /ё/i.test(e) && !/ё/i.test(u)) r.nota = "«" + e + "» se escribe con ё.";
    return r;
  }
  const dif = azDiff(ku, ke);
  r.letras = azDiff(azSinAcento(u).toLowerCase(), azSinAcento(e).toLowerCase()).letras;
  const tope = ke.length >= 7 ? 2 : 1;

  if (modo !== "ru") {
    if (dif.dist <= tope && ke.length > 3) { r.estado = "casi"; r.motivo = "Error de tipeo: es «" + e + "»."; }
    else { r.estado = "mal"; r.motivo = "Acá va «" + e + "»."; }
    return r;
  }

  if (/[a-z]/i.test(u) && !/[а-яё]/i.test(u)) {
    r.estado = "mal";
    r.motivo = "«" + u + "» está escrito con letras latinas. Usá el teclado ruso del teléfono.";
    return r;
  }
  if (ke.length === 1) { r.estado = "mal"; r.motivo = "Acá va la letra «" + e + "»."; return r; }
  const au = azAnalizarPalabra(u), ae = azAnalizarPalabra(e);
  const comun = au.filter(function (x) { return ae.some(function (y) { return y.id === x.id; }); })[0];
  if (comun) {
    const ye = ae.filter(function (y) { return y.id === comun.id; })[0];
    /* formaCasi (06/10/2026, Manu): en las primeras unidades, otra forma de la palabra correcta
       (мои por мой) es Casi: el alumno todavía no conoce bien las formas */
    r.estado = formaCasi ? "casi" : "mal";
    r.motivo = "Escribiste «" + u + "» (" + azEtiq(comun) + " de " + comun.lema + "). Acá va «" + e + "» (" + azEtiq(ye) + ").";
    return r;
  }
  /* ¿La diferencia cae en la raíz o en la terminación? */
  let pre = 0; while (pre < ku.length && pre < ke.length && ku[pre] === ke[pre]) pre++;
  let suf = 0; while (suf < ku.length - pre && suf < ke.length - pre && ku[ku.length - 1 - suf] === ke[ke.length - 1 - suf]) suf++;
  const finDif = ke.length - suf;
  const raiz = ae.length ? Math.min.apply(null, ae.map(function (a) { const x = azRaiz(a.id); return x == null ? ke.length : x; })) : ke.length - 2;
  if (dif.dist <= tope && finDif <= raiz) {
    r.estado = "casi";
    r.motivo = "Error de tipeo en la raíz: es «" + e + "».";
    return r;
  }
  r.estado = "mal";
  if (au.length && au[0].lema && azClaveRu(azSinAcento(au[0].lema)) !== azClaveRu(azSinAcento(ae.length ? ae[0].lema : e))) {
    r.motivo = "«" + u + "» es otra palabra" + (au[0].es ? " (" + au[0].es + ")" : "") + ". Acá va «" + e + "»" + (ae[0] && ae[0].es ? " (" + ae[0].es + ")" : "") + ".";
  } else if (pre >= Math.max(1, raiz) && dif.dist <= 3) {
    const tu = u.slice(pre), te = azSinAcento(e).slice(pre);
    r.motivo = "La terminación: va «-" + te + "»" + (tu ? ", no «-" + tu + "»" : "") + (ae[0] ? " (" + azEtiq(ae[0]) + ")" : "") + ".";
  } else {
    r.motivo = "Acá va «" + e + "».";
  }
  return r;
}

/* ── Alinear palabras escritas con las esperadas ── */
function azAlinear(U, E, modo) {
  const clave = modo === "ru" ? azClaveRu : modo === "translit" ? azClaveTr : azClaveEs;
  const n = E.length, m = U.length;
  const costo = function (e, u) {
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
  let i = n, j = m;
  while (i > 0 || j > 0) {
    const p = P[i][j];
    if (p === "p") { ops.push({ e: E[i - 1], u: U[j - 1] }); i--; j--; }
    else if (p === "f") { ops.push({ e: E[i - 1] }); i--; }
    else { ops.push({ u: U[j - 1] }); j--; }
  }
  return { costo: D[n][m], ops: ops.reverse() };
}

function azPosDe(t) {
  const a = azAnalizarPalabra(t);
  return a.length ? a[0].pos : "";
}

/* ── Función principal ── */
function azCorregir(respuesta, esperadas, opts) {
  opts = opts || {};
  const modo = opts.idioma || "ru";
  const lista = (Array.isArray(esperadas) ? esperadas : [esperadas]).filter(Boolean);
  const limpiar = function (toks) {
    return modo === "es" ? toks.filter(function (t) { return !AZ_ARTICULOS_ES.has(azClaveEs(t.t || t)); }) : toks;
  };
  /* «санкт петербург» → «санкт-петербург» si la esperada lleva guion */
  const clave0 = modo === "ru" ? azClaveRu : modo === "translit" ? azClaveTr : azClaveEs;
  const conGuion = {};
  lista.forEach(function (x) { azParseEsperada(x).forEach(function (t) { if (t.t.indexOf("-") > 0) conGuion[clave0(t.t.split("-")[0])] = true; }); });
  const crudos = azTokens(respuesta).reduce(function (acc, t) {
    const prev = acc[acc.length - 1];
    if (prev && prev.indexOf("-") < 0 && conGuion[clave0(prev)]) acc[acc.length - 1] = prev + "-" + t; else acc.push(t);
    return acc;
  }, []);
  const U = limpiar(crudos);
  const out = { resultado: AZ_R_MAL, esperada: lista[0] || "", palabras: [], notas: [], resumen: "" };
  if (!U.length) { out.resumen = "No escribiste nada."; return out; }

  /* elegir la esperada que mejor encaja */
  let mejor = null;
  lista.forEach(function (s) {
    const E = limpiar(azParseEsperada(s));
    const al = azAlinear(U, E, modo);
    if (!mejor || al.costo < mejor.al.costo) mejor = { s: s, E: E, al: al };
  });
  out.esperada = mejor.s;

  let peor = AZ_R_BIEN;
  const bajar = function (r) { if (r < peor) peor = r; };
  mejor.al.ops.forEach(function (o) {
    if (o.e && o.u) {
      const c = azClasificar(o.u, o.e.t, modo, !!opts.formaCasi);
      c.i = o.e.i;
      if (c.nota) out.notas.push(c.nota);
      if (c.estado === "casi") bajar(AZ_R_CASI);
      if (c.estado === "mal") bajar(AZ_R_MAL);
      out.palabras.push(c);
    } else if (o.e) {
      if (o.e.opc) return;
      const menor = modo === "ru" ? AZ_POS_MENOR.has(azPosDe(o.e.t)) : azClaveEs(o.e.t).length <= 2;
      out.palabras.push({ i: o.e.i, escrito: "", esperado: o.e.t, estado: "falta", grave: !menor, motivo: "Falta «" + o.e.t + "»." });
      bajar(menor ? AZ_R_CASI : AZ_R_MAL);
    } else {
      out.palabras.push({ escrito: o.u, esperado: "", estado: "sobra", motivo: "Sobra «" + o.u + "»." });
      bajar(AZ_R_CASI);
    }
  });

  /* ¿Mismas palabras en otro orden? Casi, con el orden esperado */
  if (peor < AZ_R_BIEN && lista.length) {
    const clave = modo === "ru" ? azClaveRu : modo === "translit" ? azClaveTr : azClaveEs;
    const bolsa = function (T) { return T.filter(function (t) { return !t.opc; }).map(function (t) { return clave(t.t || t); }).sort().join(" "); };
    const bu = bolsa(U);
    const ok = lista.some(function (s) { return bolsa(limpiar(azParseEsperada(s))) === bu; });
    if (ok) {
      peor = AZ_R_CASI;
      out.orden = true;
      out.palabras = U.map(function (t) { return { escrito: t, esperado: t, estado: "ok", motivo: "" }; });
      out.notas.push("Las palabras están bien, pero el orden esperado es: " + mejor.s);
    }
  }

  out.resultado = peor;

  /* Tu respuesta tal como la escribiste, con el estado de cada palabra */
  const cola = out.palabras.filter(function (p) { return p.estado !== "falta"; });
  let q = 0;
  out.tuya = crudos.map(function (t) {
    const p = cola[q];
    if (p && p.escrito === t) { q++; return { t: t, estado: p.estado }; }
    return { t: t, estado: "ok" };
  });

  /* Respuesta correcta en tramos, con las palabras corregidas marcadas */
  const marcar = {};
  out.palabras.forEach(function (p) { if (p.i != null && p.estado !== "ok") marcar[p.i] = true; });
  const txt = (mejor.s || "").normalize("NFC").replace(/\u0300/g, "").replace(/[()]/g, "");
  out.correcta = [];
  let pos = 0;
  azParseEsperada(mejor.s).forEach(function (t) {
    const k = txt.indexOf(t.t, pos);
    if (k < 0) return;
    if (k > pos) out.correcta.push({ t: txt.slice(pos, k) });
    out.correcta.push({ t: t.t, marca: !!marcar[t.i] });
    pos = k + t.t.length;
  });
  if (pos < txt.length) out.correcta.push({ t: txt.slice(pos) });
  const n = out.palabras.filter(function (p) { return p.estado !== "ok"; }).length;
  out.resumen = peor === AZ_R_BIEN ? "Todo correcto." :
    out.orden ? "Revisá el orden de las palabras." :
    peor === AZ_R_CASI ? "Revisá " + (n === 1 ? "1 detalle." : n + " detalles.") :
    (n === 1 ? "Hay 1 error." : "Hay " + n + " errores.");
  return out;
}

/* ── Corrección por comunicación (Unidad 11, 05/10/2026) ──────
   azSituacion(respuesta, sit) corrige por intención, no por una frase
   exacta. sit = {
     necesita: [{ es: "el agua", formas: ["во́ду", "стака́н воды́"], rx? }, …],
       cada elemento es algo que tiene que aparecer (alcanza una de sus
       formas; una forma puede tener varias palabras),
     orden: true,          // los elementos tienen que ir en ese orden
     (un elemento con consigna: "Hay que usar el pasado…" es un requisito de la
     consigna, no de la comprensión: si es lo único que falta, el resultado es
     «✗ Mal» con ese aviso, no «No se entiende» — Manu, 05/10/2026)
     (un elemento con pregunta: true se cumple con un «?» en la respuesta o con
     alguna de sus formas, p. ej. «а ты»: es la pregunta de vuelta de las
     conversaciones B1 de la Unidad 13 — 06/10/2026)
     modelos: ["Я хочу́ ко́фе и во́ду."]   // una forma natural de decirlo
   }
   Tres resultados:
     2 Bien          → aparece todo, en la forma correcta.
     1 Se entiende   → aparece todo, pero alguna palabra está en otra forma
                       (otro caso, otra persona) o tiene un error de tipeo:
                       comunica; se muestra la forma correcta.
     0 No se entiende → falta algo esencial (o el orden no coincide).
   Decisión de Manu (05/10/2026): «Se entiende» vale el punto entero, así
   que se guarda como Bien (r.resultado = 2) y se marca r.entiende = true. */
function azSituacion(respuesta, sit) {
  const crudos = azTokens(respuesta);
  const K = crudos.map(azClaveRu);
  const ids = function (t) { return azFormasDePalabra(t).map(function (x) { return x[0]; }).concat(
    typeof LEXICON_COMER !== "undefined" ? LEXICON_COMER.filter(function (e) { return azClaveRu(e.ru) === azClaveRu(t); }).map(function (e) { return e.id; }) : []); };
  const cerca = function (u, e) {
    if (u === e) return true;
    const a = ids(u), b = ids(e);
    if (a.some(function (x) { return b.indexOf(x) >= 0; })) return true;
    return e.length >= 4 && azDiff(u, e).dist <= (e.length >= 8 ? 2 : 1);
  };
  const usados = {};
  const out = { elementos: [], modelo: (sit.modelos || [])[0] || "", tuya: [] };
  (sit.necesita || []).forEach(function (el) {
    let hallado = null;
    /* pregunta de vuelta (06/10/2026, U13): vale el «?» o alguna de sus fórmulas */
    if (el.pregunta && /\?/.test(respuesta)) hallado = { estado: "ok", pos: Math.max(0, K.length - 1), n: 0 };
    /* 0. por patrón: rx sobre cada palabra (p. ej. cualquier verbo en pasado) */
    if (el.rx) { const R = new RegExp(el.rx); for (let i = 0; i < K.length; i++) if (!usados[i] && R.test(K[i])) { hallado = { estado: "ok", pos: i, n: 1 }; break; } }
    const todas = el.formas || [];
    const plenas = todas.filter(function (f) { return f.charAt(0) !== "~"; });
    const minimas = todas.filter(function (f) { return f.charAt(0) === "~"; }).map(function (f) { return f.slice(1); });
    const exacta = function (lista) {
      lista.some(function (f) {
        const F = azTokens(f).map(azClaveRu);
        for (let i = 0; i + F.length <= K.length; i++) {
          if (F.every(function (w, j) { return K[i + j] === w && !usados[i + j]; })) { hallado = { estado: "ok", pos: i, n: F.length }; return true; }
        }
        return false;
      });
    };
    /* otra forma de la misma palabra, o error de tipeo */
    const parecida = function (lista) {
      lista.some(function (f) {
        const F = azTokens(f).map(azClaveRu);
        for (let i = 0; i + F.length <= K.length; i++) {
          if (F.every(function (w, j) { return !usados[i + j] && cerca(K[i + j], w); })) {
            hallado = { estado: "forma", pos: i, n: F.length, escrito: crudos.slice(i, i + F.length).join(" "), mejor: f };
            return true;
          }
        }
        return false;
      });
    };
    /* Primero las frases completas; las mínimas («~гости́ница») solo si no hay nada mejor */
    if (!hallado) exacta(plenas);
    if (!hallado) parecida(plenas);
    if (!hallado) exacta(minimas);
    if (!hallado) parecida(minimas);
    if (hallado) for (let j = 0; j < hallado.n; j++) usados[hallado.pos + j] = hallado.estado;
    out.elementos.push(Object.assign({ es: el.es, consigna: el.consigna, ver: ((el.formas || [])[0] || "").replace(/^~/, "") }, hallado || { estado: "falta" }));
  });
  let nivel = out.elementos.some(function (e) { return e.estado === "falta"; }) ? 0 :
    out.elementos.some(function (e) { return e.estado === "forma"; }) ? 1 : 2;
  if (nivel > 0 && sit.orden) {
    const pos = out.elementos.map(function (e) { return e.pos; });
    if (pos.some(function (p, i) { return i > 0 && p <= pos[i - 1]; })) { nivel = 0; out.desorden = true; }
  }
  if (!crudos.length) nivel = 0;
  /* Lo que falta es un requisito de la consigna (p. ej. el pasado): se entiende, pero no responde → Mal */
  const deConsigna = out.elementos.filter(function (e) { return e.estado === "falta" && e.consigna; });
  /* …y solo si hay algo que se entiende: al menos un verbo (en otro tiempo) */
  const conVerbo = crudos.some(function (w) { return azAnalizarPalabra(w).some(function (a) { return a.pos === "verbo"; }); });
  out.consigna = nivel === 0 && conVerbo && !out.desorden && deConsigna.length > 0 && deConsigna.length === out.elementos.filter(function (e) { return e.estado === "falta"; }).length;
  out.nivel = nivel;
  out.entiende = nivel === 1;
  out.resultado = nivel === 0 ? AZ_R_MAL : AZ_R_BIEN;
  out.tuya = crudos.map(function (t, i) { return { t: t, estado: usados[i] === "forma" ? "forma" : "ok" }; });
  const faltan = out.elementos.filter(function (e) { return e.estado === "falta"; });
  out.resumen = nivel === 2 ? "Se entiende y está correcto." :
    nivel === 1 ? "Se entiende. Hay un detalle para mejorar." :
    !crudos.length ? "No escribiste nada." :
    out.desorden ? "Está todo, pero en otro orden: así no se entiende el camino." :
    out.consigna ? deConsigna.map(function (e) { return e.consigna; }).join(" ") :
    "Falta " + faltan.map(function (e) { return e.es; }).join(", ") + ".";
  return out;
}
window.azSituacion = azSituacion;

window.azCorregir = azCorregir;
window.azAnalizarPalabra = azAnalizarPalabra;
window.azTokens = azTokens;
window.azDiff = azDiff;

/* ── Vista de la corrección (si la página usa Preact) ──────────
   AzCorreccion({ r, dark })  r = resultado de azCorregir
   Muestra: resultado; tu respuesta tal como la escribiste, con las
   palabras equivocadas en color y subrayadas (rojo = Mal o sobra,
   naranja = Casi); la respuesta correcta con las palabras corregidas o que
   faltaban en verde; y la explicación de cada error. */
(function () {
  if (typeof React === "undefined") return;
  const h = React.createElement;
  const COL = { 2: "#4CAF82", 1: "#E2884A", 0: "#B5605C" };
  const TXT = { 2: "✓ Bien", 1: "≈ Casi", 0: "✗ Mal" };

  function Estilos({ c }) {
    return h("style", null, `
      .az-cr{margin-top:12px;background:${c.bg2};border:1px solid ${c.border};border-radius:12px;padding:12px 14px;animation:azCrIn .18s ease both;}
      @keyframes azCrIn{from{opacity:0;transform:translateY(4px);}to{opacity:1;transform:none;}}
      @media (prefers-reduced-motion:reduce){.az-cr{animation:none;}}
      .az-cr-top{display:flex;align-items:center;gap:10px;flex-wrap:wrap;}
      .az-cr-res{font-size:13px;font-weight:800;border-radius:8px;padding:3px 10px;}
      .az-cr-sum{font-size:13.5px;color:${c.textSub};}
      .az-cr-lbl{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${c.gold};margin:12px 0 5px;}
      .az-cr-linea{font-size:17px;font-weight:600;color:${c.text};line-height:1.6;word-break:break-word;}
      .az-cr-w{display:inline-block;margin-right:6px;}
      .az-cr-w.casi{color:#E2884A;text-decoration:underline 2px #E2884A;text-underline-offset:4px;}
      .az-cr-w.mal,.az-cr-w.sobra{color:#D9776F;text-decoration:underline 2px #B5605C;text-underline-offset:4px;}
      .az-cr-ok{font-size:17px;font-weight:700;color:${c.gold};line-height:1.5;}
      .az-cr-fix{color:#4CAF82;}
      .az-cr-cu{margin-top:12px;background:none;border:none;padding:4px 0;color:${c.gold};font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;}
      .az-cr-exp{font-size:13.5px;line-height:1.5;color:${c.textSub};margin-top:6px;padding-left:10px;border-left:2px solid ${c.border};}
    `);
  }

  function Palabra({ p }) {
    return h("span", { className: "az-cr-w " + p.estado }, p.escrito);
  }

  function AzCorreccion({ r, dark }) {
    if (!r) return null;
    const c = azColors(dark !== false);
    const errores = r.palabras.filter(function (p) { return p.estado !== "ok" && p.motivo; });
    return h("div", { className: "az-cr", role: "status" },
      h(Estilos, { c: c }),
      h("div", { className: "az-cr-top" },
        h("span", { className: "az-cr-res", style: { color: COL[r.resultado], background: COL[r.resultado] + "22", border: "1px solid " + COL[r.resultado] } }, TXT[r.resultado]),
        h("span", { className: "az-cr-sum" }, r.resumen)),
      r.resultado < 2 && (r.tuya || []).length > 0 && h(React.Fragment, null,
        h("div", { className: "az-cr-lbl" }, "Tu respuesta"),
        h("div", { className: "az-cr-linea" }, (r.tuya || []).map(function (p, i) { return h(Palabra, { key: i, p: { escrito: p.t, estado: p.estado } }); }))),
      r.resultado < 2 && h(React.Fragment, null,
        h("div", { className: "az-cr-lbl" }, "Respuesta correcta"),
        h("div", { className: "az-cr-ok" }, (r.correcta || [{ t: r.esperada.replace(/[()]/g, "") }]).map(function (s, i) {
          return s.marca ? h("span", { key: i, className: "az-cr-fix" }, s.t) : s.t;
        }))),
      errores.map(function (p, i) { return h("div", { key: i, className: "az-cr-exp" }, p.motivo); }),
      r.notas.map(function (n, i) { return h("div", { key: "n" + i, className: "az-cr-exp" }, n); }),
      r.resultado < 2 && typeof azGuardarEnCuaderno === "function" && h("button", { className: "az-cr-cu", onClick: function () {
        const tuya = (r.tuya || []).map(function (p) { return p.t; }).join(" ");
        const bien = r.esperada.replace(/[()]/g, "");
        const porque = errores.map(function (p) { return p.motivo; }).concat(r.notas).join(" ").replace(/\*\*/g, "");
        azGuardarEnCuaderno("Escribí: " + tuya + "\nCorrecto: " + bien + (porque ? "\n" + porque : ""));
      } }, "＋ Guardar este error en el cuaderno"));
  }
  window.AzCorreccion = AzCorreccion;

  /* Resultado de azSituacion: ✓ Bien · 💬 Se entiende · ✗ No se entiende */
  function AzSituacionRes({ r, dark, sinModelo }) {
    if (!r) return null;
    const c = azColors(dark !== false);
    const col = r.nivel === 2 ? COL[2] : r.nivel === 1 ? c.gold : COL[0];
    const txt = r.nivel === 2 ? "✓ Bien" : r.nivel === 1 ? "💬 Se entiende" : r.consigna ? "✗ Mal" : "✗ No se entiende";
    const formas = r.elementos.filter(function (e) { return e.estado === "forma"; });
    return h("div", { className: "az-cr", role: "status" },
      h(Estilos, { c: c }),
      h("div", { className: "az-cr-top" },
        h("span", { className: "az-cr-res", style: { color: col, background: col + "22", border: "1px solid " + col } }, txt),
        h("span", { className: "az-cr-sum" }, r.resumen)),
      r.nivel === 1 && h(React.Fragment, null,
        h("div", { className: "az-cr-lbl" }, "Tu respuesta"),
        h("div", { className: "az-cr-linea", lang: "ru" }, r.tuya.map(function (p, i) {
          return h("span", { key: i, className: "az-cr-w", style: p.estado === "forma" ? { color: c.gold, textDecoration: "underline 2px " + c.gold, textUnderlineOffset: 4 } : null }, p.t); })),
        formas.map(function (e, i) { return h("div", { key: i, className: "az-cr-exp" }, azFmt("«" + e.escrito + "» → mejor **" + e.mejor + "**")); })),
      !sinModelo && r.modelo && r.nivel < 2 && h(React.Fragment, null,
        h("div", { className: "az-cr-lbl" }, r.nivel === 1 ? "Así queda perfecto" : "Una forma de decirlo"),
        h("div", { className: "az-cr-ok", lang: "ru" }, r.modelo)),
      !sinModelo && r.modelo && r.nivel === 2 && h("div", { className: "az-cr-exp", lang: "ru", style: { borderLeftColor: COL[2] } }, "Otra forma: " + r.modelo),
      r.nivel < 2 && typeof azGuardarEnCuaderno === "function" && h("button", { className: "az-cr-cu", onClick: function () {
        azGuardarEnCuaderno("Escribí: " + r.tuya.map(function (p) { return p.t; }).join(" ") + "\nMejor: " + r.modelo +
          (formas.length ? "\n" + formas.map(function (e) { return e.escrito + " → " + e.mejor; }).join("; ") : ""));
      } }, "＋ Guardar en el cuaderno"));
  }
  window.AzSituacionRes = AzSituacionRes;
})();
