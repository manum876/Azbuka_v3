/* ============================================================
   CORE.JS — Shell compartido (versión mínima)
   Contiene solo lo que el shell (drawer + header + bottom nav)
   necesita para funcionar: catálogo de unidades/módulos para
   pintar el drawer, y el storage de tema (dark/light).

   Import en el HTML: <script src="core.js"></script>
   ============================================================ */

/* ── CATÁLOGO GLOBAL (placeholder) ──────────────────────────
   Fuente única de verdad para lo que se lista en el drawer.
   Reemplazá estos arrays por las unidades/módulos reales del
   proyecto — la forma (id, title, href) es lo único que el
   shell necesita respetar. */
const AZ_UNITS = [
  { id: 1, title: "Unidad 1", href: "unidad-1.html" },
  { id: 2, title: "Unidad 2", href: "unidad-2.html" },
  { id: 3, title: "Unidad 3", href: "unidad-3.html" },
];

const AZ_MODULES = [
  { id: "modulo-a", title: "Módulo A", href: "modulo-a.html", glyph: "A" },
  { id: "modulo-b", title: "Módulo B", href: "modulo-b.html", glyph: "B" },
  { id: "modulo-c", title: "Módulo C", href: "modulo-c.html", glyph: "C" },
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
   El href a la ficha es un supuesto (ficha.html?id=<LEX-id>) —
   ajustalo si la página de ficha real usa otra ruta/parámetro. */
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
