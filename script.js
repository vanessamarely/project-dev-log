// script.js — lógica principal para crear y mostrar tarjetas
const entryForm = document.getElementById('entryForm');
const entryText = document.getElementById('entryText');
const entriesGrid = document.getElementById('entriesGrid');
const entryCountEl = document.getElementById('entryCount');

let entries = [];

// Formatea la fecha en formato legible
const formatDate = (d = new Date()) => {
  const opts = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(d).toLocaleDateString('es-ES', opts);
};

// Crea el elemento HTML para una card y la inserta en el grid
const createCard = (text, dateStr, prepend = true) => {
  const el = document.createElement('article');
  el.className = 'card popIn';
  el.innerHTML = `
    <div class="card__meta">
      <span class="badge">Aprendizaje</span>
      <time class="card__date">${dateStr}</time>
    </div>
    <div class="card__text">${escapeHtml(text)}</div>
  `;

  // Insertar en inicio o final
  if (prepend && entriesGrid.firstChild) entriesGrid.insertBefore(el, entriesGrid.firstChild);
  else entriesGrid.appendChild(el);

  // Remover la clase de animación al terminar
  el.addEventListener('animationend', () => el.classList.remove('popIn'));
  return el;
};

// Actualiza el contador visible
const updateCount = () => { entryCountEl.textContent = String(entries.length); };

// Escapa HTML para evitar inyección básica
const escapeHtml = (str) => {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};

// Maneja el submit del formulario
entryForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = entryText.value.trim();
  if (!text) return;

  const dateStr = formatDate();
  entries.unshift({ text, date: new Date() });
  createCard(text, dateStr, true);
  updateCount();
  entryText.value = ''; // limpiar textarea
  entryText.focus();
});

// Insertar una tarjeta de ejemplo al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const exampleText = 'Ejemplo: Aprendí a usar variables de entorno y a organizar mi bitácora en pequeñas fichas.';
  entries.push({ text: exampleText, date: new Date() });
  createCard(exampleText, formatDate(entries[0].date), true);
  updateCount();
});
