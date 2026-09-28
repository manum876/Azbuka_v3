# Generador de IPA y transliteración de AZBUKA desde el campo acento,
# según CONVENCION_IPA.md (versión 2). Herramienta de mantenimiento, no la
# usa la app. Uso: from generador_fonetica import ipa, translit
#   ipa("говори́ть") → "ɡʌvʌrʲˈitʲ"; translit(ipa("говори́ть")) → "gavarít"
# Generador acento -> IPA -> transliteración según CONVENCION_IPA.md (v2)
import re
AC='\u0301'
VOW='аеёиоуыэюя'
OGO={'его','ничего','чего','того','кого','никого','всего','него','сего','моего','твоего','своего','нашего','вашего','этого','самого','одного','многого'}
IOT='еёюя'
CONS={'б':'b','в':'v','г':'ɡ','д':'d','ж':'ʒ','з':'z','к':'k','л':'ɭ','м':'m','н':'n','п':'p','р':'r','с':'s','т':'t','ф':'f','х':'x','ц':'ts','ч':'tʃʲ','ш':'ʃ','щ':'ɕ','й':'j'}
VOICED={'b':'p','v':'f','ɡ':'k','d':'t','ʒ':'ʃ','z':'s','ʑ':'sʲ'}
VOICELESS={v:k for k,v in VOICED.items() if k!='v'}
VOICELESS.update({'p':'b','t':'d','k':'ɡ','s':'z','ʃ':'ʒ','f':'v'})
def especiales(w):
    for a,b in [('сч','щ'),('зч','щ'),('жч','щ'),('стн','сн'),('здн','зн'),('вств','ств'),('лнц','нц'),('рдц','рц'),('гк','хк'),('гч','хч'),('дск','цк'),('тск','цк')]:
        w=w.replace(a,b)
    return w
def ipa_word(ac, especial_ogo=False):
    w=ac.lower()
    # stressed index
    letters=[];stress=None
    for ch in w:
        if ch==AC:
            stress=len(letters)-1; continue
        letters.append(ch)
    w=''.join(letters)
    if stress is None:
        if 'ё' in w: stress=w.index('ё')
        else:
            vs=[i for i,ch in enumerate(w) if ch in VOW]
            if len(vs)==1: stress=vs[0]
    # especiales (keep index mapping simple: apply only if lengths shift after stress? do replacements with index tracking)
    for suf,rep in (('ться','ца'),('тся','ца')):
        if w.endswith(suf) and len(w)>len(suf)+1:
            w=w[:-len(suf)]+rep
    ws=list(w); marks=[i==stress for i in range(len(w))]
    s=''.join(ws)
    for a,b in [('сч','щ'),('зч','щ'),('жч','щ'),('стн','сн'),('здн','зн'),('вств','ств'),('лнц','нц'),('рдц','рц'),('гк','хк'),('гч','хч'),('дск','цк'),('тск','цк'),('сш','шш'),('зш','шш'),('сж','жж'),('зж','жж')]:
        while a in s:
            i=s.index(a); s=s[:i]+b+s[i+len(a):]; marks=marks[:i]+[False]*len(b)+marks[i+len(a):]
            # stress stays on vowels only; consonant clusters never stressed
    if s in OGO or s.startswith('сегодн'):
        k=s.index('го') if s.startswith('сегодн') else len(s)-2
        s=s[:k]+'в'+s[k+1:]
    if s.startswith('что') or s.startswith('ничто'):
        k=s.index('чт'); s=s[:k]+'ш'+s[k+1:]
    out=[]; n=len(s)
    def prev_is_vowel(i): return i>0 and s[i-1] in VOW
    i=0
    toks=[]  # list of (sym, kind) kind: C/V/J/S(stress)
    while i<n:
        ch=s[i]; st=marks[i]
        nx=s[i+1] if i+1<n else ''
        if ch in CONS:
            sym=CONS[ch]
            soft = bool(nx) and nx in 'еёиюяь' and ch not in 'жшцчщй'
            if ch=='й': toks.append(['j','Y']); i+=1; continue
            if soft:
                if ch=='з': sym='ʑ'
                else: sym=sym+'ʲ'
            toks.append([sym,'C'])
        elif ch in 'ьъ':
            pass
        elif ch in VOW:
            prevc=s[i-1] if i>0 else ''
            iot = ch in IOT and (i==0 or (prevc and (prevc in VOW or prevc in 'ьъ-')))
            if ch=='и' and prevc=='ь': iot=True
            hardprev = bool(prevc) and prevc in 'жшц'
            last = (i==n-1)
            if st:
                v={'а':'ɑ','я':'ɑ','о':'o','э':'ɛ','е':'e','и':'i','ы':'y','у':'u','ю':'u','ё':'ɵ'}[ch]
                if ch=='е' and hardprev: v='ɛ'
                if ch=='и' and hardprev: v='y'
                if ch=='ё' and prevc and prevc in 'жш': v='o'
            else:
                v={'а':'ʌ','о':'ʌ','е':'ɪ','я':'ɪ','и':'ɪ','э':'ɪ','у':'u','ю':'u','ы':'y','ё':'ɵ'}[ch]
                if ch=='а' and prevc and prevc in 'чщ': v='ɪ'
                if ch in 'еи' and hardprev: v='y'
                if ch=='ё' and prevc and prevc in 'жш': v='o'
                if ch=='я' and last: v='ʌ'
                if ch in 'аоя' and last and prevc!='и': v='ʌ' if ch!='я' else 'ʌ'
                # -ия / -ие final
                if last and prevc=='и' and ch in 'яе' and not marks[i-1]:
                    v='a' if ch=='я' else 'ɪ'
                    iot=True
            if iot: toks.append(['j','J'])
            if st: toks.append(['ˈ','S'])
            toks.append([v,'V'])
            # fix: stress before j
        elif ch=='-':
            toks.append(['','H'])
        i+=1
    # move stress before j
    for k in range(len(toks)-1):
        if toks[k][1]=='J' and toks[k+1][1]=='S':
            toks[k],toks[k+1]=toks[k+1],toks[k]
    # -ия final: и before final ja unstressed -> i (исто́рия ɪstˈorʲija)
    # find pattern C ɪ j a at end
    if len(toks)>=3 and toks[-1][0] in ('a','ɪ') and toks[-2][1]=='J' and toks[-3][0]=='ɪ' and (len(toks)<4 or toks[-4][1]!='S'):
        if s.endswith('ия') or s.endswith('ие'):
            toks[-3][0]='i'
            if len(toks)>=4 and toks[-4][0]=='ts': toks[-3][0]='y'
    # voicing: final devoicing and regressive assimilation
    cons_idx=[k for k,t in enumerate(toks) if t[1]=='C']
    def base(sym): return sym.replace('ʲ','')
    # final
    for k in range(len(toks)-1,-1,-1):
        if toks[k][1] in ('C',): 
            b=base(toks[k][0])
            if b in VOICED:
                toks[k][0]=VOICED[b] if b=='ʑ' else toks[k][0].replace(b,VOICED[b],1)
            break
        if toks[k][1]=='H' or toks[k][0]=='': continue
        break
    # regressive within clusters
    for k in range(len(toks)-2,-1,-1):
        if toks[k][1]!='C' or toks[k+1][1]!='C': continue
        b=base(toks[k][0]); nb=base(toks[k+1][0])
        if nb in ('m','n','ɭ','r','j','v'): continue
        if nb in VOICED or nb in ('b','d','ɡ','z','ʒ','ʑ'):  # next voiced obstruent
            if b in VOICELESS and b not in ('v',):
                toks[k][0]=toks[k][0].replace(b,VOICELESS[b],1)
        else:
            if b in VOICED: toks[k][0]=toks[k][0].replace(b,VOICED[b],1)
    return ''.join(t[0] for t in toks)
