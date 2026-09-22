/* ============================================================
   DATA-LEXICON-COMER.JS — Léxico central (5.000 palabras, Comer + FreeDict)
   TANDA 1 de ~20 · 250 palabras · Grupo A1 (match directo FreeDict + FreeDict
   inverso), ordenadas por frecuencia (Rank de Comer).

   Fuentes:
   - Comer 5000-word frequency list (PDXScholar, Portland State University) —
     todos los 33 campos originales se preservan intactos en comer[].
   - FreeDict rus-spa / spa-rus dictionaries (CC BY-SA 3.0, freedict.org) —
     usado para traducción directa (confiable) y como referencia de contraste
     para redactar las definiciones en español (NO copiadas literalmente:
     redactadas o adaptadas para audiencia A1-B1).

   Metodología (ver MIGRACION_LEXICO.md para detalle):
   1. COSECHA (automática): traducción directa + IPA/transliteración + los
      33 campos de Comer. Sin selección de sentido automática (esa fue la
      fuente de errores en el primer intento — quedó descartada).
   2. REDACCIÓN (manual): cada definición fue escrita o adaptada a mano,
      en una oración clara y breve, verificando que corresponda al sentido
      principal de la palabra. Ninguna definición quedó con el texto
      enciclopédico crudo de FreeDict.

   Esquema por entrada:
   - id: identificador estable "CMR-NNNNN" (basado en Rank de Comer)
   - ru: lema en cirílico
   - posNormalized: 'sustantivo'|'verbo'|'adjetivo'|'otro'
   - translit: transliteración práctica (sílaba tónica en mayúscula)
   - ipa: IPA cruda de FreeDict (si está disponible)
   - senses[]: acepciones {es, definitionEs, source}
   - learningStatus: 'taught'|'incidental'|'dictionary_only' (vacío por ahora)
   - introducedIn / appearsIn: relación con unidades/módulos (vacío por ahora)
   - comer[]: fila(s) originales de Comer, sin modificar (array por los
     67 lemas que Comer trae repetidos en distinto POS)
   - sourceRefs: trazabilidad liviana (qué entrada de FreeDict se consultó)
   ============================================================ */
