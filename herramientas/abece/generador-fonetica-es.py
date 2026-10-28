# ============================================================
# GENERADOR-FONETICA-ES.PY — Abecé (27/10/2026)
# Desde la palabra española escrita genera, con la convención de
# CONVENCION_IPA.md (Parte C):
#   acento(es)   → sílabas con «·» y la tónica en mayúsculas («CA·sa»)
#   ipa(es)      → IPA peninsular (distinción z / s, yeísmo; la n antes de v o m queda n)
#   translit(es) → pronunciación figurada en cirílico, tónica con tilde (ка́са)
# Es el mismo programa que armó data/data-lexicon-es.js. No es parte de la app.
# 27/10/2026: y final tras consonante = i (whisky, sexy), ck = k (rock) y
# préstamos que se dicen distinto (PRONUNCIA: show = чоу, hockey = хо́кэй).
# Uso:  python3 herramientas/abece/generador-fonetica-es.py casa enviar "sin embargo"
# Para importarlo desde Python, copiarlo como generador_fonetica_es.py.
# ============================================================
# Generadores para Abecé: sílabas y acento («CA·sa»), IPA peninsular y pronunciación figurada en cirílico
import re,unicodedata
V='aeiouáéíóúü'; FUERTE='aeoáéóíú'  # í y ú con tilde forman hiato (cuentan como fuertes)
ACC={'á':'a','é':'e','í':'i','ó':'o','ú':'u'}
INSEP={'pr','pl','br','bl','fr','fl','tr','dr','cr','cl','gr','gl','kr','kl'}
DIG=['ch','ll','rr','qu','gu']
def letras(w):
    # agrupa dígrafos como una unidad
    out=[];i=0
    while i<len(w):
        two=w[i:i+2]
        if two in ('ch','ll','rr'): out.append(two); i+=2; continue
        if two in ('qu','gu') and i+2<len(w) and w[i+2] in 'eiéí': out.append(two); i+=2; continue
        out.append(w[i]); i+=1
    return out
def esv(u): return u in V
def y_vocal(w):
    # y final tras consonante = vocal i (whisky, sexy, jersey no: ahí va tras vocal) — 27/10/2026
    return len(w)>1 and w[-1]=='y' and w[-2] not in V
def silabas(w):
    L=letras(w)
    yv=len(L)-1 if y_vocal(w) else -1
    def esv(u, idx=None): return u in V or idx==yv
    # núcleos vocálicos: separa hiatos
    nuc=[]  # lista de (inicio,fin) índices de grupo vocálico
    i=0
    while i<len(L):
        if esv(L[i], i):
            j=i
            grupo=[i]
            while j+1<len(L) and esv(L[j+1], j+1): j+=1; grupo.append(j)
            # partir hiatos dentro del grupo
            seg=[grupo[0]]; segs=[]
            for k in grupo[1:]:
                a=L[seg[-1]]; b=L[k]
                hiato=(a in FUERTE and b in FUERTE and not (a in 'íú' or b in 'íú') ) or a in 'íú' or b in 'íú'
                # dos fuertes (a,e,o) = hiato; débil con tilde + fuerte = hiato
                if a in 'aeoáéó' and b in 'aeoáéó': hiato=True
                elif (a in 'íú' and b in V) or (b in 'íú' and a in V): hiato=True
                else: hiato=False
                if hiato: segs.append(seg); seg=[k]
                else: seg.append(k)
            segs.append(seg)
            nuc+= [(s[0],s[-1]) for s in segs]
            i=j+1
        else: i+=1
    if not nuc: return [w]
    cortes=[0]
    for (a1,b1),(a2,b2) in zip(nuc,nuc[1:]):
        cons=list(range(b1+1,a2))
        n=len(cons)
        if n==0: c=a2
        elif n==1: c=cons[0]
        else:
            last2=''.join(L[k] for k in cons[-2:])
            if last2 in INSEP: c=cons[-2]
            else: c=cons[-1]
            if n>=3:
                last2=''.join(L[k] for k in cons[-2:])
                c=cons[-2] if last2 in INSEP else cons[-1]
        cortes.append(c)
    cortes.append(len(L))
    return [''.join(L[cortes[k]:cortes[k+1]]) for k in range(len(cortes)-1)]
