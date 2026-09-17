/* ============================================================
   CORE.JS — Shell compartido (versión mínima)
   Contiene solo lo que el shell (drawer + header + bottom nav)
   necesita para funcionar: catálogo de unidades/módulos para
   pintar el drawer, y el storage de tema (dark/light).

   Import en el HTML: <script src="core.js"></script>
   ============================================================ */

/* ── CATÁLOGO GLOBAL ─────────────────────────────────────────
   Sacado directo de tu core.js real (títulos, desc y hrefs
   tal cual están hoy en el repo). Única diferencia: la Unidad 13
   no existe todavía en tu repo (ahí solo llegan a azbuka-12.html),
   así que la dejo con título placeholder — avisame el título real
   cuando la definas y lo cambio. */
const AZ_UNITS = [
  { id: 1, title: "Alfabeto y pronunciación", href: "azbuka-1.html" },
  { id: 2, title: "Presentaciones básicas", href: "azbuka-2.html" },
  { id: 3, title: "Sustantivos y género", href: "azbuka-3.html" },
  { id: 4, title: "Casos básicos", href: "azbuka-4.html" },
  { id: 5, title: "Verbos en presente", href: "azbuka-5.html" },
  { id: 6, title: "Movimiento y ubicación", href: "azbuka-6.html" },
  { id: 7, title: "Tiempo y rutina diaria", href: "azbuka-7.html" },
  { id: 8, title: "Pasado", href: "azbuka-8.html" },
  { id: 9, title: "Futuro", href: "azbuka-9.html" },
  { id: 10, title: "Casos restantes", href: "azbuka-10.html" },
  { id: 11, title: "Conversaciones cotidianas", href: "azbuka-11.html" },
  { id: 12, title: "Consolidación B1", href: "azbuka-12.html" },
  { id: 13, title: "Unidad 13 (título a definir)", href: "azbuka-13.html" },
];

/* Los 4 módulos de apoyo pedidos, con sus glifos cirílicos reales
   (mismos que ya usa tu core.js real). Diccionario existe en el
   repo pero no lo pediste acá, así que no lo incluyo. */
const AZ_MODULES = [
  { id: "alfabeto", title: "Alfabeto", href: "alfabeto.html", glyph: "Я" },
  { id: "dialogos", title: "Diálogos", href: "dialogos.html", glyph: "Ди" },
  { id: "verbos", title: "Verbos", href: "verbos.html", glyph: "Вб" },
  { id: "casos", title: "Casos", href: "casos.html", glyph: "Пд" },
];

/* ── LÉXICO ──────────────────────────────────────────────────
   La base real es data-lexicon.js (objeto LEXICON, clave
   "LEX-<tipo>-NNN", campos ru/es/pos/gender/sources/introducedIn/
   appearsIn — ver ese archivo). Cargalo ANTES de este script:

     <script src="data-lexicon.js"></script>
     <script src="core.js"></script>

   data-lexicon.js ya expone lexById/lexByRu/lexByUnit/lexByTool,
   pero ninguno busca por substring en ru Y es al mismo tiempo —
   eso es lo que necesita el buscador del drawer, así que se
   agrega acá. No inventa datos: lee LEXICON tal cual está.
   El resultado apunta a ficha.html?id=<LEX-id> — la página
   genérica que arma la ficha en runtime (ver ficha.html). */
function azSearchLexico(query) {
  const q = (query || "").trim().toLowerCase();
  if (!q || typeof LEXICON === "undefined") return [];
  return Object.entries(LEXICON)
    .filter(([id, e]) => e.ru.toLowerCase().includes(q) || e.es.toLowerCase().includes(q))
    .slice(0, 8)
    .map(([id, e]) => ({ id, palabra: e.ru, traduccion: e.es, href: "ficha.html?id=" + id }));
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
