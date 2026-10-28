/* ============================================================
   UNIDAD-UI.JS — Piezas de pantalla compartidas por las unidades
   ------------------------------------------------------------
   Versión 06/10/2026 (teoría ampliada); antes, 26/09/2026. Todo lo que se ve igual en cada azbuka-N.html:
   estilos, secciones de teoría, vocabulario, frases, diálogos (con
   grabadora), tarjetas de palabras, mapa para explorar, proyecto de
   escritura y la portada de la unidad. Así cada unidad es casi solo
   contenido (data-unidad-N.js) y un cambio de diseño se hace una vez.
   La práctica y la evaluación viven aparte, en unidad.js.

   Cargar después de burbuja.js y antes de unidad.js:
     <script src="unidad-ui.js"></script>

   Componentes (window.*):
     AzEstilosUnidad({ c, green })            estilos de todas las unidades
     AzSecciones({ secciones })              teoría: título, texto, destacado, truco, ojo y, desde el
                                             06/10/2026, las piezas de la teoría ampliada (ver abajo)
     azRegla(id) → { seccion, modulo, unidad }   busca una sección de teoría por su id en las unidades cargadas
     AzHojaRegla({ id, c, onClose, volver }) la sección en una hoja («Repasar la regla», desde la práctica
                                             o desde «Qué repasar» del examen; `volver`: texto del botón)
     AzVocabulario({ ids, c })               palabras del léxico con ▶
     AzFrasesLista({ ids, c })               frases de data-frases.js con ▶
     AzListaDialogos({ ids, onAbrir })       tarjetas de diálogos
     AzHojaDialogo({ d, c, onClose, grabar, objetivo })
     AzGrabadora({ texto })                  grabarse y comparar con el modelo
     AzTarjetasPalabras({ ids, titulo, c, green, onClose, detalle? })   detalle(e): texto extra al dorso
     AzMapaExplorar({ c })                   mapa de data-mapa.js
     AzProyecto({ mod, c, green, clave, fuente })   escribir con requisitos
     AzTaller({ tarea, c, green, clave, fuente, aviso })   taller de escritura en 4 pasos (U13)
     AzPortadaUnidad({ u, c, green, progreso, visto, onPracticar, onAbrir, examen })

   Abecé (28/10/2026): las mismas piezas leen la dirección. Ahí la lengua
   que se aprende es el español y la del alumno, el ruso: los textos de la
   pantalla van en ruso (TX_RU, borrador para Iván), la voz es la española
   y las palabras se buscan en el léxico español (lexEsById, formasEsIndice).
   Los datos de Abecé invierten los campos: { es: lo que se aprende, ru: la
   traducción } en ejemplos, frases, diálogos (lineas: { p, es, ru, tr, lex })
   y tablas de grupos. Las unidades se llaman UNIDAD_ES_1…13 (azRegla las
   busca ahí), con tituloEs en lugar de tituloRu. Los mapas y el taller de
   escritura todavía son solo de Azbuka.
   ============================================================ */
