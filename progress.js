/* ============================================================
   PROGRESS.JS — Sistema de progreso centralizado
   ------------------------------------------------------------
   Guarda el dominio de cada ítem (letras, palabras, casos,
   verbos...) bajo UNA sola key de localStorage, con ids
   namespaced por módulo. Esto permite, a futuro, cruzar todos
   los módulos para armar refuerzos personalizados (ej: "mostrame
   todo lo que tengo en nivel 0-1 en cualquier módulo").

   Cargar SIEMPRE después de core.js:
     <script src="core.js"></script>
     <script src="progress.js"></script>

   Formato de itemKey → "<namespace>:<id>"
     alfabeto:А             → letra del alfabeto (mayúscula)
     lex:CMR-00042           → palabra del léxico central
     casos:CMR-00042:gen      → forma declinada (futuro)
     verbos:CMR-00148:pres     → forma conjugada (futuro)

   Niveles de dominio (mismo criterio en toda la app):
     0 = no estudiada · 1 = aprendiendo · 2 = dominada
   ============================================================ */

function azDefaultProgress() {
  return {
    items: {},      // itemKey -> { level: 0|1|2, lastSeen: "YYYY-MM-DD" }
    units: {},      // unitId (string) -> { exDone, timeSec, lastStudied }
    modules: {},    // moduleId -> { lastVisited }
    favorites: [],  // itemKeys marcados como favoritos, cross-módulo
    lastStudied: null
  };
}

let AZ_PROGRESS = azDefaultProgress();

async function azLoadProgress() {
  const loaded = await azGet('az_progress', azDefaultProgress());
  AZ_PROGRESS = {
    items: loaded.items || {},
    units: loaded.units || {},
    modules: loaded.modules || {},
    favorites: loaded.favorites || [],
    lastStudied: loaded.lastStudied || null
  };
  return AZ_PROGRESS;
}

function azSaveProgress() {
  azSet('az_progress', AZ_PROGRESS);
}

function azTouchStudied() {
  AZ_PROGRESS.lastStudied = new Date().toISOString().slice(0, 10);
  azSaveProgress();
}

/* ── ÍTEMS: dominio individual, namespaced ── */
function azItem(key) {
  return AZ_PROGRESS.items[key] || { level: 0, lastSeen: null };
}
function azSetItemLevel(key, level) {
  AZ_PROGRESS.items[key] = { level: level, lastSeen: new Date().toISOString().slice(0, 10) };
  azTouchStudied();
}
function azItemsByPrefix(prefix) {
  const out = {};
  Object.keys(AZ_PROGRESS.items).forEach(function (k) {
    if (k.indexOf(prefix + ':') === 0) out[k] = AZ_PROGRESS.items[k];
  });
  return out;
}
function azCountByLevel(prefix, level) {
  const items = azItemsByPrefix(prefix);
  return Object.keys(items).filter(function (k) { return items[k].level === level; }).length;
}

/* ── UNIDADES Y MÓDULOS: actividad general ── */
function azUnitProgress(id) {
  const k = String(id);
  if (!AZ_PROGRESS.units[k]) AZ_PROGRESS.units[k] = { exDone: 0, timeSec: 0, lastStudied: null };
  return AZ_PROGRESS.units[k];
}
function azSaveUnitProgress(id, data) {
  AZ_PROGRESS.units[String(id)] = Object.assign(azUnitProgress(id), data, { lastStudied: new Date().toISOString().slice(0, 10) });
  azTouchStudied();
}
function azModuleTouch(id) {
  if (!AZ_PROGRESS.modules[id]) AZ_PROGRESS.modules[id] = {};
  AZ_PROGRESS.modules[id].lastVisited = new Date().toISOString().slice(0, 10);
  azSaveProgress();
}

/* ── FAVORITOS: cross-módulo ── */
function azIsFavorite(key) {
  return AZ_PROGRESS.favorites.indexOf(key) >= 0;
}
function azToggleFavorite(key) {
  const i = AZ_PROGRESS.favorites.indexOf(key);
  if (i >= 0) AZ_PROGRESS.favorites.splice(i, 1); else AZ_PROGRESS.favorites.push(key);
  azSaveProgress();
  return azIsFavorite(key);
}

window.azDefaultProgress = azDefaultProgress;
window.azLoadProgress = azLoadProgress;
window.azSaveProgress = azSaveProgress;
window.azItem = azItem;
window.azSetItemLevel = azSetItemLevel;
window.azItemsByPrefix = azItemsByPrefix;
window.azCountByLevel = azCountByLevel;
window.azUnitProgress = azUnitProgress;
window.azSaveUnitProgress = azSaveUnitProgress;
window.azModuleTouch = azModuleTouch;
window.azIsFavorite = azIsFavorite;
window.azToggleFavorite = azToggleFavorite;
