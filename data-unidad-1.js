/* ============================================================
   DATA-UNIDAD-1.JS — Unidad 1: Alfabeto y pronunciación
   ------------------------------------------------------------
   Versión 25/09/2026 (pasos 1 y 2: introducción, grupos de letras,
   tarjetas, pronunciación y primeras lecturas). Contenido propio de la unidad: módulos, textos y qué
   letras entran en cada grupo. Las letras (nombre, sonido, errores,
   consejos, palabras de ejemplo) viven en data-alphabet.js y las
   palabras en el léxico: acá solo se las nombra.

   Cada módulo: { id, n, titulo, tituloRu?, tipo, resumen, ... }
     tipo "intro"  → secciones de texto { titulo, texto }
     tipo "letras" → letras (mayúsculas, en orden de estudio), intro y,
                    opcionales, secciones de texto y pares de vocales
                    [dura, blanda, sílaba dura, sílaba blanda]
     tipo "pronunciacion" → bloques { titulo, texto, destacado?, pares?, ejemplos? }
                            (pares: { letras, a, b } con IDs del léxico)
     tipo "lectura" → palabras de data-alphabet.js para leer en voz alta
                      y diálogos de data-dialogos.js (por ID)
     tipo "examen" → partes { nombre, tipos (del banco), n } y nota para aprobar
     tipo "pronto" → módulo planificado, todavía sin contenido
   ============================================================ */

