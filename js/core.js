/* ============================================================
   CORE.JS — Shell compartido (versión mínima)
   Contiene solo lo que el shell (drawer + header + bottom nav)
   necesita para funcionar: catálogo de unidades/módulos para
   pintar el drawer, y el storage de tema (dark/light).

   Import en el HTML: <script src="core.js"></script>
   ============================================================ */

/* ── CATÁLOGO GLOBAL ─────────────────────────────────────────
   22/10/2026: el catálogo (unidades, módulos, marca, textos del menú) vive
   en data/data-catalogo.js (AZ_CATALOGO), una entrada por dirección. Acá
   solo se elige la dirección activa y se exponen AZ_UNITS y AZ_MODULES
   como siempre, así ninguna página cambia.
   Respaldo: si una página vieja (guardada sin conexión) no cargó el
   catálogo, se lee acá mismo de forma síncrona (lo sirve el service worker). */
if (typeof AZ_CATALOGO === "undefined") {
  try {
    const x = new XMLHttpRequest();
    x.open("GET", "data/data-catalogo.js", false); x.send(null);
    if (x.status === 200 || x.status === 0) (0, eval)(x.responseText);
  } catch (e) {}
}
/* Dirección activa. Abecé está bloqueada (abierta: false) hasta que esté
   terminada: hasta entonces solo se ve en modo prueba, que se prende en
   Ajustes («Abecé en construcción») y solo vale para admin y revisor
   (az_direccion = "abece", az_prueba = "si" y az_cuenta_rol, que guarda
   js/cuenta.js y no viaja a la nube). 22/10/2026. */
function azDireccion() {
  const cat = typeof AZ_CATALOGO !== "undefined" ? AZ_CATALOGO : null;
  if (!cat) return { id: "azbuka", marca: {}, unidades: [], modulos: [], textos: {} };
  let id = "azbuka", prueba = false;
  try {
    id = JSON.parse(localStorage.getItem("az_direccion") || '"azbuka"');
    const rol = localStorage.getItem("az_cuenta_rol") || "";
    prueba = JSON.parse(localStorage.getItem("az_prueba") || '""') === "si" && (rol === "admin" || rol === "revisor");
  } catch (e) {}
  const d = cat[id];
  if (!d || !(d.abierta || prueba)) return cat.azbuka;
  /* Mientras se construye, lo que la dirección todavía no tiene se toma de azbuka
     (unidades, módulos, índice), así ninguna página queda sin menú. */
  const base = cat.azbuka;
  return Object.assign({}, d, {
    unidades: d.unidades && d.unidades.length ? d.unidades : base.unidades,
    modulos: d.modulos && d.modulos.length ? d.modulos : base.modulos,
    indice: d.indice || base.indice,
  });
}
const AZ_DIRECCION = azDireccion();
/* Un texto del shell en el idioma de la dirección; si falta, el de azbuka. */
function azTexto(k) {
  const t = AZ_DIRECCION.textos || {}, base = (typeof AZ_CATALOGO !== "undefined" && AZ_CATALOGO.azbuka.textos) || {};
  return t[k] != null ? t[k] : base[k] != null ? base[k] : k;
}
const AZ_UNITS = AZ_DIRECCION.unidades || [];
const AZ_MODULES = AZ_DIRECCION.modulos || [];

/* Colores de los íconos, en el orden del arcoíris (01/10/2026): Azbuka
   rojo, Diccionario naranja, Alfabeto amarillo, Diálogos verde, Verbos
   celeste, Casos azul, Cuaderno violeta. Sobre el amarillo, el texto va
   oscuro. Todas las páginas los toman de acá con azModuloColor.
   20/10/2026 (Manu): con Lecturas, el arcoíris se corre para que el rosa quede al
   final. Orden y colores: Azbuka rojo · Diccionario naranja · Alfabeto amarillo ·
   Diálogos lima · Lecturas verde · Masha celeste (21/10/2026) ·
   Verbos azul · Casos violeta · Cuaderno rosa. Sobre el amarillo y el lima, el texto va oscuro. */
const AZ_ICON_COLORS = { red: "#B5605C", orange: "#C48254", yellow: "#C9B369", lime: "#9BAA5C", green: "#5C9B78", cyan: "#5FA3B8", blue: "#5D7DA6", purple: "#8871A8", pink: "#B0688E" };
function azModuloColor(m) {
  const k = m && m.icon;
  return { bg: AZ_ICON_COLORS[k] || "#C9A84C", fg: k === "yellow" || k === "lime" ? "#1A1812" : "#fff" };
}

/* ── LÉXICO ──────────────────────────────────────────────────
   Base real: data-lexicon.js expone LEXICON_COMER — un ARRAY de
   ~4.931 palabras (Comer 5000 + FreeDict), no un objeto LEXICON
   como en el repo viejo. Cada entrada:
     { id: "CMR-00003", ru, posNormalized, translit, ipa,
       senses: [{ es, definitionEs, source }, ...],
       gender?, introducedIn: [], appearsIn: [], ... }
   La traducción NO es un campo plano "es" — vive adentro de
   senses[], porque una palabra puede tener más de un sentido.
   Ya trae lexComerById(id) / lexComerByRu(ru); acá solo se agrega
   la búsqueda por substring en ru Y en los es de cada sense.
   Segundo parámetro opcional "pos": filtra por posNormalized
   ("verbo", "sustantivo"…) ANTES de cortar a 40 resultados — así un
   módulo busca solo en su categoría: azSearchLexicon(q, "verbo").
   También acepta una lista: azSearchLexicon(q, ["sustantivo", "adjetivo"])
   (Casos busca en todas las categorías que se declinan).
   La búsqueda trata е y ё como iguales. Cada resultado trae "acento"
   (la palabra con su marca de acento) para mostrarla en pantalla.

     <script src="data-lexicon.js"></script>
     <script src="core.js"></script>

   No hace falta ningún otro data-*.js — Azbuka_v3 ya no reparte
   el vocabulario por módulo, todo vive acá. Para encontrar formas
   declinadas o conjugadas (тебе́, говорю́) se usan además
   data-casos.js y data-verbos.js, que se cargan solos si la página
   no los tiene (ver «FORMAS DECLINADAS Y CONJUGADAS» más abajo). */
/* е y ё cuentan como la misma letra al buscar: así «еще» encuentra
   «ещё». También ignora la marca de acento si alguien la pega. */
