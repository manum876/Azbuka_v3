"""Azbuka Símbolos: los símbolos de la interfaz en una fuente propia (dibujos de Noto, OFL).
- Se ven iguales en todos los teléfonos y ▶ nunca sale como emoji.
- Todos centrados en vertical a la misma altura (CENTRO) y en horizontal en su ancho,
  para que queden centrados en los botones y alineados con el texto.
- Métricas de línea iguales a Noto Sans de Azbuka: no cambian el alto de los renglones.
Uso, desde la raíz del repo:
  mkdir -p /tmp/noto && cd /tmp/noto && npm pack @fontsource/noto-sans-symbols-2 @fontsource/noto-sans-math @fontsource/noto-sans-symbols && for f in *.tgz; do tar xzf "$f"; done; cd -
  pip install fonttools brotli
  python3 herramientas/fuentes/azbuka-simbolos.py /tmp/noto assets/noto-sans-azbuka.woff2 assets/azbuka-simbolos.woff2"""
import sys, glob
from fontTools.ttLib import TTFont, newTable
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.pens.recordingPen import DecomposingRecordingPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.fontBuilder import FontBuilder
D, NOTO, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
src = lambda pat: glob.glob(D + '/**/' + pat, recursive=True)[0]
FUENTES = [(src('noto-sans-symbols-2-symbols-400-normal.woff2'), '▶■✕☰▸▾✓✗✎◑●○★☆'),
           (src('noto-sans-math-latin-400-normal.woff2'), '→←↔⊞≈≠≥≤↑↓↻↺'),
           (src('noto-sans-symbols-symbols-400-normal.woff2'), '⌕'),
           (NOTO, '‹›+')]
CENTRO = 345          # altura del centro de cada símbolo (unidades de 1000): centrado en el renglón de Noto y a la altura de las mayúsculas
TAM = {'■': 0.86, '‹': 1.5, '›': 1.5, '▸': 1.8, '▾': 1.8, '⌕': 1.4, '+': 1.35}   # ajustes ópticos de tamaño
EMPUJE = {'▶': 0.08}  # ajuste óptico horizontal: el triángulo se corre a la derecha (fracción de su ancho)
AJUSTE_ALTO = {'■': '▶'}  # ■ toma la altura de ▶ (pareja escuchar / detener)
glifos, ancho, cmap = {'.notdef': TTGlyphPen(None).glyph()}, {'.notdef': (500, 0)}, {}
dibujos = {}
for f, chars in FUENTES:
    t = TTFont(f); gs = t.getGlyphSet(); c = t.getBestCmap()
    for ch in chars:
        n = c[ord(ch)]; rec = DecomposingRecordingPen(gs); gs[n].draw(rec)
        bp = BoundsPen(None); rec.replay(bp); dibujos[ch] = (rec, bp.bounds, t['hmtx'][n][0])
alto = {ch: b[3] - b[1] for ch, (r, b, a) in dibujos.items()}
for ch, (rec, b, adv) in dibujos.items():
    x0, y0, x1, y1 = b; esc = TAM.get(ch, 1.0)
    if ch in AJUSTE_ALTO: esc *= alto[AJUSTE_ALTO[ch]] / alto[ch]
    w, h = (x1 - x0) * esc, (y1 - y0) * esc
    adv2 = max(adv, round(w + 120)) if ch not in '‹›+' else adv
    dx = (adv2 - w) / 2 + EMPUJE.get(ch, 0) * w - x0 * esc
    dy = CENTRO - h / 2 - y0 * esc
    nombre = 'u%04X' % ord(ch) if ch != '+' else 'uFF0B'
    pen = TTGlyphPen(None); rec.replay(TransformPen(pen, (esc, 0, 0, esc, dx, dy)))
    g = pen.glyph(); glifos[nombre] = g; ancho[nombre] = (adv2 if ch != '+' else round(adv * 1.1), 0)
    cmap[ord(ch) if ch != '+' else 0xFF0B] = nombre
fb = FontBuilder(1000, isTTF=True)
orden = list(glifos); fb.setupGlyphOrder(orden); fb.setupCharacterMap(cmap)
fb.setupGlyf(glifos)
for n, g in glifos.items():
    g.recalcBounds(fb.font['glyf']); ancho[n] = (ancho[n][0], getattr(g, 'xMin', 0))
fb.setupHorizontalMetrics(ancho)
fb.setupHorizontalHeader(ascent=1069, descent=-293)
fb.setupNameTable({'familyName': 'Azbuka Simbolos', 'styleName': 'Regular', 'uniqueFontIdentifier': 'Azbuka: Azbuka Simbolos: 2026', 'fullName': 'Azbuka Simbolos', 'psName': 'AzbukaSimbolos-Regular', 'version': 'Version 1.000',
                   'copyright': 'Dibujos de Noto Sans, Noto Sans Symbols, Noto Sans Symbols 2 y Noto Sans Math (Copyright 2022 The Noto Project Authors). SIL Open Font License 1.1.'})
fb.setupOS2(version=4, sTypoAscender=1069, sTypoDescender=-293, sTypoLineGap=0, usWinAscent=1069, usWinDescent=293, fsSelection=0x40 | 0x80, sCapHeight=714, sxHeight=536)
fb.setupPost(); fb.font.flavor = 'woff2'; fb.save(OUT)
print('ok', ''.join(chr(u) for u in sorted(cmap)))