const UNIDAD_1 = {
  id: 1,
  titulo: "Alfabeto y pronunciación",
  tituloRu: "Алфави́т и произноше́ние",
  objetivo: "Leer en voz alta cualquier palabra rusa, reconocer las 33 letras en imprenta y escribirlas con el teclado.",
  tiempo: "15–20 horas",
  modulos: [
    {
      id: "u1m1", n: 1, tipo: "intro",
      titulo: "Antes de empezar",
      resumen: "Qué es el cirílico y cómo aprenderlo.",
      secciones: [
        {
          titulo: "El alfabeto cirílico",
          texto: "El ruso se escribe con el alfabeto cirílico, que tiene 33 letras. Nació en el siglo IX a partir del alfabeto griego, por eso algunas letras te van a resultar conocidas. Hoy lo usan también el ucraniano, el bielorruso, el búlgaro, el serbio y el kazajo, entre otros idiomas."
        },
        {
          titulo: "Qué cambia respecto del alfabeto latino",
          texto: "Hay letras que se ven y suenan igual que en español (А, К, М, О, Т), letras que se ven igual pero suenan distinto (la Р es una erre, la Н es una ene) y letras completamente nuevas (Ж, Ш, Щ, Ы). La buena noticia: el ruso se lee casi como se escribe. Una vez que conocés las letras, podés leer en voz alta cualquier palabra, aunque no sepas qué significa."
        },
        {
          titulo: "La sílaba tónica y el acento",
          texto: "En ruso, la sílaba que se pronuncia más fuerte cambia de palabra en palabra y no se deduce de la escritura. Por eso, en Azbuka cada palabra lleva una marca sobre la vocal tónica: мо́ре, вода́. En la vocal tónica la O suena o; fuera de ella suena casi a: молоко́ se dice «malakó». El acento puede cambiar el significado: за́мок es castillo y замо́к es candado.",
          destacado: "Los acentos son solo una ayuda para leer. En ruso real no se escriben, así que en los ejercicios no hace falta que los pongas."
        },
        {
          titulo: "Cómo aprender las letras",
          texto: "Vas a ir por grupos, de lo más fácil a lo más nuevo: primero las letras que ya conocés, después las «falsas amigas» y al final los sonidos que no existen en español. En cada grupo leé las letras, escuchalas, y practicá con las tarjetas hasta reconocerlas sin pensar. Leer palabras en voz alta ayuda más que memorizar la lista."
        },
        {
          titulo: "Tiempo estimado",
          texto: "Entre 15 y 20 horas en total. Con media hora por día, en tres o cuatro semanas leés con soltura. Las letras se aprenden rápido; lo que lleva más tiempo es leer sin detenerte."
        }
      ]
    },
    {
      id: "u1m2", n: 2, tipo: "letras",
      titulo: "Letras amigas",
      resumen: "Se ven y suenan como en español.",
      letras: ["А", "К", "М", "О", "Т"],
      intro: "Estas cinco letras se ven y suenan casi igual que en español. Con ellas ya podés leer palabras como ма́ма, кот o там. Ojo con la О: suena o solo cuando es tónica."
    },
    {
      id: "u1m3", n: 3, tipo: "letras",
      titulo: "Falsas amigas",
      resumen: "Parecen latinas, pero suenan distinto.",
      letras: ["В", "Е", "Н", "Р", "С", "У", "Х"],
      intro: "Son las letras más traicioneras: te parecen conocidas y tu cabeza las lee en español. В es v, Е es ye, Н es n, Р es r, С es s, У es u y Х es j. Leé despacio: ресторан no es «pectopah», es «ristarán»."
    },
    {
      id: "u1m4", n: 4, tipo: "letras",
      titulo: "Letras nuevas",
      resumen: "Formas nuevas, sonidos que ya tenés.",
      letras: ["Б", "Г", "Д", "З", "И", "Й", "Л", "П", "Ф", "Э"],
      intro: "Estas letras tienen formas nuevas, pero sus sonidos existen en español. Solo hay que asociar cada forma con su sonido. Cuidado con la И, que es una i, y con la З, que es una s sonora, como la de «mismo»."
    },
    {
      id: "u1m5", n: 5, tipo: "letras",
      titulo: "Sonidos nuevos",
      resumen: "Sonidos que el español no tiene.",
      letras: ["Ж", "Ц", "Ч", "Ш", "Щ", "Ы"],
      intro: "Acá están los sonidos que no tenemos en español, aunque varios se parecen a cosas que ya decís: la Ш suena como la sh de «show» y la Ж como la ll argentina de «yo». La Ы es la más difícil: escuchala muchas veces."
    },
    {
      id: "u1m6", n: 6, tipo: "letras",
      titulo: "Vocales duras y blandas",
      resumen: "Я, Ё, Ю y los cinco pares de vocales.",
      letras: ["Я", "Ё", "Ю"],
      intro: "Con Я, Ё y Ю ya conocés las diez vocales del ruso. No son diez sonidos sueltos: son cinco pares, y entender los pares te ahorra muchísimo esfuerzo.",
      pares: [["А", "Я", "на", "ня"], ["Э", "Е", "нэ", "не"], ["Ы", "И", "ны", "ни"], ["О", "Ё", "но", "нё"], ["У", "Ю", "ну", "ню"]],
      secciones: [
        {
          titulo: "Cinco pares de vocales",
          texto: "Cada vocal dura tiene su pareja blanda: а–я, э–е, ы–и, о–ё, у–ю. La vocal suena casi igual; lo que cambia es la consonante de antes. Después de una vocal dura la consonante suena normal; después de una blanda, se ablanda (se palataliza): la lengua se apoya en el paladar, como para decir una i."
        },
        {
          titulo: "Como la n y la ñ",
          texto: "En español ya hacés esta diferencia sin darte cuenta: la ñ es una n blanda. «Nana» y «ñaña» se distinguen solo por eso. En ruso pasa lo mismo, pero con casi todas las consonantes: на suena «na» y ня suena «ña»; ма y мя, ло y лё, ту y тю se diferencian igual. Tocá los pares de la tabla y escuchá la diferencia.",
          destacado: "La vocal blanda ablanda la consonante que tiene adelante, como la ñ es una n blanda."
        },
        {
          titulo: "Al principio de la palabra",
          texto: "Cuando no hay consonante delante (al principio de la palabra o después de otra vocal), las vocales blandas suenan con una y adelante: я es «ya», ё es «yo», ю es «yu», е es «ye». Por eso я́блоко se dice «yáblaka» y моя́ se dice «mayá»."
        },
        {
          titulo: "La Й no es vocal",
          texto: "La й (se llama «i kratkoe», i breve) se parece a la и, pero es una consonante: nunca forma sílaba sola, siempre va pegada a una vocal, como la y de «hoy» o de «rey»: мой, чай, но́вый. De hecho, las vocales blandas del principio son й más una vocal: я = й + а, ё = й + о, ю = й + у, е = й + э."
        }
      ]
    },
    {
      id: "u1m7", n: 7, tipo: "letras",
      titulo: "Los signos",
      resumen: "Ъ y Ь no suenan, pero cambian la pronunciación.",
      letras: ["Ь", "Ъ"],
      intro: "Estas dos letras no tienen sonido propio. El signo blando Ь ablanda la consonante anterior (брат «hermano», брать «tomar»). El signo duro Ъ separa la consonante de la vocal que sigue y es poco frecuente."
    },
    {
      id: "u1m8", n: 8, tipo: "pronunciacion",
      titulo: "Pronunciación",
      resumen: "Pares de sonidos, vocales que cambian y consonantes finales.",
      intro: "Ya conocés las 33 letras. Ahora, lo que hace que el ruso suene a ruso: sonidos parecidos que cambian el significado, vocales que se debilitan cuando no son tónicas y consonantes que cambian al final de la palabra.",
      bloques: [
        {
          titulo: "Pares mínimos",
          texto: "Un par mínimo son dos palabras que solo se diferencian en un sonido. Sirven para entrenar el oído: tocá cada palabra y escuchá la diferencia.",
          pares: [
            { letras: "Б / П", a: "CMR-04055", b: "CMR-04037" },
            { letras: "В / Ф", a: "CMR-01856", b: "CMR-01785" },
            { letras: "Д / Т", a: "CMR-00118", b: "CMR-01542" },
            { letras: "Г / К", a: "CMR-00579", b: "CMR-02039" },
            { letras: "Ж / Ш", a: "CMR-05480", b: "CMR-02598" },
            { letras: "Ы / И", a: "CMR-00006", b: "CMR-01127" },
            { letras: "А / Я", a: "CMR-01976", b: "CMR-00448" }
          ]
        },
        {
          titulo: "Con y sin signo blando",
          texto: "La Ь al final ablanda la consonante: la lengua termina apoyada en el paladar. La transliteración no lo muestra (брат y брать se escriben igual, «brat»), así que escuchalas bien.",
          pares: [
            { letras: "т / ть", a: "CMR-00542", b: "CMR-00477" },
            { letras: "с / сь", a: "CMR-02105", b: "CMR-00027" },
            { letras: "л / ль", a: "CMR-00674", b: "CMR-03274" }
          ]
        },
        {
          titulo: "La О átona suena «a»",
          texto: "Solo la О tónica suena o. En cualquier otra sílaba se debilita y suena casi como una a. Por eso молоко́ se dice «malakó»: tres О escritas, una sola que suena o.",
          destacado: "О tónica = o. О sin acento = a.",
          ejemplos: ["CMR-02072", "CMR-00190", "CMR-00370", "CMR-00132", "CMR-02268"]
        },
        {
          titulo: "La Е y la Я átonas suenan «i»",
          texto: "Algo parecido pasa con la Е y la Я antes de la sílaba tónica: suenan casi como una i. сестра́ se dice «sistrá» y язы́к, «yizýk».",
          ejemplos: ["CMR-00982", "CMR-00306", "CMR-00184", "CMR-00916", "CMR-00108"]
        },
        {
          titulo: "Consonantes finales",
          texto: "Al final de la palabra, las consonantes sonoras se ensordecen: б suena п, в suena ф, г suena к, д suena т, ж suena ш y з suena с. Por eso зуб (diente) y суп (sopa) terminan igual: «zup», «sup».",
          ejemplos: ["CMR-01032", "CMR-00028", "CMR-00110", "CMR-00397", "CMR-01130", "CMR-00106"]
        },
        {
          titulo: "Consonantes vecinas",
          texto: "Dentro de la palabra pasa lo mismo cuando una consonante sonora queda antes de una sorda: всё se dice «fsio», вчера́ «fchirá» y ло́дка «lótka».",
          ejemplos: ["CMR-05455", "CMR-00938", "CMR-01919", "CMR-02174"]
        },
        {
          titulo: "Una excepción: la Г que suena «v»",
          texto: "En las terminaciones -ого y -его, la Г se pronuncia v. La vas a ver todo el tiempo: сего́дня (hoy) se dice «sivódnia» y его́ (su, de él) se dice «yivó».",
          ejemplos: ["CMR-00202", "CMR-00041"]
        }
      ]
    },
    {
      id: "u1m9", n: 9, tipo: "lectura",
      titulo: "Primeras lecturas",
      resumen: "Leer palabras en voz alta y los primeros diálogos.",
      intro: "Es hora de leer. Primero, palabras sueltas: leelas en voz alta y después comprobá cómo suenan. Después, cuatro diálogos muy cortos para saludar, agradecer y despedirte.",
      dialogos: ["DLG-001", "DLG-006", "DLG-005", "DLG-008"]
    },
    {
      id: "u1m10", n: 10, tipo: "examen",
      titulo: "Evaluación",
      resumen: "Lectura, audio, escritura y transliteración.",
      intro: "Veinte ejercicios de toda la unidad, en cinco partes. Cada respuesta vale 1 punto; las que salen «Casi», medio. Con 80 % o más, la unidad está aprobada. Si no llegás, te digo qué conviene reforzar antes de seguir.",
      partes: [
        { nombre: "Lectura", tipos: ["letra-sonido", "significado", "falsas-amigas"], n: 4 },
        { nombre: "Audio", tipos: ["escuchar-letra", "pares"], n: 4 },
        { nombre: "Dictado", tipos: ["dictado"], n: 4 },
        { nombre: "Transliteración", tipos: ["transliterar"], n: 4 },
        { nombre: "Escritura", tipos: ["es-ru", "completar", "sonido-letra"], n: 4 }
      ],
      aprobado: 0.8
    }
  ]
};

