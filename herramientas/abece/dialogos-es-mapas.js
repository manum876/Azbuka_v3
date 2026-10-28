/* Abecé: mapas del léxico, las formas y las conjugaciones para dialogos-es.py (28/10/2026) */
const fs=require("fs"),vm=require("vm"),R=process.argv[2],OUT=process.argv[3]||"maps.json";const c={};c.window=c;vm.createContext(c);
for(const f of ["data/data-lexicon-es.js","data/data-formas-es.js","data/data-verbos-es.js"]) vm.runInContext(fs.readFileSync(R+"/"+f,"utf8"),c);
vm.runInContext("this.L=LEXICON_ES;this.I=formasEsIndice();this.V=VERBOS_ES;",c);
const lex={};c.L.forEach(e=>{(lex[e.es.toLowerCase()]=lex[e.es.toLowerCase()]||[]).push({id:e.id,pos:e.posNormalized,propio:e.propio,tr:e.translit});
 if(e.femenino&&e.femenino.es)(lex[e.femenino.es.toLowerCase()]=lex[e.femenino.es.toLowerCase()]||[]).push({id:e.id,pos:e.posNormalized,fem:true,tr:e.femenino.translit});});
const formas={};Object.keys(c.I).forEach(k=>formas[k]=[...new Set(c.I[k].map(x=>x.id))]);
const verb={};Object.entries(c.V).forEach(([id,v])=>{Object.entries(v).forEach(([k,x])=>{(Array.isArray(x)?x:(["impTu","ger","part"].includes(k)?[x]:[])).forEach(f=>{if(!f)return;f=String(f).toLowerCase();(verb[f]=verb[f]||new Set()).add(v.base?null:id)})})});
Object.keys(verb).forEach(k=>verb[k]=[...verb[k]].filter(Boolean));
fs.writeFileSync(OUT,JSON.stringify({lex,formas,verb}));console.log("ok",Object.keys(lex).length);
