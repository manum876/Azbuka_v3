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
     tipo "reglas" → igual que pronunciación, con truco y comparación opcionales
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
      resumen: "Ь y Ъ: no suenan, pero cambian la palabra. Cuándo va cada uno, y el Ь de los verbos.",
      letras: ["Ь", "Ъ"],
      intro: "Estas dos letras no tienen sonido propio, pero cambian cómo suena lo que las rodea. Son de las que más dudas generan al escribir, así que acá va la guía completa.",
      secciones: [
        {
          titulo: "La regla de oro",
          texto: "Ь puede ir al final o en el medio de la palabra. Ъ va solo en el medio, y casi siempre en el mismo lugar: entre un prefijo que termina en consonante y una raíz que empieza con е, ё, ю o я.",
          destacado: "Al final de la palabra va siempre Ь, nunca Ъ."
        },
        {
          titulo: "Ь, trabajo 1: ablandar",
          texto: "Ь ablanda la consonante que tiene adelante, igual que las vocales blandas del módulo anterior. Pasa al final de la palabra (мать, день) y antes de otra consonante (письмо́, то́лько, пальто́). Cambia el significado: брат es «hermano» y брать, «tomar».",
          ejemplos: ["CMR-00301", "CMR-00071", "CMR-00333", "CMR-00043", "CMR-02411"]
        },
        {
          titulo: "Ь, trabajo 2: separar",
          texto: "Dentro de una palabra sin prefijo, Ь separa la consonante de la vocal blanda que sigue: la vocal suena con una y adelante. семья́ se dice «simyá», no «simiá».",
          ejemplos: ["CMR-00378", "CMR-00244", "CMR-01451", "CMR-01863", "CMR-02873"]
        },
        {
          titulo: "Ъ: el separador después del prefijo",
          texto: "Ъ hace el mismo trabajo de separar, pero solo después de un prefijo terminado en consonante (под-, об-, от-, с-, в-…) y antes de е, ё, ю, я: под + е́зд = подъе́зд. Si el prefijo termina en vocal, no hace falta nada: по + е́сть = пое́сть.",
          truco: "Para separar: sin prefijo, Ь (семья́); con prefijo, Ъ (съесть).",
          ejemplos: ["CMR-02121", "CMR-03635", "CMR-03286", "CMR-02269", "CMR-00705"]
        },
        {
          titulo: "Ь, trabajo 3: después de Ж, Ш, Ч, Щ",
          texto: "Estas cuatro letras suenan siempre igual, con o sin Ь, así que acá el Ь es pura gramática. Un adelanto de lo que vas a ver más adelante: los sustantivos femeninos lo llevan (ночь, дочь, мышь) y los masculinos no (врач, нож, мяч).",
          truco: "Después de ж, ш, ч, щ: con Ь es femenino; sin Ь, masculino.",
          ejemplos: ["CMR-00236", "CMR-00834", "CMR-02994", "CMR-00653", "CMR-01807", "CMR-04007"]
        },
        {
          titulo: "Ь en los verbos",
          texto: "La forma de diccionario de un verbo (el infinitivo, como «leer» o «hablar») termina siempre de una de estas tres maneras: en -ть, que es la gran mayoría (чита́ть, говори́ть); en -ти, un grupo chico (идти́, нести́); o en -чь, apenas unos pocos (мочь, помо́чь). De los 1.658 verbos del diccionario de Azbuka, 1.579 terminan en -ть, 65 en -ти y 14 en -чь. Así que el Ь final de -ть y -чь es obligatorio.",
          destacado: "El infinitivo termina en -ть (casi todos), -ти (идти́) o -чь (мочь). Nunca termina en т o ч sola: «читат» o «моч» no existen.",
          truco: "Si termina en ч: verbo con Ь (мочь), sustantivo masculino sin Ь (врач).",
          ejemplos: ["CMR-00332", "CMR-00058", "CMR-00095", "CMR-00988", "CMR-00037", "CMR-00497"]
        }
      ]
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
      id: "u1m11", n: 9, tipo: "reglas",
      titulo: "Reglas de escritura",
      resumen: "Reglas fijas para no dudar: жи–ши, ча–ща, Й o И, Э o Е…",
      intro: "El ruso tiene pocas reglas de escritura, pero son fijas y sin excepciones en las palabras de todos los días. Como en español, donde antes de p y b siempre va m, acá hay letras que mandan sobre la que viene después.",
      bloques: [
        {
          titulo: "La regla de las 7 letras",
          texto: "Después de г, к, х, ж, ш, ч, щ se escribe и, nunca ы. Por eso el plural de кни́га es кни́ги y no «книгы», y se escribe жить aunque suene casi como «жыть». Además, después de ж, ш, ч, щ se escribe а y у, nunca я ni ю: час, чу́до, ча́шка.",
          destacado: "Г К Х Ж Ш Ч Щ + и (nunca ы). Ж Ш Ч Щ + а, у (nunca я, ю).",
          comparacion: "Es como el «antes de p y b se escribe m» del español: una regla de posición, que se cumple siempre.",
          ejemplos: ["CMR-00126", "CMR-00066", "CMR-00187", "CMR-00173", "CMR-00200", "CMR-01447", "CMR-03298"]
        },
        {
          titulo: "Letras que no cambian",
          texto: "Ж, Ш y Ц son siempre duras: aunque después venga и, suena casi como ы (en жизнь y цирк la и suena cerca de «ы»). Ч y Щ son siempre blandas. Por eso con ellas la vocal que sigue no cambia el sonido, y la escritura la decide la regla, no el oído.",
          truco: "Después de ц, en la raíz, se escribe и aunque suene «ы»: цирк, ци́фра.",
          ejemplos: ["CMR-00066", "CMR-02928", "CMR-01938", "CMR-00984", "CMR-05411"]
        },
        {
          titulo: "Ш o Щ",
          texto: "Ш es dura y Щ es blanda, larga, como «sh» con la lengua más adelante. Una pista para escribir: los grupos сч, зч y жч suenan como Щ. Por eso сча́стье (con сч) y мужчи́на (con жч) se dicen con «щ» pero no se escriben con щ.",
          truco: "Si suena Щ y dudás, puede ser сч (сча́стье, счёт) o жч (мужчи́на).",
          ejemplos: ["CMR-02772", "CMR-01693", "CMR-00784", "CMR-00416", "CMR-00431", "CMR-01626"]
        },
        {
          titulo: "Й o И",
          texto: "И es vocal: forma sílaba sola (мир, и́ли). Й es consonante: siempre va pegada a una vocal y nunca forma sílaba (мой, чай, край). Aparece sobre todo después de vocal y al final de muchos adjetivos (но́вый, си́ний). Al principio casi solo en palabras extranjeras: йо́гурт.",
          truco: "Si al separar en sílabas queda sola, es И; si se pega a la vocal de al lado, es Й.",
          ejemplos: ["CMR-00128", "CMR-00044", "CMR-00060", "CMR-01136", "CMR-00073", "CMR-01498", "CMR-05410"]
        },
        {
          titulo: "Ы o И",
          texto: "Es el par del módulo 6: Ы va después de consonante dura (сын, ры́ба, ты́сяча) e И después de blanda (мир, си́ний). Ы nunca va al principio de una palabra rusa.",
          truco: "Ы nunca empieza una palabra y nunca va después de г, к, х, ж, ш, ч, щ.",
          ejemplos: ["CMR-00360", "CMR-01436", "CMR-00226", "CMR-00128"]
        },
        {
          titulo: "Э o Е",
          texto: "Э va casi siempre al principio de la palabra: э́то, э́хо, эта́ж. Después de consonante se escribe Е, incluso en palabras extranjeras donde suena «e» dura: кафе́, тест, поэ́т.",
          truco: "Adentro de la palabra, después de consonante: Е.",
          ejemplos: ["CMR-00012", "CMR-05414", "CMR-01181", "CMR-02986", "CMR-04144", "CMR-00747"]
        },
        {
          titulo: "Escribir lo que no se oye: la palabra de prueba",
          texto: "En el módulo 8 viste que al final la б suena п y que la о sin acento suena а. ¿Cómo saber qué se escribe? Buscá otra forma de la palabra donde después venga una vocal, o donde esa sílaba sea la tónica: зуб → зу́бы (va б), год → го́ды (va д), вода́ → во́ды (va о), окно́ → о́кна (va о).",
          destacado: "Si no estás seguro, buscá la palabra de prueba: otra forma donde la letra se oiga clara.",
          ejemplos: ["CMR-01032", "CMR-00028", "CMR-02429", "CMR-00106", "CMR-00191", "CMR-00370", "CMR-01040"]
        }
      ]
    },
    {
      id: "u1m9", n: 10, tipo: "lectura",
      titulo: "Primeras lecturas",
      resumen: "Leer palabras en voz alta y los primeros diálogos.",
      intro: "Es hora de leer. Primero, palabras sueltas: leelas en voz alta y después comprobá cómo suenan. Después, cuatro diálogos muy cortos para saludar, agradecer y despedirte.",
      dialogos: ["DLG-001", "DLG-006", "DLG-005", "DLG-008"]
    },
    {
      id: "u1m10", n: 11, tipo: "examen",
      titulo: "Evaluación",
      resumen: "Letras, audio, lectura, dictado, escritura y reglas.",
      intro: "Veinticinco ejercicios de toda la unidad, en seis partes. Cada respuesta vale 1 punto; las que salen «Casi», medio. Con 80 % o más, la unidad está aprobada. Si no llegás, te digo qué conviene reforzar antes de seguir.",
      partes: [
        { nombre: "Letras", tipos: ["audio-letra", "vf", "escuchar-letra"], n: 4 },
        { nombre: "Audio", tipos: ["pares"], n: 4 },
        { nombre: "Lectura", tipos: ["significado"], n: 4 },
        { nombre: "Dictado", tipos: ["dictado"], n: 4 },
        { nombre: "Escritura", tipos: ["es-ru", "completar", "ordenar"], n: 4 },
        { nombre: "Reglas", tipos: ["ortografia", "ortografia-completar"], n: 5 }
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

function ejerciciosUnidad1() {
  const L = ALPHABET, out = [];
  const modDe = {};
  UNIDAD_1.modulos.forEach(m => (m.letras || []).forEach(x => { modDe[x] = m.n; }));
  const baraja = (arr, semilla) => {         /* mezcla determinística: mismo orden siempre */
    const a = arr.slice(); let s = semilla;
    for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const otros = (lista, excluir, n, semilla) => baraja(lista.filter(x => excluir.indexOf(x) < 0), semilla).slice(0, n);

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

  /* Todo con audio: el alumno escucha y reconoce la letra en cirílico.
     No hay ejercicios de transliteración: la transliteración es solo
     una ayuda de lectura, no algo que se practique. */
  const conSonido = L.filter(l => !U1_SONIDO[l.upper] || l.upper === "Й");   /* Ъ y Ь no suenan */

  /* 1. Escuchar y elegir la letra */
  conSonido.forEach((l, i) => {
    const vistas = conSonido.filter(x => modDe[x.upper] <= Math.max(modDe[l.upper], 3));
    const mal = otros(vistas, [l], 3, i + 7).map(x => x.upper + " " + x.lower);
    out.push({ id: "U1-ae-" + l.upper, tipo: "audio-letra", forma: "elegir", dificultad: 1, modulo: modDe[l.upper], grupo: l.upper,
      pide: "Escuchá: ¿qué letra es?", audio: l.lower, opciones: baraja([l.upper + " " + l.lower].concat(mal), i + 3), correcta: l.upper + " " + l.lower,
      explicacion: "Sonó la " + l.upper + " (" + l.name + "). " + l.pronunciation + ".", recordar: l.details.tips });
  });

  /* 2. Escuchar la letra y escribirla */
  conSonido.forEach(l => {
    out.push({ id: "U1-el-" + l.upper, tipo: "escuchar-letra", forma: "escribir", dificultad: 2, modulo: modDe[l.upper], grupo: l.upper,
      pide: "Escuchá y escribí la letra.", audio: l.lower, esperadas: [l.lower], idioma: "ru", mayus: true,
      explicacion: "Sonó la " + l.upper + ", que se llama " + l.name + ".", recordar: l.details.tips });
  });

  /* 3. Verdadero o falso con audio: ¿lo que suena es esta letra? */
  conSonido.forEach((l, i) => {
    const otra = otros(conSonido.filter(x => modDe[x.upper] <= Math.max(modDe[l.upper], 3)), [l], 1, i + 11)[0];
    out.push({ id: "U1-vf-" + l.upper + "-v", tipo: "vf", forma: "vf", dificultad: 1, modulo: modDe[l.upper], grupo: l.upper,
      audio: l.lower, afirmacion: "Suena la letra " + l.upper + " " + l.lower + ".", verdadero: true,
      explicacion: "Verdadero: sonó la " + l.upper + " (" + l.name + ")." });
    out.push({ id: "U1-vf-" + l.upper + "-f", tipo: "vf", forma: "vf", dificultad: 1, modulo: modDe[l.upper], grupo: l.upper,
      audio: otra.lower, afirmacion: "Suena la letra " + l.upper + " " + l.lower + ".", verdadero: false,
      explicacion: "Falso: sonó la " + otra.upper + " (" + otra.name + "), no la " + l.upper + "." });
  });

  /* 4. Unir sonidos con letras: grupos de 4 que no se repiten.
     Desordenar las mismas 4 letras no es un ejercicio nuevo, así que
     cada grupo es distinto y todos comparten grupo "unir": como mucho
     uno por sesión. */
  const usadosEm = new Set();
  UNIDAD_1.modulos.filter(m => m.letras).forEach(m => {
    const propias = m.letras.filter(x => !U1_SONIDO[x] || x === "Й");
    const anteriores = conSonido.filter(l => modDe[l.upper] < m.n).map(l => l.upper);
    for (let k = 0; k < propias.length; k += 4) {
      let set = propias.slice(k, k + 4);
      if (set.length < 4) set = set.concat(baraja(anteriores, m.n * 13 + k).filter(x => set.indexOf(x) < 0).slice(0, 4 - set.length));
      if (set.length < 4) continue;
      const clave = set.slice().sort().join("");
      if (usadosEm.has(clave)) continue;
      usadosEm.add(clave);
      const ls = set.map(x => L.find(l => l.upper === x));
      out.push({ id: "U1-em-" + clave, tipo: "unir", forma: "emparejar", dificultad: 1, modulo: m.n, grupo: "unir",
        pide: "Escuchá cada sonido y unilo con su letra.", audioIzq: true, pares: ls.map(l => [l.lower, l.upper + " " + l.lower]),
        explicacion: ls.map(l => l.upper + " (" + l.name + ")").join(" · ") });
    }
  });

  /* 6–12. Ejercicios con palabras */
  palabras.forEach((p, i) => {
    const dif = p.ru.length <= 4 ? 0 : 1;
    const base = { modulo: p.modulo, grupo: p.id, lex: [p.id], oir: p.ru };   /* oir: suena al responder */
    /* dictado */
    out.push(Object.assign({ id: "U1-dic-" + p.id, tipo: "dictado", forma: "escribir", dificultad: 2 + dif,
      pide: "Escuchá y escribí la palabra.", audio: p.ru, esperadas: [p.acento], idioma: "ru",
      explicacion: p.acento + " (" + p.tr + "): " + p.es + ".", recordar: p.nota }, base));
    /* cirílico → español (elegir) */
    const dis = otros(palabras, [p], 3, i + 17).map(x => x.es);
    out.push(Object.assign({ id: "U1-sig-" + p.id, tipo: "significado", forma: "elegir", dificultad: 2,
      pide: "¿Qué significa?", grande: p.acento, audio: p.ru, opciones: baraja([p.es].concat(dis), i + 5), correcta: p.es,
      explicacion: p.acento + " (" + p.tr + ") significa «" + p.es + "»." }, base));
    /* español → cirílico (escribir) */
    out.push(Object.assign({ id: "U1-esru-" + p.id, tipo: "es-ru", forma: "escribir", dificultad: 3 + dif,
      pide: "Escribí en ruso: «" + p.es + "».", audio: p.ru, audioManual: true, pista: "Empieza con " + p.ru[0].toUpperCase() + " y tiene " + p.ru.length + " letras.", esperadas: [p.acento], idioma: "ru",
      explicacion: "Es " + p.acento + " (" + p.tr + ")." }, base));
    /* completar la letra que falta (la letra de la ficha) */
    const pos = p.ru.toLowerCase().indexOf(p.letra.lower);
    if (pos >= 0 && p.ru.length > 1) {
      out.push(Object.assign({ id: "U1-comp-" + p.id + "-" + p.letra.upper, tipo: "completar", forma: "escribir", dificultad: 2,
        pide: "Completá la letra que falta (o escribí la palabra entera).", grande: p.ru.slice(0, pos) + "_" + p.ru.slice(pos + 1), audio: p.ru, pista: p.es,
        esperadas: [p.letra.lower, p.acento], idioma: "ru", completa: p.acento,
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

  /* 14. Ortografía: dos ejercicios por palabra (mismo grupo) */
  U1_ORTO.forEach(([w, mal, hueco, ops, regla, mod, prueba], i) => {
    const limpio = w.replace(/\u0301/g, "");
    const exp = limpio + ". " + U1_REGLAS[regla] + (prueba ? " Palabra de prueba: " + prueba + "." : "");
    out.push({ id: "U1-or-" + limpio, tipo: "ortografia", forma: "elegir", dificultad: 2, modulo: mod, grupo: "or-" + limpio,
      pide: "Escuchá: ¿cuál está bien escrita?", audio: w, opciones: baraja([limpio, mal], i + 31), correcta: limpio, oir: w,
      explicacion: "Se escribe " + exp });
    out.push({ id: "U1-oc-" + limpio, tipo: "ortografia-completar", forma: "elegir", dificultad: 2, modulo: mod, grupo: "or-" + limpio,
      pide: "¿Qué va en el hueco?", grande: hueco, audio: w, opciones: baraja(ops.map(o => o === "—" ? "(nada)" : o), i + 37), correcta: ops[0] === "—" ? "(nada)" : ops[0], oir: w,
      explicacion: "Se escribe " + exp });
  });

  return out;
}


/* ── Ortografía: ¿cuál está bien escrita? / ¿qué letra va? ──
   [palabra correcta con acento, versión mal escrita, hueco, opciones
   (la correcta primero; "—" = no va nada), regla, módulo, prueba?] */
const U1_REGLAS = {
  "fin": "Al final de la palabra va siempre Ь, nunca Ъ.",
  "suave": "Ь ablanda la consonante que tiene adelante.",
  "sep": "Para separar dentro de una palabra sin prefijo va Ь.",
  "pref": "Después de un prefijo terminado en consonante, antes de е, ё, ю, я, va Ъ.",
  "fem": "Después de ж, ш, ч, щ: los femeninos llevan Ь (ночь) y los masculinos no (врач).",
  "verbo": "El infinitivo de los verbos termina en -ть, -ти o -чь: el Ь de -ть y -чь no puede faltar.",
  "siete": "Después de г, к, х, ж, ш, ч, щ se escribe и, nunca ы.",
  "au": "Después de ж, ш, ч, щ se escribe а, у, nunca я, ю.",
  "ц": "Después de ц, en la raíz, se escribe и aunque suene «ы».",
  "сч": "Los grupos сч, зч y жч suenan como щ, pero se escriben así.",
  "щ": "Щ es blanda y Ш es dura.",
  "й": "Й va pegada a una vocal y nunca forma sílaba; и forma sílaba sola.",
  "ы": "Ы va después de consonante dura, И después de blanda; Ы nunca empieza una palabra.",
  "э": "Э va al principio de la palabra; después de consonante se escribe Е.",
  "prueba": "Lo que no se oye claro se escribe como en la palabra de prueba."
};
const U1_ORTO = [
  ["день", "денъ", "ден_", ["ь", "ъ"], "fin", 7], ["мать", "матъ", "мат_", ["ь", "ъ"], "fin", 7],
  ["письмо́", "писмо", "пис_мо", ["ь", "—"], "suave", 7], ["то́лько", "толко", "тол_ко", ["ь", "—"], "suave", 7], ["пальто́", "палто", "пал_то", ["ь", "—"], "suave", 7],
  ["семья́", "семъя", "сем_я", ["ь", "ъ"], "sep", 7], ["статья́", "статъя", "стат_я", ["ь", "ъ"], "sep", 7], ["судья́", "судъя", "суд_я", ["ь", "ъ"], "sep", 7],
  ["пла́тье", "платъе", "плат_е", ["ь", "ъ"], "sep", 7], ["воскресе́нье", "воскресенъе", "воскресен_е", ["ь", "ъ"], "sep", 7],
  ["подъе́зд", "подьезд", "под_езд", ["ъ", "ь"], "pref", 7], ["объявле́ние", "обьявление", "об_явление", ["ъ", "ь"], "pref", 7], ["отъе́зд", "отьезд", "от_езд", ["ъ", "ь"], "pref", 7],
  ["съезд", "сьезд", "с_езд", ["ъ", "ь"], "pref", 7], ["объясни́ть", "обьяснить", "об_яснить", ["ъ", "ь"], "pref", 7],
  ["ночь", "ноч", "ноч_", ["ь", "—"], "fem", 7], ["дочь", "доч", "доч_", ["ь", "—"], "fem", 7], ["мышь", "мыш", "мыш_", ["ь", "—"], "fem", 7],
  ["чита́ть", "читат", "читат_", ["ь", "—"], "verbo", 7], ["говори́ть", "говорит", "говорит_", ["ь", "—"], "verbo", 7],
  ["мочь", "моч", "моч_", ["ь", "—"], "verbo", 7], ["помо́чь", "помоч", "помоч_", ["ь", "—"], "verbo", 7],
  ["врач", "врачь", "врач_", ["—", "ь"], "fem", 7], ["нож", "ножь", "нож_", ["—", "ь"], "fem", 7], ["мяч", "мячь", "мяч_", ["—", "ь"], "fem", 7],
  ["жить", "жыть", "ж_ть", ["и", "ы"], "siete", 9], ["жизнь", "жызнь", "ж_знь", ["и", "ы"], "siete", 9], ["маши́на", "машына", "маш_на", ["и", "ы"], "siete", 9],
  ["ру́сский", "русскый", "русск_й", ["и", "ы"], "siete", 9], ["ма́льчик", "мальчык", "мальч_к", ["и", "ы"], "siete", 9],
  ["час", "чяс", "ч_с", ["а", "я"], "au", 9], ["чай", "чяй", "ч_й", ["а", "я"], "au", 9], ["ча́шка", "чяшка", "ч_шка", ["а", "я"], "au", 9], ["чу́до", "чюдо", "ч_до", ["у", "ю"], "au", 9],
  ["щи", "щы", "щ_", ["и", "ы"], "siete", 9],
  ["цирк", "цырк", "ц_рк", ["и", "ы"], "ц", 9], ["ци́фра", "цыфра", "ц_фра", ["и", "ы"], "ц", 9],
  ["сча́стье", "щастье", "_астье", ["сч", "щ"], "сч", 9], ["мужчи́на", "мущина", "му_ина", ["жч", "щ"], "сч", 9], ["счёт", "щёт", "_ёт", ["сч", "щ"], "сч", 9],
  ["щека́", "шека", "_ека", ["щ", "ш"], "щ", 9], ["я́щик", "яшик", "я_ик", ["щ", "ш"], "щ", 9], ["ша́пка", "щапка", "_апка", ["ш", "щ"], "щ", 9],
  ["но́вый", "новыи", "нов_", ["ый", "ыи"], "й", 9], ["си́ний", "синии", "син_", ["ий", "ии"], "й", 9], ["йо́гурт", "иогурт", "_огурт", ["й", "и"], "й", 9],
  ["край", "краи", "кра_", ["й", "и"], "й", 9], ["и́ли", "йли", "_ли", ["и", "й"], "й", 9],
  ["сын", "син", "с_н", ["ы", "и"], "ы", 9], ["ры́ба", "риба", "р_ба", ["ы", "и"], "ы", 9], ["ты́сяча", "тисяча", "т_сяча", ["ы", "и"], "ы", 9], ["мир", "мыр", "м_р", ["и", "ы"], "ы", 9],
  ["э́то", "ето", "_то", ["э", "е"], "э", 9], ["эта́ж", "етаж", "_таж", ["э", "е"], "э", 9], ["э́хо", "ехо", "_хо", ["э", "е"], "э", 9],
  ["кафе́", "кафэ", "каф_", ["е", "э"], "э", 9], ["тест", "тэст", "т_ст", ["е", "э"], "э", 9],
  ["зуб", "зуп", "зу_", ["б", "п"], "prueba", 9, "зу́бы"], ["хлеб", "хлеп", "хле_", ["б", "п"], "prueba", 9, "хле́бы"], ["год", "гот", "го_", ["д", "т"], "prueba", 9, "го́ды"],
  ["сад", "сат", "са_", ["д", "т"], "prueba", 9, "сады́"], ["друг", "друк", "дру_", ["г", "к"], "prueba", 9, "дру́га"], ["моро́з", "морос", "моро_", ["з", "с"], "prueba", 9, "моро́зы"],
  ["вода́", "вада", "в_да", ["о", "а"], "prueba", 9, "во́ды"], ["окно́", "акно", "_кно", ["о", "а"], "prueba", 9, "о́кна"], ["гора́", "гара", "г_ра", ["о", "а"], "prueba", 9, "го́ры"]
];

/* Mezcla de la sesión: fuerte presencia de escritura */
const U1_MEZCLA = { dictado: 3, "escuchar-letra": 2, completar: 2, "es-ru": 2, ordenar: 2,
  "audio-letra": 1, significado: 1, pares: 1, vf: 1, unir: 1, ortografia: 2, "ortografia-completar": 2 };

window.ejerciciosUnidad1 = ejerciciosUnidad1;
window.U1_MEZCLA = U1_MEZCLA;
