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
  { id: 1, title: "Alfabeto y pronunciación", desc: "Las 33 letras, sonidos y primeras palabras.", href: "azbuka-1.html", lista: true },
  { id: 2, title: "Presentaciones y conversaciones básicas", desc: "Saludar, presentarte, nacionalidades y primeras preguntas.", href: "azbuka-2.html", lista: true },
  { id: 3, title: "Sustantivos, género y números", desc: "Género, plural, números y objetos de todos los días.", href: "azbuka-3.html", lista: true },
  { id: 4, title: "Casos I: Nominativo y Acusativo", desc: "Quién hace qué: el sujeto y el objeto directo.", href: "azbuka-4.html", lista: true },
  { id: 5, title: "Verbos en presente y acciones cotidianas", desc: "Las conjugaciones del presente y la rutina.", href: "azbuka-5.html", lista: true },
  { id: 6, title: "Ubicación, movimiento y caso prepositivo", desc: "Dónde estás y adónde vas.", href: "azbuka-6.html", lista: true },
  { id: 7, title: "Tiempo, fechas y rutina diaria", desc: "Horas, días, meses y tu día a día.", href: "azbuka-7.html", lista: true },
  { id: 8, title: "Pasado y experiencias personales", desc: "Contar lo que pasó: ayer, antes y ahora.", href: "azbuka-8.html", lista: true },
  { id: 9, title: "Futuro y planes", desc: "Hablar del futuro y hacer planes.", href: "azbuka-9.html", lista: true },
  { id: 10, title: "Casos II: Genitivo, Dativo e Instrumental", desc: "Los tres casos que faltan.", href: "azbuka-10.html", lista: true },
  { id: 11, title: "Comunicación cotidiana y ruso del mundo real", desc: "Situaciones reales: compras, trámites, viajes.", href: "azbuka-11.html" },
  { id: 12, title: "Consolidación B1 y comunicación", desc: "Repaso integral y comunicación con soltura.", href: "azbuka-12.html" },
  { id: 13, title: "Examen final", desc: "Evaluación integradora de las 12 unidades.", href: "azbuka-13.html" },
];

/* Módulos de apoyo. Diccionario fue dado de baja (ya no existe
   como módulo independiente) — solo quedan estos 4. desc/icon
   se agregan acá (antes solo vivían en el index.html viejo) para
   que cualquier página que liste los módulos (home, drawer, etc.)
   los lea de una única fuente. icon es el nombre de color fijo
   (no cambia con el tema, ver ESTETICA_AZBUKA.md §2). */
const AZ_MODULES = [
  { id: "diccionario", title: "Diccionario", desc: "Todo el léxico, por tema y por categoría", href: "ficha.html", icon: "orange", glyph: "Сл" },
  { id: "alfabeto", title: "Alfabeto", desc: "Letras, sonidos y caligrafía — consulta libre", href: "alfabeto.html", icon: "yellow", glyph: "Аа" },
  { id: "dialogos", title: "Diálogos", desc: "Conversaciones, frases útiles y notas culturales", href: "dialogos.html", icon: "green", glyph: "Ди" },
  { id: "verbos", title: "Verbos", desc: "Diccionario de verbos y conjugaciones", href: "verbos.html", icon: "cyan", glyph: "Вб" },
  { id: "casos", title: "Casos", desc: "Declinaciones del ruso, los 6 casos", href: "casos.html", icon: "blue", glyph: "Пд" },
  { id: "cuaderno", title: "Cuaderno", desc: "Tus notas y lo que guardás desde la app", href: "cuaderno.html", icon: "purple", glyph: "Тд" },
];

/* Colores de los íconos, en el orden del arcoíris (01/10/2026): Azbuka
   rojo, Diccionario naranja, Alfabeto amarillo, Diálogos verde, Verbos
   celeste, Casos azul, Cuaderno violeta. Sobre el amarillo, el texto va
   oscuro. Todas las páginas los toman de acá con azModuloColor. */