def tonica(w,sil):
    for k,s in enumerate(sil):
        if any(c in 'áéíóú' for c in s): return k
    if len(sil)==1: return 0
    return len(sil)-2 if (w[-1] in 'aeiouns' or y_vocal(w)) else len(sil)-1
ATONAS=set('el la los las lo un? de a en por con sin para que y e o u ni me te se le nos os les mi tu su mis tus sus del al si cuando como donde pero mas aunque porque pues tan muy'.split())
ATONAS_LOC=set('el la los las lo de a en por con sin para que y e o u ni me te se le nos os les mi tu su del al si'.split())
ACENTO={'hockey':'HOC·key'}   # se escribe como aguda pero es llana (27/10/2026)
def acento(es):
    if es in ACENTO: return ACENTO[es]
    ws=es.split()
    out=[]
    for w in ws:
        sil=silabas(w)
        if len(sil)==1 or (len(ws)>1 and w in ATONAS_LOC): out.append('·'.join(sil)); continue
        t=tonica(w,sil)
        out.append('·'.join(s.upper() if k==t else s for k,s in enumerate(sil)))
    return ' '.join(out)
# ---------- fonemas ----------
# Préstamos que se pronuncian distinto de como se escriben (27/10/2026): para la
# IPA y la pronunciación figurada se usa esta forma; el acento sigue la escritura.
PRONUNCIA={'show':'chou','shock':'chok','hockey':'jókey','whisky':'wíski'}
def fonemas(w):
    """devuelve lista de sílabas, cada una lista de fonemas; y el índice tónico"""
    w=PRONUNCIA.get(w,w)
    sil=silabas(w); t=tonica(w,sil)
    res=[]
    for k,s in enumerate(sil):
        res.append(sil_fon(s, w, k, sil))
    return res,t
def sil_fon(s,w,k,sil):
    p=[]; i=0; s0=s
    prev_word=''.join(sil[:k])
    while i<len(s):
        c=s[i]; nx=s[i+1] if i+1<len(s) else (sil[k+1][0] if k+1<len(sil) else '')
        two=s[i:i+2]
        if two=='ch': p.append('tʃ'); i+=2; continue
        if two=='ll': p.append('ʝ'); i+=2; continue
        if two=='rr': p.append('r'); i+=2; continue
        if two=='qu' and i+2<len(s) and s[i+2] in 'eiéí': p.append('k'); i+=2; continue
        if two=='gu' and i+2<len(s) and s[i+2] in 'eiéí': p.append('g'); i+=2; continue
        if c=='h': i+=1; continue
        if c=='c' and nx=='k': i+=1; continue          # ck = k (rock, hockey) — 27/10/2026
        if c=='c': p.append('θ' if nx in 'eiéí' else 'k'); i+=1; continue
        if c=='z': p.append('θ'); i+=1; continue
        if c=='g': p.append('x' if nx in 'eiéí' else 'g'); i+=1; continue
        if c=='j': p.append('x'); i+=1; continue
        if c=='v': p.append('b'); i+=1; continue
        if c=='ñ': p.append('ɲ'); i+=1; continue
        if c=='x': p+= ['k','s']; i+=1; continue
        if c=='q': p.append('k'); i+=1; continue
        if c=='w': p.append('w'); i+=1; continue
        if c=='y':
            # y vocal al final de sílaba (hoy, rey) o conjunción
            if i==len(s)-1 and i>0 and s[i-1] not in V: p.append('i')   # sexy: y final tras consonante = i
            elif i==len(s)-1 and i>0: p.append('j')
            elif len(s)==1: p.append('i')
            else: p.append('ʝ')
            i+=1; continue
        if c=='r':
            if (k==0 and i==0) or (i==0 and prev_word and prev_word[-1] in 'nls'): p.append('r')
            else: p.append('ɾ')
            i+=1; continue
        if c in V:
            b=ACC.get(c,c).replace('ü','u')
            p.append(b); i+=1; continue
        p.append(c); i+=1
    # semivocales: i/u átonas junto a otra vocal
    q=[]
    vs=[j for j,x in enumerate(p) if x in 'aeiou']
    for j,x in enumerate(p):
        if x in 'iu' and len(vs)>1:
            # si no es el núcleo (la vocal más abierta o la segunda en iu/ui)
            others=[y for y in vs if y!=j]
            strong=[y for y in vs if p[y] in 'aeo']
            orig=s0
            if strong or (j==vs[0]):
                q.append('j' if x=='i' else 'w'); continue
        q.append(x)
    return q
