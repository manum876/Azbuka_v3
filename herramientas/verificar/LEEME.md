# Verificadores de AZBUKA

Scripts para revisar la app entera antes de cada entrega. **No son parte de la app**: no los carga ninguna página ni el service worker. Los usa Claude en el chat (o cualquiera con Node 18 o más nuevo) sobre una copia del repo.

## Cómo se corren

```bash
git clone --depth 1 https://github.com/manum876/Azbuka_v3.git
cd Azbuka_v3
bash herramientas/verificar/correr-todo.sh        # todos, con resumen al final (unos 30–40 minutos)
node herramientas/verificar/practicas.js 8        # uno solo; las prácticas aceptan una unidad o un rango (5-9)
```

La primera vez, `correr-todo.sh` instala Playwright en esta carpeta (`npm install`). Si el entorno ya tiene Playwright y Chromium, los usa. Cada script levanta su propio servidor local (puerto 8765, o el de `AZ_PUERTO`) y termina con ✓ si no encontró nada o con ✗ y la lista de problemas.

## Qué revisa cada uno

| Script | Qué hace | Tarda |
|---|---|---|
| `integridad.js` | Léxico ↔ Verbos ↔ Casos ↔ Diálogos, frases, cultura y Alfabeto: orden de IDs, campos obligatorios, anclas `ru`, parejas que existen, todo verbo en Verbos y todo declinable en Casos, formas sin acento, `lex` y `lexId` que existen (Contexto §9.2 y §10). No usa el navegador. | segundos |
| `recorrido.js` | Abre a 390 × 844 el inicio, el índice, los módulos de apoyo, las 14 unidades y **cada módulo** de cada unidad. Busca errores de JavaScript, archivos que faltan y scroll horizontal. Revisa también el banco de cada unidad: ids repetidas, la correcta entre las opciones, que cada `regla` exista y qué tipos quedan fuera de la mezcla. | ~5 min |
| `practicas.js` | En cada unidad reemplaza (solo durante la prueba) el banco por **un ejercicio de cada tipo** y los responde todos, de a 5 por sesión: elige, escribe «мама», ordena, une, sigue cadenas y turnos. Avisa si un ejercicio se traba o tira un error, y comprueba que «📖 Repasar la regla» abra la teoría. Las capturas de los trabados quedan en la carpeta temporal del sistema. | ~15–20 min |
| `examen.js` | Rinde los seis bloques del examen final, entrega los dos textos de Escritura, comprueba que la portada marque 6 de 6 y que «Qué repasar» abra reglas de otras unidades. | ~3 min |
| `sin-conexion.js` | Compara `AZ_PRECACHE` (`sw.js`) con los archivos del repo y con lo que piden las páginas; instala el service worker, corta la red y abre las pantallas principales. | ~1 min |
| `pantallas.js` | Abre todas las pantallas a 375 × 667 (iPhone SE) en tema claro y busca contenido cortado o scroll horizontal. | ~5 min |
| `cuentas.js` | Con un Supabase **falso** (`supabase-falso.js`, no toca el real): pantalla de entrada, mail no habilitado, código malo y bueno, subida del progreso, otro teléfono que lo baja, sin servidor con la sesión guardada, Ajustes → Accesos (habilitar y quitar), alguien que queda afuera y «Eliminar mi cuenta». | ~1 min |
| `voz-cobertura.js` | Voces generadas (15/10/2026; aparte, no está en `correr-todo.sh`): arma la lista de `herramientas/voces/inventario.js`, abre cada módulo de cada unidad, toca todos los ▶ y lista lo que la app dice y no tiene audio (sonaría con la voz del teléfono). Hoy faltan, a propósito, las formas de las tablas de Casos y Verbos (tanda 3) y las horas de la U7. | ~3 min |

## Qué no revisa (hay que mirarlo en el iPhone)

La voz y el ■ para cortarla, la grabadora, el teclado abierto sobre las tarjetas, la Dynamic Island, la app instalada en modo avión, la velocidad de la primera carga con datos móviles, el dibujo con el dedo, la selección de texto para el cuaderno y el menú Compartir (PDF, Word, copia de seguridad). Tampoco el Supabase real: que lleguen los mails con el código y que Google funcione.

Tampoco el **verificador de palabras vistas** de las unidades (Contexto §10): se arma en cada chat según la unidad que se toca.

## Las cuentas, apagadas durante las pruebas

`comun.js` sirve `js/cuenta.js` con `url` y `clave` vacías, así las pruebas no ven la pantalla de entrada ni tocan el Supabase real. Solo `cuentas.js` prueba las cuentas, con un Supabase falso.

## Falsos avisos conocidos

- `recorrido.js`: en la Unidad 11, el tipo `dia` queda fuera de la mezcla a propósito (son las situaciones del proyecto «Мой день в Росси́и»).
- `practicas.js`: una sesión con un ejercicio menos de lo esperado suele ser ese mismo tipo.
- `pantallas.js` no cuenta los dibujos del mapa que quedan fuera de su recuadro.

## Archivos

`comun.js` (servidor y navegador compartidos), los siete verificadores, `supabase-falso.js` (para `cuentas.js`), `correr-todo.sh`, `package.json` y este archivo. Si se agrega un tipo de ejercicio con una forma nueva de responder, puede hacer falta enseñarle a `practicas.js` y `examen.js` cómo contestarlo.
