🚀 Dev-Log: Mi Viaje en el Desarrollo

Una bitácora de aprendizaje elegante y minimalista para estudiantes y desarrolladores.

Este proyecto es una mini app construida con IA (Vibe Coding) y gestionada con Git — diseñada para registrar conceptos, aprendizajes y avances en forma de pequeñas fichas (cards).

---

✨ Características principales

- Interfaz moderna con glassmorphism y gradientes suaves
- Crear nuevas entradas (cards) con fecha automática
- Animación popIn al insertar nuevas cards
- Contador de entradas en tiempo real
- Diseño responsive, sin frameworks ni librerías externas

---

🛠️ Tecnologías

- HTML5 semántico
- CSS3 moderno (variables, gradientes, animaciones)
- Vanilla JavaScript (ES6+)

---

📁 Estructura del proyecto

- `index.html` — marcado semántico y layout principal
- `style.css` — estilos, variables y animaciones
- `script.js` — lógica para crear y renderizar cards
- `PROMPT.md` — prompt usado para generar esta estructura (LLM)

---

🚀 Cómo abrir el proyecto localmente

Opciones recomendadas:

- Usar la extensión **Live Server** de VS Code (recomendado):
	1. Instala la extensión "Live Server" desde el Marketplace (`ritwickdey.LiveServer`).
	2. Abre la carpeta del proyecto en VS Code, abre `index.html` y haz clic en "Go Live" o botón derecho -> "Open with Live Server".
	3. Live Server servirá tu proyecto y abrirá una URL local (por ejemplo `http://127.0.0.1:5500/index.html`).

- Alternativa rápida con Python 3 (si no usas VS Code):
	```bash
	# desde la carpeta del proyecto
	python3 -m http.server 8000
	# abre http://localhost:8000 en tu navegador
	```

- Abrir directamente en macOS (solo para visualización local de archivo):
	```bash
	open index.html
	```

---

💡 Sugerencias de uso

- Empieza por la tarjeta de ejemplo que aparece al cargar la página.
- Escribe ideas pequeñas: un concepto, una nota o un avance, y pulsa "Guardar entrada".
- Usa el contador superior para llevar el control de tu progreso.

---

📚 ¿Quieres reproducir este proyecto con una LLM?

El prompt completo utilizado para generar la estructura y las instrucciones está en `PROMPT.md`.

---

