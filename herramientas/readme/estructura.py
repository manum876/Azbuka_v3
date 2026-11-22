# Genera los cuatro dibujos de la estructura para los README (22/11/2026):
# Azbuka y Abecé, en español y en inglés. Uso: python3 herramientas/readme/estructura.py
import os
RAIZ = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..")
COL = {"orange": ("#C48254", "#fff"), "yellow": ("#C9B369", "#1A1812"), "lime": ("#9BAA5C", "#1A1812"), "green": ("#5C9B78", "#fff"),
       "cyan": ("#5FA3B8", "#fff"), "blue": ("#5D7DA6", "#fff"), "purple": ("#8871A8", "#fff"), "pink": ("#B0688E", "#fff")}
T = {
 "es": dict(curso="🎓 CURSO", cursoSub="13 unidades y examen final · A1 → B1", apr="Aprendizaje progresivo",
   l1="Teoría con ejemplos · vocabulario · ejercicios", l2="escuchar · escribir · conversar · proyecto · evaluación",
   ef="EF = examen final: seis bloques, 100 puntos", efTag="EF", rep=("🔁 Repaso de hoy", "repaso espaciado de ejercicios, palabras y reglas"),
   des=("🎯 Desafío del día", "un ejercicio por día de tu unidad"), mods="🧰 MÓDULOS DE APOYO", modsSub="Se abren en cualquier momento · consulta y práctica libre",
   pie="🔎 Buscador con formas · 🔊 Voces generadas · 📱 Sin conexión · ☁️ Progreso en la nube · 🚫 Sin gamificación"),
 "en": dict(curso="🎓 COURSE", cursoSub="13 units and a final exam · A1 → B1", apr="Step-by-step learning",
   l1="Theory with examples · vocabulary · exercises", l2="listening · writing · conversation · project · test",
   ef="FE = final exam: six blocks, 100 points", efTag="FE", rep=("🔁 Today's review", "spaced repetition of exercises, words and rules"),
   des=("🎯 Daily challenge", "one exercise a day from your unit"), mods="🧰 SUPPORT MODULES", modsSub="Open them at any time · reference and free practice",
   pie="🔎 Search that knows word forms · 🔊 Generated voices · 📱 Offline · ☁️ Cloud progress · 🚫 No gamification"),
}
APPS = {
 "azbuka": dict(titulo="АЗБУКА", color="#B5605C",
   sub={"es": "Ruso desde cero · un diccionario central para todo", "en": "Russian from zero · one central dictionary for everything"},
   desc={"es": "El diccionario central de Azbuka conectado con el curso de 13 unidades y examen final y con ocho módulos de apoyo.",
         "en": "The Azbuka central dictionary connected to a progressive A1 to B1 course of 13 units and a final exam, and to eight support modules."},
   mods=[("orange", "Сл", ("Diccionario", "más de 6.000 palabras · audio"), ("Dictionary", "over 6,000 words · audio")),
         ("yellow", "Аа", ("Alfabeto", "33 letras · sonidos · a mano"), ("Alphabet", "33 letters · sounds · handwriting")),
         ("lime", "Ди", ("Diálogos", "conversaciones · frases · cultura"), ("Dialogues", "conversations · phrases · culture")),
         ("green", "Чт", ("Lecturas", "48 textos graduados · preguntas"), ("Readings", "48 graded texts · questions")),
         ("cyan", "Ма", ("Masha", "72 charlas escritas en ruso"), ("Masha", "72 written chats in Russian")),
         ("blue", "Вб", ("Verbos", "más de 1.700 verbos · aspecto"), ("Verbs", "over 1,700 verbs · aspect")),
         ("purple", "Пд", ("Casos", "unas 3.800 palabras · 6 casos"), ("Cases", "about 3,800 words · 6 cases")),
         ("pink", "Тд", ("Cuaderno", "tus notas · PDF y Word"), ("Notebook", "your notes · PDF and Word"))]),
 "abece": dict(titulo="ABECÉ", color="#B5605C",
   sub={"es": "Español desde cero para rusohablantes", "en": "Spanish from zero for Russian speakers"},
   desc={"es": "El diccionario central de Abecé conectado con el curso de 13 unidades y examen final y con ocho módulos de apoyo.",
         "en": "The Abecé central dictionary connected to a progressive A1 to B1 course of 13 units and a final exam, and to eight support modules."},
   mods=[("orange", "Dc", ("Diccionario", "unas 5.400 palabras · cirílico"), ("Dictionary", "about 5,400 words · Cyrillic guide")),
         ("yellow", "Ab", ("Alfabeto", "letras · sonidos · tilde"), ("Alphabet", "letters · sounds · accents")),
         ("lime", "Dl", ("Diálogos", "64 diálogos · frases · cultura"), ("Dialogues", "64 dialogues · phrases · culture")),
         ("green", "Le", ("Lecturas", "48 textos graduados · preguntas"), ("Readings", "48 graded texts · questions")),
         ("cyan", "Lu", ("Lucía", "72 charlas escritas en español"), ("Lucía", "72 written chats in Spanish")),
         ("blue", "Vb", ("Verbos", "unos 1.260 verbos · con vosotros"), ("Verbs", "about 1,260 verbs · with vosotros")),
         ("purple", "Gr", ("Gramática", "artículos · pronombres · tiempos"), ("Grammar", "articles · pronouns · tenses")),
         ("pink", "Cu", ("Cuaderno", "tus notas · PDF y Word"), ("Notebook", "your notes · PDF and Word"))]),
}
def esc(s): return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
def svg(app, lang):
    A, t = APPS[app], T[lang]
    titulo = {"azbuka": {"es": "Estructura de Azbuka", "en": "Azbuka learning structure"}, "abece": {"es": "Estructura de Abecé", "en": "Abecé learning structure"}}[app][lang]
    u = []
    for i in range(13):
        x, y = (i % 7) * 54, (i // 7) * 56
        u.append(f'    <rect x="{x}" y="{y}" width="46" height="44" rx="12" fill="{A["color"]}" opacity="{round(1 - i * 0.035, 3)}"/><text x="{x + 23}" y="{y + 27}" text-anchor="middle" class="unit">{i + 1:02d}</text>')
    u.append(f'    <rect x="324" y="56" width="46" height="44" rx="12" fill="#C9A84C" opacity="1"/><text x="347" y="83" text-anchor="middle" class="unit">{t["efTag"]}</text>')
    m = []
    for k, (col, gl, es_, en_) in enumerate(A["mods"]):
        nombre, sub = es_ if lang == "es" else en_
        bg, fg = COL[col]; y = k * 53
        m.append(f'    <rect y="{y}" width="370" height="45" rx="13" fill="#faf8f3" stroke="#e4e0d7"/>')
        m.append(f'    <rect x="10" y="{y + 8}" width="29" height="29" rx="8" fill="{bg}"/><text x="24.5" y="{y + 27}" text-anchor="middle" class="glyph" fill="{fg}">{gl}</text>')
        m.append(f'    <text x="52" y="{y + 28}" class="tool">{esc(nombre)}</text>')
        m.append(f'    <text x="160" y="{y + 28}" class="toolsub">{esc(sub)}</text>')
    F = 'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif'
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" role="img" aria-labelledby="title desc" lang="{lang}">
  <title id="title">{esc(titulo)}</title>
  <desc id="desc">{esc(A["desc"][lang])}</desc>
  <defs>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-opacity=".12"/>
    </filter>
    <style>
      .title{{font:800 30px {F};fill:#fff}}
      .sub{{font:500 15px {F};fill:#fff;opacity:.92}}
      .label{{font:700 18px {F};fill:#202124}}
      .small{{font:500 13px {F};fill:#5f6368}}
      .tool{{font:700 15px {F};fill:#202124}}
      .toolsub{{font:500 12px {F};fill:#6b7280}}
      .unit{{font:700 13px {F};fill:#fff}}
      .glyph{{font:800 13px {F}}}
    </style>
  </defs>

  <rect width="1200" height="800" rx="28" fill="#F7F5F0"/>

  <rect x="370" y="35" width="460" height="105" rx="24" fill="#C9A84C" filter="url(#shadow)"/>
  <text x="600" y="80" text-anchor="middle" class="title">{A["titulo"]}</text>
  <text x="600" y="107" text-anchor="middle" class="sub">{esc(A["sub"][lang])}</text>

  <path d="M600 140 V176" stroke="#b8b2a7" stroke-width="3" fill="none"/>
  <path d="M600 176 H285 V207" stroke="#b8b2a7" stroke-width="3" fill="none"/>
  <path d="M600 176 H915 V207" stroke="#b8b2a7" stroke-width="3" fill="none"/>

  <rect x="70" y="207" width="430" height="520" rx="24" fill="#fff" stroke="#dedad2" filter="url(#shadow)"/>
  <path d="M94 207 H476 A24 24 0 0 1 500 231 V283 H70 V231 A24 24 0 0 1 94 207 Z" fill="{A["color"]}"/>
  <text x="100" y="242" class="title" style="font-size:22px">{t["curso"]}</text>
  <text x="100" y="266" class="sub">{esc(t["cursoSub"])}</text>

  <text x="100" y="318" class="label">{esc(t["apr"])}</text>
  <text x="100" y="342" class="small">{esc(t["l1"])}</text>
  <text x="100" y="361" class="small">{esc(t["l2"])}</text>
  <g transform="translate(100,388)">
{chr(10).join(u)}
  </g>
  <text x="100" y="530" class="small">{esc(t["ef"])}</text>

  <rect x="100" y="560" width="370" height="64" rx="14" fill="#faf8f3" stroke="#e4e0d7"/>
  <text x="118" y="587" class="tool">{esc(t["rep"][0])}</text>
  <text x="118" y="608" class="toolsub">{esc(t["rep"][1])}</text>
  <rect x="100" y="636" width="370" height="64" rx="14" fill="#faf8f3" stroke="#e4e0d7"/>
  <text x="118" y="663" class="tool">{esc(t["des"][0])}</text>
  <text x="118" y="684" class="toolsub">{esc(t["des"][1])}</text>

  <rect x="700" y="207" width="430" height="520" rx="24" fill="#fff" stroke="#dedad2" filter="url(#shadow)"/>
  <text x="730" y="242" class="label" style="font-size:22px">{t["mods"]}</text>
  <text x="730" y="268" class="small">{esc(t["modsSub"])}</text>
  <g transform="translate(730,290)">
{chr(10).join(m)}
  </g>

  <rect x="230" y="748" width="740" height="32" rx="16" fill="#ede9df"/>
  <text x="600" y="770" text-anchor="middle" class="small">{esc(t["pie"])}</text>
</svg>
'''
for app in APPS:
    for lang in ("es", "en"):
        f = os.path.join(RAIZ, "assets", f"{app}-structure{'-en' if lang == 'en' else ''}.svg")
        open(f, "w", encoding="utf-8").write(svg(app, lang)); print(f)
