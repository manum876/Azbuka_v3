"""Azbuka Script: Marck Script con las minúsculas más grandes y la marca de acento (U+0301).

No es parte de la app. Genera assets/azbuka-script.woff2 desde la fuente original
(herramientas/fuentes/marck-script.woff2, licencia OFL al lado). Uso, desde la raíz del repo:
  pip install fonttools brotli
  python3 herramientas/fuentes/azbuka-script.py herramientas/fuentes/marck-script.woff2 assets/azbuka-script.woff2 1.2

Qué hace:
1. Las minúsculas (cirílicas y latinas) crecen ×ESC, con su ancho y su kerning. En las
   latinas acentuadas (á é í ó ú ý…) el acento NO crece: se mueve con la letra y queda
   del tamaño del de las mayúsculas.
2. La marca de acento combinable (U+0301) usa el MISMO dibujo que el acento de la fuente
   (el glifo «acute»), y se apoya en cada vocal con un anclaje (mark de OpenType):
   - а е о у А Е О У tienen el mismo dibujo que a e o y A E O Y: el acento va
     exactamente donde la fuente lo pone en á é ó ý Á É Ó Ý;
   - и ы э ю я И Ы Э Ю Я, que no tienen equivalente, siguen la misma regla
     (centro de la parte alta de la letra, a la altura de las demás).
3. Nombre nuevo, porque «Marck Script» es nombre reservado (OFL).
"""
import sys, unicodedata
from fontTools.ttLib import TTFont
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.recordingPen import DecomposingRecordingPen, RecordingPen
from fontTools.feaLib.builder import addOpenTypeFeaturesFromString

src, dst = sys.argv[1], sys.argv[2]
ESC = float(sys.argv[3]) if len(sys.argv) > 3 else 1.2
t = TTFont(src)
c = t.getBestCmap(); gs = t.getGlyphSet(); glyf = t['glyf']; hmtx = t['hmtx']
low = {n for cp, n in c.items() if unicodedata.category(chr(cp)) == 'Ll'}

def contornos(nombre):
    rec = DecomposingRecordingPen(gs); gs[nombre].draw(rec)
    out, cur = [], []
    for op, args in rec.value:
        cur.append((op, args))
        if op in ('closePath', 'endPath'): out.append(cur); cur = []
    return out
def caja(segs):
    P = [p for op, a in segs for p in a if isinstance(p, tuple)]
    return (min(x for x, y in P), min(y for x, y in P), max(x for x, y in P), max(y for x, y in P))
def caja_glifo(n): return caja([s for k in contornos(n) for s in k])

AC = caja_glifo('acute')
AC_W, AC_H = AC[2] - AC[0], AC[3] - AC[1]
def es_acento(k):
    b = caja(k); return abs((b[2] - b[0]) - AC_W) <= 6 and abs((b[3] - b[1]) - AC_H) <= 6 and b[1] > 300

# 1) dónde apoya la fuente el acento en sus vocales latinas (centro de abajo del acento,
#    en las coordenadas de la letra sin acento)
LAT = {'a': 'á', 'e': 'é', 'o': 'ó', 'y': 'ý', 'u': 'ú', 'i': 'í', 'A': 'Á', 'E': 'É', 'O': 'Ó', 'Y': 'Ý', 'U': 'Ú', 'I': 'Í'}
APOYO = {}
for base, acentuada in LAT.items():
    nb, na = c.get(ord(base)), c.get(ord(acentuada))
    if not nb or not na: continue
    ks = contornos(na); acs = [k for k in ks if es_acento(k)]
    if not acs: continue
    resto = [s for k in ks if not es_acento(k) for s in k]
    corr = caja(resto)[0] - caja_glifo(nb)[0]
    a = caja(acs[0]); APOYO[nb] = ((a[0] + a[2]) / 2 - corr, a[1])
# cirílicas con el mismo dibujo que una latina: el mismo apoyo, corrido lo que esté corrida la letra
PAR = {'а': 'a', 'е': 'e', 'о': 'o', 'у': 'y', 'А': 'A', 'Е': 'E', 'О': 'O', 'У': 'Y'}
for cy, la in PAR.items():
    nc, nl = c[ord(cy)], c[ord(la)]
    if nl in APOYO:
        APOYO[nc] = (APOYO[nl][0] + caja_glifo(nc)[0] - caja_glifo(nl)[0], APOYO[nl][1])
# las demás vocales: la misma regla que se ve en las latinas (centro de la parte alta,
# separado de la letra lo mismo que en promedio)
sep_min = [APOYO[c[ord(x)]][1] - caja_glifo(c[ord(x)])[3] for x in 'aeouy' if c[ord(x)] in APOYO]
sep_may = [APOYO[c[ord(x)]][1] - caja_glifo(c[ord(x)])[3] for x in 'AEOUY' if c[ord(x)] in APOYO]
SEP_MIN, SEP_MAY = sum(sep_min) / len(sep_min), sum(sep_may) / len(sep_may)
def apoyo_regla(n, sep):
    P = [p for k in contornos(n) for op, a in k for p in a if isinstance(p, tuple)]
    ym = max(y for x, y in P); yn = min(y for x, y in P)
    top = [x for x, y in P if y >= ym - (ym - yn) * 0.25]
    return ((min(top) + max(top)) / 2, ym + sep)