const AZ_ICON_COLORS = { red: "#B5605C", orange: "#C48254", yellow: "#C9B369", green: "#5C9B78", cyan: "#5FA3B8", blue: "#5D7DA6", purple: "#8871A8" };
function azModuloColor(m) {
  const k = m && m.icon;
  return { bg: AZ_ICON_COLORS[k] || "#C9A84C", fg: k === "yellow" ? "#1A1812" : "#fff" };
}

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
   el vocabulario por módulo, todo vive acá. Para encontrar formas
   declinadas o conjugadas (тебе́, говорю́) se usan además
   data-casos.js y data-verbos.js, que se cargan solos si la página
   no los tiene (ver «FORMAS DECLINADAS Y CONJUGADAS» más abajo). */
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
  const base = LEXICON_COMER
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
  /* Formas declinadas y conjugadas (тебе́ → ты, говорю́ → говори́ть).
     Van primero porque son coincidencia exacta. Se saltean las
     palabras que ya aparecen por su forma de diccionario. */
  const ya = new Set(base.map(r => r.id));
  const formas = azBuscarForma(q)
    .filter(f => !ya.has(f.id) && posOk(f.lex.posNormalized))
    .map(f => ({
      id: f.id,
      ru: f.lex.ru,
      acento: f.forma,
      es: f.etiquetas.join(" / ") + " de " + (f.lex.acento || f.lex.ru) + " · " + (f.lex.senses || []).map(s => s.es).join(" · "),
      pos: f.lex.posNormalized,
      gender: f.lex.gender || null,
      forma: f.forma,
      etiquetas: f.etiquetas,
      href: f.modulo + "?id=" + f.id + "&f=" + encodeURIComponent(f.forma)
    }));
  return formas.concat(base);
}

/* ── FORMAS DECLINADAS Y CONJUGADAS ──────────────────────────
   El buscador también encuentra formas: тебе́ (de ты), кни́ги
   (de кни́га), говорю́ (de говори́ть). No hay ningún archivo índice:
   el índice se arma en el momento leyendo data-casos.js (CASOS) y
   data-verbos.js (VERBOS), que siguen siendo la única fuente. Así,
   al agregar una palabra nueva a esos archivos, el buscador la
   encuentra sola.
   Si la página no cargó esos archivos, azBuscarForma los carga la
   primera vez que alguien busca algo y avisa con el evento
   "az-formas" para que la página vuelva a mostrar los resultados.
   Cada resultado de forma lleva al módulo (casos.html o verbos.html)
   con ?id=…&f=forma, y la ficha resalta esa forma en la tabla. */
const AZ_CASOS_ETIQ = ["nominativo", "genitivo", "dativo", "acusativo", "instrumental", "preposicional"];
const AZ_GEN_ETIQ = { m: "masculino", f: "femenino", n: "neutro", pl: "plural" };
const AZ_PERS_ETIQ = ["я", "ты", "он/она", "мы", "вы", "они"];
let AZ_FORMAS = null, AZ_FORMAS_SRC = "", AZ_FORMAS_CARGANDO = false;

function azFormaClave(s) {
  return azNormRu((s || "").toLowerCase()).trim();
}