def ipa(ac):
    parts=ac.split(' ')
    return ' '.join(ipa_word(p) for p in parts)
# translit from IPA
def translit(ip):
    out=[];i=0;n=len(ip);stress_next=False
    vowels_count=len(re.findall(r'[aɑʌoɵeɛiɪuy]',ip))
    V={'ɑ':'a','a':'a','ʌ':'a','o':'o','ɵ':'o','e':'e','ɛ':'e','i':'i','ɪ':'i','u':'u','y':'y'}
    TIL={'a':'á','o':'ó','e':'é','i':'í','u':'ú','y':'ý'}
    prev=''
    toks=re.findall(r"tʃʲ|ts|ˈ|[a-zɑʌɵɛɪʃʒɕʑɡɭ]ʲ?|-| ",ip)
    res='';softpend=False;lastcons=''
    for k,t in enumerate(toks):
        if t=='ˈ': stress_next=True; continue
        if t in ('-',' '): res+=t; softpend=False; continue
        if t[0] in V:
            v=V[t[0]]
            if v=='y' and lastcons in ('ʒ','ʃ','ts'): v='i'
            if softpend:
                if v in ('a','o','u','y'): res+='i'; 
                elif v=='e': res+='i'
                if v=='y': v='i'; res=res[:-1] if res.endswith('i') else res
            if stress_next and vowels_count>1: v=TIL[v]
            stress_next=False; softpend=False
            res+=v; lastcons=''
            continue
        if t=='j':
            nxt=toks[k+1] if k+1<len(toks) else ''
            if nxt=='ˈ': nxt=toks[k+2] if k+2<len(toks) else ''
            res+='y' if nxt and nxt[0] in V else 'i'
            softpend=False; lastcons='j'; continue
        base=t.replace('ʲ','')
        soft=t.endswith('ʲ') and base not in ('tʃ',)
        m={'x':'j','ʃ':'sh','ʒ':'zh','ɕ':'sch','tʃ':'ch','ts':'ts','z':'z','ʑ':'z','ɡ':'g','ɭ':'l'}.get(base,base)
        if base=='ɡ':
            nxt=toks[k+1] if k+1<len(toks) else ''
            if nxt=='ˈ': nxt=toks[k+2] if k+2<len(toks) else ''
            if nxt and nxt[0] in ('e','ɛ','i','ɪ'): m='gu'
        res+=m; lastcons=base
        softpend = soft and base not in ('ɡ','k','x','ʃ','ʒ','ɕ','ts','tʃ')
    return res
