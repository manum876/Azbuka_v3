/* ============================================================
   TILDE-ES.JS — Abecé: el laboratorio de la tilde (27/10/2026).
   ------------------------------------------------------------
   La misma lógica que arma el campo «acento» del léxico español
   (herramientas/abece/generador-fonetica-es.py), pasada a JS:
     · tdSilabas(w)  → sílabas, con los dígrafos juntos (ch, ll, rr,
       qu / gu ante e, i), hiatos (dos fuertes; í, ú con tilde) y los
       grupos que no se separan (pr, bl, tr…; tl sí se separa);
     · tdTonica(w, sil) → índice de la sílaba tónica: la de la tilde o,
       si no hay, la regla (vocal, n, s → penúltima; si no, última);
     · tdAnalizar(w) → todo lo que muestra el laboratorio: sílabas,
       tónica, tipo (aguda, llana, esdrújula, sobresdrújula), si lleva
       tilde y la explicación en ruso (borrador para Iván).
   Lo usa alfabeto.html en Abecé. Comprobado contra las 5.367 entradas
   del léxico (herramientas/abece/verificar-tilde-es.js).
   ============================================================ */
(function () {
  const V = "aeiouáéíóúü";
  const INSEP = ["pr", "pl", "br", "bl", "fr", "fl", "tr", "dr", "cr", "cl", "gr", "gl", "kr", "kl"];
  const CON_TILDE = "áéíóú";
  const esV = c => V.indexOf(c) >= 0;

  function letras(w) {
    const out = [];
    for (let i = 0; i < w.length;) {
      const two = w.substr(i, 2);
      if (two === "ch" || two === "ll" || two === "rr") { out.push(two); i += 2; continue; }
      if ((two === "qu" || two === "gu") && i + 2 < w.length && "eiéí".indexOf(w[i + 2]) >= 0) { out.push(two); i += 2; continue; }
      out.push(w[i]); i++;
    }
    return out;
  }
  /* y final tras consonante = vocal i (whisky, sexy) */
  const yVocal = w => w.length > 1 && w[w.length - 1] === "y" && !esV(w[w.length - 2]);

  function tdSilabas(w) {
    const L = letras(w);
    const yv = yVocal(w) ? L.length - 1 : -1;
    const esv = (u, i) => esV(u) || i === yv;
    const nuc = [];
    for (let i = 0; i < L.length;) {
      if (esv(L[i], i)) {
        let j = i; const grupo = [i];
        while (j + 1 < L.length && esv(L[j + 1], j + 1)) { j++; grupo.push(j); }
        let seg = [grupo[0]]; const segs = [];
        for (const k of grupo.slice(1)) {
          const a = L[seg[seg.length - 1]], b = L[k];
          let hiato;
          if ("aeoáéó".indexOf(a) >= 0 && "aeoáéó".indexOf(b) >= 0) hiato = true;
          else if (("íú".indexOf(a) >= 0 && esV(b)) || ("íú".indexOf(b) >= 0 && esV(a))) hiato = true;
          else hiato = false;
          if (hiato) { segs.push(seg); seg = [k]; } else seg.push(k);
        }
        segs.push(seg);
        segs.forEach(s => nuc.push([s[0], s[s.length - 1]]));
        i = j + 1;
      } else i++;
    }
    if (!nuc.length) return [w];
    const cortes = [0];
    for (let n = 0; n + 1 < nuc.length; n++) {
      const b1 = nuc[n][1], a2 = nuc[n + 1][0];
      const cons = []; for (let k = b1 + 1; k < a2; k++) cons.push(k);
      let c;
      if (cons.length === 0) c = a2;
      else if (cons.length === 1) c = cons[0];
      else {
        const last2 = cons.slice(-2).map(k => L[k]).join("");
        c = INSEP.indexOf(last2) >= 0 ? cons[cons.length - 2] : cons[cons.length - 1];
      }
      cortes.push(c);
    }
    cortes.push(L.length);
    const out = [];
    for (let k = 0; k + 1 < cortes.length; k++) out.push(L.slice(cortes[k], cortes[k + 1]).join(""));
    return out;
  }

  function tdTonica(w, sil) {
    for (let k = 0; k < sil.length; k++) if ([...sil[k]].some(c => CON_TILDE.indexOf(c) >= 0)) return k;
    if (sil.length === 1) return 0;
    return ("aeiouns".indexOf(w[w.length - 1]) >= 0 || yVocal(w)) ? sil.length - 2 : sil.length - 1;
  }

  /* Acento en el formato del léxico: «CA·sa». (Para el verificador.) */
  const ACENTO = { hockey: "HOC·key" };
  function tdAcento(w) {
    if (ACENTO[w]) return ACENTO[w];
    const sil = tdSilabas(w);
    if (sil.length === 1) return sil.join("·");
    const t = tdTonica(w, sil);
    return sil.map((s, k) => k === t ? s.toUpperCase() : s).join("·");
  }

  /* Monosílabos con tilde diacrítica: [con tilde, sin tilde] en ruso */
  const DIACRITICA = {
    "tú": ["tú — «ты»", "tu — «твой»"], "tu": ["tú — «ты»", "tu — «твой»"],
    "él": ["él — «он»", "el — артикль"], "el": ["él — «он»", "el — артикль"],
    "mí": ["mí — «мне, меня» (после предлога)", "mi — «мой»"], "mi": ["mí — «мне, меня» (после предлога)", "mi — «мой»"],
    "sí": ["sí — «да»; «себя»", "si — «если»"], "si": ["sí — «да»; «себя»", "si — «если»"],
    "té": ["té — «чай»", "te — «тебя, тебе»"], "te": ["té — «чай»", "te — «тебя, тебе»"],
    "dé": ["dé — «дай» (от dar)", "de — предлог «из, от»"], "de": ["dé — «дай» (от dar)", "de — предлог «из, от»"],
    "sé": ["sé — «я знаю»; «будь»", "se — местоимение"], "se": ["sé — «я знаю»; «будь»", "se — местоимение"],
    "más": ["más — «больше, ещё»", "mas — «но» (книжное)"], "mas": ["más — «больше, ещё»", "mas — «но» (книжное)"]
  };
  /* Вопросительные слова: со знаком в вопросе, без — в остальных случаях */
  const PREGUNTA = { "qué": "que", "quién": "quien", "cuál": "cual", "cómo": "como", "dónde": "donde", "cuándo": "cuando", "cuánto": "cuanto", "adónde": "adonde" };
  const PREGUNTA_SIN = {}; Object.keys(PREGUNTA).forEach(k => { PREGUNTA_SIN[PREGUNTA[k]] = k; });

  const TIPO = [
    ["aguda", "ударение на последнем слоге"],
    ["llana", "ударение на предпоследнем слоге"],
    ["esdrújula", "ударение на третьем слоге от конца"],
    ["sobresdrújula", "ударение на четвёртом слоге от конца"]
  ];

  /* Todo lo que muestra el laboratorio para una palabra */
  function tdAnalizar(entrada) {
    const w = String(entrada || "").trim().toLowerCase().replace(/[^a-záéíóúüñ]/g, "");
    if (!w || !/[aeiouáéíóúüy]/.test(w)) return null;
    const sil = tdSilabas(w);
    const t = tdTonica(w, sil);
    const desde = sil.length - 1 - t;
    const tipo = sil.length === 1 ? null : TIPO[Math.min(desde, 3)];
    const tilde = [...w].some(c => CON_TILDE.indexOf(c) >= 0);
    const fin = w[w.length - 1];
    const finVNS = "aeiouns".indexOf(fin) >= 0 || yVocal(w);
    const finTxt = "aeiou".indexOf(fin) >= 0 ? "на гласную" : fin === "n" ? "на -n" : fin === "s" ? "на -s" : yVocal(w) ? "на -y (звучит как и)" : "на согласную -" + fin;
    /* hiato: í / ú tónica junto a a, e, o */
    const sTon = sil[t] || "";
    const hiato = /[íú]/.test(sTon) && (sil.length > 1) && (
      /[aeoáéó]/.test((sil[t - 1] || "").slice(-1)) || /^[aeoáéóh]/.test(sil[t + 1] || "") || /[aeo][íú]|[íú][aeo]/.test(w));
    let explica = [], regla = null;
    if (sil.length === 1) {
      if (DIACRITICA[w]) {
        regla = "diacritica";
        explica.push("Односложные слова обычно пишутся без знака ударения. Но есть пары, где знак различает два слова:");
        explica.push(DIACRITICA[w][0] + "; " + DIACRITICA[w][1] + ".");
      } else if (PREGUNTA[w] || PREGUNTA_SIN[w]) {
        regla = "pregunta";
        explica.push("В вопросах и восклицаниях вопросительные слова пишутся со знаком: ¿" + (PREGUNTA[w] ? w : PREGUNTA_SIN[w]) + "…? Без вопроса — без знака: " + (PREGUNTA[w] || w) + ".");
      } else if (tilde) {
        regla = "mono-mal";
        explica.push("Односложные слова пишутся без знака ударения (кроме пар вроде tú / tu, él / el). Проверь написание.");
      } else {
        regla = "mono";
        explica.push("Один слог — ударение на нём, и знак не нужен: односложные слова пишутся без знака (кроме пар вроде tú / tu, él / el).");
      }
    } else if (hiato && tilde) {
      regla = "hiato";
      explica.push("Ударная **í** или **ú** рядом с **a, e, o** — знак ставится всегда, даже против общего правила. Он показывает, что гласные звучат в разных слогах: " + sil.join("-") + ".");
    } else if (desde >= 2) {
      regla = "esdrujula";
      explica.push("Ударение на третьем слоге от конца (или дальше) — знак ставится **всегда**.");
    } else if (desde === 1) {
      if (tilde) { regla = "llana-si"; explica.push("Ударение на предпоследнем слоге, а слово кончается " + finTxt + " — поэтому знак **нужен**. (Если бы слово кончалось на гласную, -n или -s, знак был бы не нужен.)"); }
      else { regla = "llana-no"; explica.push("Ударение на предпоследнем слоге, слово кончается " + finTxt + " — это обычное ударение, знак **не нужен**."); }
    } else {
      if (tilde) { regla = "aguda-si"; explica.push("Ударение на последнем слоге, а слово кончается " + finTxt + " — поэтому знак **нужен**."); }
      else { regla = "aguda-no"; explica.push("Ударение на последнем слоге, слово кончается " + finTxt + " — это обычное ударение, знак **не нужен**."); }
    }
    if (!tilde && sil.length > 1) explica.push("Знака нет — значит, ударение стоит по правилу: если слово кончается на гласную, -n или -s, ударный слог — предпоследний; если на другую согласную — последний.");
    if (sil.length > 1 && (PREGUNTA[w] || PREGUNTA_SIN[w])) explica.push("В вопросах пишется со знаком: ¿" + (PREGUNTA[w] ? w : PREGUNTA_SIN[w]) + "…? Без вопроса — " + (PREGUNTA[w] || w) + ".");
    return { palabra: w, silabas: sil, tonica: t, tipo, tilde, regla, explica };
  }

  window.tdSilabas = tdSilabas;
  window.tdTonica = tdTonica;
  window.tdAcento = tdAcento;
  window.tdAnalizar = tdAnalizar;
})();