function azNormRu(s) {
  return (s || "").replace(/ё/g, "е").replace(/Ё/g, "Е").replace(/\u0301/g, "");
}
/* 26/10/2026: traducción para las unidades. En el léxico, la palabra neutra va
   primero y las regionales quedan como sinónimo con su marca de zona
   («chaqueta, campera (Río de la Plata)»). En las unidades (burbuja, vocabulario,
   tarjetas, corrector) se muestran sin esas regionales; la ficha y el
   Diccionario siguen mostrando todo. Si no queda nada, devuelve el original. */
const AZ_RX_ZONA = /\((?:Río de la Plata|América|Sudamérica|Argentina|Buenos Aires|España)\)/;
function azEsNeutro(es) {
  const txt = es || "";
  if (!AZ_RX_ZONA.test(txt)) return txt;
  const grupos = txt.split(/\s*;\s*/).map(g => g.split(/\s*,\s*/).filter(x => !AZ_RX_ZONA.test(x)).join(", ")).filter(Boolean);
  return grupos.length ? grupos.join("; ") : txt;
}
function azSearchLexicon(query, pos) {
  if (typeof LEXICON_COMER === "undefined") return [];
  const q = azNormRu((query || "").trim().toLowerCase());
  if (!q) return [];
  const posOk = Array.isArray(pos) ? (p => pos.includes(p)) : (p => !pos || p === pos);
  const base = LEXICON_COMER
    .filter(e =>
      posOk(e.posNormalized) && (
        azNormRu(e.ru.toLowerCase()).includes(q) ||
        (e.senses || []).some(s => s.es.toLowerCase().includes(q))
      )
    )
    .slice(0, 40)
    .map(e => ({
      id: e.id,
      ru: e.ru,
      acento: e.acento || e.ru,
      es: (e.senses || []).map(s => s.es).join(" · "),
      pos: e.posNormalized,
      gender: e.gender || null,
      href: "ficha.html?id=" + e.id
    }));
  /* Formas declinadas y conjugadas (тебе́ → ты, говорю́ → говори́ть).
     Van primero porque son coincidencia exacta. Se saltean las
     palabras que ya aparecen por su forma de diccionario. */
  const ya = new Set(base.map(r => r.id));
  const formas = azBuscarForma(q)
    .filter(f => !ya.has(f.id) && posOk(f.lex.posNormalized))
    .map(f => ({
      id: f.id,
      ru: f.lex.ru,
      acento: f.forma,
      es: f.etiquetas.join(" / ") + " de " + (f.lex.acento || f.lex.ru) + " · " + (f.lex.senses || []).map(s => s.es).join(" · "),
      pos: f.lex.posNormalized,
      gender: f.lex.gender || null,
      forma: f.forma,
      etiquetas: f.etiquetas,
      href: f.modulo + "?id=" + f.id + "&f=" + encodeURIComponent(f.forma)
    }));
  return formas.concat(base);
}

/* ── FORMAS DECLINADAS Y CONJUGADAS ──────────────────────────
   El buscador también encuentra formas: тебе́ (de ты), кни́ги
   (de кни́га), говорю́ (de говори́ть). No hay ningún archivo índice:
   el índice se arma en el momento leyendo data-casos.js (CASOS) y
   data-verbos.js (VERBOS), que siguen siendo la única fuente. Así,
   al agregar una palabra nueva a esos archivos, el buscador la
   encuentra sola.
   Si la página no cargó esos archivos, azBuscarForma los carga la
   primera vez que alguien busca algo y avisa con el evento
   "az-formas" para que la página vuelva a mostrar los resultados.
   Cada resultado de forma lleva al módulo (casos.html o verbos.html)
   con ?id=…&f=forma, y la ficha resalta esa forma en la tabla. */
const AZ_CASOS_ETIQ = ["nominativo", "genitivo", "dativo", "acusativo", "instrumental", "preposicional"];
const AZ_GEN_ETIQ = { m: "masculino", f: "femenino", n: "neutro", pl: "plural" };
const AZ_PERS_ETIQ = ["я", "ты", "он/она", "мы", "вы", "они"];
let AZ_FORMAS = null, AZ_FORMAS_SRC = "", AZ_FORMAS_CARGANDO = false;

function azFormaClave(s) {
  return azNormRu((s || "").toLowerCase()).trim();
}

/* Todas las formas de una palabra con su descripción: [[forma, etiqueta], …] */
function azFormasDe(id) {
  const out = [];
  const add = (f, et) => { if (Array.isArray(f)) { if (f[0]) out.push([f[0], et + " (inanimado)"]); if (f[1]) out.push([f[1], et + " (animado)"]); } else if (f) out.push([f, et]); };
  const d = typeof CASOS !== "undefined" ? CASOS[id] : null;
  if (d) {
    const fila = (row, suf) => (row || []).forEach((f, i) => add(f, AZ_CASOS_ETIQ[i] + suf));
    if (d.tipo === "sustantivo") { fila(d.sg, d.pl ? " singular" : ""); fila(d.pl, d.sg ? " plural" : ""); }
    if (d.tipo === "adjetivo") ["m", "f", "n", "pl"].forEach(g => fila(d[g], " " + AZ_GEN_ETIQ[g]));
    if (d.tipo === "personal" || d.tipo === "serie") fila(d.formas, "");
    if (d.n) (d.n || []).forEach((f, i) => add(f, AZ_CASOS_ETIQ[i] + " tras preposición"));
    if (d.alt) Object.keys(d.alt).forEach(k => add(d.alt[k], "instrumental"));
    if (d.altN) Object.keys(d.altN).forEach(k => add(d.altN[k], "instrumental tras preposición"));
    if (d.corta) ["m", "f", "n", "pl"].forEach(g => add(d.corta[g], "forma corta " + AZ_GEN_ETIQ[g]));
    if (d.comp) out.push([d.comp, "comparativo"]);
    if (d.loc2) out.push([d.loc2, "locativo"], [d.loc2.split(" ").pop(), "locativo"]);
    if (d.partitivo) out.push([d.partitivo, "partitivo"]);
    if (d.conteo) out.push([d.conteo, "forma de conteo (con 2, 3 y 4)"]);
  }
  const v = typeof VERBOS !== "undefined" ? VERBOS[id] : null;
  if (v) {
    (v.presente || []).forEach((f, i) => add(f, "presente (" + AZ_PERS_ETIQ[i] + ")"));
    (v.futuro || []).forEach((f, i) => add(f, "futuro (" + AZ_PERS_ETIQ[i] + ")"));
    if (v.pasado) ["m", "f", "n", "pl"].forEach(g => add(v.pasado[g], "pasado " + AZ_GEN_ETIQ[g]));
    if (v.imperativo) { add(v.imperativo.ty, "imperativo (ты)"); add(v.imperativo.vy, "imperativo (вы)"); }
  }
  return out;
}

