#!/usr/bin/env bash
# Corre todos los verificadores de AZBUKA y de Abecé en orden y muestra un resumen al final.
# Uso (desde cualquier carpeta):  bash herramientas/verificar/correr-todo.sh
# Desde el 22/11/2026, también Abecé: integridad-es.js y practicas, examen y pantallas con DIR=abece.
cd "$(dirname "$0")"
[ -d node_modules/playwright ] || npm install --silent >/dev/null 2>&1 || echo "Aviso: no se pudo instalar Playwright (¿hay uno global?)"
declare -A R
ORDEN=(integridad integridad-es recorrido practicas practicas@abece examen examen@abece sin-conexion pantallas pantallas@abece tamanos cuentas charlas)
for x in "${ORDEN[@]}"; do
  v="${x%@*}"; d=""; [ "$x" != "$v" ] && d="${x#*@}"
  echo; echo "════════ $v${d:+ ($d)} ════════"
  if DIR="$d" node "$v.js"; then R[$x]="✓"; else R[$x]="✗"; fi
done
echo; echo "════════ Resumen ════════"
for x in "${ORDEN[@]}"; do echo "  ${R[$x]}  ${x/@/ · }"; done