/* Todas las formas de una palabra con su descripción: [[forma, etiqueta], …] */
function azFormasDe(id) {
  const out = [];
  const add = (f, et) => { if (Array.isArray(f)) { if (f[0]) out.push([f[0], et + " (inanimado)"]); if (f[1]) out.push([f[1], et + " (animado)"]); } else if (f) out.push([f, et]); };
  const d = typeof CASOS !== "undefined" ? CASOS[id] : null;
  if (d) {
    const fila = (row, suf) => (row || []).forEach((f, i) => add(f, AZ_CASOS_ETIQ[i] + suf));
    if (d.tipo === "sustantivo") { fila(d.sg, d.pl ? " singular" : ""); fila(d.pl, d.sg ? " plural" : ""); }
    if (d.tipo === "adjetivo") ["m", "f", "n", "pl"].forEach(g => fila(d[g], " " + AZ_GEN_ETIQ[g]));
    if (d.tipo === "personal" || d.tipo === "serie") fila(d.formas, "");
    if (d.n) (d.n || []).forEach((f, i) => add(f, AZ_CASOS_ETIQ[i] + " tras preposición"));
    if (d.alt) Object.keys(d.alt).forEach(k => add(d.alt[k], "instrumental"));
    if (d.altN) Object.keys(d.altN).forEach(k => add(d.altN[k], "instrumental tras preposición"));
    if (d.corta) ["m", "f", "n", "pl"].forEach(g => add(d.corta[g], "forma corta " + AZ_GEN_ETIQ[g]));
    if (d.loc2) out.push([d.loc2, "locativo"], [d.loc2.split(" ").pop(), "locativo"]);
    if (d.partitivo) out.push([d.partitivo, "partitivo"]);
    if (d.conteo) out.push([d.conteo, "forma de conteo (con 2, 3 y 4)"]);
  }
  const v = typeof VERBOS !== "undefined" ? VERBOS[id] : null;
  if (v) {
    (v.presente || []).forEach((f, i) => add(f, "presente (" + AZ_PERS_ETIQ[i] + ")"));
    (v.futuro || []).forEach((f, i) => add(f, "futuro (" + AZ_PERS_ETIQ[i] + ")"));
    if (v.pasado) ["m", "f", "n", "pl"].forEach(g => add(v.pasado[g], "pasado " + AZ_GEN_ETIQ[g]));
    if (v.imperativo) { add(v.imperativo.ty, "imperativo (ты)"); add(v.imperativo.vy, "imperativo (вы)"); }
  }
  return out;
}

function azIndiceFormas() {
  const src = (typeof CASOS !== "undefined" ? "c" : "") + (typeof VERBOS !== "undefined" ? "v" : "");
  if (AZ_FORMAS && AZ_FORMAS_SRC === src) return AZ_FORMAS;
  const idx = new Map();
  const ids = [].concat(typeof CASOS !== "undefined" ? Object.keys(CASOS) : [], typeof VERBOS !== "undefined" ? Object.keys(VERBOS) : []);
  ids.forEach(id => azFormasDe(id).forEach(([f, et]) => {
    const k = azFormaClave(f);
    if (!idx.has(k)) idx.set(k, []);
    idx.get(k).push([id, f, et]);
  }));
  idx.claves = [...idx.keys()].sort();   /* ordenadas: para buscar por el principio */
  AZ_FORMAS = idx; AZ_FORMAS_SRC = src;
  return idx;
}

/* Carga data-casos.js y data-verbos.js si la página no los tiene. */
function azCargarFormas() {
  if (AZ_FORMAS_CARGANDO) return;
  const faltan = [];
  if (typeof CASOS === "undefined") faltan.push("data/data-casos.js");
  if (typeof VERBOS === "undefined") faltan.push("data/data-verbos.js");
  if (!faltan.length) return;
  AZ_FORMAS_CARGANDO = true;
  let pendientes = faltan.length;
  faltan.forEach(src => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = s.onerror = () => {
      if (--pendientes === 0) { AZ_FORMAS_CARGANDO = false; window.dispatchEvent(new Event("az-formas")); }
    };
    document.head.appendChild(s);
  });
}

/* Busca formas que coincidan con lo escrito o que empiecen así
   (sin importar acento ni е/ё): «скаж» ya encuentra скажу́, скажет…
   Primero van las coincidencias exactas; después, las que empiezan
   igual. De cada palabra se muestra la forma más corta que coincide.
   Devuelve [{ id, lex, forma, etiquetas: [...], modulo, exacta }] */
