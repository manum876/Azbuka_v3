/* ============================================================
   CORE.JS — Shell compartido (versión mínima)
   Contiene solo lo que el shell (drawer + header + bottom nav)
   necesita para funcionar: catálogo de unidades/módulos para
   pintar el drawer, y el storage de tema (dark/light).

   Import en el HTML: <script src="core.js"></script>
   ============================================================ */

/* ── CATÁLOGO GLOBAL ─────────────────────────────────────────
   Sacado directo de tu core.js real (títulos, desc y hrefs
   tal cual están hoy en el repo). La Unidad 13 (Examen final)
   ya existe como entrada — el archivo azbuka-13.html se crea
   cuando corresponda construirlo. */
const AZ_UNITS = [
  { id: 1, title: "Alfabeto y pronunciación", desc: "Las 33 letras, sonidos y primeras palabras.", href: "azbuka-1.html" },
  { id: 2, title: "Presentaciones básicas", desc: "Saludos, nombres, primeras frases.", href: "azbuka-2.html" },
  { id: 3, title: "Sustantivos y género", desc: "Masculino, femenino, neutro.", href: "azbuka-3.html" },
  { id: 4, title: "Casos básicos", desc: "Nominativo y acusativo.", href: "azbuka-4.html" },
  { id: 5, title: "Verbos en presente", desc: "Conjugación y uso cotidiano.", href: "azbuka-5.html" },
  { id: 6, title: "Movimiento y ubicación", desc: "Verbos de movimiento, preposiciones.", href: "azbuka-6.html" },
  { id: 7, title: "Tiempo y rutina diaria", desc: "Horas, días, rutinas.", href: "azbuka-7.html" },
  { id: 8, title: "Pasado", desc: "Aspecto verbal y pasado.", href: "azbuka-8.html" },
  { id: 9, title: "Futuro", desc: "Formas y uso del futuro.", href: "azbuka-9.html" },
  { id: 10, title: "Casos restantes", desc: "Genitivo, dativo, instrumental.", href: "azbuka-10.html" },
  { id: 11, title: "Conversaciones cotidianas", desc: "Diálogos extendidos, situaciones reales.", href: "azbuka-11.html" },
  { id: 12, title: "Consolidación B1", desc: "Repaso integral del curso.", href: "azbuka-12.html" },
  { id: 13, title: "Examen final", desc: "Evaluación integradora de las 12 unidades.", href: "azbuka-13.html" },
];

/* Módulos de apoyo. Diccionario fue dado de baja (ya no existe
   como módulo independiente) — solo quedan estos 4. desc/icon
   se agregan acá (antes solo vivían en el index.html viejo) para
   que cualquier página que liste los módulos (home, drawer, etc.)
   los lea de una única fuente. icon es el nombre de color fijo
   (no cambia con el tema, ver ESTETICA_AZBUKA.md §2). */
const AZ_MODULES = [
  { id: "alfabeto", title: "Alfabeto", desc: "Letras, sonidos y caligrafía — consulta libre", href: "alfabeto.html", icon: "orange", glyph: "Я" },
  { id: "dialogos", title: "Diálogos", desc: "Conversaciones, frases útiles y notas culturales", href: "dialogos.html", icon: "yellow", glyph: "Ди" },
  { id: "verbos", title: "Verbos", desc: "Diccionario de verbos y conjugaciones", href: "verbos.html", icon: "blue", glyph: "Вб" },
  { id: "casos", title: "Casos", desc: "Declinaciones del ruso, los 6 casos", href: "casos.html", icon: "purple", glyph: "Пд" },
];

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
    if (d.loc2) out.push([d.loc2, "locativo"], [d.loc2.split(" ").pop(), "locativo"]);
    if (d.partitivo) out.push([d.partitivo, "partitivo"]);
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
  if (typeof CASOS === "undefined") faltan.push("data-casos.js");
  if (typeof VERBOS === "undefined") faltan.push("data-verbos.js");
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
