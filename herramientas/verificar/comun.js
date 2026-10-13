// Piezas compartidas de los verificadores de AZBUKA. Ver LEEME.md.
const path = require('path');
const http = require('http');
const fs = require('fs');
const RAIZ = path.resolve(__dirname, '..', '..');           // raíz del repo
const PUERTO = Number(process.env.AZ_PUERTO || 8765);
const BASE = `http://localhost:${PUERTO}/`;
const TIPOS = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css', '.png':'image/png',
  '.woff2':'font/woff2', '.ttf':'font/ttf', '.webmanifest':'application/manifest+json', '.svg':'image/svg+xml', '.json':'application/json', '.txt':'text/plain' };
// Servidor estático mínimo, para no depender de Python.
function servir() {
  return new Promise(ok => {
    const srv = http.createServer((req, res) => {
      let f = decodeURIComponent(req.url.split('?')[0]); if (f.endsWith('/')) f += 'index.html';
      const ruta = path.join(RAIZ, f);
      if (!ruta.startsWith(RAIZ) || !fs.existsSync(ruta) || fs.statSync(ruta).isDirectory()) { res.writeHead(404); return res.end('404'); }
      res.writeHead(200, { 'Content-Type': TIPOS[path.extname(ruta)] || 'application/octet-stream' });
      fs.createReadStream(ruta).pipe(res);
    }).listen(PUERTO, () => ok(srv));
  });
}
async function navegador() {
  const { chromium } = require('playwright');
  return chromium.launch();
}
module.exports = { RAIZ, BASE, servir, navegador };
