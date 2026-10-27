#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Abecé — conjugador del español: genera data/data-verbos-es.js.

Uso (desde la raíz del repo, con Node instalado):
    python3 herramientas/abece/conjugador-es.py
Lee los verbos de data/data-lexicon-es.js y escribe data/data-verbos-es.js.

Cómo funciona: reglas del español (terminaciones y cambios de ortografía:
c → qu, g → j, i → y…) y una tabla de modelos de irregularidad (pensar,
contar, pedir, sentir, conocer, construir, tener…). Los compuestos
(mantener, proponer, prever) se conjugan como su base, con la tilde
recalculada. Ortografía de 2010. Para sumar un verbo irregular nuevo,
agregarlo a su modelo en la sección «modelos» y volver a correr el script.
"""
import json, os, subprocess, sys

# ======================================================== reglas

import re

V = "aeiouáéíóúü"
FUERTES = "aeoáéó"
TILDE = {"a": "á", "e": "é", "i": "í", "o": "ó", "u": "ú"}
SIN = {v: k for k, v in TILDE.items()}

# ---------------------------------------------------------------- acentuación
def _vocales(w):
    """Posiciones de letras que son vocal (quita la u muda de qu/gu + e/i; y final = i)."""
    pos = []
    lw = w.lower()
    for i, ch in enumerate(lw):
        if ch in V:
            if ch == "u" and i > 0 and lw[i - 1] in "qg" and i + 1 < len(lw) and lw[i + 1] in "eéií":
                continue
            pos.append(i)
        elif ch == "y" and i == len(lw) - 1 and i > 0 and lw[i - 1] in V:
            pos.append(i)
    return pos


def nucleos(w):
    """Lista de núcleos: cada uno es una lista de posiciones de vocal."""
    lw = w.lower()
    ps = _vocales(w)
    grupos = []
    for p in ps:
        if grupos and grupos[-1][-1] == p - 1 or (grupos and grupos[-1][-1] == p - 2 and lw[p - 1] == "h" and False):
            grupos[-1].append(p)
        else:
            grupos.append([p])
    nuc = []
    for g in grupos:
        cur = [g[0]]
        for p in g[1:]:
            a, b = lw[cur[-1]], lw[p]
            def debil(c):
                return c in "iuüy"
            # dos débiles: siempre diptongo (ui, iu); débil tónica junto a fuerte: hiato
            hiato = (not debil(a) and not debil(b)) or (a in "íú" and not debil(b)) or (b in "íú" and not debil(a))
            if hiato:
                nuc.append(cur)
                cur = [p]
            else:
                cur.append(p)
        nuc.append(cur)
    return nuc


def tonica(w):
    """Índice del núcleo tónico de una palabra bien escrita."""
    n = nucleos(w)
    for i, nu in enumerate(n):
        if any(w[p] in "áéíóú" for p in nu):
            return i
    if len(n) <= 1:
        return 0
    if w[-1] in "aeiouns" or w[-1] in "y":
        return len(n) - 2
    return len(n) - 1


def escribir(w, ton):
    """Pone o quita la tilde según las reglas generales, con la tónica en el núcleo ton."""
    base = "".join(SIN.get(c, c) for c in w)
    n = nucleos(w)  # con las tildes originales: deciden los hiatos
    k = len(n)
    nu = n[ton]
    letras = base.lower()
    # hiato con vocal débil tónica junto a una fuerte: siempre tilde en la débil
    debil_tonica = None
    if len(nu) == 1 and letras[nu[0]] in "iu":
        p = nu[0]
        vecinas = [q for q in (p - 1, p + 1) if 0 <= q < len(letras)]
        if any(letras[q] in "aeo" for q in vecinas):
            debil_tonica = p
        # i/u tónica entre consonante h y fuerte (prohíbo, rehúso, búho)
        if p >= 2 and letras[p - 1] == "h" and letras[p - 2] in "aeo":
            debil_tonica = p
        if p + 2 < len(letras) and letras[p + 1] == "h" and letras[p + 2] in "aeo":
            debil_tonica = p
    if debil_tonica is not None:
        return base[:debil_tonica] + TILDE[base[debil_tonica]] + base[debil_tonica + 1:]
    desde_fin = k - 1 - ton
    final = letras[-1]
    if k == 1:
        lleva = False
    elif desde_fin == 0:
        lleva = final in "aeiouns"
    elif desde_fin == 1:
        lleva = final not in "aeiouns" and final != "y"
    else:
        lleva = True
    if not lleva:
        return base
    # vocal donde va la tilde: la fuerte del núcleo, o la segunda si son dos débiles
    fuertes = [p for p in nu if letras[p] in "aeo"]
    p = fuertes[0] if fuertes else nu[-1]
    if letras[p] == "y":
        p = nu[0]
    return base[:p] + TILDE[base[p]] + base[p + 1:]


def con_prefijo(pref, forma):
    """Compuesto: misma tónica que la forma base (mantén, propón, prevé)."""
    if forma is None:
        return None
    t = tonica(forma)
    t2 = t + len(nucleos(pref))
    return escribir(pref + forma, t2)


def monosilabo_2010(w):
    """Ortografía de 2010: sin tilde los monosílabos con diptongo (guio, crie, hui, rio)."""
    if w is None:
        return w
    n = nucleos(w)
    if len(n) == 1 and len(n[0]) > 1 and any(w[p] in "áéíóú" for p in n[0]):
        return "".join(SIN.get(c, c) for c in w)
    return w


# ---------------------------------------------------------------- terminaciones
END = {
    "ar": {
        "pres": ["o", "as", "a", "amos", "áis", "an"],
        "indef": ["é", "aste", "ó", "amos", "asteis", "aron"],
        "imperf": ["aba", "abas", "aba", "ábamos", "abais", "aban"],
        "subj": ["e", "es", "e", "emos", "éis", "en"],
    },
    "er": {
        "pres": ["o", "es", "e", "emos", "éis", "en"],
        "indef": ["í", "iste", "ió", "imos", "isteis", "ieron"],
        "imperf": ["ía", "ías", "ía", "íamos", "íais", "ían"],
        "subj": ["a", "as", "a", "amos", "áis", "an"],
    },
    "ir": {
        "pres": ["o", "es", "e", "imos", "ís", "en"],
        "indef": ["í", "iste", "ió", "imos", "isteis", "ieron"],
        "imperf": ["ía", "ías", "ía", "íamos", "íais", "ían"],
        "subj": ["a", "as", "a", "amos", "áis", "an"],
    },
}
FUT = ["é", "ás", "á", "emos", "éis", "án"]
COND = ["ía", "ías", "ía", "íamos", "íais", "ían"]
FUERTE = ["e", "iste", "o", "imos", "isteis", "ieron"]
TONICAS = (0, 1, 2, 5)  # personas con la raíz tónica en presente


def clase(inf):
    return inf[-2:].replace("í", "i")


def ortografia(cl, raiz, term):
    """Cambios ortográficos regulares al unir raíz y terminación."""
    t0 = term[:1]
    if cl == "ar" and t0 in "eé":
        if raiz.endswith("c"):
            return raiz[:-1] + "qu" + term
        if raiz.endswith("gu"):
            return raiz[:-2] + "gü" + term
        if raiz.endswith("g"):
            return raiz[:-1] + "gu" + term
        if raiz.endswith("z"):
            return raiz[:-1] + "c" + term
    if cl in ("er", "ir") and t0 in "aoáó":
        if raiz.endswith("gu"):
            return raiz[:-2] + "g" + term
        if raiz.endswith("qu"):
            return raiz[:-2] + "c" + term
        if raiz.endswith("g"):
            return raiz[:-1] + "j" + term
        if raiz.endswith("c") and len(raiz) > 1 and raiz[-2] not in V:
            return raiz[:-1] + "z" + term
    return raiz + term


def cambia_raiz(raiz, de, a):
    """Cambia la última aparición de la vocal de la raíz (pensar → piens)."""
    i = raiz.rfind(de)
    if i < 0:
        raise ValueError(f"sin vocal {de} en {raiz}")
    return raiz[:i] + a + raiz[i + len(de):]


def vocal_final(raiz):
    return raiz[-1:] in "aeo" or raiz.endswith("u") and not raiz.endswith(("gu", "qu"))


# ---------------------------------------------------------------- modelo general
def conjugar(inf, m=None):
    """m: dict del modelo. Claves:
      cambio: 'ie' | 'ue' | 'i' | 'hue' | 'jue' | 'ie-i' (adquirir i→ie)
      ir_cambio: (para -ir) vocal en 3.ª del indefinido, subj. 1p/2p y gerundio: 'i' | 'u'
      yo: forma de yo del presente (tengo, conozco, salgo); el subjuntivo sale de ella
      uir: True (construyo)
      acento: True (envío, actúo, reúno, prohíbo, aíslo)
      pret: raíz fuerte (tuv, pus, dij); fut: raíz de futuro (tendr)
      impTu, part, ger: formas propias
      solo: lista de tiempos que existen (defectivos)
    """
    m = m or {}
    cl = clase(inf)
    raiz = inf[:-2]
    E = END[cl]
    out = {}

    # ---- presente
    def raiz_tonica():
        r = raiz
        c = m.get("cambio")
        if c == "ie":
            r = cambia_raiz(r, "e", "ie")
        elif c == "ue":
            r = cambia_raiz(r, "o", "ue")
            r = r.replace("gue", "güe") if "gue" in r and r.find("gue") == r.rfind("ue") - 1 else r
        elif c == "jue":
            r = cambia_raiz(r, "u", "ue")
        elif c == "hue":
            r = "hue" + r[1:]  # oler → huel
        elif c == "i":
            r = cambia_raiz(r, "e", "i")
        elif c == "ie-i":
            r = cambia_raiz(r, "i", "ie")
        elif c == "ye":
            r = "y" + r[1:]
        if m.get("acento"):
            # la vocal débil de la raíz pasa a tónica con tilde (enví, actú, reún, prohíb, aísl, rehús)
            for i in range(len(r) - 1, -1, -1):
                if r[i] in "iu" and not (r[i] == "u" and i > 0 and r[i - 1] in "gq"):
                    r = r[:i] + TILDE[r[i]] + r[i + 1:]
                    break
        return r

    rt = raiz_tonica()
    pres = []
    for p in range(6):
        r = rt if p in TONICAS else raiz
        pres.append(ortografia(cl, r, E["pres"][p]))
    if m.get("uir"):
        rr = raiz  # constru
        pres = [rr + "yo", rr + "yes", rr + "ye", rr + "imos", rr + "ís", rr + "yen"]
    if m.get("yo"):
        pres[0] = m["yo"]
    out["pres"] = pres

    # ---- subjuntivo presente: raíz de la forma de yo
    yo_r = m.get("subjRaiz", pres[0][:-1])
    se = E["subj"]
    subj = []
    for p in range(6):
        cruda = False
        if p in TONICAS or m.get("yo") or m.get("uir") or m.get("subjRaiz"):
            r = yo_r
        else:
            cruda = True
            if m.get("cambio") == "i":
                r = cambia_raiz(raiz, "e", "i")
            elif m.get("ir_cambio"):
                r = cambia_raiz(raiz, "e" if m["ir_cambio"] == "i" else "o", m["ir_cambio"])
            else:
                r = raiz
        subj.append(ortografia(cl, r, se[p]) if (cl == "ar" or cruda) else r + se[p])
    out["subj"] = subj

    # ---- indefinido
    if m.get("pret"):
        pr = m["pret"]
        fin = list(FUERTE)
        if pr.endswith("j"):
            fin[5] = "eron"
        indef = [pr + t for t in fin]
    else:
        ie = E["indef"]
        indef = []
        r3 = raiz
        if cl == "ir":
            if m.get("cambio") == "i":
                r3 = cambia_raiz(raiz, "e", "i")
            elif m.get("ir_cambio"):
                r3 = cambia_raiz(raiz, "e" if m["ir_cambio"] == "i" else "o", m["ir_cambio"])
        for p in range(6):
            r = r3 if p in (2, 5) else raiz
            t = ie[p]
            if cl != "ar" and vocal_final(raiz) and not m.get("uir"):
                # leer, caer, oír: leíste, leyó
                if t.startswith("i") and p not in (2, 5):
                    t = "í" + t[1:]
            if cl != "ar" and (vocal_final(raiz) or m.get("uir")) and p in (2, 5):
                t = "y" + t[1:]  # ió → yó, ieron → yeron
            if cl != "ar" and (r.endswith("ñ") or r.endswith("ll")) and p in (2, 5):
                t = t[1:]
            indef.append(ortografia(cl, r, t) if cl == "ar" else r + t)
    out["indef"] = indef

    # ---- imperfecto
    imp = E["imperf"]
    out["imperf"] = [raiz + t for t in imp]

    # ---- futuro y condicional
    fr = m.get("fut", inf.replace("í", "i"))
    out["fut"] = [fr + t for t in FUT]
    out["cond"] = [fr + t for t in COND]

    # ---- subjuntivo imperfecto (-ra) desde la 3.ª plural del indefinido
    base = indef[5][:-3]  # hablaron → habla, tuvieron → tuvie, leyeron → leye
    sim = []
    for p, t in enumerate(["ra", "ras", "ra", "ramos", "rais", "ran"]):
        if p == 3:
            b = base[:-1] + TILDE.get(base[-1], base[-1])
            sim.append(b + t)
        else:
            sim.append(base + t)
    out["subjImp"] = sim

    # ---- gerundio
    if m.get("ger"):
        ger = m["ger"]
    else:
        if cl == "ar":
            ger = raiz + "ando"
        else:
            rg = raiz
            if cl == "ir":
                if m.get("cambio") == "i":
                    rg = cambia_raiz(raiz, "e", "i")
                elif m.get("ir_cambio"):
                    rg = cambia_raiz(raiz, "e" if m["ir_cambio"] == "i" else "o", m["ir_cambio"])
            if vocal_final(raiz) or m.get("uir"):
                ger = rg + "yendo"
            elif rg.endswith("ñ") or rg.endswith("ll"):
                ger = rg + "endo"
            else:
                ger = rg + "iendo"
    out["ger"] = ger

    # ---- participio
    if m.get("part"):
        part = m["part"]
    elif cl == "ar":
        part = raiz + "ado"
    else:
        part = raiz + ("ído" if vocal_final(raiz) and not m.get("uir") else "ido")
    out["part"] = part

    # ---- imperativo de tú
    out["impTu"] = m.get("impTu", pres[2])

    # ortografía de 2010 en monosílabos con diptongo
    for k in ("pres", "indef", "subj", "subjImp"):
        out[k] = [monosilabo_2010(f) for f in out[k]]
    out["impTu"] = monosilabo_2010(out["impTu"])
    return out

# ======================================================== modelos


P = lambda s: s.split()

# ------------------------------------------------- paradigmas completos (muy irregulares)
COMPLETOS = {
    "ser": dict(pres=P("soy eres es somos sois son"), indef=P("fui fuiste fue fuimos fuisteis fueron"),
                imperf=P("era eras era éramos erais eran"), subj=P("sea seas sea seamos seáis sean"),
                fut="ser", impTu="sé", ger="siendo", part="sido",
                irregular=["presente", "indefinido", "imperfecto", "subjuntivo", "imperativo"]),
    "ir": dict(pres=P("voy vas va vamos vais van"), indef=P("fui fuiste fue fuimos fuisteis fueron"),
               imperf=P("iba ibas iba íbamos ibais iban"), subj=P("vaya vayas vaya vayamos vayáis vayan"),
               fut="ir", impTu="ve", ger="yendo", part="ido",
               irregular=["presente", "indefinido", "imperfecto", "subjuntivo", "imperativo", "gerundio"]),
    "estar": dict(pres=P("estoy estás está estamos estáis están"), pret="estuv",
                  subj=P("esté estés esté estemos estéis estén"), impTu="está",
                  irregular=["presente", "pretérito fuerte", "subjuntivo"]),
    "haber": dict(pres=P("he has ha hemos habéis han"), pret="hub", fut="habr",
                  subj=P("haya hayas haya hayamos hayáis hayan"), impTu=None,
                  irregular=["presente", "pretérito fuerte", "futuro", "subjuntivo"]),
    "dar": dict(pres=P("doy das da damos dais dan"), indef=P("di diste dio dimos disteis dieron"),
                subj=P("dé des dé demos deis den"), impTu="da",
                irregular=["presente", "indefinido", "subjuntivo"]),
    "ver": dict(pres=P("veo ves ve vemos veis ven"), indef=P("vi viste vio vimos visteis vieron"),
                imperf=P("veía veías veía veíamos veíais veían"), subj=P("vea veas vea veamos veáis vean"),
                part="visto", impTu="ve", irregular=["presente", "imperfecto", "participio"]),
    "saber": dict(pres=P("sé sabes sabe sabemos sabéis saben"), pret="sup", fut="sabr",
                  subj=P("sepa sepas sepa sepamos sepáis sepan"), impTu="sabe",
                  irregular=["presente", "pretérito fuerte", "futuro", "subjuntivo"]),
    "caber": dict(yo="quepo", pret="cup", fut="cabr", impTu="cabe",
                  irregular=["presente", "pretérito fuerte", "futuro"]),
    "oír": dict(pres=P("oigo oyes oye oímos oís oyen"), subjRaiz="oig", impTu="oye",
                irregular=["-go", "y"]),
    "reír": dict(pres=P("río ríes ríe reímos reís ríen"), indef=P("reí reíste rio reímos reísteis rieron"),
                 subj=P("ría rías ría riamos riais rían"), ger="riendo", part="reído", impTu="ríe",
                 irregular=["e → i"]),
    "freír": dict(pres=P("frío fríes fríe freímos freís fríen"), indef=P("freí freíste frio freímos freísteis frieron"),
                  subj=P("fría frías fría friamos friais frían"), ger="friendo", part="frito", impTu="fríe",
                  part2="freído", irregular=["e → i", "participio"]),
    "sonreír": dict(pres=P("sonrío sonríes sonríe sonreímos sonreís sonríen"),
                    indef=P("sonreí sonreíste sonrió sonreímos sonreísteis sonrieron"),
                    subj=P("sonría sonrías sonría sonriamos sonriáis sonrían"), ger="sonriendo",
                    part="sonreído", impTu="sonríe", irregular=["e → i"]),
}

# ------------------------------------------------- modelos simples (parámetros de conj.py)
M = {}
def modelo(nombre, verbos, **kw):
    for v in verbos.split():
        M[v] = dict(kw, modelo=nombre)

# Raíz fuerte, futuro irregular, -go
M["tener"] = dict(modelo="tener", cambio="ie", yo="tengo", pret="tuv", fut="tendr", impTu="ten",
                  irregular=["-go", "e → ie", "pretérito fuerte", "futuro", "imperativo"])
M["venir"] = dict(modelo="venir", cambio="ie", yo="vengo", pret="vin", fut="vendr", impTu="ven", ger="viniendo",
                  irregular=["-go", "e → ie", "pretérito fuerte", "futuro", "imperativo"])
M["poner"] = dict(modelo="poner", yo="pongo", pret="pus", fut="pondr", impTu="pon", part="puesto",
                  irregular=["-go", "pretérito fuerte", "futuro", "imperativo", "participio"])
M["hacer"] = dict(modelo="hacer", yo="hago", indef=P("hice hiciste hizo hicimos hicisteis hicieron"),
                  fut="har", impTu="haz", part="hecho",
                  irregular=["-go", "pretérito fuerte", "futuro", "imperativo", "participio"])
M["decir"] = dict(modelo="decir", cambio="i", yo="digo", pret="dij", fut="dir", impTu="di", part="dicho", ger="diciendo",
                  irregular=["-go", "e → i", "pretérito fuerte", "futuro", "imperativo", "participio"])
M["traer"] = dict(modelo="traer", yo="traigo", pret="traj", irregular=["-go", "pretérito fuerte"])
M["caer"] = dict(modelo="caer", yo="caigo", irregular=["-go"])
M["salir"] = dict(modelo="salir", yo="salgo", fut="saldr", impTu="sal", irregular=["-go", "futuro", "imperativo"])
M["valer"] = dict(modelo="valer", yo="valgo", fut="valdr", irregular=["-go", "futuro"])
M["querer"] = dict(modelo="querer", cambio="ie", pret="quis", fut="querr", irregular=["e → ie", "pretérito fuerte", "futuro"])
M["poder"] = dict(modelo="poder", cambio="ue", pret="pud", fut="podr", ger="pudiendo", impTu=None,
                  irregular=["o → ue", "pretérito fuerte", "futuro"])
M["andar"] = dict(modelo="andar", pret="anduv", irregular=["pretérito fuerte"])
M["asir"] = dict(modelo="asir", yo="asgo", irregular=["-go"])
M["yacer"] = dict(modelo="yacer", yo="yazco", irregular=["-zco"])
M["satisfacer"] = dict(modelo="hacer", yo="satisfago",
                       indef=P("satisfice satisficiste satisfizo satisficimos satisficisteis satisficieron"),
                       fut="satisfar", impTu="satisfaz", part="satisfecho",
                       irregular=["-go", "pretérito fuerte", "futuro", "imperativo", "participio"])
M["oler"] = dict(modelo="oler", cambio="hue", irregular=["o → hue"])
M["jugar"] = dict(modelo="jugar", cambio="jue", irregular=["u → ue"])
M["adquirir"] = dict(modelo="adquirir", cambio="ie-i", irregular=["i → ie"])
M["pudrir"] = dict(modelo="pudrir", part="podrido", irregular=["participio"])
M["soler"] = dict(modelo="soler", cambio="ue", irregular=["o → ue"])
M["llover"] = dict(modelo="llover", cambio="ue", irregular=["o → ue"])
M["dormir"] = dict(modelo="dormir", cambio="ue", ir_cambio="u", irregular=["o → ue", "o → u"])
M["morir"] = dict(modelo="dormir", cambio="ue", ir_cambio="u", part="muerto", irregular=["o → ue", "o → u", "participio"])

# -ducir: -zco y pretérito en -uje
for v in "conducir producir traducir reducir introducir deducir seducir".split():
    M[v] = dict(modelo="conducir", yo=v[:-3] + "zco", pret=v[:-3] + "j", irregular=["-zco", "pretérito fuerte"])

# -zco (verbos en -cer/-cir tras vocal)
modelo("conocer", "conocer parecer desaparecer aparecer merecer nacer ofrecer crecer agradecer pertenecer "
       "permanecer reconocer establecer obedecer fallecer enloquecer envejecer apetecer oscurecer florecer "
       "desvanecer carecer desconocer amanecer complacer", irregular=["-zco"])
for v in list(M):
    if M[v].get("modelo") == "conocer":
        M[v]["yo"] = v[:-3] + "zco"
M["lucir"] = dict(modelo="lucir", yo="luzco", irregular=["-zco"])

# e → ie (-ar, -er)
modelo("pensar", "pensar empezar comenzar cerrar despertar sentar negar enterrar confesar encerrar atravesar "
       "recomendar calentar temblar gobernar apretar reventar quebrar tropezar tentar acertar denegar",
       cambio="ie", irregular=["e → ie"])
modelo("entender", "entender perder defender encender tender extender ascender descender atender",
       cambio="ie", irregular=["e → ie"])
# e → ie / i (-ir)
modelo("sentir", "sentir mentir preferir advertir convertir divertir referir sugerir herir requerir "
       "interferir transferir hervir presentir consentir invertir concernir arrepentir",
       cambio="ie", ir_cambio="i", irregular=["e → ie", "e → i"])
# o → ue (-ar, -er)
modelo("contar", "contar recordar encontrar mostrar demostrar probar comprobar aprobar costar colgar acostar "
       "acordar concordar rodar soltar sonar soñar volar renovar apostar rogar almorzar forzar esforzar colar "
       "avergonzar", cambio="ue", irregular=["o → ue"])
modelo("volver", "mover remover conmover promover morder doler", cambio="ue", irregular=["o → ue"])
for v, p in {"volver": "vuelto", "devolver": "devuelto", "envolver": "envuelto", "revolver": "revuelto",
             "resolver": "resuelto"}.items():
    M[v] = dict(modelo="volver", cambio="ue", part=p, irregular=["o → ue", "participio"])
# e → i (-ir)
modelo("pedir", "pedir servir repetir seguir conseguir perseguir vestir elegir corregir medir impedir "
       "despedir competir rendir derretir concebir", cambio="i", irregular=["e → i"])
# -uir
modelo("construir", "construir destruir huir incluir contribuir concluir sustituir reconstruir disminuir "
       "distribuir influir fluir", uir=True, irregular=["y"])
# acento en la raíz (envío, actúo, reúno, prohíbo, aíslo, rehúso)
modelo("enviar", "enviar desafiar confiar guiar criar fiar liar espiar vaciar enfriar desviar ampliar variar fotografiar",
       acento=True, irregular=["tilde"])
modelo("actuar", "actuar continuar graduar evaluar insinuar", acento=True, irregular=["tilde"])
M["reunir"] = dict(modelo="reunir", acento=True, irregular=["tilde"])
M["prohibir"] = dict(modelo="prohibir", acento=True, irregular=["tilde"])
M["aislar"] = dict(modelo="aislar", acento=True, irregular=["tilde"])
M["rehusar"] = dict(modelo="rehusar", acento=True, irregular=["tilde"])

# participios irregulares en verbos por lo demás regulares
for v, p in {"abrir": "abierto", "escribir": "escrito", "describir": "descrito", "inscribir": "inscrito",
             "cubrir": "cubierto", "descubrir": "descubierto", "encubrir": "encubierto", "romper": "roto",
             "imprimir": "impreso", "proveer": "provisto"}.items():
    M[v] = dict(modelo=v, part=p, irregular=["participio"])
M["imprimir"]["part2"] = "imprimido"
M["proveer"]["part2"] = "proveído"

# bendecir, maldecir: como decir, pero futuro, imperativo y participio regulares
for v in ("bendecir", "maldecir"):
    M[v] = dict(modelo="bendecir", cambio="i", yo=v[:-5] + "digo", pret=v[:-5] + "dij",
                part=v[:-2] + "ido", ger=v[:-5] + "diciendo", impTu=v[:-5] + "dice",
                irregular=["-go", "e → i", "pretérito fuerte"])
# predecir: como decir; futuro predeciré (y prediré), imperativo predice
M["predecir"] = dict(modelo="decir", cambio="i", yo="predigo", pret="predij", part="predicho",
                     ger="prediciendo", impTu="predice", fut="predecir",
                     irregular=["-go", "e → i", "pretérito fuerte", "participio"])

# Compuestos: se conjugan como la base con el prefijo
COMPUESTOS = {
    "mantener": ("man", "tener"), "detener": ("de", "tener"), "obtener": ("ob", "tener"), "retener": ("re", "tener"),
    "sostener": ("sos", "tener"), "contener": ("con", "tener"), "entretener": ("entre", "tener"),
    "suponer": ("su", "poner"), "proponer": ("pro", "poner"), "exponer": ("ex", "poner"), "disponer": ("dis", "poner"),
    "componer": ("com", "poner"), "oponer": ("o", "poner"), "imponer": ("im", "poner"), "interponer": ("inter", "poner"),
    "posponer": ("pos", "poner"),
    "deshacer": ("des", "hacer"),
    "atraer": ("a", "traer"), "distraer": ("dis", "traer"), "extraer": ("ex", "traer"),
    "convenir": ("con", "venir"), "intervenir": ("inter", "venir"), "provenir": ("pro", "venir"), "prevenir": ("pre", "venir"),
    "prever": ("pre", "ver"),
    "sobrevivir": None,
}


def _desde_completo(inf, d):
    """Paradigma de un verbo de COMPLETOS: lo que falta sale de conj.py."""
    base = conjugar(inf, {k: d[k] for k in ("pret", "fut", "yo", "subjRaiz", "ger", "part") if k in d})
    out = dict(base)
    for k in ("pres", "indef", "imperf", "subj"):
        if k in d:
            out[k] = list(d[k])
    if "indef" in d:
        b = d["indef"][5][:-3]
        T = {"a": "á", "e": "é", "i": "í", "o": "ó", "u": "ú"}
        out["subjImp"] = [b + "ra", b + "ras", b + "ra", b[:-1] + T.get(b[-1], b[-1]) + "ramos", b + "rais", b + "ran"]
    if "fut" in d:
        out["fut"] = [d["fut"] + t for t in ("é", "ás", "á", "emos", "éis", "án")]
        out["cond"] = [d["fut"] + t for t in ("ía", "ías", "ía", "íamos", "íais", "ían")]
    for k in ("ger", "part"):
        if k in d:
            out[k] = d[k]
    out["impTu"] = d.get("impTu", out["pres"][2])
    return out


def paradigma(inf):
    """Devuelve (formas, info) para el infinitivo (sin «se»)."""
    if inf in COMPLETOS:
        d = COMPLETOS[inf]
        f = _desde_completo(inf, d)
        return f, dict(modelo=inf, irregular=d["irregular"], part2=d.get("part2"))
    comp = COMPUESTOS.get(inf)
    if comp:
        pref, base = comp
        fb, ib = paradigma(base)
        f = {}
        for k, val in fb.items():
            if isinstance(val, list):
                f[k] = [con_prefijo(pref, x) for x in val]
            else:
                f[k] = con_prefijo(pref, val) if val else val
        # monosílabos de la base (di, vio) en el compuesto: prever → preví, previó
        info = dict(modelo=base, irregular=list(ib["irregular"]), part2=None)
        return f, info
    d = M.get(inf, {})
    kw = {k: v for k, v in d.items() if k not in ("modelo", "irregular", "indef", "part2")}
    f = conjugar(inf, kw)
    if "indef" in d:
        f["indef"] = list(d["indef"])
        b = d["indef"][5][:-3]
        T = {"a": "á", "e": "é", "i": "í", "o": "ó", "u": "ú"}
        f["subjImp"] = [b + "ra", b + "ras", b + "ra", b[:-1] + T.get(b[-1], b[-1]) + "ramos", b + "rais", b + "ran"]
    info = dict(modelo=d.get("modelo", {"ar": "hablar", "er": "comer", "ir": "vivir"}[clase(inf)]),
                irregular=list(d.get("irregular", [])), part2=d.get("part2"))
    return f, info

# ======================================================== armado

RAIZ = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".."))

def leer_verbos():
    js = r"""