function azIndiceFormas() {
  const src = (typeof CASOS !== "undefined" ? "c" : "") + (typeof VERBOS !== "undefined" ? "v" : "");
  if (AZ_FORMAS && AZ_FORMAS_SRC === src) return AZ_FORMAS;
  const idx = new Map();
  const ids = [].concat(typeof CASOS !== "undefined" ? Object.keys(CASOS) : [], typeof VERBOS !== "undefined" ? Object.keys(VERBOS) : []);
  ids.forEach(id => azFormasDe(id).forEach(([f, et]) => {
    const k = azFormaClave(f);
    if (!idx.has(k)) idx.set(k, []);
    idx.get(k).push([id, f, et]);
  }));
  idx.claves = [...idx.keys()].sort();   /* ordenadas: para buscar por el principio */
  AZ_FORMAS = idx; AZ_FORMAS_SRC = src;
  return idx;
}

/* Carga data-casos.js y data-verbos.js si la página no los tiene. */
function azCargarFormas() {
  if (AZ_FORMAS_CARGANDO) return;
  const faltan = [];
  if (typeof CASOS === "undefined") faltan.push("data/data-casos.js");
  if (typeof VERBOS === "undefined") faltan.push("data/data-verbos.js");
  if (!faltan.length) return;
  AZ_FORMAS_CARGANDO = true;
  let pendientes = faltan.length;
  faltan.forEach(src => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = s.onerror = () => {
      if (--pendientes === 0) { AZ_FORMAS_CARGANDO = false; window.dispatchEvent(new Event("az-formas")); }
    };
    document.head.appendChild(s);
  });
}

/* Busca formas que coincidan con lo escrito o que empiecen así
   (sin importar acento ni е/ё): «скаж» ya encuentra скажу́, скажет…
   Primero van las coincidencias exactas; después, las que empiezan
   igual. De cada palabra se muestra la forma más corta que coincide.
   Devuelve [{ id, lex, forma, etiquetas: [...], modulo, exacta }] */
function azBuscarForma(q) {
  const k = azFormaClave(q);
  if (!k || typeof lexComerById !== "function") return [];
  azCargarFormas();
  const idx = azIndiceFormas();
  const claves = idx.claves || [];
  /* primera clave >= k (búsqueda binaria) y de ahí en adelante mientras empiecen con k */
  let lo = 0, hi = claves.length;
  while (lo < hi) { const m = (lo + hi) >> 1; if (claves[m] < k) lo = m + 1; else hi = m; }
  const porId = new Map();
  for (let i = lo; i < claves.length && claves[i].startsWith(k); i++) {
    const clave = claves[i], exacta = clave === k;
    idx.get(clave).forEach(([id, f, et]) => {
      const r = porId.get(id);
      /* se queda con la exacta o, si no hay, con la forma más corta */
      if (!r || (exacta && !r.exacta) || (!r.exacta && !exacta && clave.length < r.largo)) {
        porId.set(id, { id, forma: f, etiquetas: [et], exacta, largo: clave.length });
      } else if (r.forma === f && r.etiquetas.indexOf(et) < 0) {
        r.etiquetas.push(et);
      }
    });
    if (porId.size > 60) break;
  }
  return [...porId.values()]
    .sort((a, b) => (b.exacta - a.exacta) || (a.largo - b.largo))
    .slice(0, 20)
    .map(r => {
      r.lex = lexComerById(r.id);
      r.modulo = typeof CASOS !== "undefined" && CASOS[r.id] ? "casos.html" : "verbos.html";
      return r;
    }).filter(r => r.lex);
}

/* ── STORAGE ─────────────────────────────────────────────────
   localStorage estándar (NO window.storage — eso es exclusivo
   del preview de artifacts de Claude.ai y no existe en un
   navegador real corriendo el sitio ya publicado). */
async function azGet(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v !== null ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
}
async function azSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

/* ── LETRAS EN NEGRITA (25/09/2026) ──────────────────────────
   En los textos explicativos, cuando se nombra una letra (latina o
   cirílica) va en negrita, así no se confunde con una palabra de una
   letra. azFmt(texto) devuelve lo que se pasa a React:
     · **x** en el texto → <b>x</b> (letras latinas, grupos como «сч»
       o terminaciones como «-ть»);
     · además, toda letra cirílica suelta (Б, я, «в-») va en negrita
       sola, sin marcarla, salvo que esté dentro de una frase rusa
       (al lado de otra palabra rusa: «я из…», «а у тебя́»).
   Usar solo en texto explicativo en español, nunca en texto ruso
   (frases, diálogos), donde и, в, я son palabras. */
