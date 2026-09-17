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
   todavía no existe como archivo — el link queda planteado
   apuntando a azbuka-13.html igual que el resto. */
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
  { id: 13, title: "Examen final", href: "azbuka-13.html" },
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

     <script src="data-lexicon.js"></script>
     <script src="core.js"></script>

   No hace falta ningún otro data-*.js — Azbuka_v3 ya no reparte
   el vocabulario por módulo, todo vive acá. */
function azSearchLexicon(query) {
  if (typeof LEXICON_COMER === "undefined") return [];
  const q = (query || "").trim().toLowerCase();
  if (!q) return [];
  return LEXICON_COMER
    .filter(e =>
      e.ru.toLowerCase().includes(q) ||
      (e.senses || []).some(s => s.es.toLowerCase().includes(q))
    )
    .slice(0, 40)
    .map(e => ({
      id: e.id,
      ru: e.ru,
      es: (e.senses || []).map(s => s.es).join(" · "),
      pos: e.posNormalized,
      gender: e.gender || null,
      href: "ficha.html?id=" + e.id
    }));
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
