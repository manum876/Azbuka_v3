#!/usr/bin/env bash
# Corre todos los verificadores de AZBUKA en orden y muestra un resumen al final.
# Uso (desde cualquier carpeta):  bash herramientas/verificar/correr-todo.sh
cd "$(dirname "$0")"
[ -d node_modules/playwright ] || npm install --silent >/dev/null 2>&1 || echo "Aviso: no se pudo instalar Playwright (¿hay uno global?)"
declare -A R
for v in integridad recorrido practicas examen sin-conexion pantallas; do
  echo; echo "════════ $v ════════"
  if node "$v.js"; then R[$v]="✓"; else R[$v]="✗"; fi
done
echo; echo "════════ Resumen ════════"
for v in integridad recorrido practicas examen sin-conexion pantallas; do echo "  ${R[$v]}  $v"; done