(function () {
  const h = React.createElement;
  const { useState, useEffect, useRef } = htmPreact;
  const YELLOW = "#C9B369";
  /* Abecé (28/10/2026) */
  const ES = typeof AZ_DIRECCION !== "undefined" && AZ_DIRECCION.id === "abece";
  const LL = ES ? "es" : "ru";
  const esRu = t => /[А-Яа-яЁё]/.test(String(t || ""));
  const TX_RU = {
    "Antes de leer: ¿te animas?": "Прежде чем читать: попробуешь?", "Chequeo rápido": "Быстрая проверка", "Más a fondo": "Подробнее",
    "En español: ": "По-русски: ", "Truco: ": "Совет: ", "Ojo: ": "Внимание: ", "Cerrar": "Закрыть", "Volver al ejercicio": "Вернуться к упражнению",
    "Escuchar": "Слушать", "Toca cada parte para ver qué hace en la frase.": "Нажми на каждую часть, чтобы увидеть, что она делает во фразе.",
    "▶ Modelo": "▶ Образец", "● Grabar de nuevo": "● Записать ещё раз", "● Grabarme": "● Записать себя", "■ Parar": "■ Стоп", "▶ Mi voz": "▶ Мой голос",
    "Sin permiso para el micrófono.": "Нет доступа к микрофону.", "Diálogo": "Диалог", "Transliteración": "Произношение", "Traducción": "Перевод",
    "Escucha cada línea, grábate diciéndola y compara.": "Послушай каждую реплику, запиши себя и сравни.",
    "Para practicar la lectura, apaga la transliteración y la traducción.": "Чтобы потренировать чтение, выключи произношение и перевод.",
    "Guardar en el cuaderno": "Сохранить в тетрадь", "▶ Escuchar el diálogo": "▶ Слушать диалог", "▶ Escuchar mis grabaciones": "▶ Слушать мои записи",
    "Toca para ver qué significa": "Нажми, чтобы увидеть значение", "‹ Anterior": "‹ Назад", "Mezclar": "Перемешать", "Siguiente ›": "Дальше ›",
    "Volver a estudiar": "Ещё изучаю", "Ya la sé": "Уже знаю", "dominada": "выучено", "aprendiendo": "изучаю",
    "¡Están todos los puntos! Léelo en voz alta y guárdalo en el cuaderno.": "Все пункты на месте! Прочитай текст вслух и сохрани его в тетрадь.",
    "Revisar mi texto": "Проверить мой текст", "✓ No encontré errores y están todos los puntos.": "✓ Ошибок не нашлось, и все пункты на месте.",
    "Falta: ": "Не хватает: ", "La revisión encuentra palabras mal escritas y errores típicos, pero no corrige toda la gramática.": "Проверка находит слова с ошибками и типичные ошибки, но не исправляет всю грамматику.",
    "▶ Escucharlo": "▶ Послушать", "＋ Cuaderno": "＋ Тетрадь", "Tiempo estimado: ": "Примерное время: ",
    "Se marcan solas cuando las aciertas en ejercicios distintos, en días distintos. También puedes marcarlas a mano en las tarjetas.": "Отмечаются сами, когда ты отвечаешь верно в разных упражнениях и в разные дни. Их можно отметить и вручную в карточках.",
    "Practicar la unidad": "Практиковать урок", "Módulos": "Модули", "Pronto": "Скоро", " · aprobada": " · сдано", "Anterior": "Назад", "Siguiente": "Дальше",
    "Toca una palabra para escuchar cómo suena.": "Нажми на слово, чтобы услышать, как оно звучит.",
    "Léelo en voz alta": "Прочитай вслух", "Escucha el modelo, grábate y compara.": "Послушай образец, запиши себя и сравни."
  };
  const T = s => ES && TX_RU[s] != null ? TX_RU[s] : s;
  const hablar = (t, quien) => { if (ES) { if (typeof azHablarEs === "function") azHablarEs(t, null, quien); } else azHablarRu(t, quien); };
  const hablarSec = (items, a, b) => ES ? azHablarSecuenciaEs(items, a, b) : azHablarSecuencia(items, a, b);
  /* La palabra del léxico de cada curso: { id, meta (lo que se aprende), tr, trad (la traducción) } */
  function lexDe(id) {
    if (ES) {
      const e = typeof lexEsById === "function" ? lexEsById(id) : null;
      if (!e) return null;
      return { e, id: e.id, meta: e.es, voz: e.es, fem: e.femenino && e.femenino.es, tr: e.translit, trad: (e.senses || []).slice(0, 2).map(x => x.ru).join("; "), propio: e.propio };
    }
    const e = typeof lexComerById === "function" ? lexComerById(id) : null;
    if (!e) return null;
    return { e, id: e.id, meta: e.acento || e.ru, voz: e.acento || e.ru, tr: e.translit, trad: e.senses.slice(0, 2).map(x => typeof azEsNeutro === "function" ? azEsNeutro(x.es) : x.es).join("; "), propio: e.propio };
  }
  const PJ = () => ES ? (typeof DLG_PERSONAJES_ES !== "undefined" ? DLG_PERSONAJES_ES : {}) : (typeof DLG_PERSONAJES !== "undefined" ? DLG_PERSONAJES : {});
  const personaje = p => { const x = PJ()[p]; return x ? (ES ? Object.assign({}, x, { ru: x.es }) : x) : { ru: p }; };   /* .ru: el nombre en la lengua que se aprende */
  const dlgById = id => ES ? (typeof dialogoEsById === "function" ? dialogoEsById(id) : null) : dialogoById(id);
  const frById = id => ES ? (typeof fraseEsById === "function" ? fraseEsById(id) : null) : fraseById(id);
  /* Palabras de un texto en la lengua que se aprende */
  const RX_MIN = ES ? "[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]" : "[А-Яа-яЁё\\u0301]";
  const chipSt = (c, on) => on ? { background: c.gold + "22", border: `1px solid ${c.gold}`, color: c.gold } : { background: c.bg2, border: `1px solid ${c.border}`, color: c.textMuted };

  function AzEstilosUnidad({ c, green }) {
    return h("style", null, `
    .u-kicker{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${c.gold};margin-bottom:6px;}
    .u-title{font-size:26px;font-weight:800;color:${c.text};line-height:1.15;}
    .u-ru{font-size:15px;color:${c.textSub};font-style:italic;margin-top:4px;}
    .u-text{font-size:15px;line-height:1.6;color:${c.textSub};}
    .u-sec{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${c.gold};margin:24px 0 10px;}
    .u-dest{margin-top:12px;background:${c.gold}14;border:1px solid ${c.gold}66;border-radius:10px;padding:12px 14px;font-size:14.5px;line-height:1.5;color:${c.text};font-weight:600;}
    .u-truco{margin-top:10px;font-size:14px;line-height:1.5;color:${c.textSub};padding-left:10px;border-left:2px solid ${c.gold}66;}
    .u-truco b{color:${c.gold};font-weight:700;}
    .u-card{background:${c.card};border:1px solid ${c.border};border-radius:14px;}
    .pbar-track{width:100%;height:6px;border-radius:3px;overflow:hidden;background:${c.bg3};margin-top:10px;}
    .pbar-fill{height:100%;border-radius:3px;background:${green};transition:width .3s ease;}
    .mod{display:flex;gap:14px;align-items:flex-start;padding:14px 16px;margin-bottom:10px;cursor:pointer;text-decoration:none;color:${c.text};}
    .mod.off{opacity:.45;cursor:default;}
    .mod-n{font-size:22px;font-weight:800;color:${c.border};min-width:30px;line-height:1.1;}
    .mod-t{font-size:16px;font-weight:700;}
    .mod-d{font-size:13px;color:${c.textMuted};margin-top:2px;}
    .mod-l{display:flex;flex-wrap:wrap;gap:4px;margin-top:8px;}
    .mod-l span{font-size:13px;font-weight:700;min-width:24px;text-align:center;padding:2px 5px;border-radius:6px;background:${c.bg2};border:1px solid ${c.border};color:${c.textSub};}
    .tag-pronto{font-size:11px;font-weight:600;color:${c.textMuted};background:${c.bg2};border:1px solid ${c.border};border-radius:8px;padding:2px 8px;margin-left:8px;vertical-align:middle;}
    .lgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;}
    @media (min-width:600px){.lgrid{grid-template-columns:repeat(5,1fr);}}
    .lcard{position:relative;border-radius:14px;padding:14px 6px;text-align:center;cursor:pointer;background:${c.card};}
    .lcard:active{transform:scale(.97);}
    .toggle-row{display:flex;gap:8px;margin:16px 0 12px;}
    .pair-btn{padding:7px 11px;border-radius:10px;font-size:12.5px;font-weight:600;cursor:pointer;font-family:inherit;transition:.18s;}
    .ubtn{display:flex;align-items:center;justify-content:center;gap:6px;width:100%;padding:13px 16px;border-radius:10px;border:1px solid ${c.gold};background:${c.gold};color:${c.bg};font-size:14.5px;font-weight:700;cursor:pointer;font-family:inherit;margin-top:18px;}
    .ubtn.sec{background:${c.bg3};border-color:${c.border};color:${c.text};}
    .sheet{position:fixed;inset:0;z-index:300;background:${c.bg};box-shadow:0 0 0 100vmax ${c.bg};color:${c.text};font-family:'Noto Sans',sans-serif;overflow-y:auto;-webkit-overflow-scrolling:touch;animation:fadeIn .25s ease;}
    .sheet-in{max-width:960px;margin:0 auto;padding:var(--az-top,6vh) 3vw calc(4vh + var(--az-bottom,0px));}
    .sheet-x{position:fixed;top:var(--az-top,6vh);right:3vw;width:36px;height:36px;border-radius:10px;background:${c.bg3};border:1px solid ${c.border};color:${c.text};font-size:15px;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;z-index:301;font-family:inherit;}
    .glyph{font-size:64px;font-weight:800;color:${c.gold};line-height:1;}
    .cursiva{font-family:'CyrCursive',cursive;font-size:44px;color:${c.gold};opacity:.7;margin-top:6px;}
    .play{width:36px;height:36px;border-radius:10px;background:${c.bg3};border:1px solid ${c.border};color:${c.text};font-size:14px;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;padding:0;font-family:inherit;}
    .status-row{display:flex;gap:8px;margin-top:16px;}
    .status-btn{flex:1;text-align:center;padding:10px 4px;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit;transition:.18s;}
    .info{padding:16px;margin-top:12px;}
    .info-t{font-size:11px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:${c.gold};margin-bottom:6px;}
    .info-x{font-size:14px;line-height:1.55;color:${c.textSub};}
    .wrow{display:flex;align-items:center;gap:12px;padding:12px 0;}
    .wrow + .wrow{border-top:1px solid ${c.border};}
    .ctable{width:100%;border-collapse:separate;border-spacing:0;table-layout:fixed;background:${c.bg2};border:1px solid ${c.border};border-radius:10px;overflow:hidden;margin-top:14px;}
    .ctable th{font-size:10.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:${c.textMuted};text-align:left;padding:10px 12px;border-bottom:1px solid ${c.border};}
    .ctable td{padding:9px 12px;border-top:1px solid ${c.border};}
    .ctable tr:nth-child(2) td{border-top:none;}
    .f-ru{font-size:17px;font-weight:700;color:${c.text};cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:6px;background:none;border:none;padding:0;width:100%;font-family:inherit;text-align:left;}
    .f-ru .pl{font-size:10px;color:${c.gold};}
    .f-ru.blanda{color:${c.gold};}
    .fc{min-height:46vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:24px 18px;cursor:pointer;border-radius:18px;background:${c.card};border:1px solid ${c.border};user-select:none;-webkit-user-select:none;}
    .par{display:flex;align-items:center;gap:10px;padding:10px 0;}
    .par + .par{border-top:1px solid ${c.border};}
    .par-l{width:52px;flex-shrink:0;font-size:13px;font-weight:800;color:${c.gold};}
    .par-w{flex:1;min-width:0;display:flex;flex-direction:column;align-items:flex-start;gap:2px;background:${c.bg2};border:1px solid ${c.border};border-radius:10px;padding:8px 10px;cursor:pointer;font-family:inherit;text-align:left;color:${c.text};}
    .par-ru{font-size:18px;font-weight:700;}
    .par-ru .pl{font-size:10px;color:${c.gold};}
    .par-es{font-size:12px;color:${c.textMuted};}
    .fc.dorso{align-items:stretch;justify-content:flex-start;text-align:left;padding:22px 20px;}
    .fc-glyph{font-size:clamp(60px,19vw,96px);font-weight:800;color:${c.gold};line-height:1;white-space:nowrap;}
    .fc-top{display:flex;align-items:baseline;justify-content:space-between;gap:12px;}
    .fc-cur{font-family:'CyrCursive',cursive;font-size:clamp(60px,19vw,96px);color:${c.gold};opacity:.7;line-height:1;white-space:nowrap;}
    .fc-nombre{display:flex;align-items:baseline;gap:10px;margin-top:22px;}
    .fc-word{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:20px;padding-top:16px;border-top:1px solid ${c.border};}
    .fc-ctl{display:flex;gap:8px;margin-top:12px;}
    .fc-ctl button{flex:1;padding:11px 6px;border-radius:10px;border:1px solid ${c.border};background:${c.bg3};color:${c.text};font-size:13.5px;font-weight:600;cursor:pointer;font-family:inherit;}
  
    .voc{display:flex;align-items:center;gap:10px;padding:10px 0;}
    .voc + .voc{border-top:1px solid ${c.border};}
    .voc-ru{font-size:17px;font-weight:700;}
    .voc-tr{font-size:12.5px;color:${c.textSub};font-style:italic;margin-left:8px;}
    .voc-es{font-size:13.5px;color:${c.textSub};margin-top:2px;}
    .ptabla{width:100%;border-collapse:separate;border-spacing:0;background:${c.bg2};border:1px solid ${c.border};border-radius:10px;overflow:hidden;margin-top:12px;}
    .ptabla td{padding:9px 12px;border-top:1px solid ${c.border};font-size:15px;}
    .ptabla tr:first-child td{border-top:none;}
    .mapa-v{width:100%;display:block;border-radius:12px;background:${c.bg2};border:1px solid ${c.border};margin-top:10px;touch-action:manipulation;}
    .mapa-v path.pais{cursor:pointer;}
    .grab{display:flex;gap:6px;align-items:center;margin-top:8px;flex-wrap:wrap;}
    .grab button{padding:6px 10px;border-radius:9px;font-size:12.5px;font-weight:700;cursor:pointer;font-family:inherit;background:${c.bg3};border:1px solid ${c.border};color:${c.text};}
    .grab button.rec{border-color:#B5605C;color:#D9776F;}
    .req{display:flex;gap:8px;align-items:center;font-size:14px;padding:6px 0;}
    .proy{width:100%;box-sizing:border-box;min-height:36vh;background:${c.card};border:1px solid ${c.border};border-radius:12px;padding:14px;color:${c.text};font-size:16px;line-height:1.55;font-family:inherit;margin-top:12px;}
  
    .grp-wrap{overflow-x:auto;margin-top:12px;}
    .grp{width:100%;border-collapse:separate;border-spacing:0;background:${c.bg2};border:1px solid ${c.border};border-radius:10px;overflow:hidden;}
    .grp th{font-size:10.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:${c.textMuted};text-align:left;padding:9px 10px;border-bottom:1px solid ${c.border};}
    .grp td{padding:8px 10px;border-top:1px solid ${c.border};vertical-align:top;}
    .grp tr:first-child td{border-top:none;}
    .grp-w{background:none;border:none;padding:0;color:${c.text};font-family:inherit;cursor:pointer;text-align:left;}
    .grp-ru{font-size:15px;font-weight:700;}
    .grp-w .pl{font-size:9px;color:${c.gold};}
    .grp-es{font-size:11.5px;color:${c.textMuted};margin-top:1px;}
    .grp.compacta th{padding:8px 4px;font-size:9px;letter-spacing:.3px;}
    .grp.compacta td{padding:7px 4px;}
    .grp.compacta .grp-ru{font-size:12.5px;}
    .grp.compacta .grp-es{font-size:10.5px;}
    /* Teoría ampliada (06/10/2026, PLAN_PROFUNDIZACION §3) */
    .u-ej{background:${c.bg2};border:1px solid ${c.border};border-radius:10px;padding:10px 12px;margin-top:8px;}
    .u-ej-top{display:flex;align-items:flex-start;gap:10px;}
    .u-ej-ru{flex:1;min-width:0;font-size:17px;font-weight:700;color:${c.text};line-height:1.4;}
    .u-ej-hi{color:${c.gold};}
    .u-ej-es{font-size:13.5px;color:${c.textMuted};margin-top:2px;}
    .u-ej-por{font-size:13.5px;line-height:1.5;color:${c.textSub};margin-top:6px;padding-left:8px;border-left:2px solid ${c.gold}66;}
    .u-ej .play{width:32px;height:32px;border-radius:9px;font-size:12px;}
    .u-des{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;}
    .u-des-p{display:flex;flex-direction:column;align-items:flex-start;gap:3px;padding:8px 10px;border-radius:10px;background:${c.bg2};border:1px solid ${c.border};color:${c.text};font-family:inherit;cursor:pointer;text-align:left;transition:.18s;}
    .u-des-p.on{background:${c.gold}22;border-color:${c.gold};}
    .u-des-ru{font-size:17px;font-weight:700;}
    .u-des-rol{font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:${c.textMuted};}
    .u-des-p.on .u-des-rol{color:${c.gold};}
    .u-err{margin-top:8px;font-size:15px;line-height:1.45;}
    .u-err-f{display:flex;gap:8px;align-items:baseline;}
    .u-err-mal{color:#D9776F;text-decoration:line-through;text-decoration-color:#B5605C;}
    .u-err-bien{color:${green};font-weight:700;}
    .u-err-por{font-size:13.5px;color:${c.textSub};margin:2px 0 0 22px;}
    .u-chq{margin-top:14px;background:${c.card};border:1px solid ${c.border};border-radius:12px;padding:12px 14px;}
    .u-chq-item + .u-chq-item{margin-top:14px;padding-top:12px;border-top:1px solid ${c.border};}
    .u-chq-k{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${c.gold};}
    .u-chq-p{font-size:15px;font-weight:600;color:${c.text};margin-top:6px;line-height:1.45;}
    .u-chq-ops{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;}
    .u-chq-op{padding:8px 12px;border-radius:10px;font-size:15px;font-weight:600;cursor:pointer;font-family:inherit;background:${c.bg2};border:1px solid ${c.border};color:${c.text};transition:.18s;}
    .u-chq-op.ok{background:${green}22;border-color:${green};color:${green};}
    .u-chq-op.mal{background:#B5605C22;border-color:#B5605C;color:#D9776F;}
    .u-chq-r{font-size:13.5px;line-height:1.5;color:${c.textSub};margin-top:8px;}
    .u-mas-b{display:flex;align-items:center;gap:6px;margin-top:14px;padding:9px 12px;width:100%;border-radius:10px;background:${c.bg2};border:1px solid ${c.border};color:${c.gold};font-size:13.5px;font-weight:700;cursor:pointer;font-family:inherit;text-align:left;}
    .u-mas{margin-top:2px;padding:4px 0 2px 12px;border-left:2px solid ${c.border};}
  `);
  }

  /* ── Teoría ampliada (06/10/2026, PLAN_PROFUNDIZACION §3) ──
     Una sección puede tener, además de titulo, texto, destacado, truco y ojo:
       id           nombre de la regla (lo usan los ejercicios: campo regla)
       antes        { pide, opciones, ok, por }       pregunta para descubrir la regla antes de leerla
       desarmar     { ru, partes: [{ txt, rol, nota? }] }   frase con la función de cada palabra
       ejemplos     [{ ru, es, por, lex? }]          ejemplos explicados; en ru, {…} marca lo que cambia
       comparacion  "…"                              recuadro «En español» (solo para entender una idea)
       errores      [{ mal, bien, por }]             error típico tachado y la forma correcta
       chequeo      [{ pide, opciones, ok, por }]    1 a 3 preguntas al final; no cuentan para el progreso
       mas          { texto?, ejemplos?, errores?, tabla? }   bloque plegable «Más a fondo»
     Sin estos campos, una sección se ve igual que antes. */
  const sinLlaves = t => String(t || "").replace(/[{}]/g, "");
  const LEX_CACHE = {};
  /* ID del léxico de una palabra escrita: forma de diccionario o, si no, una forma de Casos o Verbos.
     Si hay más de una palabra posible, no se enlaza (mejor sin link que con el equivocado). */
  function azLexDe(w) {
    const low = String(w).toLowerCase(), k = ES ? low : azNormRu(low);
    if (low in LEX_CACHE) return LEX_CACHE[low];
    let id = null;
    if (ES) {
      /* Abecé: la forma de diccionario (o el femenino: amiga) y, si no, una forma de data-formas-es.js */
      if (typeof LEXICON_ES !== "undefined") {
        const exactas = LEXICON_ES.filter(e => e.es.toLowerCase() === low || (e.femenino && (e.femenino.es || "").toLowerCase() === low));
        const ens = exactas.filter(e => (e.introducedIn || []).length);
        const lista = ens.length ? ens : exactas;
        if (lista.length === 1) id = lista[0].id;
        else if (!lista.length && typeof formasEsIndice === "function") {
          const ids = [...new Set((formasEsIndice()[low] || []).map(x => x.id))];
          if (ids.length === 1) id = ids[0];
        }
      }
      LEX_CACHE[low] = id;
      return id;
    }
    if (typeof LEXICON_COMER !== "undefined") {
      /* Con marca de acento, solo la palabra con ese acento: дома́ (casas) no es до́ма (en casa) */
      const conAc = /\u0301/.test(low);
      const exactas = LEXICON_COMER.filter(e => azNormRu(e.ru.toLowerCase()) === k && (!conAc || (e.acento || e.ru).toLowerCase() === low));
      const ens = exactas.filter(e => (e.introducedIn || []).length);
      const lista = ens.length ? ens : exactas;
      if (lista.length === 1) id = lista[0].id;
      else if (!lista.length && typeof azBuscarForma === "function" && typeof CASOS !== "undefined") {
        let ids = [...new Set(azBuscarForma(k).filter(r => r.exacta).map(r => r.id))];
        if (ids.length > 1) ids = ids.filter(x => ((lexComerById(x) || {}).introducedIn || []).length);   /* la que se enseña en alguna unidad */
        if (ids.length === 1) id = ids[0];
      }
    }
    LEX_CACHE[low] = id;
    return id;
  }
  /* Texto explicativo (azFmt) con las palabras rusas tocables (06/10/2026, Manu: en vez de
     «(Unidad 2)», la palabra se toca y se ve qué significa). No se enlazan las letras ni las
     terminaciones (van en negrita o con guion), las palabras de una letra ni las formas que no
     existen (los errores que se muestran a propósito). */
  function azFmtLink(texto) {
    const nodos = azFmt(texto);
    if (!Array.isArray(nodos) || typeof azAbrirBurbuja !== "function") return nodos;
    const out = [];
    nodos.forEach((n, j) => {
      if (typeof n !== "string") { out.push(n); return; }
      const rx = new RegExp(RX_MIN + "+(?:-" + RX_MIN + "+)*", "g");
      let ult = 0, m;
      while ((m = rx.exec(n))) {
        const w = m[0], antes = n[m.index - 1];
        if (w.replace(/\u0301/g, "").length < 2 || antes === "-") continue;
        const id = azLexDe(w);
        if (!id) continue;
        if (m.index > ult) out.push(n.slice(ult, m.index));
        out.push(h("span", { key: "l" + j + "-" + m.index, className: "az-link", role: "button", tabIndex: 0, lang: LL,
          onClick: ev => { ev.stopPropagation(); azAbrirBurbuja("palabra", { id, forma: w }, ev.currentTarget); } }, w));
        ult = m.index + w.length;
      }
      if (ult < n.length) out.push(n.slice(ult));
    });
    return out;
  }
  /* Frase rusa con palabras tocables y lo marcado entre {…} en dorado */
  function FraseEj({ ru, lex }) {
    /* {Как дела́} → {Как} {дела́}: el resaltado puede abarcar varias palabras (07/10/2026). En Abecé, ru = la frase en español. */
    const LET = ES ? "A-Za-zÁÉÍÓÚÜÑáéíóúüñ" : "А-Яа-яЁё";
    ru = String(ru).replace(/\{([^}]*)\}/g, (x, s) => s.split(/(\s+)/).map(p => new RegExp("[" + LET + "]").test(p) ? "{" + p + "}" : p).join(""));
    const out = []; let k = 0, ult = 0, m;
    const rx = ES ? /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ{}]+(?:-[A-Za-zÁÉÍÓÚÜÑáéíóúüñ{}]+)*/g : /[А-Яа-яЁё́{}]+(?:-[А-Яа-яЁё́{}]+)*/g;
    while ((m = rx.exec(ru))) {
      if (m.index > ult) out.push(ru.slice(ult, m.index));
      const tok = m[0], plano = sinLlaves(tok);
      const piezas = tok.split(/(\{[^}]*\})/).filter(Boolean).map((p, i) => /^\{/.test(p) ? h("span", { key: i, className: "u-ej-hi" }, p.slice(1, -1)) : p);
      const id = lex ? lex[k] : azLexDe(plano);
      out.push(id && typeof azAbrirBurbuja === "function"
        ? h("span", { key: m.index, className: "az-link", role: "button", tabIndex: 0, onClick: ev => { ev.stopPropagation(); azAbrirBurbuja("palabra", { id, forma: plano }, ev.currentTarget); } }, piezas)
        : h("span", { key: m.index }, piezas));
      ult = m.index + tok.length; k++;
    }
    if (ult < ru.length) out.push(ru.slice(ult));
    return h("span", { lang: LL }, out);
  }
  function Ejemplos({ lista }) {
    return h(React.Fragment, null, lista.map((e, i) => { const meta = ES ? e.es : e.ru, trad = ES ? e.ru : e.es; return h("div", { key: i, className: "u-ej" },
      h("div", { className: "u-ej-top" },
        h("div", { style: { flex: 1, minWidth: 0 } },
          h("div", { className: "u-ej-ru" }, h(FraseEj, { ru: meta, lex: e.lex })),
          trad && h("div", { className: "u-ej-es", lang: ES ? "ru" : "es" }, trad)),
        h("button", { className: "play", onClick: () => hablar(sinLlaves(meta).replace(/·/g, "")), "aria-label": T("Escuchar") }, "▶")),
      e.por && h("div", { className: "u-ej-por" }, azFmtLink(e.por))); }));
  }
  function Desarmar({ d }) {
    const [sel, setSel] = useState(null);
    const p = sel != null ? d.partes[sel] : null;
    return h("div", null,
      h("div", { className: "u-des" }, d.partes.map((x, i) => h("button", { key: i, className: "u-des-p" + (sel === i ? " on" : ""), onClick: () => { setSel(i); hablar(sinLlaves(x.txt)); } },
        h("span", { className: "u-des-ru", lang: LL }, sinLlaves(x.txt)), h("span", { className: "u-des-rol" }, x.rol)))),
      h("div", { className: "u-ej-por", style: { marginTop: 8 } }, azFmtLink(p ? (p.nota || p.rol) : T("Toca cada parte para ver qué hace en la frase."))),
      (ES ? d.ru : d.es) && h("div", { className: "u-ej-es", style: { marginTop: 6 } }, "«" + (ES ? d.ru : d.es) + "»"));
  }
  function Errores({ lista }) {
    return h(React.Fragment, null, lista.map((e, i) => h("div", { key: i, className: "u-err" },
      h("div", { className: "u-err-f" }, h("span", { style: { color: "#B5605C", fontWeight: 800 } }, "✗"), h("span", { className: "u-err-mal", lang: LL }, sinLlaves(e.mal))),
      h("div", { className: "u-err-f" }, h("span", { className: "u-err-bien" }, "✓"), h("span", { className: "u-err-bien", lang: LL }, h(FraseEj, { ru: e.bien }))),
      e.por && h("div", { className: "u-err-por" }, azFmtLink(e.por)))));
  }
  /* Una pregunta; con suelta = false va dentro de una tarjeta que agrupa varias (06/10/2026) */
  function Pregunta({ q, rotulo, suelta }) {
    const [el, setEl] = useState(null);
    return h("div", { className: suelta === false ? "u-chq-item" : "u-chq" },
      rotulo && h("div", { className: "u-chq-k" }, rotulo),
      h("div", { className: "u-chq-p" }, azFmt(q.pide)),
      h("div", { className: "u-chq-ops" }, q.opciones.map(o => {
        const cls = el == null ? "" : o === q.ok ? " ok" : o === el ? " mal" : "";
        /* la opción en la lengua que se aprende suena al tocarla */
        const meta = ES ? !esRu(o) : /[а-яё]/i.test(o);
        return h("button", { key: o, className: "u-chq-op" + cls, disabled: el != null, lang: esRu(o) ? "ru" : "es", onClick: () => { setEl(o); if (meta) hablar(sinLlaves(o)); } }, o);
      })),
      el != null && h("div", { className: "u-chq-r" }, h("b", { style: { color: el === q.ok ? "#4CAF82" : "#D9776F" } }, el === q.ok ? (ES ? "✓ Верно. " : "✓ Bien. ") : (ES ? "✗ Нет: правильно — " : "✗ No: va ") + String(q.ok).replace(/[.?!]$/, "") + ". "), azFmt(q.por || "")));
  }
  /* El cuerpo de una sección (también el de «Más a fondo») */
  function Cuerpo({ x }) {
    return h(React.Fragment, null,
      x.texto && h("div", { className: "u-text", style: { whiteSpace: "pre-line" } }, azFmtLink(x.texto)),   /* \n = renglón nuevo (pasos numerados) */
      x.desarmar && h(Desarmar, { d: x.desarmar }),
      x.ejemplos && h(Ejemplos, { lista: x.ejemplos }),
      x.destacado && h("div", { className: "u-dest" }, azFmtLink(x.destacado)),
      x.comparacion && h("div", { className: "u-truco" }, h("b", null, T("En español: ")), azFmtLink(x.comparacion)),
      x.errores && h(Errores, { lista: x.errores }),
      x.truco && h("div", { className: "u-truco" }, h("b", null, T("Truco: ")), azFmtLink(x.truco)),
      x.ojo && h("div", { className: "u-truco" }, h("b", null, T("Ojo: ")), azFmtLink(x.ojo)));   /* advertencia (05/10/2026): mismo recuadro, rótulo «Ojo:» */
  }
  function MasAFondo({ m }) {
    const [ab, setAb] = useState(false);
    return h(React.Fragment, null,
      h("button", { className: "u-mas-b", onClick: () => setAb(!ab), "aria-expanded": ab }, (ab ? "▾ " : "▸ ") + (m.titulo || T("Más a fondo"))),
      ab && h("div", { className: "u-mas", style: { animation: "fadeIn .3s ease" } }, h(Cuerpo, { x: m })));
  }
  /* extra(x): lo propio de una unidad, después del cuerpo y antes de «Más a fondo» (07/10/2026: los pares y las listas de palabras de la Unidad 1) */
  function Seccion({ x, extra }) {
    return h("div", { id: x.id ? "regla-" + x.id : undefined },
      x.titulo && h("div", { className: "u-sec" }, x.titulo),
      x.antes && h(Pregunta, { q: x.antes, rotulo: T("Antes de leer: ¿te animas?") }),
      h(Cuerpo, { x }),
      extra && extra(x),
      x.mas && h(MasAFondo, { m: x.mas }),
      x.chequeo && x.chequeo.length === 1 && h(Pregunta, { q: x.chequeo[0], rotulo: T("Chequeo rápido") }),
      x.chequeo && x.chequeo.length > 1 && h("div", { className: "u-chq" },   /* varios: una sola tarjeta, un solo título */
        h("div", { className: "u-chq-k" }, T("Chequeo rápido")),
        x.chequeo.map((q, i) => h(Pregunta, { key: i, q, suelta: false }))));
  }
  function AzSecciones({ secciones, extra }) {
    return h(React.Fragment, null, (secciones || []).map((x, k) => h(Seccion, { key: k, x, extra })));
  }
  /* Busca una sección por su id en las unidades cargadas (UNIDAD_1 … UNIDAD_14) */
  function azRegla(id) {
    if (!id) return null;
    for (let n = 1; n <= 14; n++) {
      let U = null;
      const nombre = (ES ? "UNIDAD_ES_" : "UNIDAD_") + n;   /* Abecé: UNIDAD_ES_1… (28/10/2026) */
      try { U = new Function("return typeof " + nombre + " !== 'undefined' ? " + nombre + " : null")(); } catch (e) {}
      if (!U) continue;
      for (const m of U.modulos || []) for (const s of (m.secciones || []).concat(m.bloques || [])) if (s.id === id) return { seccion: s, modulo: m, unidad: n };
    }
    return null;
  }
  /* «Repasar la regla»: la sección en una hoja, por encima de la práctica */
  function AzHojaRegla({ id, c, onClose, volver }) {
    const r = azRegla(id);
    if (!r) return null;
    return h("div", { className: "sheet", style: { zIndex: 320 }, role: "dialog" },
      h("button", { className: "sheet-x", style: { zIndex: 321 }, onClick: onClose, "aria-label": T("Cerrar") }, "✕"),
      h("div", { className: "sheet-in" },
        h("div", { className: "u-kicker" }, (ES ? "Урок " : "Unidad ") + r.unidad + (ES ? " · Модуль " : " · Módulo ") + r.modulo.n),
        h("div", { className: "u-title", style: { paddingRight: 48 } }, r.modulo.titulo),
        h(Seccion, { x: r.seccion }),
        h("button", { className: "ubtn", onClick: onClose }, volver || T("Volver al ejercicio"))));
  }

  function AzVocabulario({ ids, c }) {
    return h("div", { className: "u-card", style: { padding: "2px 16px", marginTop: 12 } }, ids.map(id => {
      const x = lexDe(id); if (!x) return null;
      return h("div", { key: id, className: "voc" },
        h("div", { style: { flex: 1, minWidth: 0 } },
          h("span", { className: "voc-ru", lang: LL }, h(AzPalabra, { texto: x.meta, id }), x.fem ? " / " + x.fem : ""), h("span", { className: "voc-tr az-tl" }, x.tr),
          h("div", { className: "voc-es", lang: ES ? "ru" : "es" }, x.trad)),
        h("button", { className: "play", onClick: () => hablar(x.voz), "aria-label": T("Escuchar") }, "▶"));
    }));
  }

  function AzFrasesLista({ ids, c }) {
    return h("div", { className: "u-card", style: { padding: "2px 16px", marginTop: 12 } }, ids.map(id => {
      const f = frById(id); if (!f) return null;
      const meta = ES ? f.es : f.ru, trad = ES ? f.ru : f.es;
      return h("div", { key: id, className: "voc" },
        h("div", { style: { flex: 1, minWidth: 0 } },
          h("span", { className: "voc-ru", lang: LL }, h(AzFrase, { id })), f.registro && h("span", { className: "voc-tr" }, (ES ? "на " : "con ") + f.registro),
          h("div", { className: "voc-es", lang: ES ? "ru" : "es" }, trad)),
        h("button", { className: "play", onClick: () => hablar(meta), "aria-label": T("Escuchar") }, "▶"));
    }));
  }

  function AzListaDialogos({ ids, onAbrir }) {
    return h(React.Fragment, null, ids.map(id => {
      const d = dlgById(id); if (!d) return null;
      return h("div", { key: id, className: "u-card mod", role: "button", tabIndex: 0, onClick: () => onAbrir(id), onKeyDown: e => { if (e.key === "Enter") onAbrir(id); } },
        h("div", { style: { flex: 1, minWidth: 0 } }, h("div", { className: "mod-t" }, d.titulo), h("div", { className: "mod-d", lang: LL }, d.lineas.slice(0, 2).map(l => ES ? l.es : l.ru).join(" — "))));
    }));
  }

  function AzGrabadora({ texto, onGrabado }) {
    const [estado, setEstado] = useState("listo");
    const [url, setUrl] = useState(null);
    const rec = useRef(null);
    const grabar = async () => {
      try {
        const st = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mr = new MediaRecorder(st); const partes = [];
        mr.ondataavailable = e => partes.push(e.data);
        mr.onstop = () => { st.getTracks().forEach(t => t.stop()); const u = URL.createObjectURL(new Blob(partes, { type: mr.mimeType })); setUrl(u); setEstado("grabado"); if (onGrabado) onGrabado(u); };
        mr.start(); rec.current = mr; setEstado("grabando");
      } catch (e) { setEstado("sin-mic"); }
    };
    return h("div", { className: "grab" },
      h("button", { onClick: () => hablar(texto) }, T("▶ Modelo")),
      estado !== "grabando" ? h("button", { className: "rec", onClick: grabar }, T(estado === "grabado" ? "● Grabar de nuevo" : "● Grabarme"))
        : h("button", { className: "rec", onClick: () => rec.current && rec.current.stop() }, T("■ Parar")),
      url && h("button", { onClick: () => new Audio(url).play() }, T("▶ Mi voz")),
      estado === "sin-mic" && h("span", { style: { fontSize: 12 } }, T("Sin permiso para el micrófono.")));
  }

  function AzHojaDialogo({ d, c, onClose, grabar, objetivo }) {
    const [tr, setTr] = useState(azTranslitVisible());
    const [es, setEs] = useState(true);
    const [mias, setMias] = useState({});            /* línea → grabación */
    const gen = l => l.p;   /* quién habla: la clave del personaje (core.js elige su voz, 15/10/2026) */
    const href = "dialogos.html?id=" + d.id;
    const meta = l => ES ? l.es : l.ru, trad = l => ES ? l.ru : l.es;
    /* Todas mis grabaciones en orden; si falta una línea, suena el modelo */
    const escucharMias = () => {
      let i = 0;
      const sig = () => {
        if (i >= d.lineas.length) return;
        const k = i++, u = mias[k];
        if (u) { const a = new Audio(u); a.onended = () => setTimeout(sig, 200); a.play(); }
        else hablarSec([{ texto: meta(d.lineas[k]), genero: gen(d.lineas[k]) }], null, () => setTimeout(sig, 100));
      };
      sig();
    };
    return h("div", { className: "sheet", role: "dialog" },
      h("button", { className: "sheet-x", onClick: onClose, "aria-label": T("Cerrar") }, "✕"),
      h("div", { className: "sheet-in" },
        h("div", { className: "u-kicker" }, T("Diálogo")),
        h("div", { style: { fontSize: 26, fontWeight: 800, paddingRight: 48 } }, d.titulo),
        (ES ? d.tituloEs : d.tituloRu) && h("div", { className: "u-ru", lang: LL }, ES ? d.tituloEs : d.tituloRu),
        h("div", { className: "toggle-row" },
          h("button", { className: "pair-btn", onClick: () => setTr(v => !v), style: chipSt(c, tr) }, T("Transliteración")),
          h("button", { className: "pair-btn", onClick: () => setEs(v => !v), style: chipSt(c, es) }, T("Traducción"))),
        h("div", { className: "u-text", style: { fontSize: 13, marginBottom: 12 } },
          T(grabar ? "Escucha cada línea, grábate diciéndola y compara." : "Para practicar la lectura, apaga la transliteración y la traducción.")),
        d.lineas.map((l, i) => h("div", { key: i, className: "u-card", style: { padding: "12px 14px", marginBottom: 8 } },
          h("div", { style: { display: "flex", gap: 10, alignItems: "flex-start" } },
            h("div", { style: { flex: 1, minWidth: 0 } },
              h("div", { lang: LL, style: { fontSize: 11, fontWeight: 700, letterSpacing: 1, color: c.gold, textTransform: "uppercase", marginBottom: 4 } }, personaje(l.p).ru),
              h("div", { style: { fontSize: 17, fontWeight: 700, lineHeight: 1.5 } }, ES ? h(AzTexto, { es: l.es, lex: l.lex, objetivo }) : h(AzTexto, { ru: l.ru, lex: l.lex, objetivo })),
              tr && h("div", { className: ES ? "az-tl" : null, style: { fontSize: 13.5, color: c.textSub, fontStyle: "italic", marginTop: 2 } }, l.tr),
              es && h("div", { lang: ES ? "ru" : "es", style: { fontSize: 14, color: c.text, marginTop: 4 } }, trad(l))),
            h("div", { style: { display: "flex", flexDirection: "column", gap: 6 } },
              h("button", { className: "play", onClick: () => hablar(meta(l), gen(l)), "aria-label": T("Escuchar") }, "▶"),
              h("button", { className: "play", onClick: () => azGuardarEnCuaderno(meta(l) + "\n" + trad(l), { titulo: (ES ? "Диалоги · " : "Diálogos · ") + d.titulo, href: ES ? null : href }), "aria-label": T("Guardar en el cuaderno") }, "＋"))),
          grabar && h(AzGrabadora, { texto: meta(l), onGrabado: u => setMias(m => Object.assign({}, m, { [i]: u })) }))),
        h("button", { className: "ubtn", onClick: () => hablarSec(d.lineas.map(l => ({ texto: meta(l), genero: gen(l) }))) }, T("▶ Escuchar el diálogo")),
        grabar && Object.keys(mias).length > 0 && h("button", { className: "ubtn sec", style: { marginTop: 10 }, onClick: escucharMias }, T("▶ Escuchar mis grabaciones")),
        !ES && h("a", { className: "ubtn sec", style: { marginTop: 10, textDecoration: "none" }, href, onClick: ev => azNavigate(ev, href) }, "Ver en Diálogos")));   /* Abecé: hasta que exista su módulo de Diálogos */
  }

  function AzTarjetasPalabras({ ids, titulo, c, green, onClose, detalle }) {
    /* Los nombres propios (países, ciudades, personas) no van en las tarjetas */
    const [orden, setOrden] = useState(() => ids.filter(id => { const x = lexDe(id); return x && !x.propio; }));
    const [i, setI] = useState(0);
    const [vuelta, setVuelta] = useState(false);
    const [, refrescar] = useState(0);
    const x = lexDe(orden[i]), e = x.e;
    const nv = azItem("lex:" + e.id).level || 0;
    const ir = d => { setVuelta(false); setI(x => (x + d + orden.length) % orden.length); };
    const marcar = v => { azSetItemLevel("lex:" + e.id, v); refrescar(x => x + 1); ir(1); };
    return h("div", { className: "sheet", role: "dialog" },
      h("button", { className: "sheet-x", onClick: onClose, "aria-label": T("Cerrar") }, "✕"),
      h("div", { className: "sheet-in" },
        h("div", { className: "u-kicker" }, (ES ? "Карточки · " : "Tarjetas · ") + titulo),
        h("div", { style: { fontSize: 14, color: c.textMuted, marginBottom: 14 } }, (i + 1) + (ES ? " из " : " de ") + orden.length + (nv ? " · " + T(nv === 2 ? "dominada" : "aprendiendo") : "")),
        h("div", { className: "fc", role: "button", tabIndex: 0, onClick: () => { if (!vuelta && !nv) azSetItemLevel("lex:" + e.id, 1, true); if (!vuelta) hablar(x.voz); setVuelta(v => !v); } },
          h("div", { lang: LL, style: { fontSize: 38, fontWeight: 800, color: c.gold, lineHeight: 1.2, wordBreak: "break-word" } }, x.meta + (x.fem ? " / " + x.fem : "")),
          !vuelta ? h("div", { style: { fontSize: 13, color: c.textMuted, marginTop: 18 } }, T("Toca para ver qué significa"))
            : h(React.Fragment, null,
                h("div", { className: "az-tl", style: { fontSize: 15, color: c.textSub, fontStyle: "italic", marginTop: 8 } }, x.tr),
                h("div", { lang: ES ? "ru" : "es", style: { fontSize: 20, fontWeight: 700, color: c.text, marginTop: 12 } }, x.trad),
                detalle && detalle(e) && h("div", { lang: LL, style: { fontSize: 14.5, color: c.textSub, marginTop: 8 } }, detalle(e)),
                h("button", { className: "play", style: { marginTop: 14 }, onClick: ev => { ev.stopPropagation(); hablar(x.voz); }, "aria-label": T("Escuchar") }, "▶"))),
        h("div", { className: "fc-ctl" },
          h("button", { onClick: () => ir(-1) }, T("‹ Anterior")),
          h("button", { onClick: () => { setOrden(orden.slice().sort(() => Math.random() - .5)); setI(0); setVuelta(false); } }, T("Mezclar")),
          h("button", { onClick: () => ir(1) }, T("Siguiente ›"))),
        h("div", { className: "status-row" },
          h("button", { className: "status-btn", onClick: () => marcar(1), style: { background: nv === 1 ? YELLOW + "22" : c.bg3, border: `1px solid ${nv === 1 ? YELLOW : c.border}`, color: nv === 1 ? YELLOW : c.text } }, T("Volver a estudiar")),
          h("button", { className: "status-btn", onClick: () => marcar(2), style: { background: nv === 2 ? green + "22" : c.bg3, border: `1px solid ${nv === 2 ? green : c.border}`, color: nv === 2 ? green : c.text } }, T("Ya la sé")))));
  }

  /* modo "ciudades" (04/10/2026, Unidad 6): los países de fondo, sin tocar, y
     las ciudades como puntos. Al tocar una: su nombre y el prepositivo
     («в Барсело́не», «Я живу́ в Барсело́не»). onTocar(clave, info) avisa a la
     página (para actividades). Sin modo: los países, como en la Unidad 2. */
  function AzMapaExplorar({ c, modo, onTocar }) {
    if (modo === "ciudades") return h(AzMapaCiudades, { c, onTocar });
    return h(AzMapaPaises, { c });
  }
  function AzMapaCiudades({ c, onTocar }) {
    const [vista, setVista] = useState("europa-oeste");
    const [sel, setSel] = useState(null);
    if (typeof MAPA === "undefined" || !MAPA.ciudades) return null;
    const vb = MAPA.vistas[vista].vb.split(" ").map(Number), w = vb[2];
    const conCiudad = new Set(Object.values(MAPA.ciudades).map(x => x.pais));
    const info = k => {
      const e = lexComerById(MAPA.ciudades[k].lex);
      const cz = e && typeof casosById === "function" ? casosById(e.id) : null;
      const prep = !cz ? e.acento : cz.tipo === "indeclinable" ? e.acento : cz.sg ? cz.sg[5] : cz.pl[5];
      return { e, prep, frase: "Я живу́ в " + prep + "." };
    };
    const tocar = k => { const i = info(k); setSel(k); azHablarRu(i.e.acento || i.e.ru); if (onTocar) onTocar(k, i); };
    const s = sel ? info(sel) : null;
    return h("div", null,
      h("div", { className: "toggle-row", style: { flexWrap: "wrap" } }, ["europa-oeste", "europa-este", "america-ciudades", "asia-este"].map(k =>
        h("button", { key: k, className: "pair-btn", style: chipSt(c, vista === k), onClick: () => setVista(k) }, MAPA.vistas[k].titulo))),
      h("svg", { viewBox: MAPA.vistas[vista].vb, className: "mapa-v", role: "img", "aria-label": "Mapa de ciudades" },
        h("path", { d: MAPA.fondo, fill: c.bg3, stroke: c.bg2, "stroke-width": w / 400 }),
        /* Solo se marcan los países que tienen una ciudad (05/10/2026); los demás, como el fondo */
        Object.keys(MAPA.paises).map(k => h("path", { key: k, d: MAPA.paises[k].d, fill: conCiudad.has(k) ? c.gold + "33" : c.bg3, stroke: c.bg2, "stroke-width": w / 400, style: { pointerEvents: "none" } })),
        /* Países que no se enseñan pero tienen una ciudad, como Chequia (14/10/2026) */
        Object.keys(MAPA.contornos || {}).filter(k => conCiudad.has(k)).map(k => h("path", { key: "c-" + k, d: MAPA.contornos[k].d, fill: c.gold + "33", stroke: c.bg2, "stroke-width": w / 400, style: { pointerEvents: "none" } })),
        (MAPA.vistas[vista].ciudades || Object.keys(MAPA.ciudades)).map(k => {
          const p = MAPA.ciudades[k], on = k === sel, e = lexComerById(p.lex);
          return h("g", { key: k, onClick: () => tocar(k), style: { cursor: "pointer" } },
            h("circle", { cx: p.x, cy: p.y, r: w * 0.045, fill: "transparent" }),   /* zona de toque grande */
            h("circle", { cx: p.x, cy: p.y, r: w * (on ? 0.018 : 0.013), fill: on ? c.gold : c.gold + "cc", stroke: c.bg, "stroke-width": w / 300 }),
            h("text", { x: p.x, y: p.y + w * 0.05, "text-anchor": "middle", "font-size": w * 0.036, "font-weight": on ? 800 : 600, fill: on ? c.gold : c.text, lang: "ru", style: { pointerEvents: "none" } },
              (e.acento || e.ru).replace(/\u0301/g, "")));
        })),
      s ? h("div", { className: "u-card", style: { padding: "12px 16px", marginTop: 10, display: "flex", alignItems: "center", gap: 12 } },
            h("div", { style: { flex: 1 } },
              h("div", { lang: "ru", style: { fontSize: 20, fontWeight: 800 } }, h(AzPalabra, { texto: s.e.acento, id: s.e.id })),
              h("div", { style: { fontSize: 13.5, color: c.textSub, marginTop: 2 } }, s.e.senses[0].es + " · ", h("span", { lang: "ru", style: { color: c.text, fontWeight: 700 } }, s.frase))),
            h("button", { className: "play", onClick: () => azHablarRu(s.frase), "aria-label": "Escuchar" }, "▶"))
        : onTocar ? null : h("div", { className: "u-text", style: { fontSize: 13.5, marginTop: 8 } }, "Toca una ciudad."));   /* en una actividad, la consigna la da la página */
  }
  function AzMapaPaises({ c }) {
    const [vista, setVista] = useState("europa");
    const [sel, setSel] = useState(null);
    if (typeof MAPA === "undefined") return null;
    const e = sel ? lexComerById(MAPA.paises[sel].lex) : null;
    const cz = e && typeof CASOS !== "undefined" && CASOS[e.id];
    const gen = cz ? (cz.tipo === "indeclinable" ? e.acento : cz.sg[1]) : "";
    const tocar = iso => { setSel(iso); const ep = lexComerById(MAPA.paises[iso].lex); azHablarRu(ep.acento || ep.ru); };
    return h("div", null,
      h("div", { className: "toggle-row", style: { flexWrap: "wrap" } }, ["europa", "america", "asia", "africa", "oceania", "mundo"].map(k =>
        h("button", { key: k, className: "pair-btn", style: chipSt(c, vista === k), onClick: () => setVista(k) }, MAPA.vistas[k].titulo))),
      h("svg", { viewBox: MAPA.vistas[vista].vb, className: "mapa-v", role: "img", "aria-label": "Mapa de países" },
        h("path", { d: MAPA.fondo, fill: c.bg3, stroke: c.bg2, "stroke-width": vista === "mundo" ? 4 : 2 }),
        Object.keys(MAPA.paises).map(k => h("path", { key: k, className: "pais", d: MAPA.paises[k].d, onClick: () => tocar(k),
          fill: k === sel ? c.gold : c.gold + "55", stroke: c.bg2, "stroke-width": vista === "mundo" ? 4 : 2 }))),
      e ? h("div", { className: "u-card", style: { padding: "12px 16px", marginTop: 10, display: "flex", alignItems: "center", gap: 12 } },
            h("div", { style: { flex: 1 } },
              h("div", { lang: "ru", style: { fontSize: 20, fontWeight: 800 } }, h(AzPalabra, { texto: e.acento, id: e.id })),
              h("div", { style: { fontSize: 13.5, color: c.textSub, marginTop: 2 } }, e.senses[0].es + " · ", h("span", { lang: "ru", style: { color: c.text, fontWeight: 700 } }, "я из " + gen))),
            h("button", { className: "play", onClick: () => azHablarRu("Я из " + gen), "aria-label": "Escuchar" }, "▶"))
        : h("div", { className: "u-text", style: { fontSize: 13.5, marginTop: 8 } }, "Toca un país dorado."));
  }

  /* grabar (28/10/2026, proyecto de la U1 de Abecé): debajo, la grabadora con el texto escrito como modelo */
  function AzProyecto({ mod, c, green, clave, fuente, aviso, grabar }) {
    const [txt, setTxt] = useState("");
    const [rev, setRev] = useState(null);
    useEffect(() => { (async () => setTxt(await azGet(clave, "")))(); }, []);
    const n = t => ES ? t.toLowerCase() : t.replace(/\u0301/g, "").replace(/ё/g, "е").toLowerCase();   /* Abecé: las tildes cuentan */
    /* Requisito: rx (expresión regular sobre el texto sin acentos) o fn(texto) → true / false (02/10/2026) */
    const ok = mod.requisitos.map(r => r.fn ? !!r.fn(txt) : new RegExp(r.rx).test(n(txt)));
    const cambiar = v => { setTxt(v); setRev(null); azSet(clave, v); };
    return h("div", null,
      h("div", { className: "u-card", style: { padding: "8px 16px", marginTop: 14 } }, mod.requisitos.map((r, i) =>
        h("div", { key: i, className: "req" }, h("span", { style: { color: ok[i] ? green : c.textMuted, fontWeight: 800 } }, ok[i] ? "✓" : "○"), h("span", { style: { color: ok[i] ? c.text : c.textSub } }, r.txt)))),
      aviso && h("div", { className: "u-dest" }, aviso),
      h("textarea", { className: "proy", lang: LL, value: txt, placeholder: ES ? "Пиши по-испански…" : "Escribe en ruso…", onInput: e => cambiar(e.target.value) }),
      ok.every(Boolean) && h("div", { style: { marginTop: 10, color: green, fontWeight: 700, fontSize: 14 } }, T("¡Están todos los puntos! Léelo en voz alta y guárdalo en el cuaderno.")),
      h("button", { className: "ubtn", disabled: !txt.trim(), onClick: () => setRev(azRevisarTexto(txt, mod.requisitos, mod.consejos)) }, T("Revisar mi texto")),
      rev && h("div", { className: "u-card", style: { padding: "12px 16px", marginTop: 12 } },
        !rev.dudas.length && !rev.faltan.length && !rev.tips.length && h("div", { style: { color: green, fontWeight: 700, fontSize: 14 } }, T("✓ No encontré errores y están todos los puntos.")),
        rev.dudas.map((d, i) => h("div", { key: "d" + i, className: "u-truco", lang: LL }, ES
          ? "«" + d.t + "» — такого слова нет в словаре" + (d.sugerencia ? ". Может быть, «" + d.sugerencia + "»?" : ": проверь, как оно пишется.")
          : "«" + d.t + "» no la encuentro en el diccionario" + (d.sugerencia ? ". ¿Quisiste decir «" + d.sugerencia + "»?" : ": revisa cómo se escribe."))),
        rev.tips.map((t, i) => h("div", { key: "t" + i, className: "u-truco" }, azFmt(t))),
        rev.faltan.length > 0 && h("div", { className: "u-truco" }, T("Falta: ") + rev.faltan.join(", ").toLowerCase() + "."),
        h("div", { style: { fontSize: 12, color: c.textMuted, marginTop: 8, lineHeight: 1.5 } }, T("La revisión encuentra palabras mal escritas y errores típicos, pero no corrige toda la gramática."))),
      h("div", { style: { display: "flex", gap: 8, marginTop: 12 } },
        h("button", { className: "ubtn sec", style: { marginTop: 0 }, disabled: !txt.trim(), onClick: () => hablar(txt) }, T("▶ Escucharlo")),
        h("button", { className: "ubtn", style: { marginTop: 0 }, disabled: !txt.trim(), onClick: () => azGuardarEnCuaderno(txt, fuente) }, T("＋ Cuaderno"))),
      grabar && txt.trim() && h(React.Fragment, null,
        h("div", { className: "u-sec" }, T("Léelo en voz alta")),
        h("div", { className: "u-text", style: { fontSize: 13.5 } }, T("Escucha el modelo, grábate y compara.")),
        h(AzGrabadora, { texto: txt })));
  }

  /* Taller de escritura (06/10/2026, Unidad 13): planificar → escribir →
     revisar → reescribir. Guarda { paso, plan, v1, v2 } en «clave», así se
     ven las dos versiones. tarea = { titulo, formato, palabras: [min, max],
     ideas: [preguntas guía], requisitos: [{ txt, fn }], consejos } */
  const AZ_TALLER_PASOS = ["Planificar", "Escribir", "Revisar", "Reescribir"];
  const AZ_TALLER_CHEQUEO = ["¿Cada verbo va con su persona (я чита́ю, она́ чита́ет)?", "¿El pasado tiene el género correcto (он был, она́ была́)?",
    "¿Después de cada preposición va el caso que pide (в Москве́, с дру́гом, у меня́)?", "¿Usaste conectores (снача́ла, пото́м, поэ́тому, потому́ что, но)?",
    "¿El aspecto dice lo que quieres: proceso o resultado?"];
  /* Frases de un texto del alumno (06/10/2026): termina una frase el punto, ! o ?, y también el
     cambio de renglón (muchos escriben una frase por renglón sin punto) */
  function azFrases(t) { return String(t || "").split(/(?<=[.!?…])\s*|\n+/).map(x => x.trim()).filter(x => ES ? /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/.test(x) : /[А-Яа-яЁё]/.test(x)); }
  function azContarPalabras(t) { return (t.match(ES ? /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ-]+/g : /[А-Яа-яЁё\u0301-]+/g) || []).length; }
  function AzTaller({ tarea, c, green, clave, fuente, aviso }) {
    const [d, setD] = useState({ paso: 0, plan: "", v1: "", v2: "" });
    const [rev, setRev] = useState(null);
    useEffect(() => { (async () => { const g = await azGet(clave, null); if (g) setD(Object.assign({ paso: 0, plan: "", v1: "", v2: "" }, g)); })(); }, [clave]);
    const guardar = cambio => { const nd = Object.assign({}, d, cambio); setD(nd); azSet(clave, nd); };
    const req = tarea.requisitos || [];
    const ok = t => req.map(r => !!r.fn(t));
    const [min, max] = tarea.palabras;
    const contador = t => { const n = azContarPalabras(t), bien = n >= min && n <= max;
      return h("div", { style: { fontSize: 13.5, marginTop: 8, fontWeight: 700, color: bien ? green : c.textMuted } }, n + " palabras · meta: " + min + "–" + max); };
    const lista = t => req.length > 0 && h("div", { className: "u-card", style: { padding: "8px 16px", marginTop: 12 } }, ok(t).map((b, i) =>
      h("div", { key: i, className: "req" }, h("span", { style: { color: b ? green : c.textMuted, fontWeight: 800 } }, b ? "✓" : "○"), h("span", { style: { color: b ? c.text : c.textSub } }, req[i].txt))));
    const ir = n => { setRev(null); guardar({ paso: n, v2: n === 3 && !d.v2 ? d.v1 : d.v2 }); window.scrollTo(0, 0); };
    const paso = d.paso;
    const puede = [true, !!d.v1.trim(), !!d.v1.trim(), !!d.v1.trim()];
    const area = (k, lang, ph) => h("textarea", { className: "proy", lang, value: d[k], placeholder: ph, onInput: e => { setRev(null); guardar({ [k]: e.target.value }); } });
    const revision = t => azRevisarTexto(t, req, tarea.consejos || []);
    const cajaRev = r => r && h("div", { className: "u-card", style: { padding: "12px 16px", marginTop: 12 } },
      !r.dudas.length && !r.faltan.length && !r.tips.length && h("div", { style: { color: green, fontWeight: 700, fontSize: 14 } }, "✓ No encontré errores y están todos los puntos."),
      r.dudas.map((x, i) => h("div", { key: "d" + i, className: "u-truco", lang: "ru" }, "«" + x.t + "» no la encuentro en el diccionario" + (x.sugerencia ? ". ¿Quisiste decir «" + x.sugerencia + "»?" : ": revisa cómo se escribe."))),
      r.tips.map((x, i) => h("div", { key: "t" + i, className: "u-truco" }, azFmt(x))),
      r.faltan.length > 0 && h("div", { className: "u-truco" }, "Falta: " + r.faltan.join(", ").toLowerCase() + "."),
      h("div", { style: { fontSize: 12, color: c.textMuted, marginTop: 8, lineHeight: 1.5 } }, "La revisión encuentra palabras mal escritas y errores típicos, pero no corrige toda la gramática."));
    const texto = (t, titulo) => h("div", { className: "u-card", style: { padding: "12px 16px", marginTop: 12 } },
      h("div", { style: { fontSize: 11, fontWeight: 700, letterSpacing: 1.2, color: c.gold, textTransform: "uppercase" } }, titulo),
      h("div", { lang: "ru", style: { fontSize: 16, lineHeight: 1.55, marginTop: 6, whiteSpace: "pre-wrap", color: c.text } }, t));
    return h("div", null,
      h("div", { className: "u-card", style: { padding: "10px 14px", marginTop: 14, display: "flex", gap: 6, flexWrap: "wrap" } }, AZ_TALLER_PASOS.map((p, i) =>
        h("button", { key: p, className: "ubtn" + (i === paso ? "" : " sec"), style: { marginTop: 0, flex: "1 1 40%", fontSize: 13.5, padding: "9px 6px" }, disabled: !puede[i], onClick: () => ir(i) }, (i + 1) + " · " + p))),
      h("div", { className: "u-sec" }, "Paso " + (paso + 1) + " de 4 · " + AZ_TALLER_PASOS[paso]),
      paso === 0 && h(React.Fragment, null,
        h("p", { className: "u-text", style: { fontSize: 14.5 } }, "Antes de escribir, anota tus ideas: palabras sueltas, en ruso o en español. Estas preguntas te pueden guiar:"),
        h("div", { className: "u-card", style: { padding: "8px 16px", marginTop: 8 } }, tarea.ideas.map((q, i) => h("div", { key: i, className: "req" }, h("span", { style: { color: c.gold, fontWeight: 800 } }, "·"), h("span", null, azFmt(q))))),
        area("plan", "es", "Tus ideas…"),
        h("button", { className: "ubtn", onClick: () => ir(1) }, "Escribir el texto")),
      paso === 1 && h(React.Fragment, null,
        aviso && h("div", { className: "u-dest" }, aviso),
        d.plan.trim() && texto(d.plan, "Tus ideas"),
        area("v1", "ru", "Escribe en ruso…"), contador(d.v1), lista(d.v1),
        h("button", { className: "ubtn", disabled: !d.v1.trim(), onClick: () => ir(2) }, "Revisar")),
      paso === 2 && h(React.Fragment, null,
        texto(d.v1, "Tu primera versión"),
        h("button", { className: "ubtn sec", onClick: () => setRev(revision(d.v1)) }, "Revisión automática"),
        cajaRev(rev),
        h("div", { className: "u-sec" }, "Revísalo tú"),
        h("div", { className: "u-card", style: { padding: "8px 16px" } }, AZ_TALLER_CHEQUEO.map((q, i) => h("div", { key: i, className: "req" }, h("span", { style: { color: c.gold, fontWeight: 800 } }, "?"), h("span", null, q)))),
        h("button", { className: "ubtn", onClick: () => ir(3) }, "Reescribir")),
      paso === 3 && h(React.Fragment, null,
        h("p", { className: "u-text", style: { fontSize: 14.5 } }, "Corrige lo que encontraste y mejóralo: suma un conector, una razón o un detalle. La primera versión queda guardada."),
        area("v2", "ru", "Tu versión final…"), contador(d.v2), lista(d.v2),
        h("button", { className: "ubtn sec", disabled: !d.v2.trim(), onClick: () => setRev(revision(d.v2)) }, "Revisar la versión final"),
        cajaRev(rev),
        d.v2.trim() && d.v2 !== d.v1 && h(React.Fragment, null, h("div", { className: "u-sec" }, "Antes y después"), texto(d.v1, "Primera versión"), texto(d.v2, "Versión final")),
        h("div", { style: { display: "flex", gap: 8, marginTop: 12 } },
          h("button", { className: "ubtn sec", style: { marginTop: 0 }, disabled: !d.v2.trim(), onClick: () => azHablarRu(d.v2) }, "▶ Escucharlo"),
          h("button", { className: "ubtn", style: { marginTop: 0 }, disabled: !d.v2.trim(), onClick: () => azGuardarEnCuaderno(d.v2, fuente) }, "＋ Cuaderno"))));
  }

  /* Portada: kicker, título, objetivo, barras de progreso, «Practicar la unidad» y módulos */
  function AzPortadaUnidad({ u, c, green, progreso, visto, onPracticar, onAbrir, examen, extraModulo }) {
    return h("div", { style: { animation: "fadeIn 0.3s ease", paddingTop: 18 } },
      h("div", { className: "u-kicker" }, (ES ? "Урок " : "Unidad ") + u.id),
      h("h1", { className: "u-title" }, u.titulo),
      h("div", { className: "u-ru", lang: LL }, ES ? u.tituloEs : u.tituloRu),
      h("p", { className: "u-text", style: { marginTop: 12, fontSize: 14 } }, u.objetivo),
      h("div", { style: { fontSize: 13, color: c.textMuted, marginTop: 6 } }, T("Tiempo estimado: ") + u.tiempo),
      h("div", { className: "u-card", style: { padding: "14px 16px", marginTop: 18 } },
        progreso.map((p, k) => h("div", { key: k, style: { marginTop: k ? 14 : 0 } },
          h("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline" } },
            h("span", { style: { fontSize: 14, fontWeight: 700, color: c.text } }, p.label),
            h("span", { style: { fontSize: 14, fontWeight: 800, color: green } }, p.valor + (ES ? " из " : " de ") + p.total)),
          h("div", { className: "pbar-track" }, h("div", { className: "pbar-fill", style: { width: (p.valor / Math.max(1, p.total) * 100) + "%" } })))),
        h("div", { style: { fontSize: 12, color: c.textMuted, marginTop: 10, lineHeight: 1.5 } }, T("Se marcan solas cuando las aciertas en ejercicios distintos, en días distintos. También puedes marcarlas a mano en las tarjetas."))),
      h("button", { className: "ubtn", onClick: onPracticar }, T("Practicar la unidad")),
      h("div", { style: { fontSize: 12.5, color: c.textMuted, marginTop: 6, textAlign: "center" } }, ES ? "Упражнения по всему пройденному до модуля " + visto + "." : "Ejercicios de todo lo que viste hasta el módulo " + visto + "."),
      h("div", { className: "u-sec" }, T("Módulos")),
      u.modulos.map(m => {
        const off = m.tipo === "pronto";
        return h("div", { key: m.id, className: "u-card mod" + (off ? " off" : ""), role: off ? null : "button", tabIndex: off ? -1 : 0,
          onClick: () => !off && onAbrir(m.id), onKeyDown: e => { if (!off && e.key === "Enter") onAbrir(m.id); } },
          h("div", { className: "mod-n" }, String(m.n).padStart(2, "0")),
          h("div", { style: { flex: 1, minWidth: 0 } },
            h("div", { className: "mod-t" }, m.titulo, off && h("span", { className: "tag-pronto" }, T("Pronto"))),
            h("div", { className: "mod-d" }, azFmt(m.resumen)),
            extraModulo && extraModulo(m),
            m.tipo === "examen" && examen && h("div", { style: { fontSize: 12.5, fontWeight: 700, marginTop: 6, color: examen.aprobado ? green : "#E2884A" } },
              (ES ? "Последняя: " : "Última: ") + examen.pct + " %" + (examen.aprobado ? T(" · aprobada") : ""))));
      }));
  }

  /* Cuántos ejercicios tiene una práctica: como no se repite un mismo grupo
     (la misma palabra o frase) en una sesión, nunca más que los grupos distintos. */
  function azNPractica(pool, n) {
    const grupos = new Set(pool.map(e => e.grupo || e.id)).size;
    return Math.min(n || 12, grupos, pool.length);
  }

  /* Barra de abajo en la portada de una unidad: ‹ Unidad N › */
  function azTabsUnidad(n) {
    const lista = (typeof AZ_UNITS !== "undefined" ? AZ_UNITS : []).filter(u => u.lista);
    const k = lista.findIndex(u => u.id === n);
    const ir = u => () => { if (u) location.href = u.href; };
    const prev = lista[k - 1], next = lista[k + 1];
    return [
      { id: "uprev", icon: "‹", aria: prev ? (ES ? "Урок " : "Unidad ") + prev.id : T("Anterior"), disabled: !prev, action: ir(prev) },
      { id: "uact", texto: (ES ? "Урок " : "Unidad ") + n },
      { id: "unext", icon: "›", aria: next ? (ES ? "Урок " : "Unidad ") + next.id : T("Siguiente"), disabled: !next, action: ir(next) }
    ];
  }

  /* Tabla de grupos de palabras relacionadas (país · él · ella; estudiar · hablar).
     Celdas { id?, ru, es }: se tocan para escucharlas; sin ▶, con una nota arriba. */
  /* Celdas unidas (03/10/2026): { ru, es, filas: 2 } ocupa dos filas; en la fila
     de abajo, esa columna va como false (no se dibuja). */
  function AzTablaGrupos({ encabezados, filas, c }) {
    const celda = (x, k) => {
      if (x === false) return null;
      const meta = x && (ES ? x.es : x.ru), trad = x && (ES ? x.ru : x.es);   /* Abecé: { es, ru } */
      if (!x || !meta) return h("td", { key: k }, "—");
      return h("td", { key: k, rowSpan: x.filas || 1, style: x.filas ? { verticalAlign: "middle" } : null },
        h("button", { className: "grp-w", onClick: () => hablar(meta), lang: LL }, h("span", { className: "grp-ru" }, meta)),
        trad && h("div", { className: "grp-es", lang: ES ? "ru" : "es" }, trad));
    };
    return h(React.Fragment, null,
      h("div", { className: "u-text", style: { fontSize: 13, marginTop: 8 } }, T("Toca una palabra para escuchar cómo suena.")),
      h("div", { className: "grp-wrap", style: { marginTop: 8 } }, h("table", { className: "grp" + (encabezados.length >= 4 ? " compacta" : "") },
        h("thead", null, h("tr", null, encabezados.map((t, k) => h("th", { key: k }, t)))),
        h("tbody", null, filas.map((f, i) => h("tr", { key: i }, f.map(celda)))))));
  }

  /* Revisión de un texto libre: palabras que no existen (con sugerencia),
     consejos de la unidad y requisitos que faltan. Todo local. */
  /* Abecé (28/10/2026): las palabras que existen en español (léxico, femeninos, formas y conjugaciones) */
  let CONOCIDAS_ES = null;
  function conocidasEs() {
    if (CONOCIDAS_ES) return CONOCIDAS_ES;
    const s = new Set();
    if (typeof LEXICON_ES !== "undefined") LEXICON_ES.forEach(e => { e.es.toLowerCase().split(/\s+/).forEach(x => s.add(x)); if (e.femenino && e.femenino.es) s.add(e.femenino.es.toLowerCase()); });
    if (typeof formasEsIndice === "function") Object.keys(formasEsIndice()).forEach(k => s.add(k));
    if (typeof ALFABETO_ES !== "undefined") ALFABETO_ES.forEach(l => String(l.name).toLowerCase().split(/[\s,]+/).forEach(x => x && s.add(x)));   /* pe, erre, uve: deletrear */
    if (typeof VERBOS_ES !== "undefined") Object.values(VERBOS_ES).forEach(v => Object.keys(v).forEach(k => { const x = v[k]; (Array.isArray(x) ? x : typeof x === "string" && /^(impTu|ger|part)$/.test(k) ? [x] : []).forEach(f => f && s.add(String(f).toLowerCase())); }));
    return (CONOCIDAS_ES = s);
  }
  function azRevisarTexto(txt, requisitos, consejos) {
    const norm = t => ES ? t.toLowerCase() : t.replace(/\u0301/g, "").replace(/ё/g, "е").toLowerCase();
    let conocidas;
    if (ES) conocidas = conocidasEs();
    else {
      const idx = typeof azIndiceFormas === "function" ? azIndiceFormas() : new Map();
      conocidas = new Set(idx.keys());
      if (typeof LEXICON_COMER !== "undefined") LEXICON_COMER.forEach(e => conocidas.add(norm(e.ru)));
    }
    /* Los nombres propios en mitad de la frase (Ману, Ле́на) no se revisan */
    const tokens = [];
    const rx = ES ? /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(?:-[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)*/g : /[А-Яа-яЁё\u0301]+(?:-[А-Яа-яЁё\u0301]+)*/g; let m;
    while ((m = rx.exec(txt))) {
      const antes = txt.slice(0, m.index).replace(/\s+$/, "");
      const inicio = !antes || /[.!?¿¡—–-]$/.test(antes);
      if ((ES ? /^[A-ZÁÉÍÓÚÜÑ]/ : /^[А-ЯЁ]/).test(m[0]) && !inicio) continue;
      const k = norm(m[0]); if (tokens.indexOf(k) < 0) tokens.push(k);
    }
    const dudas = [];
    tokens.forEach(t => {
      if (conocidas.has(t)) return;
      let mejor = null, dist = 3;
      conocidas.forEach(k => {
        if (Math.abs(k.length - t.length) > 1 || k[0] !== t[0]) return;
        const d = azDiff(t, k).dist; if (d < dist) { dist = d; mejor = k; }
      });
      dudas.push({ t, sugerencia: mejor });
    });
    const n = norm(txt);
    const faltan = (requisitos || []).filter(r => !(r.fn ? r.fn(txt) : new RegExp(r.rx).test(n))).map(r => r.txt);
    /* Consejo: rx + msg, o fn(texto) → lista de mensajes (02/10/2026) */
    const tips = [].concat(...(consejos || []).map(k => k.fn ? (k.fn(txt) || []) : new RegExp(k.rx).test(n) ? [k.msg] : []));
    return { dudas, faltan, tips };
  }

  Object.assign(window, { AzEstilosUnidad, AzSecciones, azRegla, AzHojaRegla, azFmtLink, azFrases, AzVocabulario, AzFrasesLista, AzListaDialogos, AzGrabadora, AzHojaDialogo,
    AzTarjetasPalabras, AzMapaExplorar, AzProyecto, AzTaller, azContarPalabras, AzPortadaUnidad, AzTablaGrupos, azTabsUnidad, azRevisarTexto, azNPractica });
})();
