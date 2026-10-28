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

   Repaso espaciado (19/10/2026, Contexto §2):
     srs[clave] = { c, p, u?, m? }
       clave: "ej:<id de ejercicio>", "lex:CMR-…", "alfabeto:Б", "regla:<id de sección>"
       c = caja 1–4 (vuelve a 1, 3, 7 o 14 días) · 5 = aprendido, sale de la rotación
       p = fecha en que toca (null si aprendido) · u = unidad · m = fechas de los últimos Mal
     Bien el día que toca (o después) → caja siguiente; Bien antes de tiempo no cuenta.
     Casi → misma caja, vuelve a su plazo. Mal → caja 1, mañana (aunque estuviera aprendido).
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
    srs: {},        // repaso espaciado (19/10/2026): clave -> { c, p, u?, m? }
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
    srs: loaded.srs || null,
    lastStudied: loaded.lastStudied || null
  };
  if (!AZ_PROGRESS.srs) { azRepasoSembrar(); azSaveProgress(); }
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
/* Marcar un nivel. Por defecto es una marca a mano (man: true), que la
   app respeta; con auto = true la pone el semáforo. */
function azSetItemLevel(key, level, auto) {
  const prev = AZ_PROGRESS.items[key] || {};
  AZ_PROGRESS.items[key] = Object.assign({}, prev, { level: level, lastSeen: new Date().toISOString().slice(0, 10), man: !auto });
  azTouchStudied();
}

/* ── SEMÁFORO AUTOMÁTICO (26/09/2026) ─────────────────────────
   Cada resultado de un ejercicio cuenta para las letras o palabras
   que practica (ej.items: "alfabeto:Б", "lex:CMR-00230").
     · No estudiada → Aprendiendo: la primera vez que se practica.
     · Aprendiendo → Dominada: al menos AZ_SEMAFORO.aciertos puntos en
       ejercicios distintos (Bien = 1, Casi = ½), en al menos
       AZ_SEMAFORO.dias días distintos, y el último intento Bien.
     · Dominada → Aprendiendo: AZ_SEMAFORO.fallos Mal en los últimos
       AZ_SEMAFORO.ventana intentos (también si la marcaste a mano).
   Una marca a mano se respeta: el semáforo solo la baja con fallos.
   items[key].ev guarda los últimos 12 intentos { d, r, e }. */
