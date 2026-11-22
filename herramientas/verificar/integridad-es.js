// 6b · Integridad de Abecé (22/11/2026): léxico español ↔ unidades ↔ verbos ↔ formas ↔
// frases ↔ diálogos ↔ cultura ↔ lecturas. Lo mismo que integridad.js, para la otra dirección.
// No usa el navegador. Uso: node integridad-es.js
const vm = require('vm'), fs = require('fs'), path = require('path');
const { RAIZ } = require('./comun');
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
const cargar = f => { const s = fs.readFileSync(path.join(RAIZ, 'data', f + '.js'), 'utf8').replace(/^(const|let) /gm, 'var '); vm.runInContext(s, ctx, { filename: f }); };
['data-lexicon-es', 'data-alfabeto-es', 'data-verbos-es', 'data-formas-es', 'data-frases', 'data-cultura-es', 'data-dialogos-es', 'data-lecturas-es'].forEach(cargar);
for (let n = 1; n <= 14; n++) if (fs.existsSync(path.join(RAIZ, 'data', 'data-unidad-es-' + n + '.js'))) cargar('data-unidad-es-' + n);
const L = ctx.LEXICON_ES, P = [], AVISOS = [];
const porId = new Map(L.map(e => [e.id, e]));
const porEs = new Map(); L.forEach(e => { if (!porEs.has(e.es)) porEs.set(e.es, []); porEs.get(e.es).push(e); });

/* 1. Léxico: orden, ids únicos, campos */
for (let i = 1; i < L.length; i++) if (L[i].id <= L[i - 1].id) P.push('Léxico fuera de orden o repetido en ' + L[i].id);
for (const e of L) {
  if (!e.es || !e.ipa || !e.translit) P.push(e.id + ' ' + e.es + ': falta es, ipa o translit (cirílico)');
  if (!e.senses || !e.senses.length || e.senses.some(s => !s.ru)) P.push(e.id + ' ' + e.es + ': acepciones sin ruso');
  if (!e.posNormalized) P.push(e.id + ' ' + e.es + ': sin categoría');
  [...(e.introducedIn || []), ...(e.appearsIn || [])].forEach(u => { if (!(u >= 1 && u <= 14)) P.push(e.id + ' ' + e.es + ': unidad inválida ' + u); });
  if ((e.introducedIn || []).length > 1) P.push(e.id + ' ' + e.es + ': se enseña en más de una unidad ' + JSON.stringify(e.introducedIn));
  (e.expresiones || []).concat(e.partes || []).forEach(id => { if (typeof id === 'string' && /^ESP-/.test(id) && !porId.has(id)) P.push(e.id + ' ' + e.es + ': enlaza a ' + id + ', que no existe'); });
  (e.frases || []).forEach(f => { if (typeof f === 'string' && /^FRE-/.test(f) && !(ctx.FRASES_ES || []).some(x => x.id === f)) P.push(e.id + ': frase ' + f + ' no existe'); });
}
/* 2. Verbos y formas: cada clave es una entrada del léxico */
Object.keys(ctx.VERBOS_ES || {}).forEach(id => { if (!porId.has(id)) P.push('Verbos: ' + id + ' no está en el léxico'); });
Object.keys(ctx.FORMAS_ES || {}).forEach(id => { if (!porId.has(id)) P.push('Formas: ' + id + ' no está en el léxico'); });
const sinTabla = L.filter(e => e.posNormalized === 'verbo' && !/ /.test(e.es) && !(ctx.VERBOS_ES || {})[e.id]);
if (sinTabla.length) AVISOS.push(sinTabla.length + ' verbos de una palabra sin tabla de conjugación (p. ej. ' + sinTabla.slice(0, 4).map(e => e.es).join(', ') + ')');
/* 3. Unidades: cada palabra de un módulo se resuelve (con la función esNVocab de la unidad) y
   las nuevas de la unidad (esNObjetivo) tienen introducedIn N; las que repiten, una unidad anterior */
