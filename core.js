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
  { id: "dialogos", title: "Diálogos", desc: "30 conversaciones con audio y vocabulario", href: "dialogos.html", icon: "yellow", glyph: "Ди" },
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
   el vocabulario por módulo, todo vive acá. */
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
  return LEXICON_COMER
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