const AZ_SEMAFORO = { aciertos: 3, dias: 2, ventana: 3, fallos: 2 };
function azRegistrarItem(key, result, exId) {
  const hoy = azHoy();
  const it = Object.assign({ level: 0 }, AZ_PROGRESS.items[key]);
  let ev = (it.ev || []).concat([{ d: hoy, r: result, e: exId }]).slice(-12);
  const antes = it.level || 0;
  let nivel = antes === 0 ? 1 : antes;
  if (nivel === 1) {
    const mejor = {};
    ev.forEach(x => { const pts = x.r === AZ_BIEN ? 1 : x.r === AZ_CASI ? 0.5 : 0; mejor[x.e] = Math.max(mejor[x.e] || 0, pts); });
    const puntos = Object.keys(mejor).reduce((a, k) => a + mejor[k], 0);
    const dias = new Set(ev.filter(x => x.r !== AZ_MAL).map(x => x.d)).size;
    if (puntos >= AZ_SEMAFORO.aciertos && dias >= AZ_SEMAFORO.dias && result === AZ_BIEN) nivel = 2;
  } else if (nivel === 2) {
    const ult = ev.slice(-AZ_SEMAFORO.ventana);
    if (ult.filter(x => x.r === AZ_MAL).length >= AZ_SEMAFORO.fallos) { nivel = 1; ev = ult; }
  }
  AZ_PROGRESS.items[key] = Object.assign({}, it, { level: nivel, lastSeen: hoy, ev: ev, man: nivel === antes ? !!it.man : false });
  return nivel !== antes ? { key: key, antes: antes, despues: nivel } : null;
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
/* Abecé (28/10/2026): sus unidades se guardan como "es1", "es2"… para no mezclarse con
   las de Azbuka (units["1"] es la Unidad 1 de Azbuka). Las páginas siguen usando el número. */
function azUnidadClave(id) {
  if (id == null) return id;
  return typeof AZ_DIRECCION !== "undefined" && AZ_DIRECCION.id === "abece" && !/^es/.test(String(id)) ? "es" + id : id;
}
function azUnitProgress(id) {
  const k = String(azUnidadClave(id));
  if (!AZ_PROGRESS.units[k]) AZ_PROGRESS.units[k] = { exDone: 0, timeSec: 0, lastStudied: null };
  return AZ_PROGRESS.units[k];
}
function azSaveUnitProgress(id, data) {
  AZ_PROGRESS.units[String(azUnidadClave(id))] = Object.assign(azUnitProgress(id), data, { lastStudied: new Date().toISOString().slice(0, 10) });
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
function azRecordExercise(id, result, unitId, items, regla) {
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
  const cambios = (items || []).map(k => azRegistrarItem(k, result, id)).filter(Boolean);
  /* Repaso espaciado: el ejercicio, lo que practica y su regla (el examen final no entra) */
  if (unitId !== 14 && azUnidadClave(unitId) !== "es13" && !/^EF-/.test(id)) {   /* examen final: Azbuka 14, Abecé 13 */
    azRepasoAnotar("ej:" + id, result, unitId);
    (items || []).forEach(k => azRepasoAnotar(k, result, unitId));
    if (regla) azRepasoAnotar("regla:" + regla, result, unitId);
  }
  azTouchStudied();
  e.cambios = cambios;   /* cambios de nivel del semáforo (antes / despues) */
  return e;
}

function azInRepaso(id) { return !!AZ_PROGRESS.repaso[id]; }

/* ── REPASO ESPACIADO (19/10/2026) ───────────────────────────
   Cajas de Manu (06/10/2026): 1, 3, 7 y 14 días; después de la de 14,
   aprendido. Ver la cabecera. */
const AZ_REPASO_DIAS = [1, 3, 7, 14];
const AZ_REGLA_FLOJA = { fallos: 2, dias: 7 };   /* una regla está floja con 2 Mal o más en los últimos 7 días */
function azSumarDias(fecha, n) {
  const d = new Date(fecha + "T12:00:00Z"); d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}
function azRepasoAnotar(clave, result, unitId) {
  if (!AZ_PROGRESS.srs) AZ_PROGRESS.srs = {};
  const hoy = azHoy();
  const s = Object.assign({}, AZ_PROGRESS.srs[clave] || {});
  if (unitId != null) s.u = azUnidadClave(unitId);
  if (result === AZ_MAL) {
    s.c = 1; s.p = azSumarDias(hoy, 1);
    s.m = (s.m || []).concat([hoy]).slice(-5);
  } else if (!s.c) {
    s.c = 1; s.p = azSumarDias(hoy, 1);
  } else if (s.c < 5 && s.p && s.p <= hoy) {
    if (result === AZ_BIEN) s.c += 1;
    if (s.c > AZ_REPASO_DIAS.length) { s.c = 5; s.p = null; }
    else s.p = azSumarDias(hoy, AZ_REPASO_DIAS[s.c - 1]);
  }
  AZ_PROGRESS.srs[clave] = s;
  return s;
}
/* Lo que toca hoy (o está atrasado): [{ clave, c, p, u, m }], lo más atrasado primero */
function azRepasoPendiente(prefijo) {
  const hoy = azHoy(), srs = AZ_PROGRESS.srs || {};
  return Object.keys(srs).filter(k => (!prefijo || k.indexOf(prefijo) === 0) && srs[k].p && srs[k].p <= hoy)
    .map(k => Object.assign({ clave: k }, srs[k])).sort((a, b) => a.p < b.p ? -1 : a.p > b.p ? 1 : 0);
}
/* Reglas flojas: con AZ_REGLA_FLOJA.fallos Mal o más en los últimos días; las más falladas primero */
function azReglasFlojas() {
  const desde = azSumarDias(azHoy(), -AZ_REGLA_FLOJA.dias), srs = AZ_PROGRESS.srs || {};
  return Object.keys(srs).filter(k => k.indexOf("regla:") === 0)
    .map(k => ({ id: k.slice(6), u: srs[k].u, fallos: (srs[k].m || []).filter(d => d >= desde).length }))
    .filter(x => x.fallos >= AZ_REGLA_FLOJA.fallos).sort((a, b) => b.fallos - a.fallos);
}
/* Primera vez con repaso espaciado: se arma con lo que ya había. Los ejercicios hechos
   entran en la caja 1 (los que salieron mal, para hoy); las palabras y letras, según el
   semáforo (Dominada → caja 3). */
function azRepasoSembrar() {
  const srs = {}, hoy = azHoy();
  Object.keys(AZ_PROGRESS.ejercicios || {}).forEach(id => {
    const e = AZ_PROGRESS.ejercicios[id]; if (!e.f || /^EF-/.test(id)) return;
    const u = (id.match(/^U(\d+)-/) || [])[1];
    srs["ej:" + id] = { c: 1, p: e.u === AZ_BIEN ? azSumarDias(e.f, 1) : hoy, u: u ? Number(u) : undefined };
  });
  Object.keys(AZ_PROGRESS.items || {}).forEach(k => {
    const it = AZ_PROGRESS.items[k]; if (!it.lastSeen || !it.level) return;
    srs[k] = it.level === 2 ? { c: 3, p: azSumarDias(it.lastSeen, 7) } : { c: 1, p: azSumarDias(it.lastSeen, 1) };
  });
  AZ_PROGRESS.srs = srs;
}

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
   pool: [{ id, tipo, dificultad, grupo?, items? }]  (grupo = frase o palabra de origen)
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
  /* Lo dominado aparece menos: si todo lo que practica un ejercicio ya
     está Dominado, cuenta como si se hubiera hecho una vez más. */
  const peso = function (ex) {
    const dom = ex.items && ex.items.length && ex.items.every(function (k) { return azItem(k).level === 2; });
    return azExercise(ex.id).v + (dom ? 1 : 0);
  };
  const orden = function (lista) {
    return azShuffle(lista.slice()).sort(function (a, b) {
      return (peso(a) - peso(b)) ||
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
window.azRegistrarItem = azRegistrarItem;
window.AZ_SEMAFORO = AZ_SEMAFORO;
window.AZ_REPASO_DIAS = AZ_REPASO_DIAS;
window.AZ_REGLA_FLOJA = AZ_REGLA_FLOJA;
window.azRepasoAnotar = azRepasoAnotar;
window.azRepasoPendiente = azRepasoPendiente;
window.azReglasFlojas = azReglasFlojas;
window.azSumarDias = azSumarDias;