function azBuscarForma(q) {
  const k = azFormaClave(q);
  if (!k || typeof lexComerById !== "function") return [];
  azCargarFormas();
  const idx = azIndiceFormas();
  const claves = idx.claves || [];
  /* primera clave >= k (búsqueda binaria) y de ahí en adelante mientras empiecen con k */
  let lo = 0, hi = claves.length;
  while (lo < hi) { const m = (lo + hi) >> 1; if (claves[m] < k) lo = m + 1; else hi = m; }
  const porId = new Map();
  for (let i = lo; i < claves.length && claves[i].startsWith(k); i++) {
    const clave = claves[i], exacta = clave === k;
    idx.get(clave).forEach(([id, f, et]) => {
      const r = porId.get(id);
      /* se queda con la exacta o, si no hay, con la forma más corta */
      if (!r || (exacta && !r.exacta) || (!r.exacta && !exacta && clave.length < r.largo)) {
        porId.set(id, { id, forma: f, etiquetas: [et], exacta, largo: clave.length });
      } else if (r.forma === f && r.etiquetas.indexOf(et) < 0) {
        r.etiquetas.push(et);
      }
    });
    if (porId.size > 60) break;
  }
  return [...porId.values()]
    .sort((a, b) => (b.exacta - a.exacta) || (a.largo - b.largo))
    .slice(0, 20)
    .map(r => {
      r.lex = lexComerById(r.id);
      r.modulo = typeof CASOS !== "undefined" && CASOS[r.id] ? "casos.html" : "verbos.html";
      return r;
    }).filter(r => r.lex);
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

/* ── LETRAS EN NEGRITA (25/09/2026) ──────────────────────────
   En los textos explicativos, cuando se nombra una letra (latina o
   cirílica) va en negrita, así no se confunde con una palabra de una
   letra. azFmt(texto) devuelve lo que se pasa a React:
     · **x** en el texto → <b>x</b> (letras latinas, grupos como «сч»
       o terminaciones como «-ть»);
     · además, toda letra cirílica suelta (Б, я, «в-») va en negrita
       sola, sin marcarla, salvo que esté dentro de una frase rusa
       (al lado de otra palabra rusa: «я из…», «а у тебя́»).
   Usar solo en texto explicativo en español, nunca en texto ruso
   (frases, diálogos), donde и, в, я son palabras. */
function azFmt(texto) {
  if (texto == null) return texto;
  const h = window.React && React.createElement;
  /* {я}: palabra rusa de una letra que NO va en negrita (02/10/2026): я, и, в, с, у… cuando son palabras */
  const partes = String(texto).split(/(\*\*[^*]+\*\*|\{[А-Яа-яЁё\u0301]{1,3}\})/g);
  const out = [];
  /* ¿La letra suelta está dentro de una frase rusa? (al lado de una palabra
     rusa de 2 letras o más: «я из…», «а у тебя́») → es una palabra, no una letra */
  const W = /[А-Яа-яЁё\u0301]/;
  const vecina = (t, i, paso) => {
    let j = i;
    for (let vuelta = 0; vuelta < 4; vuelta++) {
      while (j >= 0 && j < t.length && /[\s,.;:!?«»"()—–…]/.test(t[j])) j += paso;
      let n = 0;
      while (j >= 0 && j < t.length && (W.test(t[j]) || t[j] === "-")) { if (W.test(t[j]) && t[j] !== "\u0301") n++; j += paso; }
      if (n >= 2) return true;      /* palabra rusa al lado: es una frase */
      if (n === 0) return false;    /* al lado no hay nada ruso */
      /* n === 1: otra letra o palabra de una letra; seguir mirando */
    }
    return false;
  };
  partes.forEach((p, i) => {
    if (!p) return;
    if (/^\*\*[^*]+\*\*$/.test(p)) { const x = p.slice(2, -2).replace(/\{([А-Яа-яЁё\u0301]{1,3})\}/g, "$1"); out.push(h ? h("b", { key: "b" + i }, x) : x); return; }
    if (/^\{[А-Яа-яЁё\u0301]{1,3}\}$/.test(p)) { out.push(p.slice(1, -1)); return; }
    const rx = /(?<![A-Za-zА-Яа-яЁё\u0301])[А-Яа-яЁё]\u0301?(?![A-Za-zА-Яа-яЁё\u0301])/g;
    let ult = 0, m;
    while ((m = rx.exec(p))) {
      const ini = m.index, fin = m.index + m[0].length;
      if (vecina(p, ini - 1, -1) || vecina(p, fin, 1)) continue;
      if (ini > ult) out.push(p.slice(ult, ini));
      out.push(h ? h("b", { key: "c" + i + "-" + ini }, m[0]) : m[0]);
      ult = fin;
    }
    if (ult < p.length) out.push(p.slice(ult));
  });
  return out;
}
/* El mismo texto sin las marcas (para búsquedas o atributos) */
function azSinMarcas(texto) { return String(texto == null ? "" : texto).replace(/\*\*/g, ""); }

/* ── VOZ (compartida por toda la app, 26/09/2026) ─────────────
   ru-RU a 0,85, sin la marca de acento (algunas voces la leen mal).
   genero ("m" / "f"): si el teléfono le deja a la web una voz rusa de
   hombre y otra de mujer, cada personaje usa la suya; además se cambia
   siempre el tono, porque el iPhone solo expone la voz predeterminada
   de cada idioma (hombre 0,7 / mujer 1,25; con voz propia, 0,9 / 1,05).
     azHablarRu(texto, genero?)
     azHablarSecuencia([{ texto, genero }], alEmpezarLinea?, alTerminar?)
     azCallar() */
const AZ_VOZ_F = /milena|katya|katerina|anna|irina|alena|elena|tatyana|female|женск/i;
const AZ_VOZ_M = /yuri|maxim|pavel|dmitr|male|мужск/i;
try { if ("speechSynthesis" in window) { window.speechSynthesis.getVoices(); window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices(); } } catch (e) {}
function azVozPara(genero) {
  try {
    const ru = window.speechSynthesis.getVoices().filter(v => /^ru/i.test(v.lang));
    if (genero === "f") return ru.find(v => AZ_VOZ_F.test(v.name)) || null;
    if (genero === "m") return ru.find(v => AZ_VOZ_M.test(v.name) && !AZ_VOZ_F.test(v.name)) || null;
  } catch (e) {}
  return null;
}
function azFraseVoz(texto, genero) {
  const u = new SpeechSynthesisUtterance(String(texto).replace(/\u0301/g, ""));
  u.lang = "ru-RU"; u.rate = 0.85;
  const v = azVozPara(genero);
  if (v) { u.voice = v; u.lang = v.lang; }
  if (genero === "m") u.pitch = v ? 0.9 : 0.7;
  else if (genero === "f") u.pitch = v ? 1.05 : 1.25;
  return u;
}
/* azVozTurno (03/10/2026): cada audio nuevo o cada ■ cambia el turno; una
   secuencia que quedó de un turno anterior ya no sigue con la línea siguiente. */
let azVozTurno = 0;
function azHablarRu(texto, genero) {
  try {
    if (!texto || !("speechSynthesis" in window)) return;
    azVozTurno++;
    window.speechSynthesis.cancel();
    window.speechSynthesis.resume();
    window.speechSynthesis.speak(azFraseVoz(texto, genero));
  } catch (e) {}
}
function azHablarSecuencia(items, alEmpezarLinea, alTerminar) {
  /* Encadenadas: cada línea empieza cuando termina la anterior. En iPhone,
     encolar varias de golpe hace que solo suene la primera. */
  try {
    if (!("speechSynthesis" in window)) return;
    const turno = ++azVozTurno;
    window.speechSynthesis.cancel();
    window.speechSynthesis.resume();
    let i = 0;
    const siguiente = () => {
      if (turno !== azVozTurno) return;        /* se tocó ■ u otro audio: no seguir */
      if (i >= items.length) { if (alTerminar) alTerminar(); return; }
      const k = i++;
      const u = azFraseVoz(items[k].texto, items[k].genero);
      u.onstart = () => { if (alEmpezarLinea) alEmpezarLinea(k); };
      u.onend = () => setTimeout(siguiente, 250);
      u.onerror = () => setTimeout(siguiente, 250);
      window.speechSynthesis.speak(u);
    };
    setTimeout(siguiente, 60);
  } catch (e) {}
}
/* ■ Detener (03/10/2026): corta la secuencia (turno nuevo) y, como el iPhone a
   veces no corta con cancel() solo, primero pausa; después deja la voz lista. */
function azCallar() {
  azVozTurno++;
  try {
    const s = window.speechSynthesis;
    s.pause(); s.cancel();
    setTimeout(() => { try { s.cancel(); s.resume(); } catch (e) {} }, 60);
  } catch (e) {}
}

/* ── CUADERNO (26/09/2026) ────────────────────────────────────
   Notas personales, guardadas en az_cuaderno:
     { v: 1, secciones: [{ id, titulo, fija?, notas: [
         { id, texto, fuente: { titulo, href } | null, creada, editada } ] }] }
   La sección "bandeja" («Sin ordenar») siempre existe y no se borra:
   ahí cae todo lo que se manda desde otras pantallas.
     azCuadernoLeer() → el cuaderno (lo crea si no existe)
     azCuadernoGuardar(cuaderno)
     azCuadernoAgregar(texto, fuente?) → agrega una nota a «Sin ordenar» */
function azCuadernoNuevo() {
  return { v: 1, secciones: [{ id: "bandeja", titulo: "Sin ordenar", fija: true, notas: [] }] };
}
async function azCuadernoLeer() {
  const c = await azGet("az_cuaderno", null);
  if (!c || !Array.isArray(c.secciones)) return azCuadernoNuevo();
  if (!c.secciones.some(s => s.id === "bandeja")) c.secciones.unshift({ id: "bandeja", titulo: "Sin ordenar", fija: true, notas: [] });
  return c;
}
async function azCuadernoGuardar(c) {
  await azSet("az_cuaderno", c);
  try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) {}
}
function azId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
async function azCuadernoAgregar(texto, fuente) {
  const c = await azCuadernoLeer();
  const hoy = new Date().toISOString();
  c.secciones.find(s => s.id === "bandeja").notas.unshift({ id: azId(), texto: String(texto || "").trim(), fuente: fuente || null, creada: hoy, editada: hoy });
  await azCuadernoGuardar(c);
  return c;
}

/* ── DÓNDE QUEDASTE (26/09/2026) ──────────────────────────────
   Cada unidad guarda el último módulo abierto en az_ultimo, y el
   inicio lo muestra en la tarjeta «Seguir estudiando».
     { unidad, n, total, titulo, href, fecha } */
async function azGuardarUltimo(u) { await azSet("az_ultimo", Object.assign({ fecha: new Date().toISOString() }, u)); }
async function azLeerUltimo() { return await azGet("az_ultimo", null); }

/* ── COPIA DE SEGURIDAD DE TODO (26/09/2026) ──────────────────
   Un solo archivo con todo lo que la app guarda en el teléfono
   (todas las claves az_…): progreso de unidades, letras y palabras,
   ejercicios hechos, cuaderno, dónde quedaste y preferencias.
     azCopiaDatos() → { app: "azbuka", tipo: "copia", v: 1, fecha, datos: { clave: valor } }
     azRestaurarDatos(copia) → reemplaza todo lo guardado por la copia.
       También acepta las copias viejas del cuaderno solo ({ secciones }).
   AzCopiaSeguridad({ c }) → los dos botones, listos para cualquier página. */
function azCopiaDatos() {
  const datos = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.indexOf("az_") === 0) datos[k] = localStorage.getItem(k);
  }
  return { app: "azbuka", tipo: "copia", v: 1, fecha: new Date().toISOString(), datos };
}
function azRestaurarDatos(copia) {
  if (copia && Array.isArray(copia.secciones)) { localStorage.setItem("az_cuaderno", JSON.stringify(copia)); return "cuaderno"; }
  if (!copia || copia.app !== "azbuka" || !copia.datos) throw new Error("formato");
  const viejas = [];
  for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && k.indexOf("az_") === 0) viejas.push(k); }
  viejas.forEach(k => localStorage.removeItem(k));
  Object.keys(copia.datos).forEach(k => { if (k.indexOf("az_") === 0) localStorage.setItem(k, copia.datos[k]); });
  try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) {}
  return "todo";
}
/* Devuelve true si la copia salió (compartida o descargada) y false si
   se canceló. Si salió, anota en az_copia la fecha y la firma del
   progreso (02/10/2026), para el recordatorio de copia (avisos.js). */
