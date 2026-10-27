/* ============================================================
   DATA-CATALOGO.JS — Lo que llena el shell, por dirección (22/10/2026)

   El shell (js/shell.js) es un esqueleto: dibuja el encabezado, el menú
   y la barra de abajo, pero su contenido viene de acá: la marca y el lema,
   la lista de unidades, la de módulos de apoyo, el índice del curso, el
   buscador del menú y los textos del menú. Para cambiar unidades,
   módulos o textos, o para sumar una dirección, se toca este archivo,
   nunca shell.js (Contexto §5).

   Direcciones:
     azbuka → ruso para hispanohablantes (la app de hoy).
     abece  → español para rusohablantes. BLOQUEADA (abierta: false)
              hasta que esté terminada: nadie la ve. Para probarla mientras
              se construye: Ajustes → «Abecé en construcción», que solo ven
              el admin y los revisores (azDireccion() en js/core.js). Lo que
              abece todavía no tiene (unidades, módulos, índice) se toma de
              azbuka.

   lexico: el archivo del léxico de cada dirección. Lo carga el Diccionario
   (ficha.html) con azEscribirLexico() (core.js); el buscador del menú de
   Abecé (azBuscarEs) lo pide solo si la página no lo tiene (27/10/2026).

   Se carga en todas las páginas justo antes de js/core.js. Es «var» (no
   «const») para que core.js pueda leerlo también como respaldo.
   ============================================================ */
