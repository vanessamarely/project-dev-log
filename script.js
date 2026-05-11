// script.js — lógica principal para crear y mostrar tarjetas (ES6+, sin innerHTML para texto de usuario)
const entryForm = document.getElementById('entryForm');
const entryText = document.getElementById('entryText');
const entryCategory = document.getElementById('entryCategory');
const entriesGrid = document.getElementById('entriesGrid');
const entryCountEl = document.getElementById('entryCount');
const emptyMessage = document.getElementById('emptyMessage');
const fab = document.getElementById('fab');

let entries = [];

const CATEGORY_LABEL = {
  aprendizaje: 'APRENDIZAJE',
  git: 'GIT',
  javascript: 'JAVASCRIPT',
  uiux: 'UI/UX',
  error: 'ERROR'
};

// Formatea la fecha en formato legible
const formatDate = (d = new Date()) => {
  const opts = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(d).toLocaleDateString('es-ES', opts);
};

// Crear badge seguro
const createBadge = (value) => {
  const span = document.createElement('span');
  span.className = `badge badge--${value}`;
  span.textContent = CATEGORY_LABEL[value] || value;
  return span;
};

// Crear card usando DOM APIs
const createCard = (entry) => {
  const { id, text, date, category } = entry;
  const article = document.createElement('article');
  article.className = 'card popIn';
  article.dataset.id = id;

  // meta (badge y fecha)
  const meta = document.createElement('div');
  meta.className = 'card__meta';
  const left = document.createElement('div');
  left.className = 'card__meta-left';
  const time = document.createElement('time');
  time.className = 'card__date';
  time.textContent = formatDate(date);
  left.appendChild(time);
  const badge = createBadge(category || 'aprendizaje');
  const right = document.createElement('div');
  right.className = 'card__meta-right';
  right.appendChild(badge);
  meta.appendChild(left);
  meta.appendChild(right);

  // texto principal (seguro)
  const content = document.createElement('div');
  content.className = 'card__text';
  content.textContent = text;

  // divider
  const divider = document.createElement('div');
  divider.className = 'divider';

  // footer con metadatos (corazón y comentarios)
  const footer = document.createElement('div');
  footer.className = 'card__footer';
  const statsLeft = document.createElement('div');
  statsLeft.className = 'card__meta-left';
  const heart = document.createElement('span');
  heart.textContent = '♡ 0';
  const comments = document.createElement('span');
  comments.textContent = '💬 0';
  statsLeft.appendChild(heart);
  statsLeft.appendChild(comments);

  // acciones a la derecha (eliminar)
  const statsRight = document.createElement('div');
  statsRight.className = 'card__meta-right';
  const btnDel = document.createElement('button');
  btnDel.type = 'button';
  btnDel.className = 'btn--ghost';
  btnDel.textContent = 'Eliminar';
  btnDel.addEventListener('click', () => handleDelete(id, article));
  statsRight.appendChild(btnDel);

  footer.appendChild(statsLeft);
  footer.appendChild(statsRight);

  article.appendChild(meta);
  article.appendChild(content);
  article.appendChild(divider);
  article.appendChild(footer);

  // quitar animación al terminar
  article.addEventListener('animationend', () => article.classList.remove('popIn'));
  return article;
};

// refresca contador y mensaje vacío
const refreshUI = () => {
  entryCountEl.textContent = String(entries.length);
  if (emptyMessage) emptyMessage.style.display = entries.length ? 'none' : 'block';
};

// añadir entrada al inicio
const addEntry = (text, category = 'aprendizaje') => {
  const id = Date.now().toString(36);
  const entry = { id, text, date: new Date(), category };
  entries.unshift(entry);
  const card = createCard(entry);
  if (entriesGrid.firstChild) entriesGrid.insertBefore(card, entriesGrid.firstChild);
  else entriesGrid.appendChild(card);
  refreshUI();
};

// eliminar con confirm
const handleDelete = (id, el) => {
  const ok = confirm('¿Eliminar esta entrada?');
  if (!ok) return;
  entries = entries.filter(e => e.id !== id);
  el.remove();
  refreshUI();
};

// formulario submit
entryForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = entryText.value.trim();
  if (!text) return;
  const category = entryCategory?.value || 'aprendizaje';
  addEntry(text, category);
  entryText.value = '';
  if (entryCategory) entryCategory.selectedIndex = 0;
  entryText.focus();
});

// FAB behavior
if (fab) {
  fab.addEventListener('click', () => {
    entryText.focus();
    entryText.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

// ejemplo inicial
document.addEventListener('DOMContentLoaded', () => {
  addEntry('Ejemplo: Empecé mi bitácora para anotar aprendizajes y soluciones.', 'aprendizaje');
  refreshUI();
});