function azFmt(texto) {
  if (texto == null) return texto;
  const h = window.React && React.createElement;
  /* {я}: palabra rusa de una letra que NO va en negrita (02/10/2026): я, и, в, с, у… cuando son palabras */
  const partes = String(texto).split(/(\*\*[^*]+\*\*|\{[А-Яа-яЁё\u0301]{1,3}\})/g);
  const out = [];
  /* ¿La letra suelta está dentro de una frase rusa? (al lado de una palabra
     rusa de 2 letras o más: «я из…», «а у тебя́») → es una palabra, no una letra */
  const W = /[А-Яа-яЁё\u0301]/;
  const vecina = (t, i, paso) => {
    let j = i;
    for (let vuelta = 0; vuelta < 4; vuelta++) {
      while (j >= 0 && j < t.length && /[\s,.;:!?«»"()—–…]/.test(t[j])) j += paso;
      let n = 0;
      while (j >= 0 && j < t.length && (W.test(t[j]) || t[j] === "-")) { if (W.test(t[j]) && t[j] !== "\u0301") n++; j += paso; }
      if (n >= 2) return true;      /* palabra rusa al lado: es una frase */
      if (n === 0) return false;    /* al lado no hay nada ruso */
      /* n === 1: otra letra o palabra de una letra; seguir mirando */
    }
    return false;
  };
  partes.forEach((p, i) => {
    if (!p) return;
    if (/^\*\*[^*]+\*\*$/.test(p)) { const x = p.slice(2, -2).replace(/\{([А-Яа-яЁё\u0301]{1,3})\}/g, "$1"); out.push(h ? h("b", { key: "b" + i }, x) : x); return; }
    if (/^\{[А-Яа-яЁё\u0301]{1,3}\}$/.test(p)) { out.push(p.slice(1, -1)); return; }
    const rx = /(?<![A-Za-zА-Яа-яЁё\u0301])[А-Яа-яЁё]\u0301?(?![A-Za-zА-Яа-яЁё\u0301])/g;
    let ult = 0, m;
    while ((m = rx.exec(p))) {
      const ini = m.index, fin = m.index + m[0].length;
      if (vecina(p, ini - 1, -1) || vecina(p, fin, 1)) continue;
      if (ini > ult) out.push(p.slice(ult, ini));
      out.push(h ? h("b", { key: "c" + i + "-" + ini }, m[0]) : m[0]);
      ult = fin;
    }
    if (ult < p.length) out.push(p.slice(ult));
  });
  return out;
}
/* El mismo texto sin las marcas (para búsquedas o atributos) */
function azSinMarcas(texto) { return String(texto == null ? "" : texto).replace(/\*\*/g, ""); }

/* Respuestas en los dos géneros (13/10/2026): devuelve la lista de respuestas esperadas más su versión
   en el otro género, en las frases con я o ты (был ↔ была́, встал ↔ вста́ла, просну́лся ↔ просну́лась, рад ↔ ра́да),
   con las formas de Verbos. La usa la práctica (azEsperadasGenero, unidad.js) en toda respuesta escrita que no fija el género. */
function azAmbosGeneros(lista) {
  lista = [].concat(lista || []);
  if (typeof VERBOS === "undefined") return lista;
  const clave = w => String(w).replace(/\u0301/g, "").toLowerCase().replace(/ё/g, "е");
  if (!azAmbosGeneros.mapa) {
    const m = {};
    const par = (a, b) => { if (!m[clave(a)]) m[clave(a)] = b; if (!m[clave(b)]) m[clave(b)] = a; };
    Object.keys(VERBOS).forEach(id => { const p = VERBOS[id].pasado; if (p && p.m && p.f) par(p.m, p.f); });
    [["рад", "ра́да"], ["согла́сен", "согла́сна"], ["за́нят", "занята́"], ["до́лжен", "должна́"], ["гото́в", "гото́ва"], ["уве́рен", "уве́рена"]].forEach(([a, b]) => par(a, b));
    azAmbosGeneros.mapa = m;
  }
  const M = azAmbosGeneros.mapa, out = lista.slice();
  lista.forEach(fr => {
    if (!/(^|[^А-Яа-яЁё])([Яя]|[Тт]ы)([^А-Яа-яЁё\u0301]|$)/.test(String(fr))) return;   /* solo frases con я o ты */
    const f = String(fr).replace(/[А-Яа-яЁё\u0301]+/g, w => { const r = M[clave(w)]; if (!r) return w; return w.charAt(0) !== w.charAt(0).toLowerCase() ? r.charAt(0).toUpperCase() + r.slice(1) : r; });
    if (f !== fr && out.indexOf(f) < 0) out.push(f);
  });
  return out;
}

/* ── VOZ (compartida por toda la app, 26/09/2026) ─────────────
   ru-RU a 0,85, sin la marca de acento (algunas voces la leen mal).
   genero ("m" / "f"): si el teléfono le deja a la web una voz rusa de
   hombre y otra de mujer, cada personaje usa la suya; además se cambia
   siempre el tono, porque el iPhone solo expone la voz predeterminada
   de cada idioma (con voz propia, 0,9 / 1,05; sin voz de hombre, desde el
   14/10/2026: hombre 0,5 y más lento, mujer 1,35 o 1,05 y un poco más rápida).
     azHablarRu(texto, genero?)
     azHablarSecuencia([{ texto, genero, rate? }], alEmpezarLinea?, alTerminar?)
       rate (06/10/2026, U13): velocidad de esa línea (0,7 lento … 0,95); por defecto 0,85.
     azCallar() */
const AZ_VOZ_F = /milena|katya|katerina|anna|irina|alena|elena|tatyana|female|женск/i;
const AZ_VOZ_M = /yuri|maxim|pavel|dmitr|male|мужск/i;
try { if ("speechSynthesis" in window) { window.speechSynthesis.getVoices(); window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices(); } } catch (e) {}
function azVozPara(genero) {
  try {
    const ru = window.speechSynthesis.getVoices().filter(v => /^ru/i.test(v.lang));
    if (genero === "f") return ru.find(v => AZ_VOZ_F.test(v.name)) || null;
    if (genero === "m") return ru.find(v => AZ_VOZ_M.test(v.name) && !AZ_VOZ_F.test(v.name)) || null;
  } catch (e) {}
  return null;
}
function azFraseVoz(texto, genero, rate) {
  const u = new SpeechSynthesisUtterance(String(texto).replace(/\u0301/g, ""));
  u.lang = "ru-RU"; u.rate = rate || 0.85;
  const v = azVozPara(genero);
  if (v) { u.voice = v; u.lang = v.lang; }
  /* 14/10/2026 (prueba de Manu: en el iPhone las dos voces no se distinguían):
     sin voz propia de hombre, además del tono más marcado cambia la velocidad,
     que el iPhone respeta siempre (hombre más lento, mujer un poco más rápida). */
  const propia = v && (genero !== "m" || AZ_VOZ_M.test(v.name));
  if (genero === "m") { u.pitch = propia ? 0.9 : 0.5; if (!propia) u.rate = u.rate * 0.88; }
  else if (genero === "f") { u.pitch = propia ? 1.05 : 1.35; if (!azVozPara("m")) u.rate = Math.min(1, u.rate * 1.06); }
  return u;
}
/* ── VOCES GENERADAS (Silero, 15/10/2026) ──────────────────────
   Los textos rusos tienen un audio hecho de antemano (Silero v5_5_ru, licencia
   CC BY-NC 4.0: uso no comercial) en el repo aparte Azbuka_voces, publicado en
   la misma dirección: …/Azbuka_voces/v1/<voz>/<clave>.<ext>.
   · v1/indice.json dice qué audios existen ({ v, ext, voces: { baya: "clave clave …" } }).
     Si un texto no tiene audio (o no hay índice), suena la voz del teléfono, como antes.
   · La clave es azVozClave(texto): el texto sin llaves { }, con espacios normales,
     pasado por cyrb53. La usa igual herramientas/voces/inventario.js: no cambiarla
     sin regenerar todo.
   · Quién habla: el segundo argumento de azHablarRu / el «genero» de cada línea de
     azHablarSecuencia puede ser la clave de un personaje (masha, olga…), "m" / "f"
     (alguien sin voz propia) o nada (la narración de las unidades).
     AZ_VOCES_PERSONAJE lo traduce a una voz de Silero; inventario.js lee esta misma tabla.
   · Cada audio se baja la primera vez y queda en la caché «az-voces» (sin conexión).
     Al abrir una página, cuando ya cargó todo, se bajan en segundo plano los audios de
     esa página (v1/paginas/<página>.json), de a uno y con prioridad baja; se corta al salir.
   Decidido por Manu (15/10/2026): narración baya, Masha baya, Olga xenia, Lucas eugene,
   Dima aidar; formato AAC 48 kbps. Los personajes secundarios: mujeres kseniya, hombres aidar. */
const AZ_VOCES_PERSONAJE = { "narra": "baya", "masha": "baya", "olga": "xenia", "lucas": "eugene", "dima": "aidar", "f": "kseniya", "m": "aidar" };
const AZ_VOCES_BASE = (() => { try { return new URL("../Azbuka_voces/v1/", location.href).href; } catch (e) { return "../Azbuka_voces/v1/"; } })();
const AZ_VOCES_CACHE = "az-voces";
function azVozTexto(t) { return String(t == null ? "" : t).replace(/[{}]/g, "").normalize("NFC").replace(/\s+/g, " ").trim(); }
function azVozClave(t) {
  const s = azVozTexto(t);
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (let i = 0; i < s.length; i++) { const ch = s.charCodeAt(i); h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677); }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}
/* quien → { voz (Silero), genero (para la voz del teléfono) } */
function azVozDe(quien) {
  const pj = (typeof DLG_PERSONAJES !== "undefined" && quien && DLG_PERSONAJES[quien]) || null;
  const genero = quien === "m" || quien === "f" ? quien : (pj ? pj.genero : undefined);
  const voz = AZ_VOCES_PERSONAJE[quien || "narra"] || (genero ? AZ_VOCES_PERSONAJE[genero] : AZ_VOCES_PERSONAJE.narra);
  return { voz, genero };
}
let azVocesIndice = null;            /* { ext, voces: { baya: Set } } cuando cargó */
const azVocesListo = (async () => {
  try {
    const url = AZ_VOCES_BASE + "indice.json";
    let r = null;
    try { r = await fetch(url, { cache: "no-cache" }); if (r && r.ok && typeof caches !== "undefined") { const c = await caches.open(AZ_VOCES_CACHE); c.put(url, r.clone()); } } catch (e) { r = null; }
    if ((!r || !r.ok) && typeof caches !== "undefined") { const c = await caches.open(AZ_VOCES_CACHE); r = await c.match(url); }
    if (!r || !r.ok) return null;
    const d = await r.json(), voces = {};
    Object.keys(d.voces || {}).forEach(v => { voces[v] = new Set(String(d.voces[v]).split(" ").filter(Boolean)); });
    azVocesIndice = { ext: d.ext || ".m4a", voces };
    return azVocesIndice;
  } catch (e) { return null; }
})();
/* URL del audio de este texto con esta voz, o null si no hay */
function azVozUrl(texto, quien) {
  if (!azVocesIndice) return null;
  const { voz } = azVozDe(quien), k = azVozClave(texto), s = azVocesIndice.voces[voz];
  return s && s.has(k) ? AZ_VOCES_BASE + voz + "/" + k + azVocesIndice.ext : null;
}
/* El audio: de la caché si ya se bajó; si no, de la red (y queda guardado). Devuelve un blob: URL. */
const azVozBlobs = new Map();
function azVozBlob(url) {
  if (azVozBlobs.has(url)) return azVozBlobs.get(url);
  const p = (async () => {
    let r = null, c = null;
    try { if (typeof caches !== "undefined") { c = await caches.open(AZ_VOCES_CACHE); r = await c.match(url); } } catch (e) {}
    if (!r) { r = await fetch(url); if (!r.ok) throw new Error("audio " + r.status); if (c) { try { await c.put(url, r.clone()); } catch (e) {} } }
    return URL.createObjectURL(await r.blob());
  })();
  p.catch(() => azVozBlobs.delete(url));
  azVozBlobs.set(url, p);
  if (azVozBlobs.size > 80) { const k0 = azVozBlobs.keys().next().value; const v0 = azVozBlobs.get(k0); azVozBlobs.delete(k0); v0.then(u => URL.revokeObjectURL(u)).catch(() => {}); }
  return p;
}
/* Un solo reproductor para toda la página. El iPhone solo deja sonar audio que empezó con un toque:
   el primer toque en la página lo «despierta» con un silencio, y después ya suena siempre. */
const azVozAudio = typeof Audio !== "undefined" ? new Audio() : null;
if (azVozAudio) {
  azVozAudio.preload = "auto";
  const despertar = () => {
    document.removeEventListener("touchend", despertar, true); document.removeEventListener("click", despertar, true);
    if (azVozAudio.src) return;
    try { azVozAudio.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA="; const p = azVozAudio.play(); if (p) p.catch(() => {}); } catch (e) {}
  };
  document.addEventListener("touchend", despertar, true); document.addEventListener("click", despertar, true);
}
/* Toca un texto: el audio generado si hay; si no (o si falla), la voz del teléfono.
   alEmpezar / alTerminar opcionales. Devuelve nada; respeta el turno (■ u otro audio lo cortan). */
function azVozDecir(turno, texto, quien, rate, alEmpezar, alTerminar) {
  const { genero } = azVozDe(quien);
  const telefono = () => {
    if (turno !== azVozTurno) return;
    try {
      if (!("speechSynthesis" in window)) { if (alTerminar) alTerminar(); return; }
      const u = azFraseVoz(texto, genero, rate);
      u.onstart = () => { if (alEmpezar) alEmpezar(); };
      u.onend = () => { if (alTerminar) alTerminar(); };
      u.onerror = () => { if (alTerminar) alTerminar(); };
      window.azVozFrase = u;   /* 20/10/2026: que no se pierda antes de terminar (Safari) */
      window.speechSynthesis.speak(u);
    } catch (e) { if (alTerminar) alTerminar(); }
  };
  const url = azVozUrl(texto, quien);
  if (!url || !azVozAudio) { telefono(); return; }
  azVozBlob(url).then(src => {
    if (turno !== azVozTurno) return;
    const a = azVozAudio;
    a.onended = () => { if (turno === azVozTurno && alTerminar) alTerminar(); };
    a.onerror = null;
    a.src = src;
    /* velocidad: la voz del teléfono va a 0,85 como «normal»; el audio generado, a 1 */
    a.playbackRate = Math.max(0.5, Math.min(1.5, (rate || 0.85) / 0.85));
    a.preservesPitch = true; a.webkitPreservesPitch = true;
    const p = a.play();
    if (alEmpezar) alEmpezar();
    if (p) p.catch(() => telefono());
  }).catch(() => telefono());
}
function azVozParar() { try { if (azVozAudio) { azVozAudio.onended = null; azVozAudio.pause(); } } catch (e) {} }

/* azVozTurno (03/10/2026): cada audio nuevo o cada ■ cambia el turno; una
   secuencia que quedó de un turno anterior ya no sigue con la línea siguiente. */
let azVozTurno = 0;
function azHablarRu(texto, genero) {
  try {
    if (!texto) return;
    const turno = ++azVozTurno;
    azVozParar();
    if ("speechSynthesis" in window) { window.speechSynthesis.cancel(); window.speechSynthesis.resume(); }
    azVozDecir(turno, texto, genero);
  } catch (e) {}
}
function azHablarSecuencia(items, alEmpezarLinea, alTerminar) {
  /* Encadenadas: cada línea empieza cuando termina la anterior. En iPhone,
     encolar varias de golpe hace que solo suene la primera. */
  try {
    const turno = ++azVozTurno;
    azVozParar();
    if ("speechSynthesis" in window) { window.speechSynthesis.cancel(); window.speechSynthesis.resume(); }
    let i = 0;
    const siguiente = () => {
      if (turno !== azVozTurno) return;        /* se tocó ■ u otro audio: no seguir */
      if (i >= items.length) { if (alTerminar) alTerminar(); return; }
      const k = i++;
      azVozDecir(turno, items[k].texto, items[k].genero, items[k].rate,
        () => { if (alEmpezarLinea) alEmpezarLinea(k); },
        () => setTimeout(siguiente, 250));
    };
    setTimeout(siguiente, 60);
  } catch (e) {}
}
/* ■ Detener (03/10/2026): corta la secuencia (turno nuevo) y, como el iPhone a
   veces no corta con cancel() solo, primero pausa; después deja la voz lista. */
function azCallar() {
  azVozTurno++;
  azVozParar();
  try {
    const s = window.speechSynthesis;
    s.pause(); s.cancel();
    setTimeout(() => { try { s.cancel(); s.resume(); } catch (e) {} }, 60);
  } catch (e) {}
}
/* azVozQuiero(texto, quien?) (17/10/2026): «esto está en pantalla, puede que suene». Lo usan las tablas
   de Casos y Verbos y la ficha del Diccionario: sus audios se bajan en segundo plano, de a uno, un
   momento después de que se dibujó la pantalla (así no compiten con la carga). */
const azVozCola = [], azVozEnCola = new Set();
let azVozColaReloj = null, azVozColaCorriendo = false;
function azVozQuiero(texto, quien) {
  try {
    if (!texto || typeof caches === "undefined") return;
    const k = (quien || "") + "|" + texto;
    if (azVozEnCola.has(k)) return;
    azVozEnCola.add(k); azVozCola.push([texto, quien]);
    clearTimeout(azVozColaReloj);
    azVozColaReloj = setTimeout(azVozColaSeguir, 1500);
  } catch (e) {}
}
async function azVozColaSeguir() {
  if (azVozColaCorriendo) return;
  azVozColaCorriendo = true;
  try {
    if (navigator.connection && navigator.connection.saveData) return;
    await azVocesListo;
    const c = await caches.open(AZ_VOCES_CACHE);
    while (azVozCola.length) {
      const [texto, quien] = azVozCola.shift();
      const url = azVozUrl(texto, quien);
      if (!url || await c.match(url)) continue;
      try { const x = await fetch(url, { priority: "low" }); if (x.ok) await c.put(url, x); } catch (e) { break; }
    }
  } catch (e) {} finally { azVozColaCorriendo = false; }
}

/* Segundo plano: cuando la página terminó de cargar, se bajan sus audios (de a uno). */
(function azVocesSegundoPlano() {
  if (typeof window === "undefined" || typeof caches === "undefined") return;
  let corte = false;
  window.addEventListener("pagehide", () => { corte = true; });
  const empezar = async () => {
    try {
      if (navigator.connection && navigator.connection.saveData) return;
      const ind = await azVocesListo; if (!ind || corte) return;
      const pag = (location.pathname.split("/").pop() || "index.html").replace(/\.html$/, "") || "index";
      const r = await fetch(AZ_VOCES_BASE + "paginas/" + pag + ".json").catch(() => null);
      if (!r || !r.ok) return;
      const lista = await r.json();
      const c = await caches.open(AZ_VOCES_CACHE);
      for (const vk of lista) {
        if (corte) return;
        const url = AZ_VOCES_BASE + vk + ind.ext;
        if (await c.match(url)) continue;
        try { const x = await fetch(url, { priority: "low" }); if (x.ok) await c.put(url, x); } catch (e) { return; }
      }
    } catch (e) {}
  };
  const luego = () => setTimeout(() => (window.requestIdleCallback ? requestIdleCallback(empezar, { timeout: 4000 }) : empezar()), 3000);
  if (document.readyState === "complete") luego(); else window.addEventListener("load", luego);
})();

/* ── CUADERNO (26/09/2026) ────────────────────────────────────
   Notas personales, guardadas en az_cuaderno:
     { v: 1, secciones: [{ id, titulo, fija?, notas: [
         { id, texto, fuente: { titulo, href } | null, creada, editada } ] }] }
   La sección "bandeja" («Sin ordenar») siempre existe y no se borra:
   ahí cae todo lo que se manda desde otras pantallas.
     azCuadernoLeer() → el cuaderno (lo crea si no existe)
     azCuadernoGuardar(cuaderno)
     azCuadernoAgregar(texto, fuente?) → agrega una nota a «Sin ordenar» */
function azCuadernoNuevo() {
  return { v: 1, secciones: [{ id: "bandeja", titulo: "Sin ordenar", fija: true, notas: [] }] };
}
async function azCuadernoLeer() {
  const c = await azGet("az_cuaderno", null);
  if (!c || !Array.isArray(c.secciones)) return azCuadernoNuevo();
  if (!c.secciones.some(s => s.id === "bandeja")) c.secciones.unshift({ id: "bandeja", titulo: "Sin ordenar", fija: true, notas: [] });
  return c;
}
async function azCuadernoGuardar(c) {
  await azSet("az_cuaderno", c);
  try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) {}
}
function azId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
async function azCuadernoAgregar(texto, fuente) {
  const c = await azCuadernoLeer();
  const hoy = new Date().toISOString();
  c.secciones.find(s => s.id === "bandeja").notas.unshift({ id: azId(), texto: String(texto || "").trim(), fuente: fuente || null, creada: hoy, editada: hoy });
  await azCuadernoGuardar(c);
  return c;
}

/* ── DÓNDE QUEDASTE (26/09/2026) ──────────────────────────────
   Cada unidad guarda el último módulo abierto en az_ultimo, y el
   inicio lo muestra en la tarjeta «Seguir estudiando».
     { unidad, n, total, titulo, href, fecha } */
async function azGuardarUltimo(u) { await azSet("az_ultimo", Object.assign({ fecha: new Date().toISOString() }, u)); }
async function azLeerUltimo() { return await azGet("az_ultimo", null); }

/* ── COPIA DE SEGURIDAD DE TODO (26/09/2026) ──────────────────
   Un solo archivo con todo lo que la app guarda en el teléfono
   (todas las claves az_…): progreso de unidades, letras y palabras,
   ejercicios hechos, cuaderno, dónde quedaste y preferencias.
     azCopiaDatos() → { app: "azbuka", tipo: "copia", v: 1, fecha, datos: { clave: valor } }
     azRestaurarDatos(copia) → reemplaza todo lo guardado por la copia.
       También acepta las copias viejas del cuaderno solo ({ secciones }).
   AzCopiaSeguridad({ c }) → los dos botones, listos para cualquier página. */
function azCopiaDatos() {
  const datos = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.indexOf("az_") === 0 && k.indexOf("az_cuenta_") !== 0) datos[k] = localStorage.getItem(k);   /* az_cuenta_…: de la cuenta, no viaja */
  }
  return { app: "azbuka", tipo: "copia", v: 1, fecha: new Date().toISOString(), datos };
}
function azRestaurarDatos(copia) {
  if (copia && Array.isArray(copia.secciones)) { localStorage.setItem("az_cuaderno", JSON.stringify(copia)); return "cuaderno"; }
  if (!copia || copia.app !== "azbuka" || !copia.datos) throw new Error("formato");
  const viejas = [];
  const deCuenta = k => k.indexOf("az_cuenta_") === 0;   /* la sincronización de la cuenta (cuenta.js) se conserva */
  for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && k.indexOf("az_") === 0 && !deCuenta(k)) viejas.push(k); }
  viejas.forEach(k => localStorage.removeItem(k));
  Object.keys(copia.datos).forEach(k => { if (k.indexOf("az_") === 0 && !deCuenta(k)) localStorage.setItem(k, copia.datos[k]); });
  try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) {}
  return "todo";
}
/* Devuelve true si la copia salió (compartida o descargada) y false si
   se canceló. Si salió, anota en az_copia la fecha y la firma del
   progreso (02/10/2026), para el recordatorio de copia (avisos.js). */
