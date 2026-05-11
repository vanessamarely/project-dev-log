Actúa como Senior Frontend Developer (UX/UI).

Proyecto: Dev-Log. Modifica solo: `index.html`, `style.css`, `script.js`.
No crear archivos nuevos, no ejecutar comandos, no añadir dependencias.

Objetivo (resumen corto): convertir la interfaz en un dashboard oscuro moderno de bitácora con:
- Fondo #0f172a; contenedor centrado max-width 1120px.
- Hero centrado: título “Dev-Log” grande con gradiente morado↔celeste y subtítulo “Documenta tu viaje en el código”.
- Panel ancho “Nueva Entrada” (no lateral) con título+ícono, textarea grande, a la izquierda los íconos `<>` y `🖼️`, a la derecha `select` categoría y botón `Guardar Entrada ➤`.
- Sección “Entradas Recientes” con icono, título y link “Ver todas”.
- Grid: 2 columnas en desktop, 1 en móvil.
- Cards: oscuras, glassmorphism, borde sutil, fecha arriba-izquierda, badge arriba-derecha (por defecto `APRENDIZAJE`), texto, divider, footer con corazón y comentarios.
- FAB circular `+` bottom-right.

Funcionalidad mínima:
- Crear entradas desde textarea, insertar al inicio.
- Fecha automática, badge por defecto `aprendizaje`.
- Limpiar textarea después de guardar.
- Animación `popIn` en nuevas cards; remover clase al `animationend`.
- Eliminar entrada con confirmación.

Restricciones técnicas:
- HTML5 semántico; CSS3 con variables, gradientes y glassmorphism; JS ES6+ (const/let, arrow, template literals).
- No frameworks, no librerías externas.
- No usar `innerHTML` para texto de usuario; usar `textContent`/DOM APIs.

Salida requerida (solo esto, sin explicaciones adicionales): devolver únicamente los contenidos completos actualizados de, en este orden:
1) `index.html`
2) `style.css`
3) `script.js`

Optimización de tokens: mantén el prompt breve; evita ejemplos y explicaciones largas; pide explícitamente "devuelve solo los 3 archivos".

Fin del prompt compacto.