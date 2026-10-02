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

   AL AGREGAR UN ARCHIVO A LA APP (una unidad nueva, un data-…js):
   sumarlo a AZ_PRECACHE. Si no está, igual se guarda la primera vez
   que el alumno lo abre con internet.
   ============================================================ */
const AZ_CACHE = "azbuka-v1";
const AZ_ESPERA = 4000;
const AZ_PRECACHE = [
  "./", "index.html", "azbuka-index-1.html",
  "azbuka-1.html", "azbuka-2.html", "azbuka-3.html",
  "ficha.html", "alfabeto.html", "dialogos.html", "verbos.html", "casos.html", "cuaderno.html", "ajustes.html",
  "core.css", "core.js", "shell.js", "progress.js", "preact.js", "corrector.js", "burbuja.js", "mano.js",
  "unidad.js", "unidad-ui.js", "avisos.js",
  "data-lexicon.js", "data-casos.js", "data-verbos.js", "data-gramatica.js", "data-alphabet.js",
  "data-dialogos.js", "data-frases.js", "data-cultura.js", "data-mapa.js",
  "data-unidad-1.js", "data-unidad-2.js", "data-unidad-3.js",
  "jspdf.umd.min.js", "fflate.min.js",
  "noto-sans-azbuka.woff2", "marck-script.woff2", "noto-sans-pdf-400.ttf", "noto-sans-pdf-700.ttf",
  "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png"
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