async function azGuardarCopia() {
  const nombre = "azbuka-copia-" + new Date().toISOString().slice(0, 10) + ".json";
  const blob = new Blob([JSON.stringify(azCopiaDatos())], { type: "application/json" });
  let ok = false;
  try {
    const file = new File([blob], nombre, { type: "application/json" });
    if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: "Copia de Azbuka" }); ok = true; }
  } catch (e) { if (e && e.name === "AbortError") return false; }
  if (!ok) {
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = nombre;
    document.body.appendChild(a); a.click(); a.remove();
  }
  await azSet("az_copia", { fecha: new Date().toISOString(), firma: azFirmaProgreso() });
  return true;
}

/* Firma del progreso (02/10/2026): cambia solo si cambió lo que vale la
   pena guardar (ejercicios, letras y palabras, unidades, favoritos y
   cuaderno), no por abrir un módulo. */
function azFirmaProgreso() {
  let p = {};
  try { p = JSON.parse(localStorage.getItem("az_progress") || "{}") || {}; } catch (e) {}
  const s = JSON.stringify([p.items || {}, p.ejercicios || {}, p.units || {}, p.favorites || []]) + (localStorage.getItem("az_cuaderno") || "");
  let x = 5381;
  for (let i = 0; i < s.length; i++) x = ((x << 5) + x + s.charCodeAt(i)) | 0;
  return (x >>> 0).toString(36) + "-" + s.length;
}
function AzCopiaSeguridad({ c }) {
  const h = React.createElement;
  const ref = htmPreact.useRef(null);
  const restaurar = e => {
    const f = e.target.files && e.target.files[0]; e.target.value = "";
    if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      let copia;
      try { copia = JSON.parse(r.result); } catch (err) { alert("Ese archivo no es una copia de Azbuka."); return; }
      const esVieja = copia && Array.isArray(copia.secciones);
      if (!esVieja && (!copia || copia.app !== "azbuka")) { alert("Ese archivo no es una copia de Azbuka."); return; }
      const cuando = copia.fecha ? " del " + new Date(copia.fecha).toLocaleDateString("es-AR") : "";
      const msg = esVieja
        ? "Esta es una copia solo del cuaderno. ¿Reemplazar tu cuaderno actual? El progreso no se toca."
        : "¿Restaurar la copia" + cuando + "? Se reemplazan tus notas y todo tu progreso por los de la copia.";
      if (!confirm(msg)) return;
      try { azRestaurarDatos(copia); location.reload(); } catch (err) { alert("No se pudo restaurar la copia."); }
    };
    r.readAsText(f);
  };
  const btn = { flex: 1, padding: "11px 14px", borderRadius: 10, border: `1px solid ${c.border}`, background: c.bg3, color: c.text, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" };
  return h("div", null,
    h("div", { style: { fontSize: 13.5, color: c.textMuted, lineHeight: 1.6 } },
      "Todo lo que haces en Azbuka (tus notas y tu progreso en unidades, letras y ejercicios) se guarda en este teléfono. Guarda una copia de vez en cuando, en Archivos o mandándotela por mail: si se borran los datos del navegador o cambias de teléfono, la restauras y sigues donde estabas."),
    h("div", { style: { display: "flex", gap: 8, marginTop: 12 } },
      h("button", { style: btn, onClick: azGuardarCopia }, "Guardar copia"),
      h("button", { style: btn, onClick: () => ref.current && ref.current.click() }, "Restaurar copia")),
    h("input", { ref, type: "file", accept: "application/json,.json", style: { display: "none" }, onChange: restaurar }));
}