async function azGuardarCopia() {
  const nombre = "azbuka-copia-" + new Date().toISOString().slice(0, 10) + ".json";
  const blob = new Blob([JSON.stringify(azCopiaDatos())], { type: "application/json" });
  let ok = false;
  try {
    const file = new File([blob], nombre, { type: "application/json" });
    if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: "Copia de Azbuka" }); ok = true; }
  } catch (e) { if (e && e.name === "AbortError") return false; }
  if (!ok) {
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = nombre;
    document.body.appendChild(a); a.click(); a.remove();
  }
  await azSet("az_copia", { fecha: new Date().toISOString(), firma: azFirmaProgreso() });
  return true;
}

/* Firma del progreso (02/10/2026): cambia solo si cambió lo que vale la
   pena guardar (ejercicios, letras y palabras, unidades, favoritos y
   cuaderno), no por abrir un módulo. */
function azFirmaProgreso() {
  let p = {};
  try { p = JSON.parse(localStorage.getItem("az_progress") || "{}") || {}; } catch (e) {}
  const s = JSON.stringify([p.items || {}, p.ejercicios || {}, p.units || {}, p.favorites || []]) + (localStorage.getItem("az_cuaderno") || "");
  let x = 5381;
  for (let i = 0; i < s.length; i++) x = ((x << 5) + x + s.charCodeAt(i)) | 0;
  return (x >>> 0).toString(36) + "-" + s.length;
}
function AzCopiaSeguridad({ c }) {
  const h = React.createElement;
  const ref = htmPreact.useRef(null);
  const restaurar = e => {
    const f = e.target.files && e.target.files[0]; e.target.value = "";
    if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      let copia;
      try { copia = JSON.parse(r.result); } catch (err) { alert("Ese archivo no es una copia de Azbuka."); return; }
      const esVieja = copia && Array.isArray(copia.secciones);
      if (!esVieja && (!copia || copia.app !== "azbuka")) { alert("Ese archivo no es una copia de Azbuka."); return; }
      const cuando = copia.fecha ? " del " + new Date(copia.fecha).toLocaleDateString("es-AR") : "";
      const msg = esVieja
        ? "Esta es una copia solo del cuaderno. ¿Reemplazar tu cuaderno actual? El progreso no se toca."
        : "¿Restaurar la copia" + cuando + "? Se reemplazan tus notas y todo tu progreso por los de la copia.";
      if (!confirm(msg)) return;
      try { azRestaurarDatos(copia); location.reload(); } catch (err) { alert("No se pudo restaurar la copia."); }
    };
    r.readAsText(f);
  };
  const btn = { flex: 1, padding: "11px 14px", borderRadius: 10, border: `1px solid ${c.border}`, background: c.bg3, color: c.text, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" };
  return h("div", null,
    h("div", { style: { fontSize: 13.5, color: c.textMuted, lineHeight: 1.6 } },
      "Todo lo que hacés en Azbuka (tus notas y tu progreso en unidades, letras y ejercicios) se guarda en este teléfono. Guardá una copia de vez en cuando, en Archivos o mandándotela por mail: si se borran los datos del navegador o cambiás de teléfono, la restaurás y seguís donde estabas."),
    h("div", { style: { display: "flex", gap: 8, marginTop: 12 } },
      h("button", { style: btn, onClick: azGuardarCopia }, "Guardar copia"),
      h("button", { style: btn, onClick: () => ref.current && ref.current.click() }, "Restaurar copia")),
    h("input", { ref, type: "file", accept: "application/json,.json", style: { display: "none" }, onChange: restaurar }));
}