HOLGURA = 45  # las vocales sin equivalente tienen la parte alta más ancha: un poco más de aire
REGLA = [c[ord(ch)] for ch in 'иыэюяИЫЭЮЯ' if c.get(ord(ch))]

# 2) minúsculas más grandes; el acento de las latinas acentuadas conserva su tamaño.
#    El apoyo de las vocales minúsculas sigue a la letra: x a escala, y a la misma
#    distancia del techo de la letra que antes (el acento no crece).
SEP = {n: (x * ESC, y - caja_glifo(n)[3]) for n, (x, y) in APOYO.items() if n in low}
for n in low:
    ks = contornos(n)
    resto = [s for k in ks if not es_acento(k) for s in k]
    if not resto: continue
    top = caja(resto)[3]
    pen = TTGlyphPen(None)
    for k in ks:
        rp = RecordingPen(); rp.value = k
        if es_acento(k):
            b = caja(k); cx = (b[0] + b[2]) / 2
            rp.replay(TransformPen(pen, (1, 0, 0, 1, cx * ESC - cx, top * ESC - top)))
        else:
            rp.replay(TransformPen(pen, (ESC, 0, 0, ESC, 0, 0)))
    g = pen.glyph(); glyf[n] = g; g.recalcBounds(glyf)
    adv, lsb = hmtx[n]; hmtx[n] = (round(adv * ESC), getattr(g, 'xMin', 0))
gs = t.getGlyphSet()
for n, (x, sep) in SEP.items():
    APOYO[n] = (x, caja_glifo(n)[3] + sep)

# las vocales sin equivalente: x en el centro de la parte alta; y lo justo para que el
# acento (que es inclinado) no toque la letra en ningún punto, con la misma separación
# que deja la fuente en sus vocales
AC_P = [p for k in contornos('acute') for op, a in k for p in a if isinstance(p, tuple)]
MX0, MY0 = (AC[0] + AC[2]) / 2, AC[1]
def techo(P, x, ancho=24):
    ys = [py for px, py in P if abs(px - x) <= ancho]
    return max(ys) if ys else None
for n in REGLA:
    sep = SEP_MIN if n in low else SEP_MAY
    x, _ = apoyo_regla(n, 0)
    P = [p for k in contornos(n) for op, a in k for p in a if isinstance(p, tuple)]
    y = max(y for px, y in P) + sep
    for ax, ay in AC_P:
        tt = techo(P, x + ax - MX0)
        if tt is not None: y = max(y, tt + sep - (ay - MY0))
    APOYO[n] = (x, y + HOLGURA)

# 3) kerning de pares con minúsculas, a escala (el valor centinela 32767 no se toca)
kern = []
st = t['GPOS'].table.LookupList.Lookup[0].SubTable[0]
for first, ps in zip(st.Coverage.glyphs, st.PairSet):
    for pv in ps.PairValueRecord:
        v = pv.Value1.XAdvance if pv.Value1 else 0
        if not v: continue
        if (first in low or pv.SecondGlyph in low) and abs(v) < 2000: v = round(v * ESC)
        kern.append((first, pv.SecondGlyph, v))

# 4) la marca combinable: copia del dibujo «acute», de ancho cero
go = t.getGlyphOrder(); go.append('acutecomb'); t.setGlyphOrder(go)
pen = TTGlyphPen(None); gs['acute'].draw(pen)
g = pen.glyph(); glyf['acutecomb'] = g; g.recalcBounds(glyf); hmtx['acutecomb'] = (0, g.xMin)
for sub in t['cmap'].tables:
    if sub.isUnicode(): sub.cmap[0x301] = 'acutecomb'
MX, MY = (AC[0] + AC[2]) / 2, AC[1]
fea = 'languagesystem DFLT dflt;\nlanguagesystem cyrl dflt;\nlanguagesystem latn dflt;\n'
fea += f'markClass acutecomb <anchor {round(MX)} {round(MY)}> @ARRIBA;\n'
fea += 'feature kern {\n' + ''.join(f'  pos {a} {b} {v};\n' for a, b, v in kern) + '} kern;\n'
fea += 'feature mark {\n' + ''.join(f'  pos base {n} <anchor {round(x)} {round(y)}> mark @ARRIBA;\n' for n, (x, y) in APOYO.items()) + '} mark;\n'
for tag in ('GPOS', 'GDEF'):
    if tag in t: del t[tag]
addOpenTypeFeaturesFromString(t, fea)

# 5) nombre nuevo
for r in t['name'].names:
    if r.nameID in (1, 4, 16, 18): r.string = 'Azbuka Script'
    elif r.nameID in (2, 17): r.string = 'Regular'
    elif r.nameID == 3: r.string = 'Azbuka: Azbuka Script Regular: 2026'
    elif r.nameID == 6: r.string = 'AzbukaScript-Regular'
    elif r.nameID == 5: r.string = 'Version 1.002-azbuka2'
    elif r.nameID == 0: r.string = r.toUnicode() + f' Modified 2026 for Azbuka: lowercase scaled {round(ESC*100)}%, combining acute added.'
t['name'].names = [r for r in t['name'].names if r.nameID != 7]
t['maxp'].numGlyphs = len(t.getGlyphOrder())
t.flavor = 'woff2'; t.save(dst)
print('minúsculas', len(low), '· pares de kerning', len(kern), '· vocales con acento', len(APOYO))
