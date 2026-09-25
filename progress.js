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

   Banco de ejercicios (25/09/2026):
     ejercicios[id] = { v, b, c, m, u, f }
       v = veces hecho · b/c/m = Bien/Casi/Mal acumulados
       u = último resultado (2 Bien · 1 Casi · 0 Mal) · f = fecha
     repaso[id] = fecha → ejercicios con Mal o Casi pendientes
     Resultado: AZ_BIEN = 2 · AZ_CASI = 1 · AZ_MAL = 0
   ============================================================ */

const AZ_BIEN = 2, AZ_CASI = 1, AZ_MAL = 0;

function azDefaultProgress() {
  return {
    items: {},      // itemKey -> { level: 0|1|2, lastSeen: "YYYY-MM-DD" }
    units: {},      // unitId (string) -> { exDone, timeSec, lastStudied }
    modules: {},    // moduleId -> { lastVisited }
    favorites: [],  // itemKeys marcados como favoritos, cross-módulo
    ejercicios: {}, // exId -> { v, b, c, m, u, f }
    repaso: {},     // exId -> fecha en que entró a la cola (Mal o Casi)
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
    ejercicios: loaded.ejercicios || {},
    repaso: loaded.repaso || {},
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

/* ── BANCO DE EJERCICIOS: historial, cola de repaso y selector ── */
function azHoy() { return new Date().toISOString().slice(0, 10); }

function azExercise(id) {
  return AZ_PROGRESS.ejercicios[id] || { v: 0, b: 0, c: 0, m: 0, u: null, f: null };
}

/* Registra un resultado (AZ_BIEN / AZ_CASI / AZ_MAL).
   unitId (opcional) alimenta el ajuste de dificultad de esa unidad. */
function azRecordExercise(id, result, unitId) {
  const e = Object.assign({}, azExercise(id));
  e.v += 1;
  if (result === AZ_BIEN) e.b += 1; else if (result === AZ_CASI) e.c += 1; else e.m += 1;
  e.u = result;
  e.f = azHoy();
  AZ_PROGRESS.ejercicios[id] = e;
  if (result === AZ_BIEN) delete AZ_PROGRESS.repaso[id];
  else if (!AZ_PROGRESS.repaso[id]) AZ_PROGRESS.repaso[id] = e.f;
  if (unitId != null) {
    const u = azUnitProgress(unitId);
    const rec = (u.rec || []).concat([result]).slice(-30);
    u.rec = rec;
    u.exDone = (u.exDone || 0) + 1;
    u.lastStudied = e.f;
  }
  azTouchStudied();
  return e;
}

function azInRepaso(id) { return !!AZ_PROGRESS.repaso[id]; }

/* Dificultad objetivo (1–5) de una unidad según las últimas 30 respuestas.
   Casi cuenta como medio acierto. Sube con > 85 %, baja con < 70 %. */
function azTargetDifficulty(unitId, base) {
  const u = azUnitProgress(unitId);
  let t = u.dif || base || 1;
  const rec = u.rec || [];
  if (rec.length >= 10) {
    const last = rec.slice(-10);
    const acc = last.reduce(function (s, r) { return s + (r === AZ_BIEN ? 1 : r === AZ_CASI ? 0.5 : 0); }, 0) / last.length;
    if (acc > 0.85 && t < 5) t += 1;
    else if (acc < 0.70 && t > 1) t -= 1;
    if (t !== u.dif) { u.dif = t; u.rec = []; azSaveProgress(); }
  }
  return t;
}

function azShuffle(a) {
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; }
  return a;
}

/* Elige una sesión de ejercicios.
   pool: [{ id, tipo, dificultad, grupo? }]  (grupo = frase o palabra de origen)
   opts: {
     n: 12,                      // tamaño de la sesión
     mezcla: { tipo: peso },     // proporción por tipo (vacío = sin preferencia)
     dificultad: 3,              // objetivo; se prefieren los más cercanos
     repaso: 0.25                // fracción máxima de la cola de repaso
   }
   Regla: primero contador más bajo; entre empatados, dificultad más cercana
   al objetivo; entre empatados, al azar. Nunca dos del mismo grupo. */
function azPickExercises(pool, opts) {
  opts = opts || {};
  const n = opts.n || 12;
  const target = opts.dificultad || 1;
  const mezcla = opts.mezcla || {};
  const usados = {}, grupos = {}, out = [];
  const libre = function (ex) { return !usados[ex.id] && !(ex.grupo && grupos[ex.grupo]); };
  const tomar = function (ex) { usados[ex.id] = 1; if (ex.grupo) grupos[ex.grupo] = 1; out.push(ex); };
  const orden = function (lista) {
    return azShuffle(lista.slice()).sort(function (a, b) {
      return (azExercise(a.id).v - azExercise(b.id).v) ||
             (Math.abs((a.dificultad || 1) - target) - Math.abs((b.dificultad || 1) - target));
    });
  };

  // 1. Cola de repaso: los más antiguos primero
  const maxRep = Math.round(n * (opts.repaso == null ? 0.25 : opts.repaso));
  pool.filter(function (ex) { return azInRepaso(ex.id); })
    .sort(function (a, b) { return AZ_PROGRESS.repaso[a.id] < AZ_PROGRESS.repaso[b.id] ? -1 : 1; })
    .forEach(function (ex) { if (out.length < maxRep && libre(ex)) tomar(ex); });

  // 2. Resto según la mezcla de tipos
  const porTipo = {};
  pool.forEach(function (ex) { (porTipo[ex.tipo] = porTipo[ex.tipo] || []).push(ex); });
  const tipos = Object.keys(porTipo);
  const pesos = tipos.map(function (t) { return mezcla[t] != null ? mezcla[t] : (Object.keys(mezcla).length ? 0 : 1); });
  const colas = {};
  tipos.forEach(function (t) { colas[t] = orden(porTipo[t]); });
  let intentos = 0;
  while (out.length < n && intentos < n * 20) {
    intentos++;
    const vivos = tipos.filter(function (t, i) { return pesos[i] > 0 && colas[t].some(libre); });
    if (!vivos.length) break;
    const total = vivos.reduce(function (s, t) { return s + pesos[tipos.indexOf(t)]; }, 0);
    let r = Math.random() * total, elegido = vivos[0];
    for (const t of vivos) { r -= pesos[tipos.indexOf(t)]; if (r <= 0) { elegido = t; break; } }
    const ex = colas[elegido].find(libre);
    if (ex) tomar(ex);
  }
  // 3. Si la mezcla no alcanzó, completar con cualquiera
  if (out.length < n) orden(pool).forEach(function (ex) { if (out.length < n && libre(ex)) tomar(ex); });

  return azShuffle(out);
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
window.AZ_BIEN = AZ_BIEN;
window.AZ_CASI = AZ_CASI;
window.AZ_MAL = AZ_MAL;
window.azExercise = azExercise;
window.azRecordExercise = azRecordExercise;
window.azInRepaso = azInRepaso;
window.azTargetDifficulty = azTargetDifficulty;
window.azPickExercises = azPickExercises;
