/* ============================================================
   DATA-UNIDAD-1.JS — Unidad 1: Alfabeto y pronunciación
   ------------------------------------------------------------
   Versión 25/09/2026 (paso 1: introducción, grupos de letras y
   tarjetas). Contenido propio de la unidad: módulos, textos y qué
   letras entran en cada grupo. Las letras (nombre, sonido, errores,
   consejos, palabras de ejemplo) viven en data-alphabet.js y las
   palabras en el léxico: acá solo se las nombra.

   Cada módulo: { id, n, titulo, tituloRu?, tipo, resumen, ... }
     tipo "intro"  → secciones de texto { titulo, texto }
     tipo "letras" → letras (mayúsculas, en orden de estudio) e intro
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
      titulo: "Vocales con y",
      resumen: "Я, Ё, Ю: una y delante de la vocal.",
      letras: ["Я", "Ё", "Ю"],
      intro: "Estas vocales suenan como una y seguida de vocal: я es ya, ё es yo, ю es yu. Después de una consonante, en lugar de la y la ablandan: ня suena parecido a «ña». La Ё siempre es tónica."
    },
    {
      id: "u1m7", n: 7, tipo: "letras",
      titulo: "Los signos",
      resumen: "Ъ y Ь no suenan, pero cambian la pronunciación.",
      letras: ["Ь", "Ъ"],
      intro: "Estas dos letras no tienen sonido propio. El signo blando Ь ablanda la consonante anterior (брат «hermano», брать «tomar»). El signo duro Ъ separa la consonante de la vocal que sigue y es poco frecuente."
    },
    { id: "u1m8", n: 8, tipo: "pronto", titulo: "Pronunciación", resumen: "Pares de sonidos, reducción de vocales y consonantes finales." },
    { id: "u1m9", n: 9, tipo: "pronto", titulo: "Primeras palabras y diálogos", resumen: "Leer, escuchar y saludar." },
    { id: "u1m10", n: 10, tipo: "pronto", titulo: "Evaluación", resumen: "Lectura, audio, escritura y transliteración." }
  ]
};

function unidad1Modulo(id) { return UNIDAD_1.modulos.find(m => m.id === id) || null; }

window.UNIDAD_1 = UNIDAD_1;
window.unidad1Modulo = unidad1Modulo;