const LEXICON_COMER_META = {
  sources: [
    "Comer, K. (Comer 5000). Portland State University, PDXScholar. https://pdxscholar.library.pdx.edu/wll_data/1/",
    "FreeDict rus-spa / spa-rus dictionaries. https://freedict.org/downloads/ (CC BY-SA 3.0)"
  ],
  batchInfo: { batch: 1, totalPlanned: "~20 tandas", wordsInBatch: 250, category: "A1", orderedBy: "Comer Rank (frecuencia)" }
};
const LEXICON_COMER_TANDA1 = [
 {
  "id": "CMR-00003",
  "ru": "не",
  "posNormalized": "otro",
  "translit": "nE",
  "ipa": "nʲˈe",
  "senses": [
   {
    "es": "no",
    "definitionEs": "Partícula de negación. Va antes de la palabra que niega: 'не знаю' (no sé).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "3",
    "Rank": "3",
    "Lemma": "не",
    "POS": "part",
    "MultipleEntry": "",
    "Frequency": "18028",
    "Fiction 1990-2000": "22349.1",
    "Journalism 1990-2000": "16853.2",
    "Length": "2",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "530",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00004",
  "ru": "на",
  "posNormalized": "otro",
  "translit": "nA",
  "ipa": "nˈɑ",
  "senses": [
   {
    "es": "en, sobre, a",
    "definitionEs": "Preposición de lugar (sobre una superficie: 'на столе' = en la mesa) o de dirección (con acusativo: 'на работу' = al trabajo).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "4",
    "Rank": "4",
    "Lemma": "на",
    "POS": "pr",
    "MultipleEntry": "",
    "Frequency": "15867.3",
    "Fiction 1990-2000": "16663",
    "Journalism 1990-2000": "16675.2",
    "Length": "2",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "на",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00006",
  "ru": "быть",
  "posNormalized": "verbo",
  "translit": "bYt",
  "ipa": "bˈytʲ",
  "senses": [
   {
    "es": "estar, ser",
    "definitionEs": "Existir, tener una determinada cualidad, o encontrarse en un lugar o situación. Es el verbo 'ser/estar'.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "6",
    "Rank": "6",
    "Lemma": "быть",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "12160.7",
    "Fiction 1990-2000": "12778.1",
    "Journalism 1990-2000": "12646",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "бы",
    "Suffix1": "ть",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "быть",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "40",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "где? кем? чем?",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "быть"
  }
 },
 {
  "id": "CMR-00007",
  "ru": "он",
  "posNormalized": "otro",
  "translit": "On",
  "ipa": "ˈon",
  "senses": [
   {
    "es": "él",
    "definitionEs": "Pronombre personal de tercera persona singular, masculino.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "7",
    "Rank": "7",
    "Lemma": "он",
    "POS": "spro",
    "MultipleEntry": "",
    "Frequency": "11791.1",
    "Fiction 1990-2000": "16882",
    "Journalism 1990-2000": "8811.7",
    "Length": "2",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "725",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00009",
  "ru": "что",
  "posNormalized": "otro",
  "translit": "ʃtO",
  "ipa": "ʃtˈo",
  "senses": [
   {
    "es": "qué, que",
    "definitionEs": "Como pronombre interrogativo pregunta por algo ('Что это?' = ¿Qué es esto?). Como conjunción introduce una oración subordinada ('Я думаю, что...' = Pienso que...).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "9",
    "Rank": "9",
    "Lemma": "что",
    "POS": "conj",
    "MultipleEntry": "YES",
    "Frequency": "8354",
    "Fiction 1990-2000": "8938.8",
    "Journalism 1990-2000": "8743.1",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "что",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "755",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "26",
    "Rank": "26",
    "Lemma": "что",
    "POS": "spro",
    "MultipleEntry": "",
    "Frequency": "3810.2",
    "Fiction 1990-2000": "5163.3",
    "Journalism 1990-2000": "3121.2",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "что",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "755",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "983",
    "Rank": "983",
    "Lemma": "что",
    "POS": "advpro",
    "MultipleEntry": "YES",
    "Frequency": "121.2",
    "Fiction 1990-2000": "218.1",
    "Journalism 1990-2000": "49",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "что",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "755",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00012",
  "ru": "это",
  "posNormalized": "otro",
  "translit": "Etʌ",
  "ipa": "ˈɛtʌ",
  "senses": [
   {
    "es": "esto, eso",
    "definitionEs": "Pronombre demostrativo neutro. Señala algo cercano o ya mencionado, sin importar el género de lo señalado: 'Это стол' = Esto es una mesa.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "12",
    "Rank": "12",
    "Lemma": "это",
    "POS": "spro",
    "MultipleEntry": "",
    "Frequency": "5707.8",
    "Fiction 1990-2000": "5946.6",
    "Journalism 1990-2000": "5831.8",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "эт",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "752",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "201",
    "Rank": "201",
    "Lemma": "это",
    "POS": "part",
    "MultipleEntry": "YES",
    "Frequency": "466.7",
    "Fiction 1990-2000": "431.8",
    "Journalism 1990-2000": "480.1",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "эт",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "752",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00013",
  "ru": "она",
  "posNormalized": "otro",
  "translit": "ʌnA",
  "ipa": "ʌnˈɑ",
  "senses": [
   {
    "es": "ella",
    "definitionEs": "Pronombre personal de tercera persona singular, femenino.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "13",
    "Rank": "13",
    "Lemma": "она",
    "POS": "spro",
    "MultipleEntry": "",
    "Frequency": "5592.4",
    "Fiction 1990-2000": "9474",
    "Journalism 1990-2000": "3733.1",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "725",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00014",
  "ru": "этот",
  "posNormalized": "otro",
  "translit": "Etʌt",
  "ipa": "ˈɛtʌt",
  "senses": [
   {
    "es": "este, esta",
    "definitionEs": "Pronombre/adjetivo demostrativo. Señala algo cercano, concuerda en género y número con el sustantivo.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "14",
    "Rank": "14",
    "Lemma": "этот",
    "POS": "apro",
    "MultipleEntry": "",
    "Frequency": "5414",
    "Fiction 1990-2000": "4723.1",
    "Journalism 1990-2000": "5919.4",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "эт",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "752",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00016",
  "ru": "но",
  "posNormalized": "otro",
  "translit": "nO",
  "ipa": "nˈo",
  "senses": [
   {
    "es": "pero",
    "definitionEs": "Conjunción adversativa. Introduce una idea que contrasta con la anterior.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "16",
    "Rank": "16",
    "Lemma": "но",
    "POS": "conj",
    "MultipleEntry": "",
    "Frequency": "5381.4",
    "Fiction 1990-2000": "6256.6",
    "Journalism 1990-2000": "5597.2",
    "Length": "2",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00017",
  "ru": "они",
  "posNormalized": "otro",
  "translit": "ʌnI",
  "ipa": "ʌnʲˈɪ",
  "senses": [
   {
    "es": "ellos, ellas",
    "definitionEs": "Pronombre personal de tercera persona plural.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "17",
    "Rank": "17",
    "Lemma": "они",
    "POS": "spro",
    "MultipleEntry": "",
    "Frequency": "4850",
    "Fiction 1990-2000": "5358.9",
    "Journalism 1990-2000": "4788.9",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "725",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00018",
  "ru": "мы",
  "posNormalized": "otro",
  "translit": "mY",
  "ipa": "mˈy",
  "senses": [
   {
    "es": "nosotros, nosotras",
    "definitionEs": "Pronombre personal de primera persona plural.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "18",
    "Rank": "18",
    "Lemma": "мы",
    "POS": "spro",
    "MultipleEntry": "",
    "Frequency": "4704.8",
    "Fiction 1990-2000": "4194.8",
    "Journalism 1990-2000": "5241.8",
    "Length": "2",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "мы",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00019",
  "ru": "как",
  "posNormalized": "otro",
  "translit": "kAk",
  "ipa": "kˈɑk",
  "senses": [
   {
    "es": "cómo, como",
    "definitionEs": "Pregunta por el modo ('Как дела?' = ¿Cómo estás?) o compara ('как я' = como yo).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "19",
    "Rank": "19",
    "Lemma": "как",
    "POS": "conj",
    "MultipleEntry": "YES",
    "Frequency": "4403.7",
    "Fiction 1990-2000": "4948.4",
    "Journalism 1990-2000": "4248.5",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "как",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "713",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "49",
    "Rank": "49",
    "Lemma": "как",
    "POS": "advpro",
    "MultipleEntry": "",
    "Frequency": "2212.7",
    "Fiction 1990-2000": "2609.4",
    "Journalism 1990-2000": "2015.4",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "как",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "713",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00020",
  "ru": "из",
  "posNormalized": "otro",
  "translit": "Is",
  "ipa": "ˈɪs",
  "senses": [
   {
    "es": "de, desde",
    "definitionEs": "Preposición que indica origen o procedencia. Rige genitivo: 'из России' = de Rusia.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "20",
    "Rank": "20",
    "Lemma": "из",
    "POS": "pr",
    "MultipleEntry": "",
    "Frequency": "4314.1",
    "Fiction 1990-2000": "4290.8",
    "Journalism 1990-2000": "4774",
    "Length": "2",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "708",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00024",
  "ru": "за",
  "posNormalized": "otro",
  "translit": "zA",
  "ipa": "zˈɑ",
  "senses": [
   {
    "es": "por, detrás de, durante",
    "definitionEs": "Preposición con varios usos: ubicación (detrás de), causa (por), o duración (за час = en una hora).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "24",
    "Rank": "24",
    "Lemma": "за",
    "POS": "pr",
    "MultipleEntry": "",
    "Frequency": "3904.1",
    "Fiction 1990-2000": "4493.4",
    "Journalism 1990-2000": "3999.8",
    "Length": "2",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00025",
  "ru": "свой",
  "posNormalized": "otro",
  "translit": "svOy",
  "ipa": "svˈoj",
  "senses": [
   {
    "es": "su, propio",
    "definitionEs": "Pronombre posesivo reflexivo: indica que algo pertenece al sujeto de la oración, sin importar la persona gramatical.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "25",
    "Rank": "25",
    "Lemma": "свой",
    "POS": "apro",
    "MultipleEntry": "",
    "Frequency": "3825.5",
    "Fiction 1990-2000": "3882.2",
    "Journalism 1990-2000": "4273.2",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "свой",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "свой",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "492",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00027",
  "ru": "весь",
  "posNormalized": "otro",
  "translit": "vEs",
  "ipa": "vʲˈesʲ",
  "senses": [
   {
    "es": "todo, entero",
    "definitionEs": "Pronombre/adjetivo que indica la totalidad de algo.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "27",
    "Rank": "27",
    "Lemma": "весь",
    "POS": "apro",
    "MultipleEntry": "",
    "Frequency": "3786.3",
    "Fiction 1990-2000": "3675.6",
    "Journalism 1990-2000": "4074.7",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "весь",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "весь",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "59",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00028",
  "ru": "год",
  "posNormalized": "sustantivo",
  "translit": "gOt",
  "ipa": "ɡˈot",
  "senses": [
   {
    "es": "ano",
    "definitionEs": "Período de tiempo de aproximadamente 365 días, dividido en 12 meses.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "28",
    "Rank": "28",
    "Lemma": "год",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "3727.5",
    "Fiction 1990-2000": "1469",
    "Journalism 1990-2000": "5660.9",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "год",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "год",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "101",
    "Notes": "ШЭС: Производное от годити «удовлетворять, подходить». Первоначально — «подходящее время», затем — «время» (вообще) и далее — «365 дней». Cognate with English \"good\" German Gut",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "год"
  }
 },
 {
  "id": "CMR-00029",
  "ru": "от",
  "posNormalized": "otro",
  "translit": "Ot",
  "ipa": "ˈot",
  "senses": [
   {
    "es": "de, desde",
    "definitionEs": "Preposición de procedencia u origen (a diferencia de 'из', suele usarse con personas o puntos de partida). Rige genitivo.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "29",
    "Rank": "29",
    "Lemma": "от",
    "POS": "pr",
    "MultipleEntry": "",
    "Frequency": "3672.5",
    "Fiction 1990-2000": "3670.5",
    "Journalism 1990-2000": "3665.1",
    "Length": "2",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00030",
  "ru": "так",
  "posNormalized": "otro",
  "translit": "tAk",
  "ipa": "tˈɑk",
  "senses": [
   {
    "es": "así, tan",
    "definitionEs": "Indica manera ('так же' = de esta manera) o intensidad ('так хорошо' = tan bien).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "30",
    "Rank": "30",
    "Lemma": "так",
    "POS": "advpro",
    "MultipleEntry": "",
    "Frequency": "3440.4",
    "Fiction 1990-2000": "4077.7",
    "Journalism 1990-2000": "3086.5",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "так",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "569",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00032",
  "ru": "для",
  "posNormalized": "otro",
  "translit": "dɭA",
  "ipa": "dɭʲˈɑ",
  "senses": [
   {
    "es": "para",
    "definitionEs": "Preposición que indica finalidad o destinatario. Rige genitivo.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "32",
    "Rank": "32",
    "Lemma": "для",
    "POS": "pr",
    "MultipleEntry": "",
    "Frequency": "3229.3",
    "Fiction 1990-2000": "1846.3",
    "Journalism 1990-2000": "3925.2",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "дл",
    "Suffix1": "я",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "для",
    "Member2": "дело",
    "Member3": "деля",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "146",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00033",
  "ru": "ты",
  "posNormalized": "otro",
  "translit": "tY",
  "ipa": "tˈy",
  "senses": [
   {
    "es": "tú, vos",
    "definitionEs": "Pronombre personal de segunda persona singular, informal.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "33",
    "Rank": "33",
    "Lemma": "ты",
    "POS": "spro",
    "MultipleEntry": "",
    "Frequency": "3171.2",
    "Fiction 1990-2000": "6319.7",
    "Journalism 1990-2000": "1204.2",
    "Length": "2",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00037",
  "ru": "мочь",
  "posNormalized": "verbo",
  "translit": "mOtʃ",
  "ipa": "mˈotʃʲ",
  "senses": [
   {
    "es": "poder",
    "definitionEs": "Tener la capacidad, el permiso o la posibilidad de hacer algo.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "37",
    "Rank": "37",
    "Lemma": "мочь",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "2912.3",
    "Fiction 1990-2000": "2843.5",
    "Journalism 1990-2000": "2823.4",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "мог",
    "Suffix1": "ть",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "мочь",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "111",
    "WordFamilyNumber": "318",
    "Notes": "Cognate with might",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "делать что?",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "мочь"
  }
 },
 {
  "id": "CMR-00038",
  "ru": "вы",
  "posNormalized": "otro",
  "translit": "vY",
  "ipa": "vˈy",
  "senses": [
   {
    "es": "usted, ustedes, vosotros",
    "definitionEs": "Pronombre personal de segunda persona, formal (singular) o plural (formal o informal).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "38",
    "Rank": "38",
    "Lemma": "вы",
    "POS": "spro",
    "MultipleEntry": "",
    "Frequency": "2906.4",
    "Fiction 1990-2000": "3843.2",
    "Journalism 1990-2000": "2155.9",
    "Length": "2",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00041",
  "ru": "его",
  "posNormalized": "otro",
  "translit": "yivO",
  "ipa": "jɪvˈo",
  "senses": [
   {
    "es": "su, de él, lo",
    "definitionEs": "Pronombre posesivo (de él) o forma de acusativo/genitivo de 'он' (lo, a él).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "41",
    "Rank": "41",
    "Lemma": "его",
    "POS": "apro",
    "MultipleEntry": "",
    "Frequency": "2577.9",
    "Fiction 1990-2000": "2692.1",
    "Journalism 1990-2000": "2604.7",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00044",
  "ru": "или",
  "posNormalized": "otro",
  "translit": "Iɭi",
  "ipa": "ˈɪɭʲɪ",
  "senses": [
   {
    "es": "o",
    "definitionEs": "Conjunción disyuntiva, presenta una alternativa.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "44",
    "Rank": "44",
    "Lemma": "или",
    "POS": "conj",
    "MultipleEntry": "",
    "Frequency": "2345",
    "Fiction 1990-2000": "1850.9",
    "Journalism 1990-2000": "2276.2",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "709",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00045",
  "ru": "еще",
  "posNormalized": "otro",
  "translit": "yishƟ",
  "ipa": "jɪɕˈɵ",
  "senses": [
   {
    "es": "todavía, aún, más",
    "definitionEs": "Indica continuidad ('еще не' = todavía no) o cantidad adicional ('еще раз' = una vez más).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "45",
    "Rank": "45",
    "Lemma": "еще",
    "POS": "adv",
    "MultipleEntry": "",
    "Frequency": "2323.9",
    "Fiction 1990-2000": "2857",
    "Journalism 1990-2000": "2219.8",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "1443",
    "Rank": "1443",
    "Lemma": "еще",
    "POS": "part",
    "MultipleEntry": "YES",
    "Frequency": "85.5",
    "Fiction 1990-2000": "112.3",
    "Journalism 1990-2000": "57.3",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00048",
  "ru": "один",
  "posNormalized": "otro",
  "translit": "ʌdIn",
  "ipa": "ʌdʲˈin",
  "senses": [
   {
    "es": "uno, un, solo",
    "definitionEs": "Numeral cardinal 'uno'. También significa 'solo/único' ('один дома' = solo en casa).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "48",
    "Rank": "48",
    "Lemma": "один",
    "POS": "apro",
    "MultipleEntry": "",
    "Frequency": "2245.7",
    "Fiction 1990-2000": "2171.2",
    "Journalism 1990-2000": "2441.2",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "одн",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "один",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "362",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "174",
    "Rank": "174",
    "Lemma": "один",
    "POS": "anum",
    "MultipleEntry": "YES",
    "Frequency": "529.5",
    "Fiction 1990-2000": "566.2",
    "Journalism 1990-2000": "535.4",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "одн",
    "Suffix1": "ин",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "один",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "362",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00051",
  "ru": "до",
  "posNormalized": "otro",
  "translit": "dO",
  "ipa": "dˈo",
  "senses": [
   {
    "es": "hasta, antes de",
    "definitionEs": "Preposición de límite temporal o espacial. Rige genitivo.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "51",
    "Rank": "51",
    "Lemma": "до",
    "POS": "pr",
    "MultipleEntry": "",
    "Frequency": "2061.1",
    "Fiction 1990-2000": "1896.6",
    "Journalism 1990-2000": "2274.8",
    "Length": "2",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00052",
  "ru": "время",
  "posNormalized": "sustantivo",
  "translit": "vrEmʌ",
  "ipa": "vrʲˈemʲʌ",
  "senses": [
   {
    "es": "tiempo",
    "definitionEs": "Duración de los sucesos y las cosas, medida en horas, días, años, etc.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "52",
    "Rank": "52",
    "Lemma": "время",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "2015.7",
    "Fiction 1990-2000": "1702.9",
    "Journalism 1990-2000": "2350.8",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "времен",
    "Suffix1": "мя",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "время",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "79",
    "Notes": "ШЭС: Заимств. из ст.-сл. яз. Суф. производное (суф. -men > -мя) от той же основы, что и вертеть: в *vertmen произошло упрощение групп согласных и выпало t, er между согласными в ст.-сл. яз. дало ре (через «ять»), изменившееся затем в др.-рус. в ре, ę < en дало позднее в др.-рус. ’а. Исходное значение сущ. время — «возвращение, чередование дня и ночи».",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "время"
  }
 },
 {
  "id": "CMR-00053",
  "ru": "если",
  "posNormalized": "otro",
  "translit": "yEsɭi",
  "ipa": "jˈesɭʲɪ",
  "senses": [
   {
    "es": "si",
    "definitionEs": "Conjunción condicional. Introduce una condición: 'если ты хочешь' = si querés.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "53",
    "Rank": "53",
    "Lemma": "если",
    "POS": "conj",
    "MultipleEntry": "",
    "Frequency": "1998.1",
    "Fiction 1990-2000": "2021.5",
    "Journalism 1990-2000": "2042.5",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "Compound. From Polish in 17th cent.",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00055",
  "ru": "когда",
  "posNormalized": "otro",
  "translit": "kʌgdA",
  "ipa": "kʌɡdˈɑ",
  "senses": [
   {
    "es": "cuándo, cuando",
    "definitionEs": "Pregunta por el momento en que ocurre algo, o introduce una oración temporal.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "55",
    "Rank": "55",
    "Lemma": "когда",
    "POS": "conj",
    "MultipleEntry": "YES",
    "Frequency": "1895.7",
    "Fiction 1990-2000": "2167.9",
    "Journalism 1990-2000": "1880.3",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "ко",
    "Suffix1": "гда",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "когда",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "715",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "867",
    "Rank": "867",
    "Lemma": "когда",
    "POS": "advpro",
    "MultipleEntry": "",
    "Frequency": "138.4",
    "Fiction 1990-2000": "154.6",
    "Journalism 1990-2000": "121.2",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "ко",
    "Suffix1": "гда",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "715",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00058",
  "ru": "говорить",
  "posNormalized": "verbo",
  "translit": "gʌvʌrIt",
  "ipa": "ɡʌvʌrʲˈitʲ",
  "senses": [
   {
    "es": "hablar",
    "definitionEs": "Manifestar con palabras el pensamiento. 3. Asegurar, sostener, opinar. 4. Nombrar o llamar.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "58",
    "Rank": "58",
    "Lemma": "говорить",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "1755",
    "Fiction 1990-2000": "2047.9",
    "Journalism 1990-2000": "1530.5",
    "Length": "8",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "говор",
    "Suffix1": "ить",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "говор",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "260",
    "WordFamilyNumber": "100",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "что? кому? о ком? о чём?",
    "VOM": "",
    "ReflexPairNumber": "21"
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "говорить"
  }
 },
 {
  "id": "CMR-00059",
  "ru": "наш",
  "posNormalized": "otro",
  "translit": "nAʃ",
  "ipa": "nˈɑʃ",
  "senses": [
   {
    "es": "nuestro",
    "definitionEs": "Pronombre posesivo de primera persona plural.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "59",
    "Rank": "59",
    "Lemma": "наш",
    "POS": "apro",
    "MultipleEntry": "",
    "Frequency": "1731.8",
    "Fiction 1990-2000": "1235.6",
    "Journalism 1990-2000": "2277.9",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00060",
  "ru": "мой",
  "posNormalized": "otro",
  "translit": "mOy",
  "ipa": "mˈoj",
  "senses": [
   {
    "es": "mi, mío",
    "definitionEs": "Pronombre posesivo de primera persona singular.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "60",
    "Rank": "60",
    "Lemma": "мой",
    "POS": "apro",
    "MultipleEntry": "",
    "Frequency": "1720.3",
    "Fiction 1990-2000": "2307.2",
    "Journalism 1990-2000": "1706.4",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "мой",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00061",
  "ru": "знать",
  "posNormalized": "verbo",
  "translit": "znAt",
  "ipa": "znˈɑtʲ",
  "senses": [
   {
    "es": "saber, conocer",
    "definitionEs": "Tener información o conocimiento sobre algo, o estar familiarizado con alguien o algo.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "61",
    "Rank": "61",
    "Lemma": "знать",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "1713.8",
    "Fiction 1990-2000": "2526.6",
    "Journalism 1990-2000": "1215.6",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "зна",
    "Suffix1": "ть",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "знать",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "191",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "кого? что?",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "знать"
  }
 },
 {
  "id": "CMR-00065",
  "ru": "дело",
  "posNormalized": "sustantivo",
  "translit": "dEɭʌ",
  "ipa": "dʲˈeɭʌ",
  "senses": [
   {
    "es": "asunto, negocio, cuestión",
    "definitionEs": "Ocupación, actividad o cuestión de la que alguien se encarga o se ocupa.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "65",
    "Rank": "65",
    "Lemma": "дело",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "1412.1",
    "Fiction 1990-2000": "1433.1",
    "Journalism 1990-2000": "1465.2",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "дел",
    "Suffix1": "о",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "дело",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "136",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "дело"
  }
 },
 {
  "id": "CMR-00066",
  "ru": "жизнь",
  "posNormalized": "sustantivo",
  "translit": "ʒYʑn",
  "ipa": "ʒˈyʑn",
  "senses": [
   {
    "es": "vida, vida",
    "definitionEs": "Estado de los seres vivos entre el nacimiento y la muerte.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "66",
    "Rank": "66",
    "Lemma": "жизнь",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "1389.8",
    "Fiction 1990-2000": "1347.1",
    "Journalism 1990-2000": "1512.5",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "жив",
    "Suffix1": "знь",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "жить",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "174",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "жизнь"
  }
 },
 {
  "id": "CMR-00067",
  "ru": "кто",
  "posNormalized": "otro",
  "translit": "ktO",
  "ipa": "ktˈo",
  "senses": [
   {
    "es": "quién",
    "definitionEs": "Pronombre interrogativo que pregunta por una persona.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "67",
    "Rank": "67",
    "Lemma": "кто",
    "POS": "spro",
    "MultipleEntry": "",
    "Frequency": "1374.8",
    "Fiction 1990-2000": "1877.7",
    "Journalism 1990-2000": "1281",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "кто",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "719",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00068",
  "ru": "первый",
  "posNormalized": "otro",
  "translit": "pErvyy",
  "ipa": "pʲˈervyj",
  "senses": [
   {
    "es": "primero",
    "definitionEs": "Numeral ordinal correspondiente a 'один' (uno).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "68",
    "Rank": "68",
    "Lemma": "первый",
    "POS": "anum",
    "MultipleEntry": "",
    "Frequency": "1345.6",
    "Fiction 1990-2000": "1002",
    "Journalism 1990-2000": "1721",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "перв",
    "Suffix1": "ый",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "первый",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "386",
    "Notes": "Indo-Europ. Cognate with Eng first (old English forwost = first, ahead. Connected to перед",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00069",
  "ru": "очень",
  "posNormalized": "otro",
  "translit": "Otʃin",
  "ipa": "ˈotʃʲin",
  "senses": [
   {
    "es": "muy, bien, mucho",
    "definitionEs": "Indica un grado alto o intenso de una cualidad.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "69",
    "Rank": "69",
    "Lemma": "очень",
    "POS": "adv",
    "MultipleEntry": "",
    "Frequency": "1286.8",
    "Fiction 1990-2000": "1141.9",
    "Journalism 1990-2000": "1483.3",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "очень",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "очень",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "Various etymologies",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "очень"
  }
 },
 {
  "id": "CMR-00070",
  "ru": "два",
  "posNormalized": "otro",
  "translit": "dvA",
  "ipa": "dvˈɑ",
  "senses": [
   {
    "es": "dos",
    "definitionEs": "Numeral cardinal 'dos'.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "70",
    "Rank": "70",
    "Lemma": "два",
    "POS": "num",
    "MultipleEntry": "",
    "Frequency": "1285.1",
    "Fiction 1990-2000": "1339.7",
    "Journalism 1990-2000": "1348",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "дв",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "два",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "126",
    "Notes": "Cognate English dual, two",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00071",
  "ru": "день",
  "posNormalized": "sustantivo",
  "translit": "dEn",
  "ipa": "dʲˈen",
  "senses": [
   {
    "es": "dia, jornada",
    "definitionEs": "Tiempo que tarda la Tierra en dar una vuelta alrededor de su eje, equivalente a 24 horas.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "71",
    "Rank": "71",
    "Lemma": "день",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "1258.4",
    "Fiction 1990-2000": "1274.9",
    "Journalism 1990-2000": "1364",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "ден",
    "Suffix1": "ь",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "день",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "139",
    "Notes": "ШЭС: День буквально — «время ясного неба». н may be a suffix. Cognate Latin dies, Eng day",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "день"
  }
 },
 {
  "id": "CMR-00072",
  "ru": "ее",
  "posNormalized": "otro",
  "translit": "yiyƟ",
  "ipa": "jɪjˈɵ",
  "senses": [
   {
    "es": "su, de ella, la",
    "definitionEs": "Pronombre posesivo (de ella) o forma de acusativo/genitivo de 'она' (la, a ella).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "72",
    "Rank": "72",
    "Lemma": "ее",
    "POS": "apro",
    "MultipleEntry": "",
    "Frequency": "1219.2",
    "Fiction 1990-2000": "1587.9",
    "Journalism 1990-2000": "1074.5",
    "Length": "2",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00073",
  "ru": "новый",
  "posNormalized": "adjetivo",
  "translit": "nOvyy",
  "ipa": "nˈovyj",
  "senses": [
   {
    "es": "nuevo, nueva",
    "definitionEs": "Que acaba de aparecer, hacerse o conocerse, en contraste con lo anterior.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "73",
    "Rank": "73",
    "Lemma": "новый",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "1217.5",
    "Fiction 1990-2000": "691.1",
    "Journalism 1990-2000": "1696.3",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "нов",
    "Suffix1": "ый",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "новый",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "345",
    "Notes": "Cognate with Latin novus, English novelty",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "новый"
  }
 },
 {
  "id": "CMR-00074",
  "ru": "рука",
  "posNormalized": "sustantivo",
  "translit": "rukA",
  "ipa": "rukˈɑ",
  "senses": [
   {
    "es": "mano, brazo",
    "definitionEs": "Extremidad superior del cuerpo humano, desde el hombro hasta los dedos.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "74",
    "Rank": "74",
    "Lemma": "рука",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "1200.6",
    "Fiction 1990-2000": "2088.1",
    "Journalism 1990-2000": "693",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "рук",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "рука",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "481",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "рука"
  }
 },
 {
  "id": "CMR-00075",
  "ru": "даже",
  "posNormalized": "otro",
  "translit": "dAʒy",
  "ipa": "dˈɑʒy",
  "senses": [
   {
    "es": "incluso, hasta",
    "definitionEs": "Partícula que añade énfasis, indicando algo inesperado o extremo.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "75",
    "Rank": "75",
    "Lemma": "даже",
    "POS": "part",
    "MultipleEntry": "",
    "Frequency": "1179.8",
    "Fiction 1990-2000": "1426",
    "Journalism 1990-2000": "1223.5",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "TRUE",
    "Calque": "",
    "Prefix1": "да",
    "Prefix2": "",
    "Root": "же",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "даже",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "731",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "402",
    "Rank": "402",
    "Lemma": "даже",
    "POS": "conj",
    "MultipleEntry": "YES",
    "Frequency": "260.6",
    "Fiction 1990-2000": "341.8",
    "Journalism 1990-2000": "248.7",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "TRUE",
    "Calque": "",
    "Prefix1": "да",
    "Prefix2": "",
    "Root": "же",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "даже",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "731",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00078",
  "ru": "раз",
  "posNormalized": "otro",
  "translit": "rAs",
  "ipa": "rˈɑs",
  "senses": [
   {
    "es": "vez",
    "definitionEs": "Como sustantivo significa 'vez' ('один раз' = una vez). También se usa como conjunción causal coloquial ('ya que').",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "78",
    "Rank": "78",
    "Lemma": "раз",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "1131.8",
    "Fiction 1990-2000": "1349.2",
    "Journalism 1990-2000": "1107.3",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "раз",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "750",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "1858",
    "Rank": "1858",
    "Lemma": "раз",
    "POS": "conj",
    "MultipleEntry": "YES",
    "Frequency": "65",
    "Fiction 1990-2000": "95.5",
    "Journalism 1990-2000": "45.5",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "раз",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "750",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00079",
  "ru": "где",
  "posNormalized": "otro",
  "translit": "gdE",
  "ipa": "ɡdʲˈe",
  "senses": [
   {
    "es": "dónde",
    "definitionEs": "Pregunta por el lugar.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "79",
    "Rank": "79",
    "Lemma": "где",
    "POS": "advpro",
    "MultipleEntry": "",
    "Frequency": "1129.2",
    "Fiction 1990-2000": "1317",
    "Journalism 1990-2000": "1125.3",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "730",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00080",
  "ru": "там",
  "posNormalized": "otro",
  "translit": "tAm",
  "ipa": "tˈɑm",
  "senses": [
   {
    "es": "allí, allá",
    "definitionEs": "Adverbio de lugar, indica un sitio alejado del hablante.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "80",
    "Rank": "80",
    "Lemma": "там",
    "POS": "advpro",
    "MultipleEntry": "",
    "Frequency": "1128.1",
    "Fiction 1990-2000": "1452.5",
    "Journalism 1990-2000": "886.5",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "2267",
    "Rank": "2267",
    "Lemma": "там",
    "POS": "part",
    "MultipleEntry": "YES",
    "Frequency": "51.9",
    "Fiction 1990-2000": "72.6",
    "Journalism 1990-2000": "35.2",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00081",
  "ru": "под",
  "posNormalized": "otro",
  "translit": "pOt",
  "ipa": "pˈot",
  "senses": [
   {
    "es": "debajo de, bajo",
    "definitionEs": "Preposición de lugar. Rige instrumental (ubicación) o acusativo (dirección).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "81",
    "Rank": "81",
    "Lemma": "под",
    "POS": "pr",
    "MultipleEntry": "",
    "Frequency": "1126",
    "Fiction 1990-2000": "1411.6",
    "Journalism 1990-2000": "1062.4",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "под",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "под",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00085",
  "ru": "после",
  "posNormalized": "otro",
  "translit": "pOsɭi",
  "ipa": "pˈosɭʲi",
  "senses": [
   {
    "es": "después de",
    "definitionEs": "Preposición temporal. Rige genitivo.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "85",
    "Rank": "85",
    "Lemma": "после",
    "POS": "pr",
    "MultipleEntry": "",
    "Frequency": "1080.1",
    "Fiction 1990-2000": "915.9",
    "Journalism 1990-2000": "1349.6",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "TRUE",
    "Calque": "",
    "Prefix1": "по",
    "Prefix2": "",
    "Root": "с",
    "Suffix1": "ле",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "после",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "Compound. ШЭС: Сращение по сьлѣ где по — «по», а сьлѣ — сложение местоимения сь «этот» и частицы лѣ. После буквально — «вслед за этим»",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00086",
  "ru": "их",
  "posNormalized": "otro",
  "translit": "Ij",
  "ipa": "ˈɪx",
  "senses": [
   {
    "es": "su, de ellos, los",
    "definitionEs": "Pronombre posesivo (de ellos/ellas) o forma de acusativo/genitivo de 'они' (los, a ellos).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "86",
    "Rank": "86",
    "Lemma": "их",
    "POS": "apro",
    "MultipleEntry": "",
    "Frequency": "1076",
    "Fiction 1990-2000": "767.3",
    "Journalism 1990-2000": "1156.9",
    "Length": "2",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00087",
  "ru": "работа",
  "posNormalized": "sustantivo",
  "translit": "rabOta",
  "ipa": "rabˈota",
  "senses": [
   {
    "es": "labor, trabajo",
    "definitionEs": "Trabajo o faena que se desempena generalmente por dinero.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "87",
    "Rank": "87",
    "Lemma": "работа",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "1058.3",
    "Fiction 1990-2000": "546.5",
    "Journalism 1990-2000": "1273.2",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "раб",
    "Suffix1": "ота",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "раб",
    "Member2": "работа",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "445",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "работа"
  }
 },
 {
  "id": "CMR-00088",
  "ru": "без",
  "posNormalized": "otro",
  "translit": "bEs",
  "ipa": "bʲˈes",
  "senses": [
   {
    "es": "sin",
    "definitionEs": "Preposición que indica ausencia o carencia. Rige genitivo.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "88",
    "Rank": "88",
    "Lemma": "без",
    "POS": "pr",
    "MultipleEntry": "",
    "Frequency": "1018.8",
    "Fiction 1990-2000": "1165.7",
    "Journalism 1990-2000": "1016.9",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "без",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "без",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00089",
  "ru": "самый",
  "posNormalized": "otro",
  "translit": "sAmyy",
  "ipa": "sˈɑmyj",
  "senses": [
   {
    "es": "el más, mismo",
    "definitionEs": "Forma el superlativo de los adjetivos ('самыи большои' = el más grande) o refuerza identidad ('в самом центре' = en el mismísimo centro).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "89",
    "Rank": "89",
    "Lemma": "самый",
    "POS": "apro",
    "MultipleEntry": "",
    "Frequency": "1007.4",
    "Fiction 1990-2000": "912.4",
    "Journalism 1990-2000": "1227.3",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "сам",
    "Suffix1": "ый",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "самый",
    "Member2": "сам",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "489",
    "Notes": "Cognate with English \"same\" which was original meaning of сам (= одинаковый)",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00092",
  "ru": "хотеть",
  "posNormalized": "verbo",
  "translit": "jʌtEt",
  "ipa": "xʌtʲˈetʲ",
  "senses": [
   {
    "es": "querer, desear, tener ganas",
    "definitionEs": "Tener el deseo de poseer algo.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "92",
    "Rank": "92",
    "Lemma": "хотеть",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "991.3",
    "Fiction 1990-2000": "1412.5",
    "Journalism 1990-2000": "802.4",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "хот",
    "Suffix1": "еть",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "хотеть",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "226",
    "WordFamilyNumber": "636",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "кого? что? делать что?",
    "VOM": "",
    "ReflexPairNumber": "148"
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "хотеть"
  }
 },
 {
  "id": "CMR-00093",
  "ru": "ли",
  "posNormalized": "otro",
  "translit": "ɭI",
  "ipa": "ɭʲˈɪ",
  "senses": [
   {
    "es": "(partícula interrogativa)",
    "definitionEs": "Convierte una oración afirmativa en pregunta indirecta o formal, sin traducción exacta al español: 'Не знаю, придет ли он' = No sé si él vendrá.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "93",
    "Rank": "93",
    "Lemma": "ли",
    "POS": "part",
    "MultipleEntry": "YES",
    "Frequency": "981.7",
    "Fiction 1990-2000": "1212.9",
    "Journalism 1990-2000": "945.6",
    "Length": "2",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "1134",
    "Rank": "1134",
    "Lemma": "ли",
    "POS": "conj",
    "MultipleEntry": "",
    "Frequency": "106.9",
    "Fiction 1990-2000": "104.6",
    "Journalism 1990-2000": "112.5",
    "Length": "2",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00095",
  "ru": "идти",
  "posNormalized": "verbo",
  "translit": "ittI",
  "ipa": "ɪtʲtʲˈɪ",
  "senses": [
   {
    "es": "ir, andar, caminar",
    "definitionEs": "Ir de un lugar a otro dando pasos.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "95",
    "Rank": "95",
    "Lemma": "идти",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "957.1",
    "Fiction 1990-2000": "1090.8",
    "Journalism 1990-2000": "871.6",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "ид",
    "Suffix1": "ти",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "идти",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "198",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "куда?",
    "VOM": "1",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "идти"
  }
 },
 {
  "id": "CMR-00096",
  "ru": "большой",
  "posNormalized": "adjetivo",
  "translit": "bʌɭʃOy",
  "ipa": "bʌɭʃˈoj",
  "senses": [
   {
    "es": "grande, grande",
    "definitionEs": "Por extension, de superior virtud, importancia o dignidad en algun aspecto al patron de medida.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "96",
    "Rank": "96",
    "Lemma": "большой",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "944.4",
    "Fiction 1990-2000": "765.2",
    "Journalism 1990-2000": "1099",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "больш",
    "Suffix1": "ой",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "большой",
    "Member2": "более",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "33",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "большой"
  }
 },
 {
  "id": "CMR-00097",
  "ru": "должен",
  "posNormalized": "adjetivo",
  "translit": "dOɭʒyn",
  "ipa": "dˈoɭʒyn",
  "senses": [
   {
    "es": "deber, tener que",
    "definitionEs": "Tener obligaciones o deudas con alguien.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "97",
    "Rank": "97",
    "Lemma": "должен",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "944.2",
    "Fiction 1990-2000": "670.5",
    "Journalism 1990-2000": "1115.7",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "долг",
    "Suffix1": "ен",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "долг",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "149",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "должен"
  }
 },
 {
  "id": "CMR-00098",
  "ru": "место",
  "posNormalized": "sustantivo",
  "translit": "mEstʌ",
  "ipa": "mʲˈestʌ",
  "senses": [
   {
    "es": "lugar, sitio",
    "definitionEs": "Espacio que ocupa o puede ocupar algo o alguien.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "98",
    "Rank": "98",
    "Lemma": "место",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "926.6",
    "Fiction 1990-2000": "893.8",
    "Journalism 1990-2000": "974.1",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "мест",
    "Suffix1": "о",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "место",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "300",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "место"
  }
 },
 {
  "id": "CMR-00100",
  "ru": "ничто",
  "posNormalized": "otro",
  "translit": "niʃtO",
  "ipa": "nʲiʃtˈo",
  "senses": [
   {
    "es": "nada",
    "definitionEs": "Pronombre negativo, indica ausencia total de algo.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "100",
    "Rank": "100",
    "Lemma": "ничто",
    "POS": "spro",
    "MultipleEntry": "",
    "Frequency": "902.8",
    "Fiction 1990-2000": "1368.6",
    "Journalism 1990-2000": "662.3",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "ни",
    "Prefix2": "",
    "Root": "что",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "ничто",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "662",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00103",
  "ru": "тут",
  "posNormalized": "otro",
  "translit": "tUt",
  "ipa": "tˈut",
  "senses": [
   {
    "es": "aquí",
    "definitionEs": "Adverbio de lugar coloquial, equivalente a 'здесь'.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "103",
    "Rank": "103",
    "Lemma": "тут",
    "POS": "advpro",
    "MultipleEntry": "",
    "Frequency": "879.2",
    "Fiction 1990-2000": "1361.7",
    "Journalism 1990-2000": "611.7",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00104",
  "ru": "лицо",
  "posNormalized": "sustantivo",
  "translit": "ɭitsO",
  "ipa": "ɭʲitsˈo",
  "senses": [
   {
    "es": "cara, rostro, persona",
    "definitionEs": "Parte anterior de la cabeza, donde están los ojos, la nariz y la boca. También significa 'persona, individuo'.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "104",
    "Rank": "104",
    "Lemma": "лицо",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "878",
    "Fiction 1990-2000": "1062.3",
    "Journalism 1990-2000": "562",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "лик",
    "Suffix1": "о",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "лик",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "275",
    "Notes": "Polysemous",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "лицо"
  }
 },
 {
  "id": "CMR-00106",
  "ru": "друг",
  "posNormalized": "sustantivo",
  "translit": "drUk",
  "ipa": "drˈuk",
  "senses": [
   {
    "es": "amigo",
    "definitionEs": "Persona con quien se tiene una relacion de amistad.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "106",
    "Rank": "106",
    "Lemma": "друг",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "874.2",
    "Fiction 1990-2000": "1053.4",
    "Journalism 1990-2000": "842.5",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "друг",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "друг",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "157",
    "Notes": "companion, the other person (in a relationship)",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "друг"
  }
 },
 {
  "id": "CMR-00107",
  "ru": "нет",
  "posNormalized": "otro",
  "translit": "nEt",
  "ipa": "nʲˈet",
  "senses": [
   {
    "es": "no, no hay",
    "definitionEs": "Responde negativamente ('¿Поидешь? — Нет' = ¿Vas a ir? — No), o indica ausencia ('нет времени' = no hay tiempo).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "107",
    "Rank": "107",
    "Lemma": "нет",
    "POS": "adv",
    "MultipleEntry": "",
    "Frequency": "874",
    "Fiction 1990-2000": "1024.6",
    "Journalism 1990-2000": "853",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "нет",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "530",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "151",
    "Rank": "151",
    "Lemma": "нет",
    "POS": "part",
    "MultipleEntry": "YES",
    "Frequency": "589.2",
    "Fiction 1990-2000": "869.6",
    "Journalism 1990-2000": "352.1",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "нет",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "530",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00108",
  "ru": "теперь",
  "posNormalized": "otro",
  "translit": "tipEri^",
  "ipa": "tʲipʲˈerɪ^",
  "senses": [
   {
    "es": "ahora",
    "definitionEs": "Adverbio de tiempo, indica el momento presente.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "108",
    "Rank": "108",
    "Lemma": "теперь",
    "POS": "advpro",
    "MultipleEntry": "",
    "Frequency": "871.8",
    "Fiction 1990-2000": "1210.9",
    "Journalism 1990-2000": "726.4",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "теперь",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "теперь",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "ШЭС: Исходное топьрво > теперь ; является сложением то (см. тот) и первый. Compound",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00109",
  "ru": "ни",
  "posNormalized": "otro",
  "translit": "nI",
  "ipa": "nʲˈɪ",
  "senses": [
   {
    "es": "ni",
    "definitionEs": "Partícula que refuerza la negación, generalmente repetida: 'ни рыба, ни мясо' = ni carne ni pescado.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "109",
    "Rank": "109",
    "Lemma": "ни",
    "POS": "part",
    "MultipleEntry": "YES",
    "Frequency": "858.2",
    "Fiction 1990-2000": "1117",
    "Journalism 1990-2000": "831.4",
    "Length": "2",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "530",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "168",
    "Rank": "168",
    "Lemma": "ни",
    "POS": "conj",
    "MultipleEntry": "",
    "Frequency": "543.5",
    "Fiction 1990-2000": "681.9",
    "Journalism 1990-2000": "540",
    "Length": "2",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "530",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00110",
  "ru": "глаз",
  "posNormalized": "sustantivo",
  "translit": "gɭAs",
  "ipa": "ɡɭˈɑs",
  "senses": [
   {
    "es": "ojo",
    "definitionEs": "Órgano de la vista.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "110",
    "Rank": "110",
    "Lemma": "глаз",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "857.6",
    "Fiction 1990-2000": "1544.7",
    "Journalism 1990-2000": "465.6",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "глаз",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "глаз",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "94",
    "Notes": "2nd meaning typical only for Russian. Глаз был назван по его похожести на блестящий шарик, камешек. Исходное глазъ скорее всего того же корня, что и голова, ",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "глаз"
  }
 },
 {
  "id": "CMR-00111",
  "ru": "тоже",
  "posNormalized": "otro",
  "translit": "tOʒy",
  "ipa": "tˈoʒy",
  "senses": [
   {
    "es": "tambien, tampoco",
    "definitionEs": "Indica que algo se aplica igualmente a otra cosa o persona ya mencionada.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "111",
    "Rank": "111",
    "Lemma": "тоже",
    "POS": "adv",
    "MultipleEntry": "",
    "Frequency": "841.5",
    "Fiction 1990-2000": "1124.3",
    "Journalism 1990-2000": "671.4",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "TRUE",
    "Calque": "",
    "Prefix1": "то",
    "Prefix2": "",
    "Root": "же",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "тоже",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "595",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "тоже"
  }
 },
 {
  "id": "CMR-00113",
  "ru": "видеть",
  "posNormalized": "verbo",
  "translit": "vIdit",
  "ipa": "vʲˈidʲitʲ",
  "senses": [
   {
    "es": "ver",
    "definitionEs": "Percibir algo con los ojos, a través de la vista.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "113",
    "Rank": "113",
    "Lemma": "видеть",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "818.2",
    "Fiction 1990-2000": "1133.9",
    "Journalism 1990-2000": "606.1",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "вид",
    "Suffix1": "еть",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "вид",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "16",
    "WordFamilyNumber": "64",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "кого? что?",
    "VOM": "",
    "ReflexPairNumber": "9"
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "видеть"
  }
 },
 {
  "id": "CMR-00114",
  "ru": "вопрос",
  "posNormalized": "sustantivo",
  "translit": "vʌprOs",
  "ipa": "vʌprˈos",
  "senses": [
   {
    "es": "pregunta, cuestion",
    "definitionEs": "Frase o expresión con la que se pide información sobre algo.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "114",
    "Rank": "114",
    "Lemma": "вопрос",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "805.8",
    "Fiction 1990-2000": "466.1",
    "Journalism 1990-2000": "993",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "в",
    "Prefix2": "",
    "Root": "прос",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "прос",
    "Member2": "вопрос",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "426",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "вопрос"
  }
 },
 {
  "id": "CMR-00116",
  "ru": "да",
  "posNormalized": "otro",
  "translit": "dA",
  "ipa": "dˈɑ",
  "senses": [
   {
    "es": "sí",
    "definitionEs": "Responde afirmativamente.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "116",
    "Rank": "116",
    "Lemma": "да",
    "POS": "conj",
    "MultipleEntry": "",
    "Frequency": "801",
    "Fiction 1990-2000": "1241.9",
    "Journalism 1990-2000": "522.4",
    "Length": "2",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "731",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "119",
    "Rank": "119",
    "Lemma": "да",
    "POS": "part",
    "MultipleEntry": "YES",
    "Frequency": "787.5",
    "Fiction 1990-2000": "1181.7",
    "Journalism 1990-2000": "430",
    "Length": "2",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "731",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00117",
  "ru": "здесь",
  "posNormalized": "otro",
  "translit": "ʑdEs",
  "ipa": "ʑdʲˈesʲ",
  "senses": [
   {
    "es": "aquí",
    "definitionEs": "Adverbio de lugar, forma más neutra/formal que 'тут'.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "117",
    "Rank": "117",
    "Lemma": "здесь",
    "POS": "advpro",
    "MultipleEntry": "",
    "Frequency": "796.8",
    "Fiction 1990-2000": "935.5",
    "Journalism 1990-2000": "748.4",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "здесь",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "здесь",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "186",
    "Notes": " сь «этот» with сьде «здесь», суф. производного (суф. -de-, ср. где) от сей «этот»",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00118",
  "ru": "дом",
  "posNormalized": "sustantivo",
  "translit": "dOm",
  "ipa": "dˈom",
  "senses": [
   {
    "es": "casa, hogar",
    "definitionEs": "Vivienda| Edificacion destinada a vivienda.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "118",
    "Rank": "118",
    "Lemma": "дом",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "792.6",
    "Fiction 1990-2000": "948.5",
    "Journalism 1990-2000": "865.9",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "дом",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "дом",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "150",
    "Notes": "Cognate with Latin domus, English domicile, domestic",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "дом"
  }
 },
 {
  "id": "CMR-00121",
  "ru": "сторона",
  "posNormalized": "sustantivo",
  "translit": "stʌrʌnA",
  "ipa": "stʌrʌnˈɑ",
  "senses": [
   {
    "es": "lado, parte, direccion",
    "definitionEs": "Borde, orilla o extremo de algo. 3. Cada una de las caras de una hoja, tela, moneda u otro cuerpo con dos superficies opuestas.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "121",
    "Rank": "121",
    "Lemma": "сторона",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "768.3",
    "Fiction 1990-2000": "795.1",
    "Journalism 1990-2000": "700.7",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "сторон",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "сторона",
    "Member2": "страна",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "549",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "сторона"
  }
 },
 {
  "id": "CMR-00123",
  "ru": "думать",
  "posNormalized": "verbo",
  "translit": "dUmʌt",
  "ipa": "dˈumʌtʲ",
  "senses": [
   {
    "es": "pensar",
    "definitionEs": "Ejercitar el intelecto para explicarse o imaginarse algo o para concebir ideas.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "123",
    "Rank": "123",
    "Lemma": "думать",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "755.5",
    "Fiction 1990-2000": "1075.5",
    "Journalism 1990-2000": "536.4",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "дум",
    "Suffix1": "ать",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "дума",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "58",
    "WordFamilyNumber": "158",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "что? о ком? о чём?",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "думать"
  }
 },
 {
  "id": "CMR-00126",
  "ru": "жить",
  "posNormalized": "verbo",
  "translit": "ʒYt",
  "ipa": "ʒˈytʲ",
  "senses": [
   {
    "es": "vivir",
    "definitionEs": "Tener vida. 3. Tener su residencia y desarrollar sus actividades en un lugar determinado.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "126",
    "Rank": "126",
    "Lemma": "жить",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "725.5",
    "Fiction 1990-2000": "843.9",
    "Journalism 1990-2000": "736.5",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "жив",
    "Suffix1": "ть",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "жить",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "174",
    "Notes": "ШЭС: Cognate with Latin vivus = живой",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "где?",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "жить"
  }
 },
 {
  "id": "CMR-00127",
  "ru": "чем",
  "posNormalized": "otro",
  "translit": "tʃEm",
  "ipa": "tʃʲˈem",
  "senses": [
   {
    "es": "que (comparativo), con qué",
    "definitionEs": "Introduce una comparación ('лучше, чем' = mejor que) o es forma instrumental de 'что' (¿con qué?).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "127",
    "Rank": "127",
    "Lemma": "чем",
    "POS": "conj",
    "MultipleEntry": "",
    "Frequency": "721.1",
    "Fiction 1990-2000": "646.2",
    "Journalism 1990-2000": "815.8",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "что",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "755",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00128",
  "ru": "мир",
  "posNormalized": "sustantivo",
  "translit": "mIr",
  "ipa": "mʲˈir",
  "senses": [
   {
    "es": "paz",
    "definitionEs": "Conjunto de todo lo que existe, o el planeta Tierra. También significa 'paz'.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "128",
    "Rank": "128",
    "Lemma": "мир",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "714.7",
    "Fiction 1990-2000": "492",
    "Journalism 1990-2000": "902.5",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "мир",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "мир",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "313",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "мир"
  }
 },
 {
  "id": "CMR-00130",
  "ru": "последний",
  "posNormalized": "adjetivo",
  "translit": "pʌsɭEdniy",
  "ipa": "pʌsɭʲˈednʲij",
  "senses": [
   {
    "es": "ultimo, postrero, supremo",
    "definitionEs": "Que, en una serie de cosas o eventos, no tiene otro que lo siga.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "130",
    "Rank": "130",
    "Lemma": "последний",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "712.6",
    "Fiction 1990-2000": "651",
    "Journalism 1990-2000": "868",
    "Length": "9",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "по",
    "Prefix2": "",
    "Root": "след",
    "Suffix1": "ний",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "след",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "513",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "последний"
  }
 },
 {
  "id": "CMR-00131",
  "ru": "случай",
  "posNormalized": "sustantivo",
  "translit": "sɭUtʃʌy",
  "ipa": "sɭˈutʃʲʌj",
  "senses": [
   {
    "es": "caso, acontecimiento, incidente",
    "definitionEs": "Calidad o estado que aparece en alguna cosa, sin que sea parte de su esencia o naturaleza.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "131",
    "Rank": "131",
    "Lemma": "случай",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "709.7",
    "Fiction 1990-2000": "483.6",
    "Journalism 1990-2000": "753.7",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "с",
    "Prefix2": "",
    "Root": "луч",
    "Suffix1": "ай",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "случай",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "281",
    "Notes": "слука = случай",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "случай"
  }
 },
 {
  "id": "CMR-00132",
  "ru": "голова",
  "posNormalized": "sustantivo",
  "translit": "gʌɭʌvA",
  "ipa": "ɡʌɭʌvˈɑ",
  "senses": [
   {
    "es": "cabeza",
    "definitionEs": "Parte superior del cuerpo que contiene el cerebro y los órganos de los sentidos.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "132",
    "Rank": "132",
    "Lemma": "голова",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "709.4",
    "Fiction 1990-2000": "1298.8",
    "Journalism 1990-2000": "369.6",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "голов",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "голова",
    "Member2": "глава",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "93",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "голова"
  }
 },
 {
  "id": "CMR-00134",
  "ru": "делать",
  "posNormalized": "verbo",
  "translit": "dEɭʌt",
  "ipa": "dʲˈeɭʌtʲ",
  "senses": [
   {
    "es": "hacer",
    "definitionEs": "Producir algun tipo de objeto en serie, generalmente empleando medios mecanicos",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "134",
    "Rank": "134",
    "Lemma": "делать",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "701.1",
    "Fiction 1990-2000": "764.1",
    "Journalism 1990-2000": "712.1",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "дел",
    "Suffix1": "ать",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "дело",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "48",
    "WordFamilyNumber": "136",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "что? кому?",
    "VOM": "",
    "ReflexPairNumber": "24"
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "делать"
  }
 },
 {
  "id": "CMR-00138",
  "ru": "просто",
  "posNormalized": "otro",
  "translit": "prOstʌ",
  "ipa": "prˈostʌ",
  "senses": [
   {
    "es": "simplemente, fácil",
    "definitionEs": "Adverbio: indica sencillez o actúa como muletilla ('просто так' = así nomás, sin motivo).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "138",
    "Rank": "138",
    "Lemma": "просто",
    "POS": "part",
    "MultipleEntry": "",
    "Frequency": "656.5",
    "Fiction 1990-2000": "806.7",
    "Journalism 1990-2000": "652.2",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "прост",
    "Suffix1": "о",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "простой",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "427",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "1499",
    "Rank": "1499",
    "Lemma": "просто",
    "POS": "adv",
    "MultipleEntry": "",
    "Frequency": "82.6",
    "Fiction 1990-2000": "90.5",
    "Journalism 1990-2000": "85.7",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "прост",
    "Suffix1": "о",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "простой",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "88",
    "AspectPair": "",
    "WordFamilyNumber": "427",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00140",
  "ru": "сила",
  "posNormalized": "sustantivo",
  "translit": "sIɭa",
  "ipa": "sʲˈiɭa",
  "senses": [
   {
    "es": "fuerza, fuerza",
    "definitionEs": "Condicion de fuerte o resistente",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "140",
    "Rank": "140",
    "Lemma": "сила",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "645.8",
    "Fiction 1990-2000": "531.2",
    "Journalism 1990-2000": "707.3",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "сил",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "сила",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "503",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "сила"
  }
 },
 {
  "id": "CMR-00145",
  "ru": "вид",
  "posNormalized": "sustantivo",
  "translit": "vIt",
  "ipa": "vʲˈit",
  "senses": [
   {
    "es": "aspecto, aire, apariencia",
    "definitionEs": "Grupo o conjunto de cosas diferentes.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "145",
    "Rank": "145",
    "Lemma": "вид",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "620.1",
    "Fiction 1990-2000": "532.9",
    "Journalism 1990-2000": "555.3",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "вид",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "вид",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "64",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "вид"
  }
 },
 {
  "id": "CMR-00146",
  "ru": "система",
  "posNormalized": "sustantivo",
  "translit": "sistEma",
  "ipa": "sʲisʲtʲˈema",
  "senses": [
   {
    "es": "sistema",
    "definitionEs": "Mas concretamente, el formado por el aparato del Estado con todas sus instituciones y burocracia.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "146",
    "Rank": "146",
    "Lemma": "система",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "617.8",
    "Fiction 1990-2000": "72.5",
    "Journalism 1990-2000": "726.2",
    "Length": "7",
    "International": "",
    "Inter_Derived": "TRUE",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "систем",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "система",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "система"
  }
 },
 {
  "id": "CMR-00147",
  "ru": "всегда",
  "posNormalized": "otro",
  "translit": "fsigdA",
  "ipa": "fsʲiɡdˈɑ",
  "senses": [
   {
    "es": "siempre",
    "definitionEs": "Adverbio de tiempo, indica que algo ocurre en todo momento.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "147",
    "Rank": "147",
    "Lemma": "всегда",
    "POS": "advpro",
    "MultipleEntry": "",
    "Frequency": "611.9",
    "Fiction 1990-2000": "655.8",
    "Journalism 1990-2000": "648.5",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "весь",
    "Suffix1": "гда",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "всегда",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "738",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00148",
  "ru": "работать",
  "posNormalized": "verbo",
  "translit": "rabOtʌt",
  "ipa": "rabˈotʌtʲ",
  "senses": [
   {
    "es": "trabajar",
    "definitionEs": "Realizar una actividad física o mental, generalmente a cambio de un pago.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "148",
    "Rank": "148",
    "Lemma": "работать",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "611.2",
    "Fiction 1990-2000": "415.1",
    "Journalism 1990-2000": "849.3",
    "Length": "8",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "раб",
    "Suffix1": "отать",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "раб",
    "Member2": "работа",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "445",
    "Notes": "ШЭС: Раб исходно — «сирота», затем — «подневольный работник» и далее — «раб». orpa - cognate with English orphan (Latin orbus)",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "где? кем?",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "работать"
  }
 },
 {
  "id": "CMR-00149",
  "ru": "между",
  "posNormalized": "otro",
  "translit": "mEʒdu",
  "ipa": "mʲˈeʒdu",
  "senses": [
   {
    "es": "entre",
    "definitionEs": "Preposición de lugar o relación. Rige instrumental.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "149",
    "Rank": "149",
    "Lemma": "между",
    "POS": "pr",
    "MultipleEntry": "",
    "Frequency": "607.5",
    "Fiction 1990-2000": "462.2",
    "Journalism 1990-2000": "634.5",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "мед",
    "Suffix1": "у",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "межа",
    "Member2": "между",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "722",
    "Notes": "Cognate with English medium",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00150",
  "ru": "три",
  "posNormalized": "otro",
  "translit": "trI",
  "ipa": "trʲˈɪ",
  "senses": [
   {
    "es": "tres",
    "definitionEs": "Numeral cardinal 'tres'.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "150",
    "Rank": "150",
    "Lemma": "три",
    "POS": "num",
    "MultipleEntry": "",
    "Frequency": "596.7",
    "Fiction 1990-2000": "600.4",
    "Journalism 1990-2000": "646",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "три",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "три",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "604",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00152",
  "ru": "понять",
  "posNormalized": "verbo",
  "translit": "pʌnAt",
  "ipa": "pʌnʲˈɑtʲ",
  "senses": [
   {
    "es": "comprender, entender, concebir",
    "definitionEs": "Llegar a captar el sentido de algo (aspecto perfectivo, acción completa).",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "152",
    "Rank": "152",
    "Lemma": "понять",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "588.2",
    "Fiction 1990-2000": "954.6",
    "Journalism 1990-2000": "408.9",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "по",
    "Prefix2": "",
    "Root": "им",
    "Suffix1": "ть",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "им",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "77",
    "WordFamilyNumber": "200",
    "Notes": "",
    "FamilyBranch": "k",
    "BranchMemberNo": "1",
    "Governance": "кого? что?",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "понять"
  }
 },
 {
  "id": "CMR-00154",
  "ru": "часть",
  "posNormalized": "sustantivo",
  "translit": "tʃAst",
  "ipa": "tʃʲˈɑstʲ",
  "senses": [
   {
    "es": "parte",
    "definitionEs": "Porción de un todo.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "154",
    "Rank": "154",
    "Lemma": "часть",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "585.4",
    "Fiction 1990-2000": "270.5",
    "Journalism 1990-2000": "687.8",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "част",
    "Suffix1": "ь",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "часть",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "651",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "часть"
  }
 },
 {
  "id": "CMR-00156",
  "ru": "город",
  "posNormalized": "sustantivo",
  "translit": "gOrʌt",
  "ipa": "ɡˈorʌt",
  "senses": [
   {
    "es": "ciudad, urbe",
    "definitionEs": "Geografia| Asentamiento de gran tamano y actividad primariamente industrial o de servicio, antes que agricola.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "156",
    "Rank": "156",
    "Lemma": "город",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "573.4",
    "Fiction 1990-2000": "501.8",
    "Journalism 1990-2000": "736.5",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "город",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "город",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "106",
    "Notes": "Cognate with English garden",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "город"
  }
 },
 {
  "id": "CMR-00160",
  "ru": "понимать",
  "posNormalized": "verbo",
  "translit": "pʌnimAt",
  "ipa": "pʌnʲimˈɑtʲ",
  "senses": [
   {
    "es": "comprender, entender",
    "definitionEs": "Captar el sentido de algo (aspecto imperfectivo, proceso).",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "160",
    "Rank": "160",
    "Lemma": "понимать",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "559.7",
    "Fiction 1990-2000": "788.2",
    "Journalism 1990-2000": "443.5",
    "Length": "8",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "по",
    "Prefix2": "",
    "Root": "им",
    "Suffix1": "ать",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "им",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "77",
    "WordFamilyNumber": "200",
    "Notes": "",
    "FamilyBranch": "k",
    "BranchMemberNo": "5",
    "Governance": "кого? что?",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "понимать"
  }
 },
 {
  "id": "CMR-00161",
  "ru": "получить",
  "posNormalized": "verbo",
  "translit": "pʌɭutʃIt",
  "ipa": "pʌɭutʃʲˈitʲ",
  "senses": [
   {
    "es": "recibir",
    "definitionEs": "Tomar alguien algo que se le da o se le envia.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "161",
    "Rank": "161",
    "Lemma": "получить",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "557.7",
    "Fiction 1990-2000": "308.5",
    "Journalism 1990-2000": "709.5",
    "Length": "8",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "по",
    "Prefix2": "",
    "Root": "луч",
    "Suffix1": "ить",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "получить",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "101",
    "WordFamilyNumber": "281",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "кого? что? откуда?",
    "VOM": "",
    "ReflexPairNumber": "83"
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "получить"
  }
 },
 {
  "id": "CMR-00162",
  "ru": "отношение",
  "posNormalized": "sustantivo",
  "translit": "ʌtnʌʃEniyi",
  "ipa": "ʌtnʌʃˈɛnʲijɪ",
  "senses": [
   {
    "es": "actitud",
    "definitionEs": "Posicion, orientacion o disposicion mental o emocional hacia alguien o algo.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "162",
    "Rank": "162",
    "Lemma": "отношение",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "557.4",
    "Fiction 1990-2000": "226.2",
    "Journalism 1990-2000": "678.8",
    "Length": "9",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "от",
    "Prefix2": "",
    "Root": "нос",
    "Suffix1": "ение",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "носить",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "348",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "отношение"
  }
 },
 {
  "id": "CMR-00164",
  "ru": "второй",
  "posNormalized": "otro",
  "translit": "ftʌrOy",
  "ipa": "ftʌrˈoj",
  "senses": [
   {
    "es": "segundo",
    "definitionEs": "Numeral ordinal correspondiente a 'два' (dos).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "164",
    "Rank": "164",
    "Lemma": "второй",
    "POS": "anum",
    "MultipleEntry": "",
    "Frequency": "552.4",
    "Fiction 1990-2000": "489.9",
    "Journalism 1990-2000": "637.9",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "втор",
    "Suffix1": "ой",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "второй",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "81",
    "Notes": "ШЭС: cognate with German anderer, English other",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00166",
  "ru": "ваш",
  "posNormalized": "otro",
  "translit": "vAʃ",
  "ipa": "vˈɑʃ",
  "senses": [
   {
    "es": "su, vuestro",
    "definitionEs": "Pronombre posesivo de segunda persona formal o plural.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "166",
    "Rank": "166",
    "Lemma": "ваш",
    "POS": "apro",
    "MultipleEntry": "",
    "Frequency": "547.5",
    "Fiction 1990-2000": "652.4",
    "Journalism 1990-2000": "496.1",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00167",
  "ru": "хотя",
  "posNormalized": "otro",
  "translit": "jʌtA",
  "ipa": "xʌtʲˈɑ",
  "senses": [
   {
    "es": "aunque",
    "definitionEs": "Conjunción concesiva, introduce una idea que contrasta sin anular la principal.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "167",
    "Rank": "167",
    "Lemma": "хотя",
    "POS": "conj",
    "MultipleEntry": "",
    "Frequency": "546.9",
    "Fiction 1990-2000": "589.1",
    "Journalism 1990-2000": "609.7",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "хот",
    "Suffix1": "я",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "хотеть",
    "Member2": "хотя",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "636",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "1375",
    "Rank": "1375",
    "Lemma": "хотя",
    "POS": "part",
    "MultipleEntry": "YES",
    "Frequency": "88.9",
    "Fiction 1990-2000": "96.1",
    "Journalism 1990-2000": "98.7",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "хот",
    "Suffix1": "я",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "хотеть",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "636",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00171",
  "ru": "женщина",
  "posNormalized": "sustantivo",
  "translit": "ʒEnshina",
  "ipa": "ʒˈɛnɕina",
  "senses": [
   {
    "es": "mujer, hembra",
    "definitionEs": "Ser humano de sexo femenino. 3. En particular, mujer1 que ha alcanzado la madurez.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "171",
    "Rank": "171",
    "Lemma": "женщина",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "533.3",
    "Fiction 1990-2000": "804",
    "Journalism 1990-2000": "428.1",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "жен",
    "Suffix1": "щина",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "жена",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "172",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "женщина"
  }
 },
 {
  "id": "CMR-00173",
  "ru": "русский",
  "posNormalized": "adjetivo",
  "translit": "rUsskiy",
  "ipa": "rˈusskʲij",
  "senses": [
   {
    "es": "ruso",
    "definitionEs": "Gentilicios| Persona que es originaria de Rusia. 3. Se dice de algo que es originario o se encuentra relacionado con Rusia.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "173",
    "Rank": "173",
    "Lemma": "русский",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "530.5",
    "Fiction 1990-2000": "343.6",
    "Journalism 1990-2000": "783.2",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "рус",
    "Suffix1": "ский",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "Русь",
    "Member2": "русский",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "482",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "1617",
    "Rank": "1617",
    "Lemma": "русский",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "75.7",
    "Fiction 1990-2000": "73.2",
    "Journalism 1990-2000": "106.9",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "TRUE",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "русск",
    "Suffix1": "ий",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "русский",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "482",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "русский"
  }
 },
 {
  "id": "CMR-00175",
  "ru": "взять",
  "posNormalized": "verbo",
  "translit": "vʑAt",
  "ipa": "vʑˈɑtʲ",
  "senses": [
   {
    "es": "tomar, coger, asir",
    "definitionEs": "Tomar algo con la mano o hacerse cargo de algo (aspecto perfectivo).",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "175",
    "Rank": "175",
    "Lemma": "взять",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "525.8",
    "Fiction 1990-2000": "751.3",
    "Journalism 1990-2000": "410.4",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "вз",
    "Prefix2": "",
    "Root": "им",
    "Suffix1": "ть",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "им",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "262",
    "WordFamilyNumber": "200",
    "Notes": "",
    "FamilyBranch": "b",
    "BranchMemberNo": "1",
    "Governance": "кого? что? у кого? у чего?",
    "VOM": "",
    "ReflexPairNumber": "8"
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "взять"
  }
 },
 {
  "id": "CMR-00177",
  "ru": "являться",
  "posNormalized": "verbo",
  "translit": "yavɭAtsʌ",
  "ipa": "javɭʲˈɑtsˌʌ",
  "senses": [
   {
    "es": "resultar",
    "definitionEs": "Ser o constituir algo, en un registro formal ('являться причинои' = ser la causa).",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "177",
    "Rank": "177",
    "Lemma": "являться",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "522.9",
    "Fiction 1990-2000": "93",
    "Journalism 1990-2000": "549.5",
    "Length": "8",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "яв",
    "Suffix1": "яться",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "явный",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "244",
    "WordFamilyNumber": "686",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "кем? чем?",
    "VOM": "",
    "ReflexPairNumber": "r"
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "являться"
  }
 },
 {
  "id": "CMR-00178",
  "ru": "деньги",
  "posNormalized": "sustantivo",
  "translit": "dEngi",
  "ipa": "dʲˈenɡʲɪ",
  "senses": [
   {
    "es": "dinero, pasta, plata",
    "definitionEs": "Bien que se usa para el pago de otros bienes y servicios y como unidad de medida de la riqueza",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "178",
    "Rank": "178",
    "Lemma": "деньги",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "512.4",
    "Fiction 1990-2000": "654.5",
    "Journalism 1990-2000": "663.6",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "TRUE",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "деньг",
    "Suffix1": "и",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "деньги",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "140",
    "Notes": "Turkic origin",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "деньги"
  }
 },
 {
  "id": "CMR-00179",
  "ru": "почему",
  "posNormalized": "otro",
  "translit": "pʌtʃimU",
  "ipa": "pʌtʃʲimˈu",
  "senses": [
   {
    "es": "por qué",
    "definitionEs": "Pregunta por la causa o el motivo de algo.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "179",
    "Rank": "179",
    "Lemma": "почему",
    "POS": "advpro",
    "MultipleEntry": "",
    "Frequency": "507.2",
    "Fiction 1990-2000": "695.1",
    "Journalism 1990-2000": "419.4",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "по",
    "Prefix2": "",
    "Root": "что",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "что",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "662",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00181",
  "ru": "любить",
  "posNormalized": "verbo",
  "translit": "ɭu\"bIt",
  "ipa": "ɭʲu\"bʲˈitʲ",
  "senses": [
   {
    "es": "amar, querer",
    "definitionEs": "Sentir amor por alguien o algo.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "181",
    "Rank": "181",
    "Lemma": "любить",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "503.1",
    "Fiction 1990-2000": "635",
    "Journalism 1990-2000": "461.1",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "люб",
    "Suffix1": "ить",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "любить",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "103",
    "WordFamilyNumber": "283",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "кого? что? делать что?",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "любить"
  }
 },
 {
  "id": "CMR-00182",
  "ru": "стоить",
  "posNormalized": "verbo",
  "translit": "stOit",
  "ipa": "stˈoitʲ",
  "senses": [
   {
    "es": "costar, valer",
    "definitionEs": "Tener un valor en dinero.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "182",
    "Rank": "182",
    "Lemma": "стоить",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "501.9",
    "Fiction 1990-2000": "562",
    "Journalism 1990-2000": "532.6",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "стои",
    "Suffix1": "ть",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "стоить",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "543",
    "Notes": "ШЭС: (цениться). Заимств. в XVIII в. из польск. яз., где stać «стоить», stoi «стоит» — семантическая калька нем. kosten «стоить» < лат. constare «стоить» < «постоянно стоять». См. стоять.",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "что? сколько?",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "стоить"
  }
 },
 {
  "id": "CMR-00183",
  "ru": "почти",
  "posNormalized": "otro",
  "translit": "pʌtʃtI",
  "ipa": "pʌtʃʲtʲˈɪ",
  "senses": [
   {
    "es": "casi",
    "definitionEs": "Que por poca diferencia no es, que tiene mucha semejanza.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "183",
    "Rank": "183",
    "Lemma": "почти",
    "POS": "adv",
    "MultipleEntry": "",
    "Frequency": "501.7",
    "Fiction 1990-2000": "592.5",
    "Journalism 1990-2000": "540.5",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "по",
    "Prefix2": "",
    "Root": "чит",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "читать",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "658",
    "Notes": "ШЭС: Искон. Бывшая форма 2-го л. ед. ч. повелит. наклонения от почьсти «счесть» (ср. диал. почитай «почти» от итеративного почитать «считать»). Почти буквально — «сочти»",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "почти"
  }
 },
 {
  "id": "CMR-00184",
  "ru": "земля",
  "posNormalized": "sustantivo",
  "translit": "ʑimɭA",
  "ipa": "ʑimɭʲˈɑ",
  "senses": [
   {
    "es": "Tierra",
    "definitionEs": "Tierra, suelo, o el planeta que habitamos.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "184",
    "Rank": "184",
    "Lemma": "земля",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "494.4",
    "Fiction 1990-2000": "525",
    "Journalism 1990-2000": "420.3",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "зем",
    "Suffix1": "я",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "земля",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "188",
    "Notes": "Cognate with Latin humus",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "земля"
  }
 },
 {
  "id": "CMR-00185",
  "ru": "общий",
  "posNormalized": "adjetivo",
  "translit": "Opshiy",
  "ipa": "ˈopɕij",
  "senses": [
   {
    "es": "comun",
    "definitionEs": "Que pertenece o concierne a todas las cosas de un mismo genero o clase, y no a ninguna de ellas en particular",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "185",
    "Rank": "185",
    "Lemma": "общий",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "492.4",
    "Fiction 1990-2000": "292.7",
    "Journalism 1990-2000": "529.3",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "общ",
    "Suffix1": "ий",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "общий",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "359",
    "Notes": "ШЭС: Заимств. из ст.-сл. яз., где является суф. производным (суф. -j-) от обътъ (ср. диал. опт «общий валовой счет», наречие оптом), суф. образования от об. Общий исходно — «окружающий».",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "общий"
  }
 },
 {
  "id": "CMR-00187",
  "ru": "машина",
  "posNormalized": "sustantivo",
  "translit": "maʃYna",
  "ipa": "maʃˈyna",
  "senses": [
   {
    "es": "maquina",
    "definitionEs": "Aparato compuesto de varias partes que interactuan para la ejecucion de determinada tarea que requiere cierta energia.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "187",
    "Rank": "187",
    "Lemma": "машина",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "490.4",
    "Fiction 1990-2000": "605.7",
    "Journalism 1990-2000": "508.4",
    "Length": "6",
    "International": "",
    "Inter_Derived": "TRUE",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "машин",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "машина",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "291",
    "Notes": "Polysemous",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "машина"
  }
 },
 {
  "id": "CMR-00190",
  "ru": "хорошо",
  "posNormalized": "otro",
  "translit": "jʌrʌʃO",
  "ipa": "xʌrʌʃˈo",
  "senses": [
   {
    "es": "bien",
    "definitionEs": "Adverbio de modo ('хорошо говорить' = hablar bien) o expresión de acuerdo ('¡Está bien!').",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "190",
    "Rank": "190",
    "Lemma": "хорошо",
    "POS": "adv",
    "MultipleEntry": "",
    "Frequency": "485.7",
    "Fiction 1990-2000": "541.2",
    "Journalism 1990-2000": "444.6",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "хорош",
    "Suffix1": "о",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "хороший",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "135",
    "AspectPair": "",
    "WordFamilyNumber": "635",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "2234",
    "Rank": "2234",
    "Lemma": "хорошо",
    "POS": "part",
    "MultipleEntry": "YES",
    "Frequency": "52.9",
    "Fiction 1990-2000": "81.9",
    "Journalism 1990-2000": "31.5",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "хорош",
    "Suffix1": "о",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "хороший",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "635",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00191",
  "ru": "вода",
  "posNormalized": "sustantivo",
  "translit": "vʌdA",
  "ipa": "vʌdˈɑ",
  "senses": [
   {
    "es": "agua",
    "definitionEs": "Sustancia líquida, transparente e incolora, esencial para la vida.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "191",
    "Rank": "191",
    "Lemma": "вода",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "484.8",
    "Fiction 1990-2000": "547.8",
    "Journalism 1990-2000": "387",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "вод",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "вода",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "72",
    "Notes": "Cognate with water",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "вода"
  }
 },
 {
  "id": "CMR-00192",
  "ru": "отец",
  "posNormalized": "sustantivo",
  "translit": "ʌtEts",
  "ipa": "ʌtʲˈets",
  "senses": [
   {
    "es": "padre, padre",
    "definitionEs": "Macho, animal o humano, que ha engendrado o adoptado hijos.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "192",
    "Rank": "192",
    "Lemma": "отец",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "484.1",
    "Fiction 1990-2000": "625.7",
    "Journalism 1990-2000": "393.9",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "отец",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "отец",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "373",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "отец"
  }
 },
 {
  "id": "CMR-00193",
  "ru": "высокий",
  "posNormalized": "adjetivo",
  "translit": "vysOkiy",
  "ipa": "vysˈokʲij",
  "senses": [
   {
    "es": "alto",
    "definitionEs": "Levantado, elevado sobre la tierra.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "193",
    "Rank": "193",
    "Lemma": "высокий",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "483.3",
    "Fiction 1990-2000": "350.5",
    "Journalism 1990-2000": "517.5",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "выс",
    "Suffix1": "окий",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "высокий",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "18",
    "AspectPair": "",
    "WordFamilyNumber": "84",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "высокий"
  }
 },
 {
  "id": "CMR-00196",
  "ru": "много",
  "posNormalized": "otro",
  "translit": "mnOgʌ",
  "ipa": "mnˈoɡʌ",
  "senses": [
   {
    "es": "mucho",
    "definitionEs": "Indica gran cantidad de algo. Rige genitivo cuando acompaña a un sustantivo.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "196",
    "Rank": "196",
    "Lemma": "много",
    "POS": "num",
    "MultipleEntry": "YES",
    "Frequency": "480",
    "Fiction 1990-2000": "404.1",
    "Journalism 1990-2000": "589.6",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "мног",
    "Suffix1": "о",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "много",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "316",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "1478",
    "Rank": "1478",
    "Lemma": "много",
    "POS": "adv",
    "MultipleEntry": "",
    "Frequency": "84",
    "Fiction 1990-2000": "77.1",
    "Journalism 1990-2000": "95",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "мног",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "316",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00200",
  "ru": "час",
  "posNormalized": "sustantivo",
  "translit": "tʃAs",
  "ipa": "tʃʲˈɑs",
  "senses": [
   {
    "es": "hora",
    "definitionEs": "Cronologia| Cada una de las 24 partes de igual duracion en que se divide el dia, a su vez subdivididas cada una de ellas en 60 minutos.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "200",
    "Rank": "200",
    "Lemma": "час",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "468.1",
    "Fiction 1990-2000": "498.1",
    "Journalism 1990-2000": "463.7",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "час",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "час",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "650",
    "Notes": "ШЭС: Скорее всего, суф. производное (суф. -с-, ср. голос) от чати, давшего позже чаять «ждать». Час исходно — «время». ",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "час"
  }
 },
 {
  "id": "CMR-00202",
  "ru": "сегодня",
  "posNormalized": "otro",
  "translit": "sivOdnʌ",
  "ipa": "sʲivˈodnʲʌ",
  "senses": [
   {
    "es": "hoy",
    "definitionEs": "En el día en que se habla.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "202",
    "Rank": "202",
    "Lemma": "сегодня",
    "POS": "adv",
    "MultipleEntry": "",
    "Frequency": "463.5",
    "Fiction 1990-2000": "399.3",
    "Journalism 1990-2000": "604.1",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "TRUE",
    "Calque": "",
    "Prefix1": "сей",
    "Prefix2": "",
    "Root": "ден",
    "Suffix1": "я",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "день",
    "Member2": "сей",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "99",
    "AspectPair": "",
    "WordFamilyNumber": "139",
    "Notes": "Compound",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "сегодня"
  }
 },
 {
  "id": "CMR-00204",
  "ru": "совсем",
  "posNormalized": "otro",
  "translit": "sʌfsEm",
  "ipa": "sʌfsʲˈem",
  "senses": [
   {
    "es": "completamente",
    "definitionEs": "Por completo, del todo.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "204",
    "Rank": "204",
    "Lemma": "совсем",
    "POS": "adv",
    "MultipleEntry": "",
    "Frequency": "460.5",
    "Fiction 1990-2000": "642.2",
    "Journalism 1990-2000": "381.5",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "TRUE",
    "Calque": "",
    "Prefix1": "с",
    "Prefix2": "",
    "Root": "весь",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "весь",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "59",
    "Notes": "Compound",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "совсем"
  }
 },
 {
  "id": "CMR-00205",
  "ru": "нога",
  "posNormalized": "sustantivo",
  "translit": "nʌgA",
  "ipa": "nʌɡˈɑ",
  "senses": [
   {
    "es": "pierna, pata, muslo",
    "definitionEs": "Extremidad inferior del cuerpo, usada para caminar.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "205",
    "Rank": "205",
    "Lemma": "нога",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "459.2",
    "Fiction 1990-2000": "825",
    "Journalism 1990-2000": "245.8",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "ног",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "нога",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "346",
    "Notes": "Original meaning is \"nail\" related to German Nagel/English nail; from there to whole body part (first for animals then for people)",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "нога"
  }
 },
 {
  "id": "CMR-00206",
  "ru": "считать",
  "posNormalized": "verbo",
  "translit": "shitAt",
  "ipa": "ɕitˈɑtʲ",
  "senses": [
   {
    "es": "considerar, creer, contar",
    "definitionEs": "Tener una opinión o creencia sobre algo. También significa 'enumerar cantidades' (contar).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "206",
    "Rank": "206",
    "Lemma": "считать",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "455.3",
    "Fiction 1990-2000": "327.4",
    "Journalism 1990-2000": "582.3",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "с",
    "Prefix2": "",
    "Root": "чит",
    "Suffix1": "ать",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "читать",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "658",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "кого? что? кем? чем?",
    "VOM": "",
    "ReflexPairNumber": "136"
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "считать"
  }
 },
 {
  "id": "CMR-00207",
  "ru": "главный",
  "posNormalized": "adjetivo",
  "translit": "gɭAvnyy",
  "ipa": "ɡɭˈɑvnyj",
  "senses": [
   {
    "es": "principal, esencial, capital, cardinal",
    "definitionEs": "Principal, más importante dentro de un conjunto.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "207",
    "Rank": "207",
    "Lemma": "главный",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "454.6",
    "Fiction 1990-2000": "242.2",
    "Journalism 1990-2000": "702",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "глав",
    "Suffix1": "ный",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "глава",
    "Member2": "голова",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "93",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "главный"
  }
 },
 {
  "id": "CMR-00208",
  "ru": "решение",
  "posNormalized": "sustantivo",
  "translit": "riʃEniyi",
  "ipa": "rʲiʃˈɛnʲijɪ",
  "senses": [
   {
    "es": "decisión, resolución",
    "definitionEs": "Determinación que se toma sobre algo, tras haberlo pensado.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "208",
    "Rank": "208",
    "Lemma": "решение",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "453.4",
    "Fiction 1990-2000": "88.9",
    "Journalism 1990-2000": "557.9",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "реш",
    "Suffix1": "ение",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "решить",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "470",
    "Notes": "Original meaning вязать",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "решение"
  }
 },
 {
  "id": "CMR-00209",
  "ru": "увидеть",
  "posNormalized": "verbo",
  "translit": "uvIdit",
  "ipa": "uvʲˈidʲitʲ",
  "senses": [
   {
    "es": "ver",
    "definitionEs": "Percibir algo con los ojos, en un momento puntual (aspecto perfectivo de 'видеть').",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "209",
    "Rank": "209",
    "Lemma": "увидеть",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "452.4",
    "Fiction 1990-2000": "654.6",
    "Journalism 1990-2000": "341.1",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "у",
    "Prefix2": "",
    "Root": "вид",
    "Suffix1": "еть",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "вид",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "16",
    "WordFamilyNumber": "64",
    "Notes": "Same as Latin video",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "кого? что?",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "увидеть"
  }
 },
 {
  "id": "CMR-00210",
  "ru": "дверь",
  "posNormalized": "sustantivo",
  "translit": "dvEri^",
  "ipa": "dvʲˈerɪ^",
  "senses": [
   {
    "es": "puerta",
    "definitionEs": "Estructura que permite el paso o el cierre de una entrada.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "210",
    "Rank": "210",
    "Lemma": "дверь",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "450.8",
    "Fiction 1990-2000": "940",
    "Journalism 1990-2000": "209.9",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "двер",
    "Suffix1": "ь",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "дверь",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "127",
    "Notes": "Cоgnate with door; related to двор",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "дверь"
  }
 },
 {
  "id": "CMR-00211",
  "ru": "казаться",
  "posNormalized": "verbo",
  "translit": "kazAtsʌ",
  "ipa": "kazˈɑtsˌʌ",
  "senses": [
   {
    "es": "parecer, aparentar, hacer el efecto",
    "definitionEs": "Tener cierto aspecto o apariencia; verse o ser considerado de determinada manera.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "211",
    "Rank": "211",
    "Lemma": "казаться",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "448.2",
    "Fiction 1990-2000": "550.7",
    "Journalism 1990-2000": "395.8",
    "Length": "8",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "каз",
    "Suffix1": "аться",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "казать",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "212",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "кем? чем?",
    "VOM": "",
    "ReflexPairNumber": "r"
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "казаться"
  }
 },
 {
  "id": "CMR-00212",
  "ru": "образ",
  "posNormalized": "sustantivo",
  "translit": "Obrʌs",
  "ipa": "ˈobrʌs",
  "senses": [
   {
    "es": "imagen",
    "definitionEs": "Forma exterior caracteristica de un cuerpo, que la distingue de otro.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "212",
    "Rank": "212",
    "Lemma": "образ",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "445.9",
    "Fiction 1990-2000": "229.8",
    "Journalism 1990-2000": "491.4",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "об",
    "Prefix2": "",
    "Root": "рез",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "образ",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "357",
    "Notes": "ШЭС: разити = резать, from wood carving",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "образ"
  }
 },
 {
  "id": "CMR-00213",
  "ru": "писать",
  "posNormalized": "verbo",
  "translit": "pisAt",
  "ipa": "pʲisˈɑtʲ",
  "senses": [
   {
    "es": "escribir vt, escribir",
    "definitionEs": "Trazar letras o palabras sobre una superficie para comunicar algo.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "213",
    "Rank": "213",
    "Lemma": "писать",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "444.3",
    "Fiction 1990-2000": "335.6",
    "Journalism 1990-2000": "534.9",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "пис",
    "Suffix1": "ать",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "писать",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "261",
    "WordFamilyNumber": "390",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "что? кому? куда? о ком? о чём? чем?",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "писать"
  }
 },
 {
  "id": "CMR-00214",
  "ru": "история",
  "posNormalized": "sustantivo",
  "translit": "istOriya",
  "ipa": "ɪstˈorʲija",
  "senses": [
   {
    "es": "historia",
    "definitionEs": "Conjunto de los acontecimientos pasados. 3. Disciplina que estudia la identificacion y recapitulacion de los acontecimientos pasados.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "214",
    "Rank": "214",
    "Lemma": "история",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "443.9",
    "Fiction 1990-2000": "274.1",
    "Journalism 1990-2000": "591.8",
    "Length": "7",
    "International": "",
    "Inter_Derived": "TRUE",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "истори",
    "Suffix1": "я",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "история",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "209",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "история"
  }
 },
 {
  "id": "CMR-00216",
  "ru": "власть",
  "posNormalized": "sustantivo",
  "translit": "vɭAst",
  "ipa": "vɭˈɑstʲ",
  "senses": [
   {
    "es": "poder, mando",
    "definitionEs": "Dominio que se tiene sobre una cosa.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "216",
    "Rank": "216",
    "Lemma": "власть",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "435.6",
    "Fiction 1990-2000": "179.7",
    "Journalism 1990-2000": "742.3",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "влад",
    "Suffix1": "ть",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "владеть",
    "Member2": "волость",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "68",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "власть"
  }
 },
 {
  "id": "CMR-00217",
  "ru": "закон",
  "posNormalized": "sustantivo",
  "translit": "zakOn",
  "ipa": "zakˈon",
  "senses": [
   {
    "es": "ley",
    "definitionEs": "Derecho| Disposicion, regla o precepto dictado por la maxima autoridad.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "217",
    "Rank": "217",
    "Lemma": "закон",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "433.4",
    "Fiction 1990-2000": "135.8",
    "Journalism 1990-2000": "573.5",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "за",
    "Prefix2": "",
    "Root": "кон",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "233",
    "Notes": "кон originally meant beginning",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "закон"
  }
 },
 {
  "id": "CMR-00219",
  "ru": "война",
  "posNormalized": "sustantivo",
  "translit": "vʌynA",
  "ipa": "vʌjnˈɑ",
  "senses": [
   {
    "es": "guerra, conflagracion",
    "definitionEs": "Conflicto armado entre mucha gente (paises, bandos) y con gran numero de victimas (muertos, heridos, damnificados).",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "219",
    "Rank": "219",
    "Lemma": "война",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "425.9",
    "Fiction 1990-2000": "268.9",
    "Journalism 1990-2000": "586.8",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "воин",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "воин",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "74",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "война"
  }
 },
 {
  "id": "CMR-00220",
  "ru": "бог",
  "posNormalized": "sustantivo",
  "translit": "bOk",
  "ipa": "bˈok",
  "senses": [
   {
    "es": "Dios",
    "definitionEs": "Ser supremo al que se rinde culto en una religión.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "220",
    "Rank": "220",
    "Lemma": "бог",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "425.4",
    "Fiction 1990-2000": "485.3",
    "Journalism 1990-2000": "274.4",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "бог",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "бог",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "30",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "бог"
  }
 },
 {
  "id": "CMR-00221",
  "ru": "голос",
  "posNormalized": "sustantivo",
  "translit": "gOɭʌs",
  "ipa": "ɡˈoɭʌs",
  "senses": [
   {
    "es": "voz",
    "definitionEs": "Sonido que produce una persona al hablar o cantar. También significa 'voto' en una elección.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "221",
    "Rank": "221",
    "Lemma": "голос",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "424.5",
    "Fiction 1990-2000": "713.9",
    "Journalism 1990-2000": "265.1",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "голос",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "голос",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "95",
    "Notes": "ШЭС: related to глагол",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "голос"
  }
 },
 {
  "id": "CMR-00224",
  "ru": "стоять",
  "posNormalized": "verbo",
  "translit": "stʌYat",
  "ipa": "stʌˈjatʲ",
  "senses": [
   {
    "es": "estar de pie, permanecer de pie",
    "definitionEs": "Estar en posición vertical, sin moverse.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "224",
    "Rank": "224",
    "Lemma": "стоять",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "419.3",
    "Fiction 1990-2000": "694",
    "Journalism 1990-2000": "237.9",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "стой",
    "Suffix1": "ать",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "стой",
    "Member2": "стоять",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "200",
    "WordFamilyNumber": "544",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "где?",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "стоять"
  }
 },
 {
  "id": "CMR-00225",
  "ru": "вообще",
  "posNormalized": "otro",
  "translit": "vʌʌpshE",
  "ipa": "vʌʌpɕˈe",
  "senses": [
   {
    "es": "en general",
    "definitionEs": "Con generalidad.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "225",
    "Rank": "225",
    "Lemma": "вообще",
    "POS": "adv",
    "MultipleEntry": "",
    "Frequency": "417.6",
    "Fiction 1990-2000": "456.1",
    "Journalism 1990-2000": "427.3",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "TRUE",
    "Calque": "",
    "Prefix1": "в",
    "Prefix2": "",
    "Root": "общ",
    "Suffix1": "е",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "общий",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "359",
    "Notes": "Compound",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "вообще"
  }
 },
 {
  "id": "CMR-00227",
  "ru": "больше",
  "posNormalized": "otro",
  "translit": "bOɭʃy",
  "ipa": "bˈoɭʃy",
  "senses": [
   {
    "es": "más",
    "definitionEs": "Comparativo de 'много' (mucho) o de 'большои' (grande): indica mayor cantidad o tamaño.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "227",
    "Rank": "227",
    "Lemma": "больше",
    "POS": "adv",
    "MultipleEntry": "",
    "Frequency": "415.3",
    "Fiction 1990-2000": "538.5",
    "Journalism 1990-2000": "375.2",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "больш",
    "Suffix1": "е",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "большой",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "33",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "498",
    "Rank": "498",
    "Lemma": "больше",
    "POS": "num",
    "MultipleEntry": "YES",
    "Frequency": "218.7",
    "Fiction 1990-2000": "195.4",
    "Journalism 1990-2000": "276.2",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "больш",
    "Suffix1": "е",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "большой",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "33",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00229",
  "ru": "маленький",
  "posNormalized": "adjetivo",
  "translit": "mAɭinkiy",
  "ipa": "mˈɑɭʲinkʲij",
  "senses": [
   {
    "es": "pequeno, menudo, chiquito",
    "definitionEs": "De tamano reducido, menor a lo comun o normal. 3. De poca edad.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "229",
    "Rank": "229",
    "Lemma": "маленький",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "414.1",
    "Fiction 1990-2000": "518.8",
    "Journalism 1990-2000": "365.7",
    "Length": "9",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "мал",
    "Suffix1": "енький",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "малый",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "285",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "маленький"
  }
 },
 {
  "id": "CMR-00230",
  "ru": "книга",
  "posNormalized": "sustantivo",
  "translit": "knIga",
  "ipa": "knʲˈiɡa",
  "senses": [
   {
    "es": "libro",
    "definitionEs": "Conjunto de hojas de papel unidas por un borde formando un volumen.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "230",
    "Rank": "230",
    "Lemma": "книга",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "413.9",
    "Fiction 1990-2000": "277.1",
    "Journalism 1990-2000": "559.5",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "книг",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "книга",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "223",
    "Notes": "Possibly of Ancient Turkic origin",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "книга"
  }
 },
 {
  "id": "CMR-00234",
  "ru": "возможность",
  "posNormalized": "sustantivo",
  "translit": "vʌzmOʒnʌst",
  "ipa": "vʌzmˈoʒnʌstʲ",
  "senses": [
   {
    "es": "posibilidad",
    "definitionEs": "Circunstancia o condición que hace posible que algo ocurra.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "234",
    "Rank": "234",
    "Lemma": "возможность",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "407.5",
    "Fiction 1990-2000": "155",
    "Journalism 1990-2000": "516.4",
    "Length": "11",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "воз",
    "Prefix2": "",
    "Root": "мож",
    "Suffix1": "ность",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "мочь",
    "Member2": "можно",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "318",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "возможность"
  }
 },
 {
  "id": "CMR-00236",
  "ru": "ночь",
  "posNormalized": "sustantivo",
  "translit": "nOtʃ",
  "ipa": "nˈotʃʲ",
  "senses": [
   {
    "es": "noche",
    "definitionEs": "Parte del día en que no hay luz solar, entre el atardecer y el amanecer.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "236",
    "Rank": "236",
    "Lemma": "ночь",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "402.8",
    "Fiction 1990-2000": "615.5",
    "Journalism 1990-2000": "298.1",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "ноч",
    "Suffix1": "ь",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "ночь",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "350",
    "Notes": "Related to night, nocturnal",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "ночь"
  }
 },
 {
  "id": "CMR-00237",
  "ru": "стол",
  "posNormalized": "sustantivo",
  "translit": "stOɭ",
  "ipa": "stˈoɭ",
  "senses": [
   {
    "es": "mesa",
    "definitionEs": "Mobiliario| Mueble que consta de una superficie plana y horizontal sostenida por patas.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "237",
    "Rank": "237",
    "Lemma": "стол",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "402.5",
    "Fiction 1990-2000": "687.2",
    "Journalism 1990-2000": "258.9",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "стол",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "стол",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "545",
    "Notes": "ШЭС: от стлать «стлать». Исходное значение — «подстилка», затем — «стул» (см. престол) и, наконец, — «стол».",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "стол"
  }
 },
 {
  "id": "CMR-00238",
  "ru": "никогда",
  "posNormalized": "otro",
  "translit": "nikʌgdA",
  "ipa": "nʲikʌɡdˈɑ",
  "senses": [
   {
    "es": "nunca",
    "definitionEs": "Adverbio de tiempo negativo, indica que algo no ocurre en ningún momento.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "238",
    "Rank": "238",
    "Lemma": "никогда",
    "POS": "advpro",
    "MultipleEntry": "",
    "Frequency": "401.8",
    "Fiction 1990-2000": "536.1",
    "Journalism 1990-2000": "378",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "ни",
    "Prefix2": "",
    "Root": "ко",
    "Suffix1": "гда",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "когда",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "715",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00239",
  "ru": "имя",
  "posNormalized": "sustantivo",
  "translit": "Imʌ",
  "ipa": "ˈɪmʲʌ",
  "senses": [
   {
    "es": "nombre",
    "definitionEs": "Palabra con la que se designa a una persona, animal o cosa en particular.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "239",
    "Rank": "239",
    "Lemma": "имя",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "401.7",
    "Fiction 1990-2000": "353.1",
    "Journalism 1990-2000": "497.5",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "имен",
    "Suffix1": "мя",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "имя",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "201",
    "Notes": "Related to Greek onoma, Latin nomen",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "имя"
  }
 },
 {
  "id": "CMR-00241",
  "ru": "молодой",
  "posNormalized": "adjetivo",
  "translit": "mʌɭʌdOy",
  "ipa": "mʌɭʌdˈoj",
  "senses": [
   {
    "es": "joven",
    "definitionEs": "De poca edad.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "241",
    "Rank": "241",
    "Lemma": "молодой",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "400",
    "Fiction 1990-2000": "459.2",
    "Journalism 1990-2000": "428.8",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "молод",
    "Suffix1": "ой",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "молодой",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "314",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "молодой"
  }
 },
 {
  "id": "CMR-00243",
  "ru": "например",
  "posNormalized": "otro",
  "translit": "nʌprimEr",
  "ipa": "nʌprʲimʲˈer",
  "senses": [
   {
    "es": "por ejemplo",
    "definitionEs": "Se usa para introducir un caso concreto que ilustra lo que se acaba de decir.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "243",
    "Rank": "243",
    "Lemma": "например",
    "POS": "adv",
    "MultipleEntry": "",
    "Frequency": "398",
    "Fiction 1990-2000": "164.9",
    "Journalism 1990-2000": "533",
    "Length": "8",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "TRUE",
    "Calque": "",
    "Prefix1": "на",
    "Prefix2": "при",
    "Root": "мер",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "мера",
    "Member2": "примар",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "297",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "например"
  }
 },
 {
  "id": "CMR-00244",
  "ru": "статья",
  "posNormalized": "sustantivo",
  "translit": "statyYa",
  "ipa": "statʲjˈja",
  "senses": [
   {
    "es": "articulo",
    "definitionEs": "Texto sobre un tema, publicado en un periódico o una revista. También significa 'artículo' de una ley.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "244",
    "Rank": "244",
    "Lemma": "статья",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "395",
    "Fiction 1990-2000": "74",
    "Journalism 1990-2000": "320.6",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "стать",
    "Suffix1": "я",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "статья",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "?etymology",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "статья"
  }
 },
 {
  "id": "CMR-00246",
  "ru": "число",
  "posNormalized": "sustantivo",
  "translit": "tʃisɭO",
  "ipa": "tʃʲisɭˈo",
  "senses": [
   {
    "es": "número, cifra",
    "definitionEs": "Concepto que expresa una cantidad.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "246",
    "Rank": "246",
    "Lemma": "число",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "393.5",
    "Fiction 1990-2000": "115.7",
    "Journalism 1990-2000": "487.7",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "числ",
    "Suffix1": "о",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "читать",
    "Member2": "число",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "661",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "число"
  }
 },
 {
  "id": "CMR-00247",
  "ru": "компания",
  "posNormalized": "sustantivo",
  "translit": "kʌmpAniya",
  "ipa": "kʌmpˈɑnʲija",
  "senses": [
   {
    "es": "empresa, compañía",
    "definitionEs": "Sociedad dedicada a una actividad comercial o industrial. También significa 'grupo de personas con quienes se comparte tiempo'.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "247",
    "Rank": "247",
    "Lemma": "компания",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "392.7",
    "Fiction 1990-2000": "133.7",
    "Journalism 1990-2000": "753.7",
    "Length": "8",
    "International": "",
    "Inter_Derived": "TRUE",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "компани",
    "Suffix1": "я",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "компания",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "компания"
  }
 },
 {
  "id": "CMR-00250",
  "ru": "полный",
  "posNormalized": "adjetivo",
  "translit": "pOɭnyy",
  "ipa": "pˈoɭnyj",
  "senses": [
   {
    "es": "lleno, repleto",
    "definitionEs": "Con un contenido maximo.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "250",
    "Rank": "250",
    "Lemma": "полный",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "390.6",
    "Fiction 1990-2000": "385.5",
    "Journalism 1990-2000": "415.1",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "полн",
    "Suffix1": "ый",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "полный",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "79",
    "AspectPair": "",
    "WordFamilyNumber": "405",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "полный"
  }
 },
 {
  "id": "CMR-00251",
  "ru": "принять",
  "posNormalized": "verbo",
  "translit": "prinAt",
  "ipa": "prʲinʲˈɑtʲ",
  "senses": [
   {
    "es": "aceptar, tomar",
    "definitionEs": "Dar por bueno, reconocer como correcto.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "251",
    "Rank": "251",
    "Lemma": "принять",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "386.9",
    "Fiction 1990-2000": "252.8",
    "Journalism 1990-2000": "517.1",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "при",
    "Prefix2": "",
    "Root": "им",
    "Suffix1": "ть",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "им",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "78",
    "WordFamilyNumber": "200",
    "Notes": "",
    "FamilyBranch": "l",
    "BranchMemberNo": "1",
    "Governance": "кого? что? где?",
    "VOM": "",
    "ReflexPairNumber": "98"
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "принять"
  }
 },
 {
  "id": "CMR-00254",
  "ru": "советский",
  "posNormalized": "adjetivo",
  "translit": "sʌvEtskiy",
  "ipa": "sʌvʲˈetskʲij",
  "senses": [
   {
    "es": "sovietico",
    "definitionEs": "Relativo a la Unión Soviética (URSS).",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "254",
    "Rank": "254",
    "Lemma": "советский",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "382.9",
    "Fiction 1990-2000": "146.7",
    "Journalism 1990-2000": "608.5",
    "Length": "9",
    "International": "",
    "Inter_Derived": "TRUE",
    "InterPossible": "TRUE",
    "Compound": "",
    "Calque": "",
    "Prefix1": "со",
    "Prefix2": "",
    "Root": "вет",
    "Suffix1": "ский",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "совет",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "522",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "советский"
  }
 },
 {
  "id": "CMR-00255",
  "ru": "жена",
  "posNormalized": "sustantivo",
  "translit": "ʒynA",
  "ipa": "ʒynˈɑ",
  "senses": [
   {
    "es": "esposa, mujer, esposa",
    "definitionEs": "Mujer1 casada con respecto de su marido.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "255",
    "Rank": "255",
    "Lemma": "жена",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "376.8",
    "Fiction 1990-2000": "604.1",
    "Journalism 1990-2000": "316.2",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "жен",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "жена",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "172",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "жена"
  }
 },
 {
  "id": "CMR-00256",
  "ru": "настоящий",
  "posNormalized": "adjetivo",
  "translit": "nʌstʌYashiy",
  "ipa": "nʌstʌˈjaɕij",
  "senses": [
   {
    "es": "autentico, verdadero, actual, genuino, presente, de verdad",
    "definitionEs": "Que existe, ajustado a la realidad.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "256",
    "Rank": "256",
    "Lemma": "настоящий",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "374",
    "Fiction 1990-2000": "235.3",
    "Journalism 1990-2000": "362.1",
    "Length": "9",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "на",
    "Prefix2": "",
    "Root": "стой",
    "Suffix1": "щий",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "стоять",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "544",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "настоящий"
  }
 },
 {
  "id": "CMR-00258",
  "ru": "группа",
  "posNormalized": "sustantivo",
  "translit": "grUppa",
  "ipa": "ɡrˈuppa",
  "senses": [
   {
    "es": "grupo",
    "definitionEs": "Conjunto de personas o cosas reunidas por alguna característica en común.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "258",
    "Rank": "258",
    "Lemma": "группа",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "372.8",
    "Fiction 1990-2000": "111.9",
    "Journalism 1990-2000": "475.5",
    "Length": "6",
    "International": "",
    "Inter_Derived": "TRUE",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "групп",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "группа",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "117",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "группа"
  }
 },
 {
  "id": "CMR-00259",
  "ru": "развитие",
  "posNormalized": "sustantivo",
  "translit": "razvItiyi",
  "ipa": "razvʲˈitʲijɪ",
  "senses": [
   {
    "es": "desarrollo, progreso",
    "definitionEs": "Proceso por el cual algo crece, mejora o se vuelve más avanzado.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "259",
    "Rank": "259",
    "Lemma": "развитие",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "372.6",
    "Fiction 1990-2000": "32.1",
    "Journalism 1990-2000": "444.1",
    "Length": "8",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "раз",
    "Prefix2": "",
    "Root": "вит",
    "Suffix1": "ие",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "вить",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "67",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "развитие"
  }
 },
 {
  "id": "CMR-00264",
  "ru": "старый",
  "posNormalized": "adjetivo",
  "translit": "stAryy",
  "ipa": "stˈɑryj",
  "senses": [
   {
    "es": "viejo, antiguo",
    "definitionEs": "Que tiene mucha edad o que existe desde hace mucho tiempo.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "264",
    "Rank": "264",
    "Lemma": "старый",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "368.5",
    "Fiction 1990-2000": "460.4",
    "Journalism 1990-2000": "340.7",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "стар",
    "Suffix1": "ый",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "старый",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "536",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "старый"
  }
 },
 {
  "id": "CMR-00265",
  "ru": "условие",
  "posNormalized": "sustantivo",
  "translit": "usɭOviyi",
  "ipa": "usɭˈovʲijɪ",
  "senses": [
   {
    "es": "condicion",
    "definitionEs": "Circunstancia necesaria para que ocurra o sea válido algo.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "265",
    "Rank": "265",
    "Lemma": "условие",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "368.1",
    "Fiction 1990-2000": "80.2",
    "Journalism 1990-2000": "425.2",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "у",
    "Prefix2": "",
    "Root": "слов",
    "Suffix1": "ие",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "слово",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "514",
    "Notes": "? calque condition",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "условие"
  }
 },
 {
  "id": "CMR-00266",
  "ru": "твой",
  "posNormalized": "otro",
  "translit": "tvOy",
  "ipa": "tvˈoj",
  "senses": [
   {
    "es": "tu, tuyo",
    "definitionEs": "Pronombre posesivo de segunda persona singular informal.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "266",
    "Rank": "266",
    "Lemma": "твой",
    "POS": "apro",
    "MultipleEntry": "",
    "Frequency": "366.6",
    "Fiction 1990-2000": "703.8",
    "Journalism 1990-2000": "180.9",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00267",
  "ru": "пока",
  "posNormalized": "otro",
  "translit": "pʌkA",
  "ipa": "pʌkˈɑ",
  "senses": [
   {
    "es": "mientras, por ahora, chau",
    "definitionEs": "Como conjunción indica simultaneidad ('пока я работаю' = mientras trabajo). Como interjección es una despedida informal.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "267",
    "Rank": "267",
    "Lemma": "пока",
    "POS": "conj",
    "MultipleEntry": "",
    "Frequency": "366.3",
    "Fiction 1990-2000": "495.2",
    "Journalism 1990-2000": "350",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "пока",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "751",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "508",
    "Rank": "508",
    "Lemma": "пока",
    "POS": "adv",
    "MultipleEntry": "YES",
    "Frequency": "213.4",
    "Fiction 1990-2000": "226.7",
    "Journalism 1990-2000": "252.8",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "пока",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "751",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00268",
  "ru": "средство",
  "posNormalized": "sustantivo",
  "translit": "srEtstvʌ",
  "ipa": "srʲˈetstvʌ",
  "senses": [
   {
    "es": "medio, recurso",
    "definitionEs": "Aquello que sirve como recurso o instrumento para lograr un fin.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "268",
    "Rank": "268",
    "Lemma": "средство",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "363.9",
    "Fiction 1990-2000": "71.8",
    "Journalism 1990-2000": "477.6",
    "Length": "8",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "сред",
    "Suffix1": "ство",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "среда",
    "Member2": "середа",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "499",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "средство"
  }
 },
 {
  "id": "CMR-00271",
  "ru": "ждать",
  "posNormalized": "verbo",
  "translit": "ʒdAt",
  "ipa": "ʒdˈɑtʲ",
  "senses": [
   {
    "es": "esperar, aguardar",
    "definitionEs": "Detener el movimiento o la accion hasta la llegada u ocurrencia de algo, hacer tiempo.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "271",
    "Rank": "271",
    "Lemma": "ждать",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "360.2",
    "Fiction 1990-2000": "522.7",
    "Journalism 1990-2000": "300.2",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "жд",
    "Suffix1": "ать",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "ждать",
    "Member2": "ожидать",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "63",
    "WordFamilyNumber": "169",
    "Notes": "Related to год/годить",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "кого? что? кого? чего? где?",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "ждать"
  }
 },
 {
  "id": "CMR-00272",
  "ru": "свет",
  "posNormalized": "sustantivo",
  "translit": "svEt",
  "ipa": "svʲˈet",
  "senses": [
   {
    "es": "luz",
    "definitionEs": "Fisica, optica| Radiacion electromagnetica visible al ojo humano.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "272",
    "Rank": "272",
    "Lemma": "свет",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "359.7",
    "Fiction 1990-2000": "513.4",
    "Journalism 1990-2000": "265.1",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "свет",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "свет",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "490",
    "Notes": "Related to German weiss, and English white",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "свет"
  }
 },
 {
  "id": "CMR-00274",
  "ru": "путь",
  "posNormalized": "sustantivo",
  "translit": "pUt",
  "ipa": "pˈutʲ",
  "senses": [
   {
    "es": "camino, via",
    "definitionEs": "Lugar por el que se transita.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "274",
    "Rank": "274",
    "Lemma": "путь",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "357.3",
    "Fiction 1990-2000": "278.7",
    "Journalism 1990-2000": "399",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "пут",
    "Suffix1": "ь",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "путь",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "439",
    "Notes": "Related to Latin pons, pontis, and English pontifex (person responsible for bridge making)",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "путь"
  }
 },
 {
  "id": "CMR-00275",
  "ru": "душа",
  "posNormalized": "sustantivo",
  "translit": "dUʃa",
  "ipa": "dˈuʃa",
  "senses": [
   {
    "es": "alma",
    "definitionEs": "Parte espiritual e inmaterial de una persona, considerada centro de sus sentimientos y pensamientos.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "275",
    "Rank": "275",
    "Lemma": "душа",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "356.8",
    "Fiction 1990-2000": "465.3",
    "Journalism 1990-2000": "300.1",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "дух",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "душа",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "160",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "душа"
  }
 },
 {
  "id": "CMR-00280",
  "ru": "уровень",
  "posNormalized": "sustantivo",
  "translit": "Urʌvin",
  "ipa": "ˈurʌvʲin",
  "senses": [
   {
    "es": "nivel",
    "definitionEs": "Grado o altura que alcanza algo en una escala determinada.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "280",
    "Rank": "280",
    "Lemma": "уровень",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "348.5",
    "Fiction 1990-2000": "69.5",
    "Journalism 1990-2000": "442.3",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "у",
    "Prefix2": "",
    "Root": "ров",
    "Suffix1": "ень",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "ровный",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "446",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "уровень"
  }
 },
 {
  "id": "CMR-00282",
  "ru": "форма",
  "posNormalized": "sustantivo",
  "translit": "fOrma",
  "ipa": "fˈorma",
  "senses": [
   {
    "es": "forma",
    "definitionEs": "Apariencia externa o estructura de algo.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "282",
    "Rank": "282",
    "Lemma": "форма",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "347.8",
    "Fiction 1990-2000": "134.1",
    "Journalism 1990-2000": "325.5",
    "Length": "5",
    "International": "",
    "Inter_Derived": "TRUE",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "форм",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "форма",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "623",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "форма"
  }
 },
 {
  "id": "CMR-00283",
  "ru": "связь",
  "posNormalized": "sustantivo",
  "translit": "svAʑ",
  "ipa": "svʲˈɑʑ",
  "senses": [
   {
    "es": "relación, vínculo, conexión",
    "definitionEs": "Unión o relación que existe entre dos o más cosas o personas.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "283",
    "Rank": "283",
    "Lemma": "связь",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "346.1",
    "Fiction 1990-2000": "137",
    "Journalism 1990-2000": "376",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "с",
    "Prefix2": "",
    "Root": "вяз",
    "Suffix1": "ь",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "вяз",
    "Member2": "вязать",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "85",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "связь"
  }
 },
 {
  "id": "CMR-00285",
  "ru": "минута",
  "posNormalized": "sustantivo",
  "translit": "minUta",
  "ipa": "mʲinˈuta",
  "senses": [
   {
    "es": "minuto",
    "definitionEs": "Cada una de las sesenta partes en que se divide la hora, a su vez dividido en sesenta segundos.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "285",
    "Rank": "285",
    "Lemma": "минута",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "344.2",
    "Fiction 1990-2000": "503.9",
    "Journalism 1990-2000": "259.1",
    "Length": "6",
    "International": "",
    "Inter_Derived": "TRUE",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "минут",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "минута",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "минута"
  }
 },
 {
  "id": "CMR-00290",
  "ru": "белый",
  "posNormalized": "adjetivo",
  "translit": "bEɭyy",
  "ipa": "bʲˈeɭyj",
  "senses": [
   {
    "es": "blanco",
    "definitionEs": "Colores| De tono luminoso, brillante e incoloro, dado por reflejar por completo la luz",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "290",
    "Rank": "290",
    "Lemma": "белый",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "339.6",
    "Fiction 1990-2000": "467.6",
    "Journalism 1990-2000": "280.9",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "бел",
    "Suffix1": "ый",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "белый",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "21",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "белый"
  }
 },
 {
  "id": "CMR-00292",
  "ru": "улица",
  "posNormalized": "sustantivo",
  "translit": "Uɭitsa",
  "ipa": "ˈuɭʲitsa",
  "senses": [
   {
    "es": "calle",
    "definitionEs": "Camino urbano, especialmente el destinado al transito de vehiculos.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "292",
    "Rank": "292",
    "Lemma": "улица",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "337.8",
    "Fiction 1990-2000": "429.2",
    "Journalism 1990-2000": "334.4",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "ул",
    "Suffix1": "ица",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "улика",
    "Member2": "переулок",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "612",
    "Notes": "ШЭС: Улица буквально — «пустая, освобожденная (от зарослей)».",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "улица"
  }
 },
 {
  "id": "CMR-00293",
  "ru": "черный",
  "posNormalized": "adjetivo",
  "translit": "tʃƟrnyy",
  "ipa": "tʃʲˈɵrnyj",
  "senses": [
   {
    "es": "negro, negra",
    "definitionEs": "De color muy oscuro, como el carbón.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "293",
    "Rank": "293",
    "Lemma": "черный",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "337.5",
    "Fiction 1990-2000": "510.4",
    "Journalism 1990-2000": "264.1",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "черн",
    "Suffix1": "ый",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "черный",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "черный"
  }
 },
 {
  "id": "CMR-00295",
  "ru": "вечер",
  "posNormalized": "sustantivo",
  "translit": "vEtʃir",
  "ipa": "vʲˈetʃʲir",
  "senses": [
   {
    "es": "tarde, noche",
    "definitionEs": "Intervalo de tiempo que transcurre desde el mediodi­a hasta el anochecer. 3. Intervalo de tiempo entre el almuerzo y la cena.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "295",
    "Rank": "295",
    "Lemma": "вечер",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "335.4",
    "Fiction 1990-2000": "449.1",
    "Journalism 1990-2000": "322.8",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "вечер",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "вечер",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "62",
    "Notes": "Possibly related to веко, more likely related to Latin vesper",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "вечер"
  }
 },
 {
  "id": "CMR-00298",
  "ru": "качество",
  "posNormalized": "sustantivo",
  "translit": "kAtʃistvʌ",
  "ipa": "kˈɑtʃʲistvʌ",
  "senses": [
   {
    "es": "calidad",
    "definitionEs": "Conjunto de propiedades que definen el valor o la naturaleza de algo.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "298",
    "Rank": "298",
    "Lemma": "качество",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "331.7",
    "Fiction 1990-2000": "85.8",
    "Journalism 1990-2000": "413.7",
    "Length": "8",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "как",
    "Suffix1": "ество",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "качество",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "213",
    "Notes": "Related to как",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "качество"
  }
 },
 {
  "id": "CMR-00299",
  "ru": "мысль",
  "posNormalized": "sustantivo",
  "translit": "mYsɭ",
  "ipa": "mˈysɭ",
  "senses": [
   {
    "es": "pensamiento",
    "definitionEs": "Potencia o facultad de pensar. 3. Accion y efecto de pensar.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "299",
    "Rank": "299",
    "Lemma": "мысль",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "331.6",
    "Fiction 1990-2000": "417.6",
    "Journalism 1990-2000": "259.7",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "мысл",
    "Suffix1": "ь",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "мысль",
    "Member2": "мыслить",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "328",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "мысль"
  }
 },
 {
  "id": "CMR-00300",
  "ru": "дорога",
  "posNormalized": "sustantivo",
  "translit": "dʌrOga",
  "ipa": "dʌrˈoɡa",
  "senses": [
   {
    "es": "camino",
    "definitionEs": "Via de dominio y uso publico, proyectada y construida fundamentalmente para la circulacion de vehiculos.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "300",
    "Rank": "300",
    "Lemma": "дорога",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "330.1",
    "Fiction 1990-2000": "418.7",
    "Journalism 1990-2000": "293.1",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "дорог",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "дорога",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "151",
    "Notes": "Related to драть ШЭС: от той же основы, что и дор «расчищенное место»,",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "дорога"
  }
 },
 {
  "id": "CMR-00301",
  "ru": "мать",
  "posNormalized": "sustantivo",
  "translit": "mAt",
  "ipa": "mˈɑtʲ",
  "senses": [
   {
    "es": "madre",
    "definitionEs": "Parentesco| Progenitora de sexo femenino.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "301",
    "Rank": "301",
    "Lemma": "мать",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "330.1",
    "Fiction 1990-2000": "524.6",
    "Journalism 1990-2000": "193.4",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "матер",
    "Suffix1": "ь",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "мать",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "Cognate",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "мать"
  }
 },
 {
  "id": "CMR-00302",
  "ru": "действие",
  "posNormalized": "sustantivo",
  "translit": "dEystviyi",
  "ipa": "dʲˈejstvʲijɪ",
  "senses": [
   {
    "es": "accion, acto",
    "definitionEs": "Acto de llevar a cabo algo; desgaste de energia que produce unos resultados.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "302",
    "Rank": "302",
    "Lemma": "действие",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "329.3",
    "Fiction 1990-2000": "100.8",
    "Journalism 1990-2000": "355.5",
    "Length": "8",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "дей",
    "Suffix1": "ствие",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "деять",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "134",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "действие"
  }
 },
 {
  "id": "CMR-00303",
  "ru": "месяц",
  "posNormalized": "sustantivo",
  "translit": "mEsʌts",
  "ipa": "mʲˈesʲʌts",
  "senses": [
   {
    "es": "mes",
    "definitionEs": "Se refiere a un periodo de tiempo equivalente a un mes lunar.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "303",
    "Rank": "303",
    "Lemma": "месяц",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "328",
    "Fiction 1990-2000": "256.3",
    "Journalism 1990-2000": "402.1",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "месяц",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "месяц",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "Indo-european mens; Latin mensis, English month. Polysemous moon and month",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "месяц"
  }
 },
 {
  "id": "CMR-00304",
  "ru": "оставаться",
  "posNormalized": "verbo",
  "translit": "ʌstavAtsʌ",
  "ipa": "ʌstavˈɑtsˌʌ",
  "senses": [
   {
    "es": "quedar",
    "definitionEs": "Continuar en un lugar o estado, sin cambiar (aspecto imperfectivo).",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "304",
    "Rank": "304",
    "Lemma": "оставаться",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "327.4",
    "Fiction 1990-2000": "303.5",
    "Journalism 1990-2000": "379.6",
    "Length": "10",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "о",
    "Prefix2": "",
    "Root": "стан",
    "Suffix1": "аваться",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "стан",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "195",
    "WordFamilyNumber": "532",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "где?",
    "VOM": "",
    "ReflexPairNumber": "r"
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "оставаться"
  }
 },
 {
  "id": "CMR-00305",
  "ru": "государство",
  "posNormalized": "sustantivo",
  "translit": "gʌsudArstvʌ",
  "ipa": "ɡʌsudˈɑrstvʌ",
  "senses": [
   {
    "es": "estado",
    "definitionEs": "Organización política que gobierna un territorio y su población.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "305",
    "Rank": "305",
    "Lemma": "государство",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "326.4",
    "Fiction 1990-2000": "71.8",
    "Journalism 1990-2000": "555.2",
    "Length": "11",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "государ",
    "Suffix1": "ство",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "сударь",
    "Member2": "государь",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "109",
    "Notes": "Borrowed from Moldavian hospodar",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "государство"
  }
 },
 {
  "id": "CMR-00306",
  "ru": "язык",
  "posNormalized": "sustantivo",
  "translit": "yazYk",
  "ipa": "jazˈyk",
  "senses": [
   {
    "es": "lengua, idioma",
    "definitionEs": "Sistema de comunicación propio de una comunidad. También designa el órgano de la boca (la lengua).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "306",
    "Rank": "306",
    "Lemma": "язык",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "324.9",
    "Fiction 1990-2000": "272.1",
    "Journalism 1990-2000": "332.2",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "язык",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "язык",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "Polysemous: tongue, language, nation (this meaning a calque from Latin)",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "язык"
  }
 },
 {
  "id": "CMR-00307",
  "ru": "любовь",
  "posNormalized": "sustantivo",
  "translit": "ɭu\"bOf",
  "ipa": "ɭʲu\"bˈof",
  "senses": [
   {
    "es": "amor, afecto, aficion",
    "definitionEs": "Sentimientos| Sentimiento afectivo de atraccion, union y afinidad que se experimenta hacia una persona, animal o cosa.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "307",
    "Rank": "307",
    "Lemma": "любовь",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "323.9",
    "Fiction 1990-2000": "351",
    "Journalism 1990-2000": "321.8",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "люб",
    "Suffix1": "овь",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "любить",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "283",
    "Notes": "Related to Latin libido, English love",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "любовь"
  }
 },
 {
  "id": "CMR-00308",
  "ru": "взгляд",
  "posNormalized": "sustantivo",
  "translit": "vzgɭAt",
  "ipa": "vzɡɭʲˈɑt",
  "senses": [
   {
    "es": "mirada",
    "definitionEs": "Accion o efecto de mirar. 3. Manera de mirar; expresion en los ojos, la cara, o actitud general con que se mira. 4. Inspeccion rapida.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "308",
    "Rank": "308",
    "Lemma": "взгляд",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "323.8",
    "Fiction 1990-2000": "473.1",
    "Journalism 1990-2000": "270.5",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "вз",
    "Prefix2": "",
    "Root": "гляд",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "гляд",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "98",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "взгляд"
  }
 },
 {
  "id": "CMR-00309",
  "ru": "мама",
  "posNormalized": "sustantivo",
  "translit": "mAma",
  "ipa": "mˈɑma",
  "senses": [
   {
    "es": "mama, madre",
    "definitionEs": "Parentesco| Progenitora de sexo femenino.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "309",
    "Rank": "309",
    "Lemma": "мама",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "322.6",
    "Fiction 1990-2000": "418.9",
    "Journalism 1990-2000": "272.2",
    "Length": "4",
    "International": "TRUE",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "мама",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "мама",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "286",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "мама"
  }
 },
 {
  "id": "CMR-00310",
  "ru": "играть",
  "posNormalized": "verbo",
  "translit": "igrAt",
  "ipa": "ɪɡrˈɑtʲ",
  "senses": [
   {
    "es": "jugar, tocar",
    "definitionEs": "Realizar una actividad con el fin de divertirse. También significa 'tocar' un instrumento musical.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "310",
    "Rank": "310",
    "Lemma": "играть",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "319.1",
    "Fiction 1990-2000": "227.2",
    "Journalism 1990-2000": "451.9",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "игр",
    "Suffix1": "ать",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "игра",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "74",
    "WordFamilyNumber": "197",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "что? во что? на чём? с кем?",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "играть"
  }
 },
 {
  "id": "CMR-00312",
  "ru": "лежать",
  "posNormalized": "verbo",
  "translit": "ɭiʒAt",
  "ipa": "ɭʲiʒˈɑtʲ",
  "senses": [
   {
    "es": "yacer, estar echado, estar acostado, estar tumbado",
    "definitionEs": "Estar en posición horizontal, acostado.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "312",
    "Rank": "312",
    "Lemma": "лежать",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "318.1",
    "Fiction 1990-2000": "508.4",
    "Journalism 1990-2000": "179.4",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "леж",
    "Suffix1": "ать",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "лож",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "267",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "где?",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "лежать"
  }
 },
 {
  "id": "CMR-00313",
  "ru": "нельзя",
  "posNormalized": "otro",
  "translit": "niɭʑA",
  "ipa": "nʲiɭʑˈɑ",
  "senses": [
   {
    "es": "es imposible, no se puede",
    "definitionEs": "Que por ley, autoridad o estatuto no esta consentido y es ilegitimo. Que no se permite.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "313",
    "Rank": "313",
    "Lemma": "нельзя",
    "POS": "adv",
    "MultipleEntry": "",
    "Frequency": "317.7",
    "Fiction 1990-2000": "317.6",
    "Journalism 1990-2000": "322.5",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "не",
    "Prefix2": "",
    "Root": "льз",
    "Suffix1": "я",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "легкий",
    "Member2": "польза",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "265",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "нельзя"
  }
 },
 {
  "id": "CMR-00314",
  "ru": "век",
  "posNormalized": "sustantivo",
  "translit": "vEk",
  "ipa": "vʲˈek",
  "senses": [
   {
    "es": "siglo",
    "definitionEs": "Periodo de cien anos. 3. En particular, cada uno de los que se cuentan a partir de la fecha convencional de inicio del calendario.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "314",
    "Rank": "314",
    "Lemma": "век",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "317.4",
    "Fiction 1990-2000": "141.2",
    "Journalism 1990-2000": "374.9",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "век",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "век",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "51",
    "Notes": "related to Latin vinco (=to win, conquer) and victor",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "век"
  }
 },
 {
  "id": "CMR-00315",
  "ru": "школа",
  "posNormalized": "sustantivo",
  "translit": "ʃkOɭa",
  "ipa": "ʃkˈoɭa",
  "senses": [
   {
    "es": "escuela",
    "definitionEs": "Institución donde se imparte educación, especialmente a niños.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "315",
    "Rank": "315",
    "Lemma": "школа",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "316",
    "Fiction 1990-2000": "206.5",
    "Journalism 1990-2000": "384.4",
    "Length": "5",
    "International": "",
    "Inter_Derived": "TRUE",
    "InterPossible": "TRUE",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "школ",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "школа",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "671",
    "Notes": "from Latin Schola",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "школа"
  }
 },
 {
  "id": "CMR-00318",
  "ru": "цель",
  "posNormalized": "sustantivo",
  "translit": "tsEɭ",
  "ipa": "tsˈɛɭ",
  "senses": [
   {
    "es": "fin, objeto, objetivo",
    "definitionEs": "Aquello que se quiere lograr con una acción.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "318",
    "Rank": "318",
    "Lemma": "цель",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "315.5",
    "Fiction 1990-2000": "135.4",
    "Journalism 1990-2000": "362.2",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "цел",
    "Suffix1": "ь",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "цель",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "643",
    "Notes": "OldHigh German zil, in Russ since 18th cent",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "цель"
  }
 },
 {
  "id": "CMR-00320",
  "ru": "общество",
  "posNormalized": "sustantivo",
  "translit": "Opshistvʌ",
  "ipa": "ˈopɕistvʌ",
  "senses": [
   {
    "es": "sociedad",
    "definitionEs": "Conjunto de personas que conviven bajo normas y costumbres comunes.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "320",
    "Rank": "320",
    "Lemma": "общество",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "314.7",
    "Fiction 1990-2000": "82.4",
    "Journalism 1990-2000": "396.2",
    "Length": "8",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "общ",
    "Suffix1": "ество",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "общий",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "359",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "общество"
  }
 },
 {
  "id": "CMR-00322",
  "ru": "деятельность",
  "posNormalized": "sustantivo",
  "translit": "dEyatiɭnʌst",
  "ipa": "dʲˈejatʲiɭnʌstʲ",
  "senses": [
   {
    "es": "actividad",
    "definitionEs": "Conjunto de acciones que realiza una persona o institución en un ámbito determinado.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "322",
    "Rank": "322",
    "Lemma": "деятельность",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "313.5",
    "Fiction 1990-2000": "41.4",
    "Journalism 1990-2000": "344.9",
    "Length": "12",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "дей",
    "Suffix1": "тельность",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "деять",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "134",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "деятельность"
  }
 },
 {
  "id": "CMR-00323",
  "ru": "организация",
  "posNormalized": "sustantivo",
  "translit": "ʌrgʌnizAtsyya",
  "ipa": "ʌrɡʌnʲizˈɑtsyja",
  "senses": [
   {
    "es": "organizacion, caracter organizado",
    "definitionEs": "Grupo de personas estructurado para cumplir un objetivo en común.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "323",
    "Rank": "323",
    "Lemma": "организация",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "312.4",
    "Fiction 1990-2000": "40.1",
    "Journalism 1990-2000": "413.1",
    "Length": "11",
    "International": "",
    "Inter_Derived": "TRUE",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "организ",
    "Suffix1": "ация",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "орган",
    "Member2": "организация",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "366",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "организация"
  }
 },
 {
  "id": "CMR-00326",
  "ru": "президент",
  "posNormalized": "sustantivo",
  "translit": "priʑidEnt",
  "ipa": "prʲiʑidʲˈent",
  "senses": [
   {
    "es": "presidente, presidenta",
    "definitionEs": "Que preside una reunion, organizacion o cuerpo colegiado.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "326",
    "Rank": "326",
    "Lemma": "президент",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "311",
    "Fiction 1990-2000": "60.4",
    "Journalism 1990-2000": "685.4",
    "Length": "9",
    "International": "TRUE",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "президент",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "президент",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "416",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "президент"
  }
 },
 {
  "id": "CMR-00327",
  "ru": "комната",
  "posNormalized": "sustantivo",
  "translit": "kOmnʌta",
  "ipa": "kˈomnʌta",
  "senses": [
   {
    "es": "habitacion, cuarto, pieza",
    "definitionEs": "Espacio delimitado por paredes dentro de una vivienda.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "327",
    "Rank": "327",
    "Lemma": "комната",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "310.7",
    "Fiction 1990-2000": "503.1",
    "Journalism 1990-2000": "191.4",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "комнат",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "комната",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "ШЭС: Заимств. из польск. яз., где komnata < ср.-лат. caminata «комната» < «отапливаемое помещение» — суф. производного от caminus «печь, очаг». См. камин.",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "комната"
  }
 },
 {
  "id": "CMR-00329",
  "ru": "момент",
  "posNormalized": "sustantivo",
  "translit": "mʌmEnt",
  "ipa": "mʌmʲˈent",
  "senses": [
   {
    "es": "momento",
    "definitionEs": "Espacio breve de tiempo, instante.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "329",
    "Rank": "329",
    "Lemma": "момент",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "306.8",
    "Fiction 1990-2000": "264.5",
    "Journalism 1990-2000": "348.4",
    "Length": "6",
    "International": "TRUE",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "момент",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "момент",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "момент"
  }
 },
 {
  "id": "CMR-00330",
  "ru": "театр",
  "posNormalized": "sustantivo",
  "translit": "tiAtr",
  "ipa": "tʲiˈɑtr",
  "senses": [
   {
    "es": "teatro",
    "definitionEs": "Edificio o arte donde se representan obras dramáticas.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "330",
    "Rank": "330",
    "Lemma": "театр",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "305.3",
    "Fiction 1990-2000": "103.4",
    "Journalism 1990-2000": "604.6",
    "Length": "5",
    "International": "TRUE",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "театр",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "театр",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "575",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "театр"
  }
 },
 {
  "id": "CMR-00332",
  "ru": "читать",
  "posNormalized": "verbo",
  "translit": "tʃitAt",
  "ipa": "tʃʲitˈɑtʲ",
  "senses": [
   {
    "es": "leer",
    "definitionEs": "Interpretar mentalmente o en voz alta lo escrito en un texto.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "332",
    "Rank": "332",
    "Lemma": "читать",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "304.4",
    "Fiction 1990-2000": "289.1",
    "Journalism 1990-2000": "320.2",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "чит",
    "Suffix1": "ать",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "читать",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "233",
    "WordFamilyNumber": "658",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "что? кого? кому? о ком? о чём?",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "читать"
  }
 },
 {
  "id": "CMR-00333",
  "ru": "письмо",
  "posNormalized": "sustantivo",
  "translit": "pismO",
  "ipa": "pʲisʲmˈo",
  "senses": [
   {
    "es": "carta",
    "definitionEs": "Texto escrito que se envía a otra persona para comunicarse con ella.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "333",
    "Rank": "333",
    "Lemma": "письмо",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "304.3",
    "Fiction 1990-2000": "200",
    "Journalism 1990-2000": "358.2",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "пис",
    "Suffix1": "мо",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "писать",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "390",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "письмо"
  }
 },
 {
  "id": "CMR-00334",
  "ru": "подобный",
  "posNormalized": "adjetivo",
  "translit": "pʌdObnyy",
  "ipa": "pʌdˈobnyj",
  "senses": [
   {
    "es": "semejante",
    "definitionEs": "Semejante, parecido a otro; que tiene caracteristicas en comun con otra cosa.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "334",
    "Rank": "334",
    "Lemma": "подобный",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "301.6",
    "Fiction 1990-2000": "170.7",
    "Journalism 1990-2000": "375.7",
    "Length": "8",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "по",
    "Prefix2": "",
    "Root": "доб",
    "Suffix1": "ный",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "доба",
    "Member2": "подоба",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "147",
    "Notes": "доба = выгода, original meaning = подходящий",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "подобный"
  }
 },
 {
  "id": "CMR-00335",
  "ru": "следующий",
  "posNormalized": "adjetivo",
  "translit": "sɭEduyushiy",
  "ipa": "sɭʲˈedujuɕij",
  "senses": [
   {
    "es": "siguiente, proximo",
    "definitionEs": "En particular, que esta inmediatamente despues.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "335",
    "Rank": "335",
    "Lemma": "следующий",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "301.4",
    "Fiction 1990-2000": "222.4",
    "Journalism 1990-2000": "329.2",
    "Length": "9",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "след",
    "Suffix1": "ующий",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "след",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "513",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "следующий"
  }
 },
 {
  "id": "CMR-00336",
  "ru": "утро",
  "posNormalized": "sustantivo",
  "translit": "Utrʌ",
  "ipa": "ˈutrʌ",
  "senses": [
   {
    "es": "manana, madrugada",
    "definitionEs": "Mas generalmente, tiempo que transcurre desde la medianoche hasta el mediodia.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "336",
    "Rank": "336",
    "Lemma": "утро",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "301.3",
    "Fiction 1990-2000": "446",
    "Journalism 1990-2000": "244.9",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "утр",
    "Suffix1": "о",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "утро",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "614",
    "Notes": "etymology unclear",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "утро"
  }
 },
 {
  "id": "CMR-00338",
  "ru": "помощь",
  "posNormalized": "sustantivo",
  "translit": "pOmʌsh",
  "ipa": "pˈomʌɕ",
  "senses": [
   {
    "es": "ayuda, asistencia",
    "definitionEs": "Acción de colaborar con alguien para que consiga algo o resuelva una dificultad.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "338",
    "Rank": "338",
    "Lemma": "помощь",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "300.1",
    "Fiction 1990-2000": "185.5",
    "Journalism 1990-2000": "360.1",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "по",
    "Prefix2": "",
    "Root": "мог",
    "Suffix1": "ть",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "помощь",
    "Member2": "мочь",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "318",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "помощь"
  }
 },
 {
  "id": "CMR-00339",
  "ru": "ситуация",
  "posNormalized": "sustantivo",
  "translit": "situAtsyya",
  "ipa": "sʲituˈɑtsyja",
  "senses": [
   {
    "es": "situacion",
    "definitionEs": "Conjunto de circunstancias en que se encuentra alguien o algo en un momento dado.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "339",
    "Rank": "339",
    "Lemma": "ситуация",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "298.8",
    "Fiction 1990-2000": "121.4",
    "Journalism 1990-2000": "446.3",
    "Length": "8",
    "International": "",
    "Inter_Derived": "TRUE",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "ситу",
    "Suffix1": "ация",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "ситуация",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "ситуация"
  }
 },
 {
  "id": "CMR-00342",
  "ru": "ходить",
  "posNormalized": "verbo",
  "translit": "jʌdIt",
  "ipa": "xʌdʲˈitʲ",
  "senses": [
   {
    "es": "andar",
    "definitionEs": "Desplazarse de un lado a otro moviendo los pies, las personas, o las patas, los animales.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "342",
    "Rank": "342",
    "Lemma": "ходить",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "296.6",
    "Fiction 1990-2000": "377.2",
    "Journalism 1990-2000": "243.9",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "ход",
    "Suffix1": "ить",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "ход",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "631",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "куда?",
    "VOM": "1",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "ходить"
  }
 },
 {
  "id": "CMR-00343",
  "ru": "рубль",
  "posNormalized": "sustantivo",
  "translit": "rUbɭ",
  "ipa": "rˈubɭ",
  "senses": [
   {
    "es": "rublo",
    "definitionEs": "Unidad monetaria oficial de Rusia.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "343",
    "Rank": "343",
    "Lemma": "рубль",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "296.4",
    "Fiction 1990-2000": "110.9",
    "Journalism 1990-2000": "497.8",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "TRUE",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "руб",
    "Suffix1": "ль",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "рубль",
    "Member2": "рубить",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "477",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "рубль"
  }
 },
 {
  "id": "CMR-00347",
  "ru": "состояние",
  "posNormalized": "sustantivo",
  "translit": "sʌstʌYaniyi",
  "ipa": "sʌstʌˈjanʲijɪ",
  "senses": [
   {
    "es": "condicion, estado",
    "definitionEs": "Manera en que se encuentra algo o alguien en un momento determinado.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "347",
    "Rank": "347",
    "Lemma": "состояние",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "294.4",
    "Fiction 1990-2000": "144.6",
    "Journalism 1990-2000": "293.8",
    "Length": "9",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "с",
    "Prefix2": "",
    "Root": "стой",
    "Suffix1": "ание",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "стоять",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "544",
    "Notes": "?calque",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "состояние"
  }
 },
 {
  "id": "CMR-00350",
  "ru": "квартира",
  "posNormalized": "sustantivo",
  "translit": "kvartIra",
  "ipa": "kvartʲˈira",
  "senses": [
   {
    "es": "piso, apartamento",
    "definitionEs": "Vivienda| Vivienda en un edificio.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "350",
    "Rank": "350",
    "Lemma": "квартира",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "290.9",
    "Fiction 1990-2000": "447.5",
    "Journalism 1990-2000": "303.5",
    "Length": "8",
    "International": "",
    "Inter_Derived": "TRUE",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "квартир",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "квартира",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "From Latin via French \"to quarter\"",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "квартира"
  }
 },
 {
  "id": "CMR-00352",
  "ru": "равный",
  "posNormalized": "adjetivo",
  "translit": "rAvnyy",
  "ipa": "rˈɑvnyj",
  "senses": [
   {
    "es": "igual",
    "definitionEs": "Similar hasta el punto de ser indistinguible.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "352",
    "Rank": "352",
    "Lemma": "равный",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "289.7",
    "Fiction 1990-2000": "341.4",
    "Journalism 1990-2000": "254.1",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "рав",
    "Suffix1": "ный",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "равный",
    "Member2": "ровный",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "446",
    "Notes": "Doublet",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "равный"
  }
 },
 {
  "id": "CMR-00354",
  "ru": "орган",
  "posNormalized": "sustantivo",
  "translit": "Orgʌn",
  "ipa": "ˈorɡʌn",
  "senses": [
   {
    "es": "organo",
    "definitionEs": "Parte del cuerpo con una función específica. También significa 'institución' o 'entidad'.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "354",
    "Rank": "354",
    "Lemma": "орган",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "288.4",
    "Fiction 1990-2000": "55.7",
    "Journalism 1990-2000": "287.7",
    "Length": "5",
    "International": "TRUE",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "орган",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "орган",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "366",
    "Notes": "Polysemous",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "орган"
  }
 },
 {
  "id": "CMR-00356",
  "ru": "тело",
  "posNormalized": "sustantivo",
  "translit": "tEɭʌ",
  "ipa": "tʲˈeɭʌ",
  "senses": [
   {
    "es": "cuerpo",
    "definitionEs": "Conjunto físico y material de un ser vivo.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "356",
    "Rank": "356",
    "Lemma": "тело",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "285.9",
    "Fiction 1990-2000": "388.9",
    "Journalism 1990-2000": "174",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "тел",
    "Suffix1": "о",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "тело",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "734",
    "Notes": "Etymology unclear",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "тело"
  }
 },
 {
  "id": "CMR-00357",
  "ru": "труд",
  "posNormalized": "sustantivo",
  "translit": "trUt",
  "ipa": "trˈut",
  "senses": [
   {
    "es": "trabajo, labor",
    "definitionEs": "Resultado de un trabajo.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "357",
    "Rank": "357",
    "Lemma": "труд",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "285.9",
    "Fiction 1990-2000": "185.2",
    "Journalism 1990-2000": "298.8",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "труд",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "труд",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "607",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "труд"
  }
 },
 {
  "id": "CMR-00361",
  "ru": "мера",
  "posNormalized": "sustantivo",
  "translit": "mEra",
  "ipa": "mʲˈera",
  "senses": [
   {
    "es": "medida",
    "definitionEs": "Unidad o criterio que se usa para medir algo.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "361",
    "Rank": "361",
    "Lemma": "мера",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "284.3",
    "Fiction 1990-2000": "148.7",
    "Journalism 1990-2000": "335.2",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "мер",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "мера",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "297",
    "Notes": "Same root as Latin metior, English meter, measure",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "мера"
  }
 },
 {
  "id": "CMR-00362",
  "ru": "пять",
  "posNormalized": "otro",
  "translit": "pAt",
  "ipa": "pʲˈɑtʲ",
  "senses": [
   {
    "es": "cinco",
    "definitionEs": "Numeral cardinal 'cinco'.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "362",
    "Rank": "362",
    "Lemma": "пять",
    "POS": "num",
    "MultipleEntry": "",
    "Frequency": "284.3",
    "Fiction 1990-2000": "341.4",
    "Journalism 1990-2000": "286.4",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "пят",
    "Suffix1": "ь",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "пять",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "444",
    "Notes": "Related to Greek penta",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00363",
  "ru": "смерть",
  "posNormalized": "sustantivo",
  "translit": "smErt",
  "ipa": "smʲˈertʲ",
  "senses": [
   {
    "es": "muerte, deceso",
    "definitionEs": "Accion y efecto de morir, en especial una persona.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "363",
    "Rank": "363",
    "Lemma": "смерть",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "284.1",
    "Fiction 1990-2000": "349.1",
    "Journalism 1990-2000": "259.2",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "с",
    "Prefix2": "",
    "Root": "мер",
    "Suffix1": "ть",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "смерть",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "298",
    "Notes": "Семенов: Индоевропейское – mъr- (мор, умирать, смерть). Latin mortis",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "смерть"
  }
 },
 {
  "id": "CMR-00364",
  "ru": "живой",
  "posNormalized": "adjetivo",
  "translit": "ʒyvOy",
  "ipa": "ʒyvˈoj",
  "senses": [
   {
    "es": "vivo",
    "definitionEs": "Que vibra o se ha puesto en vibracion. 3. Vigoroso, con gran actividad o energia.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "364",
    "Rank": "364",
    "Lemma": "живой",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "284",
    "Fiction 1990-2000": "332.4",
    "Journalism 1990-2000": "235.9",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "жив",
    "Suffix1": "ой",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "жить",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "174",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "живой"
  }
 },
 {
  "id": "CMR-00366",
  "ru": "программа",
  "posNormalized": "sustantivo",
  "translit": "prʌgrAmma",
  "ipa": "prʌɡrˈɑmma",
  "senses": [
   {
    "es": "programa",
    "definitionEs": "Plan ordenado de actividades o de contenidos para un fin determinado (de televisión, de gobierno, de estudios, etc.).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "366",
    "Rank": "366",
    "Lemma": "программа",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "282.6",
    "Fiction 1990-2000": "58",
    "Journalism 1990-2000": "471.4",
    "Length": "9",
    "International": "",
    "Inter_Derived": "TRUE",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "программ",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "программа",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "421",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "программа"
  }
 },
 {
  "id": "CMR-00367",
  "ru": "задача",
  "posNormalized": "sustantivo",
  "translit": "zadAtʃʌ",
  "ipa": "zadˈɑtʃʲʌ",
  "senses": [
   {
    "es": "objetivo",
    "definitionEs": "Trabajo o problema que hay que resolver.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "367",
    "Rank": "367",
    "Lemma": "задача",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "282.4",
    "Fiction 1990-2000": "61.1",
    "Journalism 1990-2000": "324.4",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "за",
    "Prefix2": "",
    "Root": "да",
    "Suffix1": "ча",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "дать",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "121",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "задача"
  }
 },
 {
  "id": "CMR-00370",
  "ru": "окно",
  "posNormalized": "sustantivo",
  "translit": "ʌknO",
  "ipa": "ʌknˈo",
  "senses": [
   {
    "es": "ventana",
    "definitionEs": "Abertura en una pared, cerrada con vidrio, que deja pasar la luz.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "370",
    "Rank": "370",
    "Lemma": "окно",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "280.8",
    "Fiction 1990-2000": "506.6",
    "Journalism 1990-2000": "153.7",
    "Length": "4",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "ок",
    "Suffix1": "но",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "око",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "363",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "окно"
  }
 },
 {
  "id": "CMR-00371",
  "ru": "вести",
  "posNormalized": "verbo",
  "translit": "vEsti",
  "ipa": "vʲˈesʲtʲɪ",
  "senses": [
   {
    "es": "conducir",
    "definitionEs": "Conducir hacia un lugar o destino.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "371",
    "Rank": "371",
    "Lemma": "вести",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "280.3",
    "Fiction 1990-2000": "265.1",
    "Journalism 1990-2000": "314.6",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "вед",
    "Suffix1": "ти",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "вести",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "48",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "кого? что? куда?",
    "VOM": "1",
    "ReflexPairNumber": "7"
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "вести"
  }
 },
 {
  "id": "CMR-00373",
  "ru": "военный",
  "posNormalized": "adjetivo",
  "translit": "vʌyEnnyy",
  "ipa": "vʌjˈennyj",
  "senses": [
   {
    "es": "militar",
    "definitionEs": "Que pertenece o concierne a la guerra.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "373",
    "Rank": "373",
    "Lemma": "военный",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "278.7",
    "Fiction 1990-2000": "113.2",
    "Journalism 1990-2000": "439.2",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "воин",
    "Suffix1": "ный",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "воин",
    "Member2": "война",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "74",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "3095",
    "Rank": "3095",
    "Lemma": "военный",
    "POS": "s",
    "MultipleEntry": "YES",
    "Frequency": "35.5",
    "Fiction 1990-2000": "19.4",
    "Journalism 1990-2000": "60.3",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "войн",
    "Suffix1": "ный",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "война",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "74",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "военный"
  }
 },
 {
  "id": "CMR-00376",
  "ru": "правительство",
  "posNormalized": "sustantivo",
  "translit": "pravItiɭstvʌ",
  "ipa": "pravʲˈitʲiɭstvʌ",
  "senses": [
   {
    "es": "gobierno",
    "definitionEs": "Accion o efecto de gobernar.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "376",
    "Rank": "376",
    "Lemma": "правительство",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "277.7",
    "Fiction 1990-2000": "40",
    "Journalism 1990-2000": "557.9",
    "Length": "13",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "прав",
    "Suffix1": "ительство",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "прав",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "413",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "правительство"
  }
 },
 {
  "id": "CMR-00377",
  "ru": "важный",
  "posNormalized": "adjetivo",
  "translit": "vAʒnyy",
  "ipa": "vˈɑʒnyj",
  "senses": [
   {
    "es": "importante",
    "definitionEs": "Algo o alguien que hay que tener en cuenta.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "377",
    "Rank": "377",
    "Lemma": "важный",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "277",
    "Fiction 1990-2000": "167.6",
    "Journalism 1990-2000": "334",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "важ",
    "Suffix1": "ный",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "важный",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "9",
    "AspectPair": "",
    "WordFamilyNumber": "43",
    "Notes": "Borrow Old German Wage (=weight) through Polish",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "важный"
  }
 },
 {
  "id": "CMR-00378",
  "ru": "семья",
  "posNormalized": "sustantivo",
  "translit": "simyYa",
  "ipa": "sʲimʲjˈja",
  "senses": [
   {
    "es": "familia",
    "definitionEs": "Grupo de personas unidas por parentesco, que suelen vivir juntas.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "378",
    "Rank": "378",
    "Lemma": "семья",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "276.6",
    "Fiction 1990-2000": "201.6",
    "Journalism 1990-2000": "366.8",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "семей",
    "Suffix1": "я",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "семья",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "497",
    "Notes": "Related to German heim",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "семья"
  }
 },
 {
  "id": "CMR-00379",
  "ru": "великий",
  "posNormalized": "adjetivo",
  "translit": "viɭIkiy",
  "ipa": "vʲiɭʲˈikʲij",
  "senses": [
   {
    "es": "grande",
    "definitionEs": "Terrible o dramatico. 3. Que inspira temor, respeto o asombro. 4. Notable o excesivo por su tamano, cantidad, poder o excelencia.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "379",
    "Rank": "379",
    "Lemma": "великий",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "276.3",
    "Fiction 1990-2000": "250",
    "Journalism 1990-2000": "328.1",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "вел",
    "Suffix1": "кий",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "великий",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "52",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "великий"
  }
 },
 {
  "id": "CMR-00380",
  "ru": "производство",
  "posNormalized": "sustantivo",
  "translit": "prʌizvOtstvʌ",
  "ipa": "prʌizvˈotstvʌ",
  "senses": [
   {
    "es": "produccion",
    "definitionEs": "Proceso de fabricar o elaborar bienes.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "380",
    "Rank": "380",
    "Lemma": "производство",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "275.6",
    "Fiction 1990-2000": "31.9",
    "Journalism 1990-2000": "332.5",
    "Length": "12",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "про",
    "Prefix2": "из",
    "Root": "вод",
    "Suffix1": "ство",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "водить",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "71",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "производство"
  }
 },
 {
  "id": "CMR-00383",
  "ru": "третий",
  "posNormalized": "otro",
  "translit": "trEtiy",
  "ipa": "trʲˈetʲij",
  "senses": [
   {
    "es": "tercero",
    "definitionEs": "Numeral ordinal correspondiente a 'три' (tres).",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "383",
    "Rank": "383",
    "Lemma": "третий",
    "POS": "anum",
    "MultipleEntry": "",
    "Frequency": "274.7",
    "Fiction 1990-2000": "269.9",
    "Journalism 1990-2000": "294.2",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "трет",
    "Suffix1": "ий",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "три",
    "Member2": "третий",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "604",
    "Notes": "Related to third / tertiary",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00384",
  "ru": "сколько",
  "posNormalized": "otro",
  "translit": "skOɭkʌ",
  "ipa": "skˈoɭkʌ",
  "senses": [
   {
    "es": "cuánto",
    "definitionEs": "Pregunta por la cantidad de algo.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "384",
    "Rank": "384",
    "Lemma": "сколько",
    "POS": "num",
    "MultipleEntry": "",
    "Frequency": "273.4",
    "Fiction 1990-2000": "344.5",
    "Journalism 1990-2000": "248.2",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "с",
    "Prefix2": "",
    "Root": "коль",
    "Suffix1": "ко",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "сколько",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "506",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   },
   {
    "ID1": "2304",
    "Rank": "2304",
    "Lemma": "сколько",
    "POS": "advpro",
    "MultipleEntry": "",
    "Frequency": "50.9",
    "Fiction 1990-2000": "58",
    "Journalism 1990-2000": "51.9",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "сколь",
    "Suffix1": "ко",
    "Suffix2": "",
    "WordFamily": "",
    "Member1": "",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "506",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00385",
  "ru": "огромный",
  "posNormalized": "adjetivo",
  "translit": "ʌgrOmnyy",
  "ipa": "ʌɡrˈomnyj",
  "senses": [
   {
    "es": "enorme",
    "definitionEs": "De gran tamano, fuerza o intensidad, o dificil de medir o cuantificar a causa de su gran magnitud.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "385",
    "Rank": "385",
    "Lemma": "огромный",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "272.1",
    "Fiction 1990-2000": "297.9",
    "Journalism 1990-2000": "312.7",
    "Length": "8",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "о",
    "Prefix2": "",
    "Root": "гром",
    "Suffix1": "ный",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "огромный",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "114",
    "Notes": "Ситников: огром the mass of space over which thunder can be heard",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "огромный"
  }
 },
 {
  "id": "CMR-00387",
  "ru": "политический",
  "posNormalized": "adjetivo",
  "translit": "pʌɭitItʃiskiy",
  "ipa": "pʌɭʲitʲˈitʃʲiskʲij",
  "senses": [
   {
    "es": "politico",
    "definitionEs": "Relativo a la política, el gobierno de un país o sus instituciones.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "387",
    "Rank": "387",
    "Lemma": "политический",
    "POS": "a",
    "MultipleEntry": "",
    "Frequency": "269.6",
    "Fiction 1990-2000": "54.6",
    "Journalism 1990-2000": "490.7",
    "Length": "12",
    "International": "",
    "Inter_Derived": "TRUE",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "полити",
    "Suffix1": "ческий",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "политик",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "403",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "политический"
  }
 },
 {
  "id": "CMR-00388",
  "ru": "информация",
  "posNormalized": "sustantivo",
  "translit": "infʌrmAtsyya",
  "ipa": "ɪnfʌrmˈɑtsyja",
  "senses": [
   {
    "es": "informacion",
    "definitionEs": "Conjunto de datos o conocimientos sobre algo.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "388",
    "Rank": "388",
    "Lemma": "информация",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "269.2",
    "Fiction 1990-2000": "100.1",
    "Journalism 1990-2000": "309.1",
    "Length": "10",
    "International": "",
    "Inter_Derived": "TRUE",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "информ",
    "Suffix1": "ация",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "информация",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "206",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "информация"
  }
 },
 {
  "id": "CMR-00389",
  "ru": "действительно",
  "posNormalized": "otro",
  "translit": "diystvItiɭnʌ",
  "ipa": "dʲijstvʲˈitʲiɭnʌ",
  "senses": [
   {
    "es": "efectivamente, realmente",
    "definitionEs": "De modo verdadero, con la verdad.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "389",
    "Rank": "389",
    "Lemma": "действительно",
    "POS": "adv",
    "MultipleEntry": "",
    "Frequency": "268.6",
    "Fiction 1990-2000": "272.1",
    "Journalism 1990-2000": "297.4",
    "Length": "13",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "дей",
    "Suffix1": "ствительно",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "деять",
    "Member2": "действие",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "25",
    "AspectPair": "",
    "WordFamilyNumber": "134",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "действительно"
  }
 },
 {
  "id": "CMR-00390",
  "ru": "положение",
  "posNormalized": "sustantivo",
  "translit": "pʌɭʌʒEniyi",
  "ipa": "pʌɭʌʒˈɛnʲijɪ",
  "senses": [
   {
    "es": "situacion",
    "definitionEs": "Condicion o estima de la que un individuo goza dentro de su grupo",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "390",
    "Rank": "390",
    "Lemma": "положение",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "268.2",
    "Fiction 1990-2000": "105.4",
    "Journalism 1990-2000": "288.6",
    "Length": "9",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "по",
    "Prefix2": "",
    "Root": "лож",
    "Suffix1": "ение",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "лож",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "260",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "положение"
  }
 },
 {
  "id": "CMR-00392",
  "ru": "бояться",
  "posNormalized": "verbo",
  "translit": "bʌYatsʌ",
  "ipa": "bʌˈjatsˌʌ",
  "senses": [
   {
    "es": "temer, tener miedo",
    "definitionEs": "Tener de algo la sensacion de que es danoso de hecho o potencialmente, y desear concomitantemente apartarse de ello.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "392",
    "Rank": "392",
    "Lemma": "бояться",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "266.5",
    "Fiction 1990-2000": "408.8",
    "Journalism 1990-2000": "188",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "бой",
    "Suffix1": "аться",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "бояться",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "кого? чего?",
    "VOM": "",
    "ReflexPairNumber": "r"
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "бояться"
  }
 },
 {
  "id": "CMR-00394",
  "ru": "центр",
  "posNormalized": "sustantivo",
  "translit": "tsEntr",
  "ipa": "tsˈɛntr",
  "senses": [
   {
    "es": "centro",
    "definitionEs": "Punto medio de algo. También significa 'lugar donde se concentra una actividad' (centro de la ciudad, centro comercial).",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "394",
    "Rank": "394",
    "Lemma": "центр",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "265.9",
    "Fiction 1990-2000": "127.3",
    "Journalism 1990-2000": "405.8",
    "Length": "5",
    "International": "TRUE",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "центр",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "центр",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "646",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "центр"
  }
 },
 {
  "id": "CMR-00395",
  "ru": "происходить",
  "posNormalized": "verbo",
  "translit": "prʌisjʌdIt",
  "ipa": "prʌisxʌdʲˈitʲ",
  "senses": [
   {
    "es": "ocurrir, suceder",
    "definitionEs": "Proceder una cosa de otra en cuanto a su causa o modelo.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "395",
    "Rank": "395",
    "Lemma": "происходить",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "263.6",
    "Fiction 1990-2000": "193.7",
    "Journalism 1990-2000": "304.1",
    "Length": "11",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "про",
    "Prefix2": "из",
    "Root": "ход",
    "Suffix1": "ить",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "ход",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "256",
    "WordFamilyNumber": "631",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "с кем? с чем? где?",
    "VOM": "2",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "происходить"
  }
 },
 {
  "id": "CMR-00397",
  "ru": "муж",
  "posNormalized": "sustantivo",
  "translit": "mUʃ",
  "ipa": "mˈuʃ",
  "senses": [
   {
    "es": "marido, esposo, esposo",
    "definitionEs": "Hombre casado respecto de su esposa.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "397",
    "Rank": "397",
    "Lemma": "муж",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "263",
    "Fiction 1990-2000": "414.1",
    "Journalism 1990-2000": "187.2",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "муж",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "муж",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "325",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "муж"
  }
 },
 {
  "id": "CMR-00400",
  "ru": "стена",
  "posNormalized": "sustantivo",
  "translit": "stinA",
  "ipa": "sʲtʲinˈɑ",
  "senses": [
   {
    "es": "pared, muro",
    "definitionEs": "Estructura vertical que delimita o sostiene un espacio.",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "400",
    "Rank": "400",
    "Lemma": "стена",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "261",
    "Fiction 1990-2000": "437.1",
    "Journalism 1990-2000": "190.3",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "стен",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "стена",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "539",
    "Notes": "Related to English \"stone\" ",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "стена"
  }
 },
 {
  "id": "CMR-00403",
  "ru": "интерес",
  "posNormalized": "sustantivo",
  "translit": "intirEs",
  "ipa": "ɪntʲirʲˈes",
  "senses": [
   {
    "es": "interes",
    "definitionEs": "Preferencia o inclinacion que se siente por algo.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "403",
    "Rank": "403",
    "Lemma": "интерес",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "260.6",
    "Fiction 1990-2000": "127",
    "Journalism 1990-2000": "353.8",
    "Length": "7",
    "International": "TRUE",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "интерес",
    "Suffix1": "",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "интерес",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "205",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "интерес"
  }
 },
 {
  "id": "CMR-00407",
  "ru": "оба",
  "posNormalized": "otro",
  "translit": "Oba",
  "ipa": "ˈoba",
  "senses": [
   {
    "es": "ambos, los dos",
    "definitionEs": "Numeral colectivo que se refiere a dos elementos ya mencionados.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "407",
    "Rank": "407",
    "Lemma": "оба",
    "POS": "num",
    "MultipleEntry": "",
    "Frequency": "258.1",
    "Fiction 1990-2000": "299.5",
    "Journalism 1990-2000": "226.6",
    "Length": "3",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "об",
    "Suffix1": "а",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "оба",
    "Member2": "number",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": null
  }
 },
 {
  "id": "CMR-00408",
  "ru": "часто",
  "posNormalized": "otro",
  "translit": "tʃAstʌ",
  "ipa": "tʃʲˈɑstʌ",
  "senses": [
   {
    "es": "a menudo, frecuentemente",
    "definitionEs": "Frecuente a la par que continuadamente.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "408",
    "Rank": "408",
    "Lemma": "часто",
    "POS": "adv",
    "MultipleEntry": "",
    "Frequency": "257.8",
    "Fiction 1990-2000": "162",
    "Journalism 1990-2000": "309",
    "Length": "5",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "част",
    "Suffix1": "о",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "частый",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "136",
    "AspectPair": "",
    "WordFamilyNumber": "651",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "часто"
  }
 },
 {
  "id": "CMR-00411",
  "ru": "слышать",
  "posNormalized": "verbo",
  "translit": "sɭYʃʌt",
  "ipa": "sɭˈyʃʌtʲ",
  "senses": [
   {
    "es": "oir, sentir",
    "definitionEs": "Percibir sonidos con el oido.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "411",
    "Rank": "411",
    "Lemma": "слышать",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "256.1",
    "Fiction 1990-2000": "384.3",
    "Journalism 1990-2000": "174",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "слыш",
    "Suffix1": "ать",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "слышать",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "180",
    "WordFamilyNumber": "516",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "кого? что? где?",
    "VOM": "",
    "ReflexPairNumber": "124"
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "слышать"
  }
 },
 {
  "id": "CMR-00412",
  "ru": "быстро",
  "posNormalized": "otro",
  "translit": "bYstrʌ",
  "ipa": "bˈystrʌ",
  "senses": [
   {
    "es": "rapidamente, velozmente, con rapidez",
    "definitionEs": "Que se hace rapido, que se hace en poco tiempo.",
    "source": "freedict-directo+inverso"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "412",
    "Rank": "412",
    "Lemma": "быстро",
    "POS": "adv",
    "MultipleEntry": "",
    "Frequency": "255.7",
    "Fiction 1990-2000": "375.1",
    "Journalism 1990-2000": "202.9",
    "Length": "6",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "быстр",
    "Suffix1": "о",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "быстрый",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "8",
    "AspectPair": "",
    "WordFamilyNumber": "41",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "быстро"
  }
 },
 {
  "id": "CMR-00416",
  "ru": "мужчина",
  "posNormalized": "sustantivo",
  "translit": "mushIna",
  "ipa": "muɕˈina",
  "senses": [
   {
    "es": "hombre, varon",
    "definitionEs": "Persona adulta de sexo masculino.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "416",
    "Rank": "416",
    "Lemma": "мужчина",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "253.2",
    "Fiction 1990-2000": "390.7",
    "Journalism 1990-2000": "196.9",
    "Length": "7",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "муж",
    "Suffix1": "чина",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "муж",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "325",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "мужчина"
  }
 },
 {
  "id": "CMR-00419",
  "ru": "идея",
  "posNormalized": "sustantivo",
  "translit": "idEya",
  "ipa": "ɪdʲˈeja",
  "senses": [
   {
    "es": "idea",
    "definitionEs": "Representación mental de algo, plan o concepto.",
    "source": "redactado (basado en FreeDict)"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "419",
    "Rank": "419",
    "Lemma": "идея",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "250.8",
    "Fiction 1990-2000": "115.8",
    "Journalism 1990-2000": "352.3",
    "Length": "4",
    "International": "",
    "Inter_Derived": "TRUE",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "иде",
    "Suffix1": "я",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "идея",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "199",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "идея"
  }
 },
 {
  "id": "CMR-00420",
  "ru": "партия",
  "posNormalized": "sustantivo",
  "translit": "pArtiya",
  "ipa": "pˈɑrtʲija",
  "senses": [
   {
    "es": "partido (político)",
    "definitionEs": "Organización política formada por personas con ideas afines, que participa en la vida pública de un país.",
    "source": "redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "420",
    "Rank": "420",
    "Lemma": "партия",
    "POS": "s",
    "MultipleEntry": "",
    "Frequency": "250.4",
    "Fiction 1990-2000": "83.2",
    "Journalism 1990-2000": "430.8",
    "Length": "6",
    "International": "",
    "Inter_Derived": "TRUE",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "парти",
    "Suffix1": "я",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "партия",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "",
    "WordFamilyNumber": "380",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "",
    "VOM": "",
    "ReflexPairNumber": ""
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "партия"
  }
 },
 {
  "id": "CMR-00423",
  "ru": "пытаться",
  "posNormalized": "verbo",
  "translit": "pytAtsʌ",
  "ipa": "pytˈɑtsˌʌ",
  "senses": [
   {
    "es": "intentar",
    "definitionEs": "Hacer un esfuerzo para lograr algo, sin garantía de éxito (aspecto imperfectivo).",
    "source": "freedict-directo + redactado"
   }
  ],
  "learningStatus": null,
  "introducedIn": [],
  "appearsIn": [],
  "comer": [
   {
    "ID1": "423",
    "Rank": "423",
    "Lemma": "пытаться",
    "POS": "v",
    "MultipleEntry": "",
    "Frequency": "249.4",
    "Fiction 1990-2000": "325.3",
    "Journalism 1990-2000": "279.2",
    "Length": "8",
    "International": "",
    "Inter_Derived": "",
    "InterPossible": "",
    "Compound": "",
    "Calque": "",
    "Prefix1": "",
    "Prefix2": "",
    "Root": "пыт",
    "Suffix1": "аться",
    "Suffix2": "",
    "WordFamily": "TRUE",
    "Member1": "пытка",
    "Member2": "",
    "Member3": "",
    "Member4": "",
    "AdjAdvPair": "",
    "AspectPair": "161",
    "WordFamilyNumber": "441",
    "Notes": "",
    "FamilyBranch": "",
    "BranchMemberNo": "",
    "Governance": "делать что?",
    "VOM": "",
    "ReflexPairNumber": "r"
   }
  ],
  "sourceRefs": {
   "freedictRuEs": "пытаться"
  }
 }
];
function lexComerById(id){ return LEXICON_COMER_TANDA1.find(e=>e.id===id) || null; }
function lexComerByRu(ru){ return LEXICON_COMER_TANDA1.find(e=>e.ru===ru) || null; }
