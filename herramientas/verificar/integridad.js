// 6 · Integridad entre bases (CONTEXTO_PROYECTO.md §9.2 y §10): léxico ↔ Verbos ↔ Casos ↔ Diálogos.
// No usa el navegador. Uso: node integridad.js
const vm = require('vm'), fs = require('fs'), path = require('path');
const { RAIZ } = require('./comun');
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
for (const f of ['data-lexicon', 'data-verbos', 'data-casos', 'data-frases', 'data-dialogos', 'data-cultura', 'data-alphabet']) {
  const s = fs.readFileSync(path.join(RAIZ, 'data', f + '.js'), 'utf8').replace(/^(const|let) /gm, 'var ');
  vm.runInContext(s, ctx, { filename: f });
}
const L = ctx.LEXICON_COMER, V = ctx.VERBOS, C = ctx.CASOS, P = [];
const byId = {}; L.forEach(e => byId[e.id] = e);
const DECL = ['sustantivo', 'adjetivo', 'pronombre', 'determinante', 'numeral'];
const AC = /́/g, VOC = /[аеёиоуыэюяАЕЁИОУЫЭЮЯ]/g;
const vocales = s => (s.replace(AC, '').match(VOC) || []).length;
const falta = s => !!s && !s.includes('-') && !s.includes(' ') && !/ё/i.test(s) && vocales(s) > 1 && !s.includes('\u0301');
// Orden e ids
for (let i = 1; i < L.length; i++) if (L[i].id <= L[i - 1].id) P.push('Léxico fuera de orden en ' + L[i].id);
if (ctx.LEXICON_COMER_META && ctx.LEXICON_COMER_META.totalEntries !== L.length) P.push('totalEntries dice ' + ctx.LEXICON_COMER_META.totalEntries + ' y hay ' + L.length);
// Campos del léxico
for (const e of L) {
  if (!e.acento || !e.translit || !e.ipa) P.push(e.id + ' ' + e.ru + ': falta acento, translit o ipa');
  if (e.acento && e.acento.replace(AC, '') !== e.ru) P.push(e.id + ': acento «' + e.acento + '» no coincide con ru «' + e.ru + '»');
  if (!e.senses || !e.senses.length || e.senses.some(s => !s.es)) P.push(e.id + ' ' + e.ru + ': acepciones incompletas');
  if (e.posNormalized === 'sustantivo' && (!e.gender && e.numberClass !== 'pluraliaTantum' || !['sí', 'no'].includes(e.animate) || !e.numberClass)) P.push(e.id + ' ' + e.ru + ': sustantivo sin género, animacidad o numberClass');
  if (e.posNormalized === 'verbo') {
    if (!e.aspect) P.push(e.id + ' ' + e.ru + ': verbo sin aspecto');
    const par = e.aspectualPartner;
    if (!par || (Array.isArray(par) && !par.length)) P.push(e.id + ' ' + e.ru + ': verbo sin pareja ni SIN_PAREJA');
    for (const x of [].concat(par || [])) if (!String(x).startsWith('SIN_PAREJA') && !(byId[x] && byId[x].posNormalized === 'verbo')) P.push(e.id + ' ' + e.ru + ': pareja inexistente ' + x);
    if (!V[e.id]) P.push(e.id + ' ' + e.ru + ': verbo sin entrada en Verbos');
  }
  if (DECL.includes(e.posNormalized) && !C[e.id]) P.push(e.id + ' ' + e.ru + ': declinable sin entrada en Casos');
}
// Verbos y Casos contra el léxico
for (const id in V) { const e = byId[id]; if (!e) P.push('Verbos: ' + id + ' no está en el léxico'); else { if (e.posNormalized !== 'verbo') P.push('Verbos: ' + id + ' no es verbo en el léxico'); if (V[id].ru !== e.acento) P.push('Verbos: ancla ' + id + ' «' + V[id].ru + '» ≠ «' + e.acento + '»'); } }
for (const id in C) { const e = byId[id]; if (!e) P.push('Casos: ' + id + ' no está en el léxico'); else { if (!DECL.includes(e.posNormalized)) P.push('Casos: ' + id + ' no es declinable en el léxico'); if (C[id].ru !== e.acento) P.push('Casos: ancla ' + id + ' «' + C[id].ru + '» ≠ «' + e.acento + '»'); } }
// Acentos de las formas
const formas = o => Array.isArray(o) ? o.flat(3) : (o && typeof o === 'object' ? Object.values(o).flatMap(formas) : [o]);
let sinAcento = 0;
for (const id in V) for (const f of formas([V[id].presente, V[id].futuro, V[id].pasado, V[id].imperativo]).filter(x => typeof x === 'string')) if (falta(f)) sinAcento++;
for (const id in C) { const c = C[id]; for (const f of formas([c.sg, c.pl, c.m, c.f, c.n, c.formas]).filter(x => typeof x === 'string')) if (falta(f)) sinAcento++; }
if (sinAcento) P.push(sinAcento + ' formas de Verbos o Casos con varias vocales y sin acento');
// Diálogos, frases y cultura: los lex existen
const lexOk = x => x === null || x === 'PROPIO' || !!byId[x];
for (const d of ctx.DIALOGOS) for (const l of d.lineas) for (const x of (l.lex || []).concat(l.vy ? l.vy.lex || [] : [])) if (!lexOk(x)) P.push(d.id + ': lex inexistente ' + x);
for (const f of ctx.FRASES) for (const x of f.lex || []) if (!lexOk(x)) P.push(f.id + ': lex inexistente ' + x);
for (const c of ctx.CULTURA) for (const x of c.lex || []) if (!lexOk(x)) P.push(c.id + ': lex inexistente ' + x);
// Alfabeto
let nAlf = 0;
JSON.stringify(ctx.ALPHABET || [], (k, v) => { if (k === 'lexId' && v) { nAlf++; if (!byId[v]) P.push('Alfabeto: lexId inexistente ' + v); } return v; });
console.log('Léxico ' + L.length + ' · Verbos ' + Object.keys(V).length + ' · Casos ' + Object.keys(C).length + ' · Diálogos ' + ctx.DIALOGOS.length + ' · Frases ' + ctx.FRASES.length + ' · palabras de Alfabeto ' + nAlf);
if (!P.length) console.log('✓ Integridad entre bases: 0 problemas.');
else { console.log('✗ ' + P.length + ' problemas:'); P.slice(0, 60).forEach(x => console.log('  ' + x)); if (P.length > 60) console.log('  … y ' + (P.length - 60) + ' más'); }
process.exit(P.length ? 1 : 0);