function unidad1Modulo(id) { return UNIDAD_1.modulos.find(m => m.id === id) || null; }

window.UNIDAD_1 = UNIDAD_1;
window.unidad1Modulo = unidad1Modulo;

/* ============================================================
   BANCO DE EJERCICIOS DE LA UNIDAD 1
   ------------------------------------------------------------
   Los ejercicios se generan con recetas a partir de datos ya
   verificados (data-alphabet.js, el léxico y los pares mínimos de
   arriba), nunca combinando palabras al azar. Cada uno tiene un ID
   estable que sale de la receta y del dato (U1-dic-CMR-00118): el
   progreso (az_progress.ejercicios) se guarda con ese ID.

   Campos: { id, tipo, forma, dificultad, modulo, grupo, ... }
     tipo   → categoría para la mezcla de la sesión (dictado, pares…)
     forma  → cómo se muestra: elegir · escribir · ordenar · vf · emparejar
     modulo → número del módulo desde el que se puede practicar
              (una palabra entra cuando ya se vieron todas sus letras)
     grupo  → origen (letra o palabra): nunca dos del mismo en una sesión
   Requiere ALPHABET y el léxico cargados.
   ============================================================ */
const U1_SONIDO = { "Й": "i breve (la y de «hoy»)", "Ъ": "signo duro, sin sonido", "Ь": "signo blando, sin sonido" };
const U1_LIT = { а:"a", б:"b", в:"v", г:"g", д:"d", е:"ie", ё:"io", ж:"zh", з:"z", и:"i", й:"i", к:"k", л:"l", м:"m", н:"n", о:"o", п:"p", р:"r", с:"s", т:"t", у:"u", ф:"f", х:"j", ц:"ts", ч:"ch", ш:"sh", щ:"sch", ъ:"", ы:"y", ь:"", э:"e", ю:"iu", я:"ia" };
/* Falsas amigas: cómo las leería alguien que ve letras latinas */
const U1_FALSA = { р:"p", н:"h", в:"b", с:"c", у:"y", х:"x" };