/* ── GUARDAR EN EL CUADERNO DESDE CUALQUIER PANTALLA (26/09/2026) ──
   azGuardarEnCuaderno(texto, fuente?) agrega una nota a «Sin ordenar»
   y avisa con el cartel «Guardado en el cuaderno» (lo muestra el shell).
   Sin fuente, usa la pantalla actual: window.azFuenteActual() si la
   página la define (las unidades dicen en qué módulo estás), o el título. */
function azFuentePagina() {
  let titulo = "";
  try { if (typeof window.azFuenteActual === "function") titulo = window.azFuenteActual(); } catch (e) {}
  if (!titulo) titulo = document.title.replace(/^Азбука\s*[—-]\s*/, "");
  const href = (location.pathname.split("/").pop() || "index.html") + location.search;
  return { titulo, href };
}
async function azGuardarEnCuaderno(texto, fuente) {
  const t = String(texto || "").trim();
  if (!t) return;
  await azCuadernoAgregar(t, fuente || azFuentePagina());
  window.dispatchEvent(new CustomEvent("az-cuaderno-guardado"));
}

/* ── BLINDAJE (02/10/2026) ───────────────────────────────────
   1. Service worker (sw.js): la app funciona sin internet y los datos
      se bajan una sola vez. Se registra desde todas las páginas.
   2. Transliteración (Ajustes): az_translit = "si" | "no". Con "no",
      <html> lleva la clase az-sin-tl y core.css oculta todo lo que
      tiene la clase az-tl. Una página que siempre la muestra declara
      <html data-tl="siempre"> (Unidad 1 y Alfabeto: ahí la
      pronunciación es lo que se aprende). Los interruptores propios
      (Transliteración en los diálogos) arrancan apagados con "no". */
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  window.addEventListener("load", () => { navigator.serviceWorker.register("sw.js").catch(() => {}); });
}
function azTranslitVisible() {
  if (document.documentElement.getAttribute("data-tl") === "siempre") return true;
  try { return JSON.parse(localStorage.getItem("az_translit") || '"si"') !== "no"; } catch (e) { return true; }
}
function azAplicarTranslit() {
  document.documentElement.classList.toggle("az-sin-tl", !azTranslitVisible());
}
azAplicarTranslit();
window.azTranslitVisible = azTranslitVisible;
window.azAplicarTranslit = azAplicarTranslit;
window.azFirmaProgreso = azFirmaProgreso;