var AZ_CATALOGO = {
  azbuka: {
    id: "azbuka",
    abierta: true,
    marca: { nombre: "Азбука", lema: "Aprende ruso desde cero", glyph: "Аз", icon: "red" },
    indice: "azbuka-index-1.html",
    buscador: "azSearchLexicon",
    lexico: "data/data-lexicon.js",   /* el léxico de la dirección (27/10/2026): lo carga el Diccionario */
    /* Unidades del curso A1 → B1 (pasaron de core.js, 22/10/2026). Numeración
       desde el 06/10/2026 (Manu): 12 Gramática B1 · 13 Consolidación B1 ·
       14 Examen final (examen: true lo separa en el índice). lista: true la
       suma a las flechas ‹ › de la barra de abajo. */
    unidades: [
      { id: 1, title: "Alfabeto y pronunciación", desc: "Las 33 letras, sonidos y primeras palabras.", href: "azbuka-1.html", lista: true },
      { id: 2, title: "Presentaciones y conversaciones básicas", desc: "Saludar, presentarte, nacionalidades y primeras preguntas.", href: "azbuka-2.html", lista: true },
      { id: 3, title: "Sustantivos, género y números", desc: "Género, plural, números y objetos de todos los días.", href: "azbuka-3.html", lista: true },
      { id: 4, title: "Casos I: Nominativo y Acusativo", desc: "Quién hace qué: el sujeto y el objeto directo.", href: "azbuka-4.html", lista: true },
      { id: 5, title: "Verbos en presente y acciones cotidianas", desc: "Las conjugaciones del presente y la rutina.", href: "azbuka-5.html", lista: true },
      { id: 6, title: "Ubicación, movimiento y caso prepositivo", desc: "Dónde estás y adónde vas.", href: "azbuka-6.html", lista: true },
      { id: 7, title: "Tiempo, fechas y rutina diaria", desc: "Horas, días, meses y tu día a día.", href: "azbuka-7.html", lista: true },
      { id: 8, title: "Pasado y experiencias personales", desc: "Contar lo que pasó, terminado o en proceso: ayer, antes y ahora.", href: "azbuka-8.html", lista: true },
      { id: 9, title: "Futuro y planes", desc: "Hablar del futuro y hacer planes: lo que vas a hacer y lo que vas a terminar.", href: "azbuka-9.html", lista: true },
      { id: 10, title: "Casos II: Genitivo, Dativo e Instrumental", desc: "Los tres casos que faltan: tener, cantidades, a quién, con quién y con qué.", href: "azbuka-10.html", lista: true },
      { id: 11, title: "Comunicación cotidiana y ruso del mundo real", desc: "Situaciones reales: comprar, pedir, moverte por la ciudad, resolver problemas y charlar.", href: "azbuka-11.html", lista: true },
      { id: 12, title: "Gramática B1", desc: "Pronombres, свой y plural en todos los casos; cómo funcionan las parejas de verbos, el imperativo y comparar.", href: "azbuka-12.html", lista: true },
      { id: 13, title: "Consolidación B1 y comunicación", desc: "Contar, opinar, entender y escribir con autonomía.", href: "azbuka-13.html", lista: true },
      { id: 14, title: "Examen final", desc: "Seis bloques que evalúan las 13 unidades.", href: "azbuka-14.html", lista: true, examen: true },
    ],
    /* Módulos de apoyo (pasaron de core.js, 22/10/2026): icon es la clave de
       color de AZ_ICON_COLORS (core.js), glyph el texto del ícono. */
    modulos: [
      { id: "diccionario", title: "Diccionario", desc: "Todo el léxico, por tema y por categoría", href: "ficha.html", icon: "orange", glyph: "Сл" },
      { id: "alfabeto", title: "Alfabeto", desc: "Letras, sonidos y caligrafía — consulta libre", href: "alfabeto.html", icon: "yellow", glyph: "Аа" },
      { id: "dialogos", title: "Diálogos", desc: "Conversaciones, frases útiles y notas culturales", href: "dialogos.html", icon: "lime", glyph: "Ди" },
      { id: "lecturas", title: "Lecturas", desc: "Textos para leer y entender, con preguntas", href: "lecturas.html", icon: "green", glyph: "Чт" },
      { id: "masha", title: "Hablar con Masha", desc: "Charla por escrito con Masha, en ruso", href: "masha.html", icon: "cyan", glyph: "Ма" },
      { id: "verbos", title: "Verbos", desc: "Diccionario de verbos y conjugaciones", href: "verbos.html", icon: "blue", glyph: "Вб" },
      { id: "casos", title: "Casos", desc: "Declinaciones del ruso, los 6 casos", href: "casos.html", icon: "purple", glyph: "Пд" },
      { id: "cuaderno", title: "Cuaderno", desc: "Tus notas y lo que guardas desde la app", href: "cuaderno.html", icon: "pink", glyph: "Тд" },
    ],
    /* Textos del shell: menú, encabezado, barra de abajo, captura al cuaderno
       y la hoja «Reportar un error». */
    textos: {
      buscar: "Buscar en el léxico…",
      limpiarBusqueda: "Limpiar búsqueda",
      sinResultados: "Sin resultados",
      curso: "Azbuka",
      indice: "Índice",
      modulos: "Módulos de apoyo",
      ajustes: "Ajustes",
      inicio: "🏠 Inicio",
      atras: "Atrás",
      menu: "Menú",
      guardarCuaderno: "＋ Guardar en el cuaderno",
      guardadoCuaderno: "✓ Guardado en el cuaderno",
      pantallaInicio: "Inicio",
      reportar: "Reportar un error",
      reporteAyuda: "Ayuda",
      reporteIntro: "¿Algo no funciona, se ve mal o una respuesta está equivocada? Cuéntalo con tus palabras.",
      reporteQuePaso: "Qué pasó",
      reporteQuePasoEj: "Por ejemplo: escribo «кни́гу» y me lo marca mal…",
      reporteEsperabas: "Qué esperabas (opcional)",
      reporteEsperabasEj: "Por ejemplo: que estuviera bien.",
      reporteAdjunto1: "Se envía también, para encontrar el error: esta pantalla (",
      reporteAdjunto2: "), el tipo de teléfono y tu mail.",
      reporteEnviar: "Enviar",
      reporteEnviando: "Enviando…",
      reporteCancelar: "Cancelar",
      reporteCerrar: "Cerrar",
      reporteCorto: "Cuenta un poco más qué pasó.",
      reporteLimite: "Mandaste muchos reportes hoy. Prueba de nuevo mañana.",
      reporteFallo: "No se pudo enviar. Prueba de nuevo en un momento.",
      reporteEnviado: "✓ Enviado. ¡Gracias! Lo vamos a revisar.",
      reportePendiente: "No hay conexión: el reporte quedó guardado y se manda solo cuando vuelva internet.",
      reporteMail: "Se abrió tu app de correo con el reporte escrito: solo falta enviarlo.",
      /* Copia de seguridad (AzCopiaSeguridad en core.js, 27/10/2026) */
      copiaIntro: "Todo lo que haces en Azbuka (tus notas y tu progreso en unidades, letras y ejercicios) se guarda en este teléfono. Guarda una copia de vez en cuando, en Archivos o mandándotela por mail: si se borran los datos del navegador o cambias de teléfono, la restauras y sigues donde estabas.",
      copiaGuardar: "Guardar copia",
      copiaRestaurar: "Restaurar copia",
      copiaNoEs: "Ese archivo no es una copia de Azbuka.",
      copiaSoloCuaderno: "Esta es una copia solo del cuaderno. ¿Reemplazar tu cuaderno actual? El progreso no se toca.",
      copiaConfirmar: "¿Restaurar la copia{cuando}? Se reemplazan tus notas y todo tu progreso por los de la copia.",
      copiaDel: " del ",
      copiaFallo: "No se pudo restaurar la copia.",
      fecha: "es-AR",
    },
  },

  abece: {
    id: "abece",
    abierta: false,          /* bloqueada hasta que Abecé esté terminada (Manu, 22/10/2026) */
    marca: { nombre: "Abecé", lema: "Учи испанский с нуля", glyph: "Ab", icon: "red" },
    indice: null,            /* abece-index-1.html cuando exista; mientras, el de azbuka */
    buscador: "azBuscarEs",  /* busca en el léxico español, en español o en ruso (core.js, 27/10/2026) */
    lexico: "data/data-lexicon-es.js",
    unidades: [],            /* se definen con el programa del curso (Fase 5) */
    /* Módulos de apoyo (claude/INSTRUCCIONES_MODULOS_ABECE.md §9): en el mismo
       orden y con el mismo color que su equivalente de Azbuka, glifo de dos
       letras latinas. Se suman a medida que se construyen (27/10/2026: Diccionario).
       Orden final: Словарь · Алфавит и произношение · Диалоги · Чтение ·
       Болтаем с Лусией · Глаголы · Грамматика · Тетрадь. */
    modulos: [
      { id: "diccionario", title: "Словарь", desc: "Весь словарь, по темам и частям речи", href: "ficha.html", icon: "orange", glyph: "Dc" },
      { id: "cuaderno", title: "Тетрадь", desc: "Твои заметки и то, что ты сохраняешь в приложении", href: "cuaderno.html", icon: "pink", glyph: "Cu" },
    ],
    /* BORRADOR: falta la revisión de Iván. Al alumno se le habla de «ты»,
       como Azbuka usa «tú». Una clave que falte acá se muestra con el texto de azbuka. */
    textos: {
      buscar: "Поиск в словаре…",
      limpiarBusqueda: "Очистить поиск",
      sinResultados: "Ничего не найдено",
      curso: "Abecé",
      indice: "Оглавление",
      modulos: "Справочные разделы",
      ajustes: "Настройки",
      inicio: "🏠 Главная",
      atras: "Назад",
      menu: "Меню",
      guardarCuaderno: "＋ Сохранить в тетрадь",
      guardadoCuaderno: "✓ Сохранено в тетради",
      pantallaInicio: "Главная",
      reportar: "Сообщить об ошибке",
      reporteAyuda: "Помощь",
      reporteIntro: "Что-то не работает, плохо выглядит или ответ неверный? Опиши своими словами.",
      reporteQuePaso: "Что случилось",
      reporteQuePasoEj: "Например: пишу «casa», а ответ засчитан как ошибка…",
      reporteEsperabas: "Как должно быть (необязательно)",
      reporteEsperabasEj: "Например: что ответ верный.",
      reporteAdjunto1: "Чтобы найти ошибку, вместе с сообщением отправляются: этот экран (",
      reporteAdjunto2: "), модель телефона и твоя почта.",
      reporteEnviar: "Отправить",
      reporteEnviando: "Отправка…",
      reporteCancelar: "Отмена",
      reporteCerrar: "Закрыть",
      reporteCorto: "Расскажи чуть подробнее, что случилось.",
      reporteLimite: "Сегодня ты отправил слишком много сообщений. Попробуй завтра.",
      reporteFallo: "Не удалось отправить. Попробуй ещё раз чуть позже.",
      reporteEnviado: "✓ Отправлено. Спасибо! Мы всё проверим.",
      reportePendiente: "Нет соединения: сообщение сохранено и отправится само, когда появится интернет.",
      reporteMail: "Открылось почтовое приложение с готовым сообщением: осталось только отправить.",
      copiaIntro: "Всё, что ты делаешь в Abecé (заметки и прогресс в уроках, буквах и упражнениях), хранится в этом телефоне. Время от времени сохраняй копию в «Файлы» или отправляй её себе по почте: если данные браузера сотрутся или ты сменишь телефон, ты её восстановишь и продолжишь с того же места.",
      copiaGuardar: "Сохранить копию",
      copiaRestaurar: "Восстановить",
      copiaNoEs: "Этот файл не является копией приложения.",
      copiaSoloCuaderno: "Это копия только тетради. Заменить твою нынешнюю тетрадь? Прогресс не изменится.",
      copiaConfirmar: "Восстановить копию{cuando}? Твои заметки и весь прогресс заменятся данными из копии.",
      copiaDel: " от ",
      copiaFallo: "Не удалось восстановить копию.",
      fecha: "ru-RU",
    },
  },
};