/* ── GUARDAR EN EL CUADERNO DESDE CUALQUIER PANTALLA (26/09/2026) ──
   azGuardarEnCuaderno(texto, fuente?) agrega una nota a «Sin ordenar»
   y avisa con el cartel «Guardado en el cuaderno» (lo muestra el shell).
   Sin fuente, usa la pantalla actual: window.azFuenteActual() si la
   página la define (las unidades dicen en qué módulo estás), o el título. */
function azFuentePagina() {
  let titulo = "";
  try { if (typeof window.azFuenteActual === "function") titulo = window.azFuenteActual(); } catch (e) {}
  if (!titulo) titulo = document.title.replace(/^Азбука\s*[—-]\s*/, "");
  const href = (location.pathname.split("/").pop() || "index.html") + location.search;
  return { titulo, href };
}
async function azGuardarEnCuaderno(texto, fuente) {
  const t = String(texto || "").trim();
  if (!t) return;
  await azCuadernoAgregar(t, fuente || azFuentePagina());
  window.dispatchEvent(new CustomEvent("az-cuaderno-guardado"));
}

/* ── BLINDAJE (02/10/2026) ───────────────────────────────────
   1. Service worker (sw.js): la app funciona sin internet y los datos
      se bajan una sola vez. Se registra desde todas las páginas.
   2. Transliteración (Ajustes): az_translit = "auto" | "si" | "no" (sin valor = "auto",
      19/10/2026: se muestra en las Unidades 1 a 3 y se oculta desde la 4; en los módulos
      de apoyo, según la unidad en la que está el alumno, az_ultimo). Cuando no se ve,
      <html> lleva la clase az-sin-tl y core.css oculta todo lo que
      tiene la clase az-tl. Una página que siempre la muestra declara
      <html data-tl="siempre"> (Unidad 1 y Alfabeto: ahí la
      pronunciación es lo que se aprende). Los interruptores propios
      (Transliteración en los diálogos) arrancan apagados con "no". */
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  window.addEventListener("load", () => { navigator.serviceWorker.register("sw.js").catch(() => {}); });
}
const AZ_TRANSLIT_HASTA = 3;   /* modo automático: visible hasta la Unidad 3 (19/10/2026) */
function azTranslitModo() {
  try { const v = JSON.parse(localStorage.getItem("az_translit") || '"auto"'); return v === "si" || v === "no" ? v : "auto"; } catch (e) { return "auto"; }
}
function azTranslitVisible() {
  if (document.documentElement.getAttribute("data-tl") === "siempre") return true;
  const modo = azTranslitModo();
  if (modo !== "auto") return modo === "si";
  const pag = /azbuka-(\d+)\.html/.exec(location.pathname);
  let n = pag ? Number(pag[1]) : null;
  if (n == null) { try { const u = JSON.parse(localStorage.getItem("az_ultimo") || "null"); n = u && u.unidad ? u.unidad : null; } catch (e) {} }
  return n == null || n <= AZ_TRANSLIT_HASTA;
}
function azAplicarTranslit() {
  document.documentElement.classList.toggle("az-sin-tl", !azTranslitVisible());
}
azAplicarTranslit();
window.azTranslitVisible = azTranslitVisible;
window.azTranslitModo = azTranslitModo;
window.azAplicarTranslit = azAplicarTranslit;
window.azFirmaProgreso = azFirmaProgreso;