function ejerciciosUnidad1() {
  const L = ALPHABET, out = [];
  const modDe = {};
  UNIDAD_1.modulos.forEach(m => (m.letras || []).forEach(x => { modDe[x] = m.n; }));
  const sonido = l => U1_SONIDO[l.upper] || "/" + l.translit + "/";
  const baraja = (arr, semilla) => {         /* mezcla determinística: mismo orden siempre */
    const a = arr.slice(); let s = semilla;
    for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const otros = (lista, excluir, n, semilla) => baraja(lista.filter(x => excluir.indexOf(x) < 0), semilla).slice(0, n);
  const lit = w => w.toLowerCase().split("").map(ch => U1_LIT[ch] != null ? U1_LIT[ch] : ch).join("");

  /* Palabras de la unidad (una vez cada una) */
  const palabras = [];
  L.forEach(l => l.words.forEach(w => {
    if (palabras.some(p => p.id === w.lexId)) return;
    const e = lexComerById(w.lexId);
    if (!e) return;
    const letras = [...new Set(e.ru.toUpperCase().split("").filter(ch => modDe[ch]))];
    palabras.push({ id: w.lexId, ru: e.ru, acento: e.acento || e.ru, tr: e.translit, es: w.meaning, nota: w.note, letra: l,
      modulo: Math.max.apply(null, letras.map(ch => modDe[ch])) });
  }));

  /* 1. Letra → sonido (elegir) */
  L.forEach((l, i) => {
    const vistas = L.filter(x => modDe[x.upper] <= modDe[l.upper]);   /* distractores ya vistos */
    const mal = otros(vistas, [l], 3, i + 7).map(sonido);
    out.push({ id: "U1-ls-" + l.upper, tipo: "letra-sonido", forma: "elegir", dificultad: 1, modulo: modDe[l.upper], grupo: l.upper,
      pide: "¿Cómo suena esta letra?", grande: l.upper + " " + l.lower, opciones: baraja([sonido(l)].concat(mal), i + 3), correcta: sonido(l),
      explicacion: l.upper + " suena " + sonido(l) + ". " + l.pronunciation + ".", recordar: l.details.tips });
  });

  /* 2. Sonido → escribir la letra */
  L.filter(l => !U1_SONIDO[l.upper] || l.upper === "Й").forEach(l => {
    out.push({ id: "U1-se-" + l.upper, tipo: "sonido-letra", forma: "escribir", dificultad: 2, modulo: modDe[l.upper], grupo: l.upper,
      pide: "Escribí la letra que suena " + sonido(l) + ".", esperadas: [l.lower], idioma: "ru", mayus: true,
      explicacion: "Es la " + l.upper + " (" + l.name + "): " + l.pronunciation + ".", recordar: l.details.similar_letters });
  });

  /* 3. Escuchar la letra y escribirla */
  L.filter(l => !U1_SONIDO[l.upper]).forEach(l => {
    out.push({ id: "U1-el-" + l.upper, tipo: "escuchar-letra", forma: "escribir", dificultad: 2, modulo: modDe[l.upper], grupo: l.upper,
      pide: "Escuchá y escribí la letra.", audio: l.lower, esperadas: [l.lower], idioma: "ru", mayus: true,
      explicacion: "Sonó la " + l.upper + ", que se llama " + l.name + ".", recordar: l.details.tips });
  });

  /* 4. Verdadero o falso sobre el sonido de una letra */
  L.forEach((l, i) => {
    const otra = otros(L.filter(x => modDe[x.upper] <= modDe[l.upper] && !U1_SONIDO[x.upper]), [l], 1, i + 11)[0];
    out.push({ id: "U1-vf-" + l.upper + "-v", tipo: "vf", forma: "vf", dificultad: 1, modulo: modDe[l.upper], grupo: l.upper,
      afirmacion: "La letra " + l.upper + " suena " + sonido(l) + ".", verdadero: true,
      explicacion: "Verdadero: " + l.pronunciation + "." });
    out.push({ id: "U1-vf-" + l.upper + "-f", tipo: "vf", forma: "vf", dificultad: 1, modulo: modDe[l.upper], grupo: l.upper,
      afirmacion: "La letra " + l.upper + " suena " + sonido(otra) + ".", verdadero: false,
      explicacion: "Falso: " + l.upper + " suena " + sonido(l) + ". " + sonido(otra) + " es el sonido de la " + otra.upper + "." });
  });

  /* 5. Unir letras con su sonido (de a 4, dentro de cada módulo acumulado) */
  UNIDAD_1.modulos.filter(m => m.letras).forEach(m => {
    const hasta = L.filter(l => modDe[l.upper] <= m.n && !U1_SONIDO[l.upper]);
    const base = m.letras.filter(x => !U1_SONIDO[x]);
    for (let k = 0; k < base.length; k += 2) {
      const propias = base.slice(k, k + 2).map(x => L.find(l => l.upper === x));
      const extra = otros(hasta, propias, 4 - propias.length, m.n * 13 + k);
      const set = propias.concat(extra);
      out.push({ id: "U1-em-" + set.map(l => l.upper).join(""), tipo: "emparejar", forma: "emparejar", dificultad: 1, modulo: m.n, grupo: "em" + m.n + k,
        pide: "Uní cada letra con su sonido.", pares: set.map(l => [l.upper + " " + l.lower, sonido(l)]),
        explicacion: set.map(l => l.upper + " = " + sonido(l)).join(" · ") });
    }
  });

  /* 6–12. Ejercicios con palabras */
  palabras.forEach((p, i) => {
    const dif = p.ru.length <= 4 ? 0 : 1;
    const base = { modulo: p.modulo, grupo: p.id, lex: [p.id] };
    /* dictado */
    out.push(Object.assign({ id: "U1-dic-" + p.id, tipo: "dictado", forma: "escribir", dificultad: 2 + dif,
      pide: "Escuchá y escribí la palabra.", audio: p.ru, esperadas: [p.acento], idioma: "ru",
      explicacion: p.acento + " (" + p.tr + "): " + p.es + ".", recordar: p.nota }, base));
    /* transliterar */
    out.push(Object.assign({ id: "U1-tr-" + p.id, tipo: "transliterar", forma: "escribir", dificultad: 2 + dif,
      pide: "Escribí cómo se lee con letras latinas.", grande: p.acento, esperadas: [p.tr, lit(p.ru)], idioma: "translit",
      explicacion: "Se lee «" + p.tr + "». Letra por letra sería «" + lit(p.ru) + "»: las dos respuestas valen.", recordar: p.nota }, base));
    /* cirílico → español (elegir) */
    const dis = otros(palabras, [p], 3, i + 17).map(x => x.es);
    out.push(Object.assign({ id: "U1-sig-" + p.id, tipo: "significado", forma: "elegir", dificultad: 2,
      pide: "¿Qué significa?", grande: p.acento, audio: p.ru, opciones: baraja([p.es].concat(dis), i + 5), correcta: p.es,
      explicacion: p.acento + " (" + p.tr + ") significa «" + p.es + "»." }, base));
    /* español → cirílico (escribir) */
    out.push(Object.assign({ id: "U1-esru-" + p.id, tipo: "es-ru", forma: "escribir", dificultad: 3 + dif,
      pide: "Escribí en ruso: «" + p.es + "».", pista: "Empieza con " + p.ru[0].toUpperCase() + " y tiene " + p.ru.length + " letras.", esperadas: [p.acento], idioma: "ru",
      explicacion: "Es " + p.acento + " (" + p.tr + ")." }, base));
    /* completar la letra que falta (la letra de la ficha) */
    const pos = p.ru.toLowerCase().indexOf(p.letra.lower);
    if (pos >= 0 && p.ru.length > 1) {
      out.push(Object.assign({ id: "U1-comp-" + p.id + "-" + p.letra.upper, tipo: "completar", forma: "escribir", dificultad: 2,
        pide: "Completá la letra que falta.", grande: p.ru.slice(0, pos) + "_" + p.ru.slice(pos + 1), audio: p.ru, pista: p.es,
        esperadas: [p.letra.lower], idioma: "ru", completa: p.acento,
        explicacion: "Falta la " + p.letra.upper + ": " + p.acento + " (" + p.tr + ").", recordar: p.nota }, base, { grupo: p.id }));
    }
    /* ordenar letras (palabras de 3 a 7 letras) */
    if (p.ru.length >= 3 && p.ru.length <= 7) {
      let fichas = baraja(p.ru.split(""), i + 23);
      if (fichas.join("") === p.ru) fichas = fichas.slice(1).concat(fichas[0]);
      out.push(Object.assign({ id: "U1-ord-" + p.id, tipo: "ordenar", forma: "ordenar", dificultad: 1 + dif,
        pide: "Ordená las letras: «" + p.es + "».", audio: p.ru, fichas, esperada: p.ru,
        explicacion: "Es " + p.acento + " (" + p.tr + ")." }, base));
    }
    /* encontrar el error: lectura con falsas amigas */
    const ff = p.ru.split("").filter(ch => U1_FALSA[ch]);
    if (ff.length) {
      const malo = p.ru.split("").map(ch => U1_FALSA[ch] || U1_LIT[ch] || ch).join("");
      const correcto = p.tr;   /* cómo se lee de verdad (pronunciación figurada) */
      out.push(Object.assign({ id: "U1-err-" + p.id, tipo: "falsas-amigas", forma: "elegir", dificultad: 2,
        pide: "¿Cómo se lee?", grande: p.acento, opciones: baraja([correcto, malo], i + 29), correcta: correcto,
        explicacion: "Se lee «" + correcto + "». La otra opción lee " + (lista => lista.length > 1 ? lista.slice(0, -1).join(", ") + " y " + lista[lista.length - 1] : lista[0])(
          ff.map(ch => ch.toUpperCase()).filter((x, k, a) => a.indexOf(x) === k).map(ch => ch + " como si fuera la " + U1_FALSA[ch.toLowerCase()] + " latina")) + ".",
        recordar: "Falsas amigas: В = v, Н = n, Р = r, С = s, У = u, Х = j." }, base));
    }
  });

  /* 13. Pares mínimos: escuchar y elegir */
  const pm = UNIDAD_1.modulos.find(m => m.id === "u1m8");
  pm.bloques.filter(b => b.pares).forEach(b => b.pares.forEach(par => {
    [par.a, par.b].forEach((id, k) => {
      const e = lexComerById(id), o = lexComerById(k ? par.a : par.b);
      if (!e || !o) return;
      out.push({ id: "U1-pm-" + id + "-" + (k ? par.a : par.b), tipo: "pares", forma: "elegir", dificultad: 2, modulo: 8, grupo: "pm" + par.a, lex: [par.a, par.b],
        pide: "Escuchá: ¿qué palabra es?", audio: e.ru, opciones: [e.acento || e.ru, o.acento || o.ru].sort(), correcta: e.acento || e.ru,
        explicacion: "Sonó " + (e.acento || e.ru) + " (" + e.senses[0].es + "). La otra, " + (o.acento || o.ru) + ", es «" + o.senses[0].es + "». Cambia " + par.letras + "." });
    });
  }));

  return out;
}

/* Mezcla de la sesión: fuerte presencia de escritura */
const U1_MEZCLA = { dictado: 3, "sonido-letra": 2, "escuchar-letra": 1, completar: 2, transliterar: 2, "es-ru": 1, ordenar: 2,
  "letra-sonido": 1, significado: 1, pares: 1, vf: 1, "falsas-amigas": 1, emparejar: 1 };

window.ejerciciosUnidad1 = ejerciciosUnidad1;
window.U1_MEZCLA = U1_MEZCLA;
