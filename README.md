<div align="center">

# Азбука

### Ruso desde cero · Russian from zero

[🇬🇧 English](README.md) · [🇪🇸 Español](README.es.md)

**A free, open-source web course for Spanish speakers learning Russian from scratch.**

[**▶ Open Azbuka**](https://manum876.github.io/AZBUKA/) · [**Repository**](https://github.com/manum876/AZBUKA)

</div>

---

## About

**Азбука (Azbuka)** is a personal project designed to help Spanish-speaking learners study Russian from beginner level to approximately **B1**.

The project combines a structured **12-unit course** with a set of independent reference and practice tools. The goal is not to turn language learning into a game, but to provide a clear learning path that can also be used as a practical reference whenever a specific word, verb, case, or expression is needed.

There are **no streaks, XP, lives, leaderboards, or daily requirements**. Progress is saved locally, but the learner decides when and what to study.

> **Learn in order. Look things up whenever you need them. Practice what you want.**

---

## How Azbuka is organized

<img src="docs/azbuka-structure.svg" alt="Azbuka structure: a progressive A1-B1 course connected to five independent learning tools" width="900">

The project has two complementary parts:

- **Course** — 12 progressive units covering approximately A1 to B1.
- **Tools** — independent modules that can be accessed at any time, without having to find the corresponding course unit first.

The application also includes a **cross-module search**, making it possible to look up Russian vocabulary and expressions from different parts of the application.

---

## Course

The course is divided into **12 progressive units**, each designed to represent roughly one month of study.

Each unit combines grammar, vocabulary, reading, listening, writing, and interactive exercises. Previously learned material is continuously recycled throughout the course.

| Unit | Main focus |
|---|---|
| **01** | Cyrillic alphabet & pronunciation |
| **02** | Greetings & basic conversations |
| **03** | Nouns, gender & number |
| **04** | Cases I — Nominative & Accusative |
| **05** | Present tense & everyday actions |
| **06** | Location, movement & Prepositional case |
| **07** | Time, dates & daily routines |
| **08** | Past tense & personal experiences |
| **09** | Future tense & plans |
| **10** | Cases II — Genitive, Dative & Instrumental |
| **11** | Everyday communication & real-world Russian |
| **12** | B1 consolidation & communication |

### Learning approach

Azbuka follows a **production-first approach**. Learners are progressively asked to write, translate, listen, read, and construct their own sentences rather than only recognize correct answers.

Exercises move from recognition and controlled practice toward increasingly independent language production.

The course is cumulative: each unit builds on previously introduced vocabulary and grammar instead of functioning as an isolated lesson.

---

## Independent tools

### 📖 Cases

Practice all **six Russian grammatical cases**:

- Nominative
- Accusative
- Genitive
- Dative
- Instrumental
- Prepositional

Includes basic theory and declension exercises across **three difficulty levels**, with **381 nouns** and their declensions.

---

### 🔤 Alphabet

A complete reference and practice module for the **33 letters and signs of the Russian Cyrillic alphabet**.

Includes:

- Uppercase and lowercase print forms
- Uppercase and lowercase cursive forms
- Transliteration
- Text-to-speech pronunciation
- Individual practice exercises
- Spanish explanations of pronunciation
- Common pronunciation and reading mistakes
- Similar-looking Russian letters
- Progress tracking for letters already mastered

---

### 🗣️ Verbs

A collection of the **50 most frequently used Russian verbs**, with conjugations in the present tense for all personal pronouns.

The verb module is designed to grow over time, with past and future forms planned for future development.

---

### 📚 Thematic dictionary

Around **400 common words and short expressions**, organized into nine thematic categories:

1. Basic concepts
2. The person
3. Food
4. The city
5. Work
6. Nature
7. Key verbs
8. Travel
9. Health

Each category is further divided into small thematic groups. Entries include Spanish, Russian, and transliteration, with Russian text-to-speech planned for future development.

---

### 💬 Dialogues

A growing collection of **30 dialogues** covering common everyday situations.

Each dialogue contains:

- Two interlocutors
- Short, natural exchanges
- Spanish translation
- Transliteration
- Vocabulary and grammatical notes for the words used in each line

The dialogues module is currently the least developed part of the application and will continue to expand.

---

## Philosophy

Azbuka is intentionally different from gamified language-learning platforms.

There is no requirement to study every day. There are no streaks to maintain and no XP to collect.

Instead, the project is designed around three ideas:

**1. A clear path**  
The course provides an ordered progression from absolute beginner to approximately B1.

**2. Freedom of use**  
The independent tools can be opened at any time, without requiring the learner to follow the course sequence.

**3. Practical reference**  
If you need to remember how to say something, check a verb, understand a case, or look up vocabulary, Azbuka should be useful on its own — without having to resort immediately to a translator or an AI assistant.

---

## Features

- 🎓 12-unit Russian course
- 📈 Approximately A1 → B1 progression
- 🔎 Cross-module search
- 📖 Six-case declension practice
- 🔤 Complete Russian Cyrillic alphabet reference
- 🗣️ 50 high-frequency verbs
- 📚 Thematic Spanish–Russian dictionary
- 💬 Everyday dialogues
- 🔊 Browser-based Russian text-to-speech
- 💾 Local progress tracking
- 🌓 Light/dark theme
- 📱 Responsive web interface
- 🚫 No gamification
- 🚫 No external APIs
- 🚫 No AI features

Progress and preferences are stored locally in the browser using `localStorage`.

---

## Technology

Azbuka is intentionally lightweight.

The application is built with:

- **HTML**
- **CSS**
- **Vanilla JavaScript**
- Browser `localStorage`
- Browser Web Speech API for Russian text-to-speech

There is no backend, build system, external database, or external API.

The application is deployed using **GitHub Pages**.

---

## Run locally

Azbuka is a static web application and does not require a package manager or build step.

Clone the repository:

```bash
git clone https://github.com/manum876/AZBUKA.git
cd AZBUKA
```

Then open `index.html` in a browser, or serve the folder with any local static web server.

---

## Project status

🚧 **Active development**

Azbuka is still an evolving personal project. The current application contains the core course structure and independent tools, but content, exercises, interface details, and functionality are still being expanded and refined.

Planned improvements include:

- Expanding the verb database
- Adding past and future conjugations
- Adding Russian TTS throughout the dictionary
- Expanding the dialogue library
- Improving and expanding exercises
- Refining existing course units
- Adding further review and assessment features

---

## Repository structure

The repository is intentionally simple and organized around the application's modules.

```text
AZBUKA/
├── index.html
├── azbuka-index.html
├── azbuka-*.html
├── alfabeto.html
├── casos.html
├── verbos.html
├── diccionario.html
├── dialogos.html
├── core.js
├── core.css
├── data-alphabet.js
├── data-casos.js
├── data-diccionario.js
├── data-verbos.js
├── docs/
│   └── azbuka-structure.svg
├── README.md
├── README.es.md
├── LICENSE
└── LICENSE-CONTENT
```

---

## Contributions

Azbuka is a personal project maintained by **Juan Manuel Muñoz**.

The repository is open for people to explore, learn from, fork, and use according to the applicable licenses. However, the main `AZBUKA` repository is intentionally maintained as a single-author project; changes to the main repository are not open for direct contribution.

If you find an error or have a suggestion, feel free to open an issue.

---

## License

Azbuka uses **two licenses**, because the software and the educational material serve different purposes.

### Code

The source code is released under the **MIT License**.

See [`LICENSE`](LICENSE).

### Educational content

The original educational content — including course material, exercises, vocabulary, dialogues, and language-learning datasets — is released under **CC BY-NC-ND 4.0**.

This license allows non-commercial sharing with attribution, but does not allow distribution of modified versions of the material.

See [`LICENSE-CONTENT`](LICENSE-CONTENT).

[Read the full CC BY-NC-ND 4.0 license](https://creativecommons.org/licenses/by-nc-nd/4.0/).

---

## Author

**Juan Manuel Muñoz**

Azbuka is an independent personal project created to make learning Russian from Spanish more structured, accessible, and practical.

[▶ Try Azbuka](https://manum876.github.io/AZBUKA/)

</div>