const ensenadas = new Set();
for (let n = 1; n <= 14; n++) {
  const U = ctx['UNIDAD_ES_' + n], voc = ctx['es' + n + 'Vocab'], amp = ctx['es' + n + 'Ampliacion'], obj = ctx['es' + n + 'Objetivo'];
  if (!U || typeof voc !== 'function') continue;
  (U.modulos || []).forEach(m => {
    const lista = (m.vocab || []).filter(w => typeof w === 'string'), ids = voc(m);
    if (ids.length !== lista.length) {
      const ok = new Set(ids);
      lista.forEach(w => { const r = voc({ vocab: [w] })[0]; if (!r || !porId.has(r)) P.push('U' + n + ' ' + m.id + ': «' + w + '» no se encuentra en el léxico'); });
    }
    ids.concat(typeof amp === 'function' ? amp(m) : []).forEach(id => {
      const e = porId.get(id); if (!e) { P.push('U' + n + ' ' + m.id + ': ' + id + ' no existe'); return; }
      ensenadas.add(id);
      const marcas = (e.introducedIn || []).concat(e.appearsIn || []);
      if (!marcas.length) P.push('U' + n + ' ' + m.id + ': «' + e.es + '» (' + id + ') sin unidad en el léxico');
      else if (Math.min(...marcas) > n) P.push('U' + n + ' ' + m.id + ': «' + e.es + '» se lista en la U' + n + ' pero el léxico la enseña en la U' + Math.min(...marcas));
    });
  });
  if (typeof obj === 'function') obj().forEach(id => { const e = porId.get(id); if (e && !(e.introducedIn || []).includes(n) && !(e.appearsIn || []).includes(n)) P.push('U' + n + ': palabra nueva «' + e.es + '» (' + id + ') sin introducedIn ' + n); });
}
/* 4. Frases, diálogos, cultura y lecturas: las referencias existen */
const frases = new Set((ctx.FRASES_ES || []).map(f => f.id));
const dialogos = ctx.DIALOGOS_ES || [];
const idsD = new Set();
dialogos.forEach(d => {
  if (idsD.has(d.id)) P.push('Diálogo repetido ' + d.id); idsD.add(d.id);
  (d.lineas || []).forEach((l, i) => {
    if (!l.es || !l.ru) P.push(d.id + ' línea ' + (i + 1) + ': falta es o ru');
    (l.lex || []).forEach(id => { if (id && !porId.has(id)) P.push(d.id + ' línea ' + (i + 1) + ': palabra ' + id + ' no existe'); });
    (l.f || []).forEach(f => { if (!frases.has(f)) P.push(d.id + ' línea ' + (i + 1) + ': frase ' + f + ' no existe'); });
  });
});
(ctx.CULTURA_ES || []).forEach(c => (c.dialogos || []).forEach(id => { if (!idsD.has(id)) P.push('Cultura ' + c.id + ': diálogo ' + id + ' no existe'); }));
const lec = ctx.LECTURAS_ES ? (Array.isArray(ctx.LECTURAS_ES) ? ctx.LECTURAS_ES : Object.values(ctx.LECTURAS_ES)) : [];
const idsL = new Set();
JSON.stringify(lec, (k, v) => { if (k === 'id' && typeof v === 'string' && /^LEE-/.test(v)) { if (idsL.has(v)) P.push('Lectura repetida ' + v); idsL.add(v); } return v; });

console.log('Abecé — léxico ' + L.length + ' · verbos ' + Object.keys(ctx.VERBOS_ES || {}).length + ' · formas ' + Object.keys(ctx.FORMAS_ES || {}).length +
  ' · frases ' + frases.size + ' · diálogos ' + dialogos.length + ' · lecturas ' + lec.length + ' · palabras en módulos ' + ensenadas.size);
AVISOS.forEach(a => console.log('  (aviso) ' + a));
if (!P.length) console.log('✓ Abecé: 0 problemas');
else { console.log('✗ ' + P.length + ' problemas:'); P.slice(0, 60).forEach(x => console.log('  ' + x)); }
process.exit(P.length ? 1 : 0);