def ipa(es):
    """IPA peninsular. Convención de Azbuka: ˈ justo antes de la vocal tónica
    (o de la semivocal j / w que la precede en la misma sílaba); monosílabos también."""
    out=[]; multi=len(es.split())>1
    for w in es.split():
        sy,t=fonemas(w)
        flat=[(x,k) for k,s in enumerate(sy) for x in s]
        seg=[]
        for idx,(x,k) in enumerate(flat):
            prev=flat[idx-1][0] if idx>0 else None
            nxt=flat[idx+1][0] if idx+1<len(flat) else None
            y=x
            if x=='b' and prev not in (None,'m','n'): y='β'
            if x=='d' and prev not in (None,'n','l'): y='ð'
            if x=='g' and prev not in (None,'n'): y='ɣ'
            if x=='n' and nxt in ('k','g','x'): y='ŋ'
            # n antes de b/v/m: se mantiene n (Manu, 27/10/2026, opción B)
            seg.append((y,k,x))
        atona=multi and w in ATONAS_LOC
        res=''; puesto=False
        for idx,(y,k,x) in enumerate(seg):
            if not puesto and not atona and k==t:
                nxt=seg[idx+1][2] if idx+1<len(seg) and seg[idx+1][1]==k else None
                if x in 'aeiou' or (x in ('j','w') and nxt in tuple('aeiou')):
                    res+='ˈ'; puesto=True
            res+=y
        out.append(res.replace('g','ɡ'))
    return ' '.join(out)
CY={'p':'п','b':'б','β':'б','t':'т','d':'д','ð':'д','k':'к','g':'г','ɣ':'г','f':'ф','θ':'с','s':'с','x':'х','tʃ':'ч','m':'м','n':'н','ŋ':'н','ɲ':'нь','l':'л','ɾ':'р','r':'рр','ʝ':'й'}
VOC={'a':'а','e':'э','i':'и','o':'о','u':'у'}
IOT={'a':'я','e':'е','o':'ё','u':'ю'}
def translit(es):
    out=[]
    multi=len(es.split())>1
    for w in es.split():
        sy,t=fonemas(w)
        flat=[(x,k) for k,s in enumerate(sy) for x in s]
        res=''; i=0
        stressed_done=False
        while i<len(flat):
            x,k=flat[i]; nxt=flat[i+1][0] if i+1<len(flat) else None
            prevc=flat[i-1][0] if i>0 else None
            mark=(k==t and len(sy)>1 and not (multi and w in ATONAS_LOC))
            if x in ('j','ʝ') and nxt in VOC and nxt!='i':
                v=nxt; base='йо' if v=='o' else IOT[v]
                if prevc and prevc not in VOC and prevc not in ('j','w'):
                    base='ь'+('о' if v=='o' else IOT[v]) if v!='e' else 'ье'
                    if v=='o': base='ьо'
                res+=base+('́' if mark and flat[i+1][1]==t and not stressed_done else '')
                if mark and flat[i+1][1]==t: stressed_done=True
                i+=2; continue
            if x=='ɲ' and nxt in VOC:
                v=nxt; res+='н'+({'a':'я','e':'е','o':'ё','u':'ю','i':'и'}[v] if v!='o' else 'ьо')
                if mark and not stressed_done and flat[i+1][1]==t: res+='́'; stressed_done=True
                i+=2; continue
            if x=='r' and prevc is None: res+='р'; i+=1; continue
            if x in VOC:
                c=VOC[x]
                if x=='e' and prevc in ('j',): c='е'
                res+=c
                if mark and not stressed_done and x in 'aeiou' and k==t: res+='́'; stressed_done=True
                i+=1; continue
            if x=='j': res+='й'; i+=1; continue
            if x=='w': res+='у'; i+=1; continue
            res+=CY.get(x,x); i+=1
        out.append(res)
    return ' '.join(out)
if __name__=='__main__':
    import sys
    for w in sys.argv[1:]:
        print(w,'|',acento(w),'|',ipa(w),'|',translit(w))
