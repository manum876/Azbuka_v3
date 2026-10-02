/* ============================================================
   SW.JS — Service worker de Azbuka (blindaje, 02/10/2026)
   ------------------------------------------------------------
   Hace que la app funcione sin internet y que los datos se bajen
   una sola vez.

   · Al instalarse, guarda en el teléfono todos los archivos de la
     app (AZ_PRECACHE). Si alguno falla, sigue con el resto.
   · Estrategia «primero la red»: con internet, cada archivo se pide
     al servidor (el navegador solo baja lo que cambió) y se guarda
     la versión nueva; sin internet, o si la red tarda más de
     AZ_ESPERA ms, se usa la copia guardada. Así, al subir archivos
     nuevos a GitHub, los alumnos los reciben solos: no hay que
     cambiar ningún número de versión.
   · Las páginas con parámetros (ficha.html?id=…) se guardan una sola
     vez, sin el parámetro.

   Carpetas (desde el 02/10/2026): las páginas en la raíz, el código
   compartido en js/, los datos en data/ y fuentes, íconos y librerías
   en assets/.

   AL AGREGAR UN ARCHIVO A LA APP (una unidad nueva, un data-…js):
   sumarlo a AZ_PRECACHE con su carpeta. Si no está, igual se guarda la primera vez
   que el alumno lo abre con internet.
   ============================================================ */
const AZ_CACHE = "azbuka-v2";
const AZ_ESPERA = 4000;
const AZ_PRECACHE = [
  "./", "ajustes.html", "alfabeto.html", "azbuka-1.html", "azbuka-2.html", "azbuka-3.html",
  "azbuka-index-1.html", "casos.html", "cuaderno.html", "dialogos.html", "ficha.html",
  "index.html", "verbos.html", "manifest.webmanifest", "js/avisos.js", "js/burbuja.js",
  "js/core.js", "js/corrector.js", "js/mano.js", "js/progress.js", "js/shell.js",
  "js/unidad-ui.js", "js/unidad.js", "data/data-alphabet.js", "data/data-casos.js",
  "data/data-cultura.js", "data/data-dialogos.js", "data/data-frases.js", "data/data-gramatica.js",
  "data/data-lexicon.js", "data/data-mapa.js", "data/data-unidad-1.js", "data/data-unidad-2.js",
  "data/data-unidad-3.js", "data/data-verbos.js", "assets/apple-touch-icon.png", "assets/core.css",
  "assets/fflate.min.js", "assets/icon-192.png", "assets/icon-512.png",
  "assets/icon-maskable-512.png", "assets/jspdf.umd.min.js", "assets/marck-script.woff2",
  "assets/noto-sans-azbuka.woff2", "assets/noto-sans-pdf-400.ttf", "assets/noto-sans-pdf-700.ttf",
  "assets/preact.js"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(AZ_CACHE).then(cache =>
    Promise.allSettled(AZ_PRECACHE.map(u => cache.add(new Request(u, { cache: "no-cache" }))))
  ).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.indexOf("azbuka-") === 0 && k !== AZ_CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

function azClave(req) {
  const u = new URL(req.url);
  u.search = ""; u.hash = "";
  return u.href;
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  e.respondWith((async () => {
    const cache = await caches.open(AZ_CACHE);
    const clave = azClave(req);
    const red = fetch(req).then(r => {
      if (r && r.ok && r.type === "basic") cache.put(clave, r.clone());
      return r;
    });
    const guardada = await cache.match(clave);
    if (!guardada) {
      try { return await red; }
      catch (err) {
        if (req.mode === "navigate") { const ini = await cache.match(azClave(new Request("index.html"))); if (ini) return ini; }
        throw err;
      }
    }
    e.waitUntil(red.catch(() => {}));
    return Promise.race([
      red.then(r => (r && r.ok ? r : guardada)).catch(() => guardada),
      new Promise(res => setTimeout(() => res(guardada), AZ_ESPERA))
    ]);
  })());
});
