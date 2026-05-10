Dev-Log

Pequeña bitácora frontend llamada **Dev-Log**. Es una mini app para que estudiantes registren conceptos, aprendizajes y avances mediante pequeñas fichas (cards).

Estructura mínima (raíz del proyecto):

- `index.html`
- `style.css`
- `script.js`

Comandos para crear la carpeta y los archivos:

```bash
mkdir -p dev-log
cd dev-log
touch index.html style.css script.js
```

Instrucciones para abrir el proyecto en tu navegador:

- Abrir directamente (macOS):
	```bash
	open index.html
	```
 - Usar la extensión **Live Server** de VS Code (recomendado):
   1. Instala la extensión "Live Server" desde el Marketplace (`ritwickdey.LiveServer`).
   2. Abre la carpeta del proyecto en VS Code, abre `index.html` y haz clic en "Go Live" (esquina inferior derecha) o botón derecho -> "Open with Live Server".
   3. Live Server servirá tu proyecto y abrirá una URL local (por ejemplo `http://127.0.0.1:5500/index.html`).

Prompt para ejecutar en tu LLM preferida (usa exactamente este prompt para generar un proyecto similar):

```
Actúa como un Senior Frontend Developer y mentor especializado en UX.

Necesito que generes un proyecto frontend llamado "Dev-Log".

Objetivo del proyecto:
Dev-Log será una bitácora de aprendizaje donde el estudiante podrá crear memo fichas o cards para registrar conceptos, aprendizajes y avances.

Tecnologías:
- HTML5 semántico
- CSS3 moderno con variables, gradientes suaves, glassmorphism ligero, animaciones y diseño responsive
- Vanilla JavaScript ES6+
	- Usar const/let
	- Usar arrow functions
	- Usar template literals
	- No usar var
	- No usar sintaxis legacy de ES5
	- Mantener código limpio, modular y legible
	- Usar funciones pequeñas y reutilizables
- Sin frameworks
- Sin librerías externas

Estructura solicitada:

dev-log/
├── index.html
├── style.css
├── script.js

Dirección visual para esta primera versión:
- La página debe sentirse como una mini app moderna.
- Fondo oscuro azul noche #0f172a.
- Hero centrado con título grande “Dev-Log” usando gradiente morado/celeste.
- Subtítulo breve debajo del hero.
- Panel superior ancho para crear entradas, con fondo translúcido tipo glassmorphism suave.
- Textarea grande, oscuro y redondeado.
- Botón principal con gradiente azul/morado y efecto hover.
- Sección de “Entradas recientes” debajo del formulario.
- Cards en grid responsive, con fondo translúcido, borde sutil, bordes redondeados y sombra suave.
- Badges simples para las cards, por ejemplo “Aprendizaje”.
- Animación popIn al crear nuevas cards.
- Mantener el diseño bonito, pero sin agregar funcionalidades avanzadas todavía.

Funcionalidad inicial:
- Mostrar una tarjeta de ejemplo al cargar la página.
- Permitir escribir una nueva entrada.
- Crear una card nueva con el texto ingresado y la fecha actual.
- Insertar la nueva card al inicio de la lista.
- Limpiar el textarea después de guardar.
- Aplicar una animación simple popIn a la nueva card.
- Quitar la clase de animación cuando termine.
- Actualizar un contador de entradas.

Entrega requerida:
1) Comandos de terminal para crear la carpeta y los archivos.
2) Contenido completo de:
	 - index.html
	 - style.css
	 - script.js
3) Indicaciones claras para abrir el proyecto en el navegador.

Restricciones:
- No generar archivos adicionales fuera de los listados.
- No usar frameworks.
- No usar librerías externas.

Formato de la respuesta:
- Separar claramente cada archivo.
- Agregar comentarios breves solo en partes importantes del código.

```

---