const vm=require("vm"),fs=require("fs");const ctx={};ctx.window=ctx;vm.createContext(ctx);
vm.runInContext(fs.readFileSync(process.argv[1],"utf8").replace(/^const /gm,"var "),ctx);
console.log(JSON.stringify(ctx.LEXICON_ES.filter(e=>e.posNormalized==="verbo").map(e=>({id:e.id,es:e.es}))));
"""
    r = subprocess.run(["node", "-e", js, os.path.join(RAIZ, "data", "data-lexicon-es.js")],
                       capture_output=True, text=True, check=True)
    return json.loads(r.stdout)

vs = leer_verbos()
por_es = {v["es"]: v for v in vs}
TS = ["pres", "indef", "imperf", "fut", "cond", "subj", "subjImp"]

# Marcas ortográficas (regla, no irregularidad): se infieren del infinitivo
def marca_ortografia(inf):
    r = inf[:-2]
    cl = clase(inf)
    if cl == "ar":
        if r.endswith("gu"): return "gu → gü"
        if r.endswith("c"): return "c → qu"
        if r.endswith("g"): return "g → gu"
        if r.endswith("z"): return "z → c"
    else:
        if r.endswith("gu"): return "gu → g"
        if r.endswith("g"): return "g → j"
        if r.endswith("c") and len(r) > 1 and r[-2] not in "aeiouáéíóú": return "c → z"
        if r[-1:] in "aeo" and inf not in ("ser", "ver", "prever", "reír", "sonreír", "freír", "oír"): return "i → y"
    return None

# Notas (ruso, borrador para Iván)
NOTAS = {
    "haber": "Безличная форма настоящего времени — hay: «Hay un banco aquí». Как вспомогательный: he hablado.",
    "soler": "Неполный глагол: настоящее, имперфект и сложные времена. Будущего, условного и повелительного нет.",
    "llover": "Безличный: только 3-е лицо (llueve, llovió). Множественное — в переносном смысле: «Llueven críticas».",
    "concernir": "Только 3-е лицо: «Eso no te concierne».",
    "amanecer": "Обычно безличный: amanece — светает. В личных формах — «проснуться каким-то»: «Amanecí cansado».",
    "yacer": "В 1-м лице настоящего также yazgo и yago.",
    "evacuar": "Допустимы обе формы: evacuo и evacúo.",
    "imprimir": "Два причастия, оба правильные: impreso и imprimido.",
    "freír": "Два причастия, оба правильные: frito и freído.",
    "proveer": "Два причастия, оба правильные: provisto и proveído.",
    "predecir": "Будущее: predeciré (также prediré).",
    "satisfacer": "Повелительное: satisfaz или satisface.",
    "valer": "Повелительное: vale (редко val).",
}
NOTA_ES = {  # notas de entradas pronominales / locuciones
    "irse": "Повелительное для vosotros: idos (в разговорной речи — iros).",
    "hay que": "Безличное выражение: только hay que, hubo que, había que, habrá que, habría que, haya que, hubiera que.",
    "hacer falta": "Обычно в 3-м лице: «Hace falta pan», «Me hacen falta dos sillas».",
}

# Defectivos: qué se anula
def defectivo(inf, f):
    if inf == "soler":
        f["fut"] = [None] * 6; f["cond"] = [None] * 6; f["impTu"] = None
    if inf == "llover":
        for t in TS:
            f[t] = [None, None, f[t][2], None, None, f[t][5]]
        f["impTu"] = None
    if inf == "concernir":
        for t in TS:
            f[t] = [None, None, f[t][2], None, None, f[t][5]]
        f["impTu"] = None
    return f

def entrada_formas(inf, info, f):
    f = defectivo(inf, dict(f))
    e = {"grupo": "-" + clase(inf), "modelo": info["modelo"]}
    irr = list(info["irregular"])
    o = marca_ortografia(inf)
    if o and o not in irr:
        irr.append(o)
    e["irregular"] = irr
    for t in TS:
        e[t] = f[t]
    e["impTu"] = f["impTu"]
    e["ger"] = f["ger"]
    e["part"] = f["part"]
    if info.get("part2"):
        e["part2"] = info["part2"]
    if inf in NOTAS:
        e["nota"] = NOTAS[inf]
    return e

def armar():
    out = {}
    cache = {}
    for v in sorted(vs, key=lambda x: x["id"]):
        es = v["es"]
        e = {"es": es}
        if " " in es:
            # locución: verbo principal + resto
            partes = es.split(" ")
            cab, resto = partes[0], " ".join(partes[1:])
            if es == "hay que":
                cab, resto = "haber", "que"
            if es == "darse cuenta":
                cab, resto = "darse", "cuenta"
            e["locucion"] = {"verbo": por_es[cab]["id"], "resto": resto}
            if es == "hay que":
                e["locucion"]["impersonal"] = True
            if es in ("hay que", "tener que", "hacer falta", "tener razón"):
                e["locucion"]["sinImperativo"] = True  # «*ten que», «*haz falta»: no se usan
        elif es.endswith("se") and es != "ser":
            base = es[:-2]
            if base in por_es:
                e["base"] = por_es[base]["id"]
            else:
                if base not in cache:
                    cache[base] = paradigma(base)
                f, info = cache[base]
                e.update(entrada_formas(base, info, f))
                e["pronominal"] = True
        else:
            if es not in cache:
                cache[es] = paradigma(es)
            f, info = cache[es]
            e.update(entrada_formas(es, info, f))
        if es in NOTA_ES:
            e["nota"] = NOTA_ES[es]
        out[v["id"]] = e
    return out


def js(v):
    return json.dumps(v, ensure_ascii=False, separators=(',',':'))

CAB='''/* ============================================================
   ABECÉ — Conjugaciones de los verbos del léxico español (VERBOS_ES)
   ------------------------------------------------------------
   Una entrada por cada verbo de data-lexicon-es.js ({N}), con el mismo
   ID (ESP-xxxxx) y «es» como ancla de control. Generado el 27/10/2026
   con herramientas/abece/conjugador-es.py (reglas del español y modelos
   de irregularidad); para regenerarlo, se corre ese script.

   Campos de una entrada con formas:
   - grupo: -ar, -er o -ir. modelo: el verbo modelo (pensar, conocer…;
     los regulares: hablar, comer, vivir).
   - irregular: marcas para resaltar y agrupar («e → ie», «-zco», «-go»,
     «pretérito fuerte», «futuro», «participio», «tilde»…) y los cambios
     de ortografía («c → qu», «g → j», «i → y»…), que son regla, no
     irregularidad.
   - 6 personas en orden fijo: yo · tú · él/ella/usted · nosotros ·
     vosotros · ellos/ellas/ustedes. null = la forma no existe (defectivos).
   - pres, indef (pretérito indefinido), imperf, fut, cond, subj
     (presente de subjuntivo), subjImp (imperfecto de subjuntivo en -ra).
   - impTu (imperativo afirmativo de tú), ger, part; part2 cuando hay dos
     participios válidos (frito / freído); nota (en ruso, borrador para Iván).

   Lo que NO se guarda, porque sale de una regla sin excepciones (lo arma
   js/verbos-es.js): los tiempos compuestos (haber + participio), el
   subjuntivo en -se (de la forma en -ra), el imperativo de usted, vosotros
   y ustedes y todo el negativo, y las formas pronominales (me levanto,
   levántate, idos).

   Entradas sin formas propias:
   - base: el verbo pronominal cuya forma sin «se» está en el léxico
     (irse → ir). Los que solo existen con «se» (arrepentirse, quejarse…)
     guardan las formas de su raíz con pronominal: true.
   - locucion: { verbo, resto } (tener que, echar de menos, darse cuenta);
     hay que lleva impersonal: true; sinImperativo: true cuando la locución
     no tiene imperativo (tener que, hacer falta, tener razón, hay que).

   Ortografía: la de 2010 (RAE): guio, crie, fio, hui, rio, frio, liais,
   sin tilde; prevén, mantén, propón con tilde.

   Verificación (27/10/2026): las formas se cruzaron con dos fuentes
   independientes. Fred Jehle, Conjugated Spanish Verb Database (492
   verbos en común; CC BY-NC-SA 3.0) y verbecc (990 verbos; LGPL), y con
   las frecuencias de wordfreq (CC BY-SA 4.0) como control de uso real.
   No se copió ninguna forma de ellas. Diferencias revisadas a mano:
   - Ortografía anterior a 2010 en las fuentes (guió, crié, huí, rió,
     fiáis): aquí, la de 2010.
   - Participios adjetivos que las fuentes dan como participio (atento,
     absorto, bendito, maldito, electo, preso, suelto…): aquí, el participio
     verbal (atendido, absorbido, bendecido…). Solo imprimir, freír y
     proveer tienen dos participios válidos (part2).
   - Erratas o modelos viejos de una fuente: invirtéramos, tropezéis,
     afierro, aterro (‘aterrar’ = asustar, regular), fuello (follar,
     regular), complugo (complacer va como conocer), esparco, yago (yacer:
     yazco; yazgo y yago en la nota), «conten» sin tilde.
   - evacuar: las dos formas son válidas (evacuo / evacúo); se guarda
     evacuo, como Jehle, y la otra va en la nota.
   - haber: «ha» como auxiliar; la impersonal «hay», en la nota.
   - Corregido en el generador: desafiar (desafío), que verbecc marcó.
   Formas que wordfreq no registra: solo formas raras pero correctas
   (concordé, encubro, yazco, solió).
   ============================================================ */
const VERBOS_ES = {
'''

def escribir_js(d, salida):
    ids = sorted(d)
    with open(salida, 'w') as f:
        f.write(CAB.replace('{N}', str(len(d))))
        for n, k in enumerate(ids):
            e = d[k]
            partes = [f'es:{js(e["es"])}']
            for c in ('base','locucion','pronominal','grupo','modelo','irregular','pres','indef','imperf','fut','cond','subj','subjImp','impTu','ger','part','part2','nota'):
                if c in e: partes.append(f'{c}:{js(e[c])}')
            f.write(f' "{k}": {{ '+', '.join(partes)+' }'+(',' if n < len(ids)-1 else '')+'\n')
        f.write('''};

/* Devuelve la entrada de un verbo por ID, o null. */
function verboEsById(id) {
  return (id && VERBOS_ES[id]) || null;
}

/* Entrada con formas: la propia o la de su base (irse → ir). */
function verboEsFormas(id) {
  var e = verboEsById(id);
  if (!e) return null;
  if (e.base) return VERBOS_ES[e.base] || null;
  if (e.locucion) return verboEsFormas(e.locucion.verbo);
  return e;
}

window.verboEsById = verboEsById;
window.verboEsFormas = verboEsFormas;
''')

if __name__ == "__main__":
    datos = armar()
    escribir_js(datos, os.path.join(RAIZ, "data", "data-verbos-es.js"))
    print("data/data-verbos-es.js:", len(datos), "verbos")