/* ── CAPA FIJA (05/10/2026) ───────────────────────────────────
   Para todo lo que se abre encima de la página (avisos, desafío del
   día, prácticas): bloquea el scroll del fondo (en iPhone hace falta
   fijar el body, no alcanza con overflow:hidden) y ajusta la capa al
   área que de verdad se ve (visualViewport), así cuando se abre el
   teclado la capa queda entre el teclado y el borde de arriba, sin
   recortarse. Devuelve la función para soltarla.
   Uso con un ref de callback:
     const capa = useRef(null);
     ref: el => { if (el) { if (!capa.current) capa.current = azCapaFija(el); } else if (capa.current) { capa.current(); capa.current = null; } } */
let AZ_CAPAS = 0, AZ_CAPAS_Y = 0;
function azCapaFija(el) {
  const html = document.documentElement, body = document.body;
  if (AZ_CAPAS++ === 0) {
    AZ_CAPAS_Y = window.scrollY || 0;
    Object.assign(body.style, { position: "fixed", top: -AZ_CAPAS_Y + "px", left: "0", right: "0", width: "100%" });
    html.style.overflow = "hidden";
  }
  const vv = window.visualViewport;
  const ajustar = () => { if (!el || !vv) return; el.style.top = vv.offsetTop + "px"; el.style.height = vv.height + "px"; el.style.bottom = "auto"; };
  ajustar();
  if (vv) { vv.addEventListener("resize", ajustar); vv.addEventListener("scroll", ajustar); }
  return () => {
    if (vv) { vv.removeEventListener("resize", ajustar); vv.removeEventListener("scroll", ajustar); }
    if (--AZ_CAPAS === 0) {
      Object.assign(body.style, { position: "", top: "", left: "", right: "", width: "" });
      html.style.overflow = "";
      window.scrollTo(0, AZ_CAPAS_Y);
    }
  };
}
/* El ref de callback, ya armado: h("div", { ref: azRefCapa(capa) }) con capa = useRef(null) */
function azRefCapa(capa) {
  return el => { if (el) { if (!capa.current) capa.current = azCapaFija(el); } else if (capa.current) { capa.current(); capa.current = null; } };
}
window.azCapaFija = azCapaFija;
window.azRefCapa = azRefCapa;
