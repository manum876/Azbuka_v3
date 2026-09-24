<div align="center">

# Азбука

### Ruso desde cero

[🇬🇧 English](README.md) · [🇪🇸 Español](README.es.md)

**Un curso web gratuito y de código abierto para hispanohablantes que quieren aprender ruso desde cero.**

[**▶ Abrir Azbuka**](https://manum876.github.io/Azbuka_v3/) · [**Repositorio**](https://github.com/manum876/Azbuka_v3)

</div>

---

## Sobre el proyecto

**Азбука (Azbuka)** es un proyecto personal para ayudar a hispanohablantes a aprender ruso desde cero hasta, aproximadamente, un **nivel B1**.

Combina un **curso de 12 unidades** con **herramientas de consulta** que se pueden abrir en cualquier momento. Todo el vocabulario vive en un **diccionario central** que conecta el curso y las herramientas: una palabra se escribe una sola vez y cada módulo la muestra a su manera.

No hay **rachas, XP, vidas, rankings ni obligación de estudiar todos los días**. El progreso se guarda en el navegador y cada persona decide cuándo y qué estudiar.

> **Aprendé en orden. Consultá lo que necesites. Practicá lo que quieras.**

---

## Cómo está organizado

<img src="azbuka-structure.svg" alt="Estructura de Azbuka: curso A1-B1 conectado con las herramientas de consulta" width="900">

- **Curso:** 12 unidades progresivas, de A1 a B1, más un examen final.
- **Herramientas:** módulos de consulta y práctica que no dependen del orden del curso.
- **Diccionario central:** la base que comparten todos.
- **Buscador:** encuentra palabras en ruso o en español, y también formas declinadas o conjugadas.

---

## El curso

Doce unidades progresivas, pensadas para un mes de estudio cada una:

| Unidad | Tema principal |
|---|---|
| **01** | Alfabeto y pronunciación |
| **02** | Presentaciones básicas |
| **03** | Sustantivos y género |
| **04** | Casos básicos: nominativo y acusativo |
| **05** | Verbos en presente |
| **06** | Movimiento y ubicación |
| **07** | Tiempo y rutina diaria |
| **08** | Pasado |
| **09** | Futuro |
| **10** | Casos restantes: genitivo, dativo e instrumental |
| **11** | Conversaciones cotidianas |
| **12** | Consolidación B1 |

El enfoque es **orientado a la producción**: además de reconocer respuestas, se pide escribir, traducir, escuchar y armar frases propias. El curso es acumulativo: cada unidad recicla lo anterior.

> Las unidades se están migrando a la versión nueva de la app.

---

## Herramientas

### 📚 Diccionario

Es la base de toda la app: **5.397 palabras** (Comer 5000 más vocabulario propio). Cada una tiene:

- la palabra con su **acento marcado**;
- la **IPA** y una **pronunciación figurada en español** (jarashó, spasíba);
- categoría gramatical;
- una o varias **acepciones**, con traducción y definición en español rioplatense;
- género, animacidad y número en los sustantivos, y aspecto y pareja aspectual en los verbos.

Cada palabra tiene su ficha, con audio.

### 🗣️ Verbos

Las conjugaciones de los **1.654 verbos** del diccionario:

- presente, futuro, pasado e imperativo, con audio en cada forma;
- comparación en paralelo con la **pareja aspectual** (imperfectivo / perfectivo);
- **rección**: qué caso pide cada verbo, con explicación y ejemplos.

### 📖 Casos

Las declinaciones de **3.229 palabras**: sustantivos, adjetivos, pronombres, determinantes y numerales.

- Los **6 casos** en singular y plural, o por género en los adjetivos, con audio.
- Formas especiales: locativo (в лесу́), partitivo (ча́ю), forma corta de los adjetivos y acusativo animado.
- Cada caso tiene su explicación, con ejemplos donde se ve qué palabra está en ese caso y por qué.

### 🔤 Alfabeto

Consulta y práctica de las **33 letras** del alfabeto cirílico: imprenta y cursiva, pronunciación explicada en español, errores comunes, letras parecidas, palabras de ejemplo con audio y seguimiento de las letras dominadas.

### 💬 Diálogos

Conversaciones para situaciones cotidianas, con traducción y vocabulario. *Se está migrando a la versión nueva.*

---

## Filosofía

**1. Un camino claro.** El curso ofrece una progresión ordenada desde cero hasta B1.

**2. Libertad de uso.** Las herramientas se pueden abrir en cualquier momento, sin seguir el orden del curso.

**3. Una referencia confiable.** Para recordar cómo se dice algo, conjugar un verbo o entender un caso, Azbuka tiene que alcanzar por sí sola. Por eso las formas no se inventan: salen de fuentes cruzadas y revisadas a mano.

---

## Características

- 🎓 Curso de 12 unidades, A1 → B1
- 📚 Diccionario central de 5.397 palabras, con acento, IPA y pronunciación figurada
- 🗣️ 1.654 verbos conjugados, con pareja aspectual y rección
- 📖 3.229 palabras declinadas en los 6 casos
- 🔤 Alfabeto cirílico completo
- 🔎 Buscador en ruso y en español, que también reconoce formas declinadas y conjugadas
- 🔊 Audio en ruso con la voz del navegador
- 💾 Progreso guardado en el navegador
- 🌓 Tema claro y oscuro
- 📱 Pensado primero para el celular
- 🚫 Sin gamificación, sin cuentas, sin servidores ni APIs externas, sin funciones de IA

---

## Tecnología

- HTML, CSS y JavaScript, **sin proceso de build**.
- [Preact](https://preactjs.com/) + htm, incluidos en el repositorio (`preact.js`).
- `localStorage` para el progreso y el tema.
- Web Speech API del navegador para el audio en ruso.
- Publicado con **GitHub Pages**.

---

## Fuentes de los datos

- **Vocabulario:** Comer, K. *Comer 5000* (Portland State University) y los diccionarios ruso–español de [FreeDict](https://freedict.org/) (CC BY-SA 3.0).
- **Conjugaciones y declinaciones:** datos de [OpenRussian.org](https://github.com/Badestrand/russian-dictionary) (CC BY-SA 4.0).
- **Controles:** contrastadas con el analizador morfológico pymorphy3 (diccionario OpenCorpora) y con los índices de acentuación del Diccionario gramatical de Zalizniak.
- **Contenido propio:** definiciones, explicaciones y notas redactadas para Azbuka.

---

## Ejecutar localmente

```bash
git clone https://github.com/manum876/Azbuka_v3.git
cd Azbuka_v3
python3 -m http.server
```

Después abrí `http://localhost:8000` en el navegador. Hace falta un servidor local porque algunas páginas cargan archivos de datos.

---

## Estructura del repositorio

```text
Azbuka_v3/
├── index.html            ← inicio
├── azbuka-index-1.html   ← índice del curso A1 → B1
├── ficha.html            ← ficha de palabra (diccionario)
├── alfabeto.html
├── verbos.html
├── casos.html
├── core.css              ← estilos compartidos
├── core.js               ← catálogo, búsqueda, almacenamiento
├── shell.js              ← menú lateral, encabezado y barra inferior
├── progress.js           ← progreso
├── preact.js             ← Preact + htm
├── data-lexicon.js       ← diccionario central
├── data-verbos.js        ← conjugaciones
├── data-casos.js         ← declinaciones
├── data-gramatica.js     ← explicaciones de gramática
├── data-alphabet.js      ← alfabeto
├── azbuka-structure.svg
├── README.md
├── README.es.md
├── LICENSE
└── LICENSE-CONTENT
```

---

## Estado del proyecto

🚧 **En desarrollo activo.** La app se está migrando a una arquitectura nueva, con un diccionario central y un sistema de diseño compartido.

- ✅ Inicio, índice del curso, diccionario, Alfabeto, Verbos y Casos.
- 🔜 Diálogos y las 12 unidades del curso.
- 🔜 Banco de ejercicios y repaso.

---

## Contribuciones

Azbuka es un proyecto personal de **Juan Manuel Muñoz**. El repositorio está abierto para explorarlo, aprender de él y hacer forks según sus licencias, pero no acepta cambios directos de terceros. Si encontrás un error o tenés una sugerencia, abrí un issue.

---

## Licencia

Azbuka usa **dos licencias**, porque el software y el contenido educativo tienen objetivos distintos.

- **Código:** Licencia MIT. Ver [`LICENSE`](LICENSE).
- **Contenido educativo** (material del curso, ejercicios, definiciones, explicaciones): **CC BY-NC-ND 4.0**. Ver [`LICENSE-CONTENT`](LICENSE-CONTENT).
- **Excepción:** las tablas de conjugación (`data-verbos.js`) y de declinación (`data-casos.js`) derivan de datos de OpenRussian.org y se distribuyen bajo **CC BY-SA 4.0**, como pide su licencia original.

---

## Autor

**Juan Manuel Muñoz**

Un proyecto personal e independiente para que aprender ruso desde el español sea más ordenado, accesible y práctico.

<div align="center">

[▶ Probar Azbuka](https://manum876.github.io/Azbuka_v3/)

</div>