/* ── CAPA FIJA (05/10/2026) ───────────────────────────────────
   Para todo lo que se abre encima de la página (avisos, desafío del
   día, prácticas): bloquea el scroll del fondo (en iPhone hace falta
   fijar el body, no alcanza con overflow:hidden) y ajusta la capa al
   área que de verdad se ve (visualViewport), así cuando se abre el
   teclado la capa queda entre el teclado y el borde de arriba, sin
   recortarse. Devuelve la función para soltarla.
   Uso con un ref de callback:
     const capa = useRef(null);
     ref: el => { if (el) { if (!capa.current) capa.current = azCapaFija(el); } else if (capa.current) { capa.current(); capa.current = null; } } */
let AZ_CAPAS = 0, AZ_CAPAS_Y = 0;
function azCapaFija(el) {
  const html = document.documentElement, body = document.body;
  if (AZ_CAPAS++ === 0) {
    AZ_CAPAS_Y = window.scrollY || 0;
    Object.assign(body.style, { position: "fixed", top: -AZ_CAPAS_Y + "px", left: "0", right: "0", width: "100%" });
    html.style.overflow = "hidden";
  }
  const vv = window.visualViewport;
  const ajustar = () => { if (!el || !vv) return; el.style.top = vv.offsetTop + "px"; el.style.height = vv.height + "px"; el.style.bottom = "auto"; };
  ajustar();
  if (vv) { vv.addEventListener("resize", ajustar); vv.addEventListener("scroll", ajustar); }
  return () => {
    if (vv) { vv.removeEventListener("resize", ajustar); vv.removeEventListener("scroll", ajustar); }
    if (--AZ_CAPAS === 0) {
      Object.assign(body.style, { position: "", top: "", left: "", right: "", width: "" });
      html.style.overflow = "";
      window.scrollTo(0, AZ_CAPAS_Y);
    }
  };
}
/* El ref de callback, ya armado: h("div", { ref: azRefCapa(capa) }) con capa = useRef(null) */
function azRefCapa(capa) {
  return el => { if (el) { if (!capa.current) capa.current = azCapaFija(el); } else if (capa.current) { capa.current(); capa.current = null; } };
}
window.azCapaFija = azCapaFija;
window.azRefCapa = azRefCapa;
