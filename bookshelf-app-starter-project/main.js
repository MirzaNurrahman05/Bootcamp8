// =============================================
//  BOOKSHELF APP — main.js
// =============================================

const STORAGE_KEY = 'BOOKSHELF_APP';

// ---- Data Store ----
let books = [];

// ---- Load from localStorage ----
function loadBooks() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try { books = JSON.parse(raw); } catch { books = []; }
  }
}

// ---- Save to localStorage ----
function saveBooks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

// ---- Generate unique ID ----
function generateId() {
  return Date.now() + Math.floor(Math.random() * 10000);
}

// ---- Toast Notification ----
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// ---- Update Stats ----
function updateStats() {
  const total   = books.length;
  const done    = books.filter(b => b.isComplete).length;
  const incomplete = total - done;

  document.getElementById('totalBooks').textContent = total;
  document.getElementById('doneBooks').textContent  = done;
  document.getElementById('incompleteCount').textContent = incomplete;
  document.getElementById('completeCount').textContent   = done;
}

// ---- Create Book Card Element ----
function createBookCard(book) {
  const card = document.createElement('div');
  card.setAttribute('data-bookid', book.id);
  card.setAttribute('data-testid', 'bookItem');

  const isCompleteLabel = book.isComplete ? 'Belum selesai dibaca' : 'Selesai dibaca';

  card.innerHTML = `
    <div class="book-info">
      <h3 data-testid="bookItemTitle">${escapeHtml(book.title)}</h3>
      <p data-testid="bookItemAuthor">Penulis: ${escapeHtml(book.author)}</p>
      <p data-testid="bookItemYear">Tahun: ${escapeHtml(String(book.year))}</p>
    </div>
    <div class="book-actions">
      <button data-testid="bookItemIsCompleteButton">${isCompleteLabel}</button>
      <button data-testid="bookItemEditButton">Edit Buku</button>
      <button data-testid="bookItemDeleteButton">Hapus Buku</button>
    </div>
  `;

  // Toggle complete
  card.querySelector('[data-testid="bookItemIsCompleteButton"]').addEventListener('click', () => {
    toggleComplete(book.id);
  });

  // Delete
  card.querySelector('[data-testid="bookItemDeleteButton"]').addEventListener('click', () => {
    if (confirm(`Hapus buku "${book.title}"?`)) {
      deleteBook(book.id);
    }
  });

  // Edit
  card.querySelector('[data-testid="bookItemEditButton"]').addEventListener('click', () => {
    openEditModal(book.id);
  });

  return card;
}

// ---- Escape HTML ----
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ---- Render Books ----
function renderBooks(filter = '') {
  const incompleteList = document.getElementById('incompleteBookList');
  const completeList   = document.getElementById('completeBookList');

  // Clear (but keep empty-state elements)
  clearList(incompleteList);
  clearList(completeList);

  const query = filter.toLowerCase().trim();
  const filtered = query
    ? books.filter(b => b.title.toLowerCase().includes(query))
    : books;

  const incomplete = filtered.filter(b => !b.isComplete);
  const complete   = filtered.filter(b =>  b.isComplete);

  toggleEmptyState('emptyIncomplete', incomplete.length === 0);
  toggleEmptyState('emptyComplete',   complete.length === 0);

  incomplete.forEach(b => incompleteList.appendChild(createBookCard(b)));
  complete.forEach(b   => completeList.appendChild(createBookCard(b)));

  updateStats();
}

function clearList(container) {
  const children = Array.from(container.children);
  children.forEach(child => {
    if (!child.classList.contains('empty-state')) child.remove();
  });
}

function toggleEmptyState(id, show) {
  const el = document.getElementById(id);
  if (el) el.style.display = show ? 'block' : 'none';
}

// ---- Add Book ----
function addBook(title, author, year, isComplete) {
  const book = { id: generateId(), title, author, year: parseInt(year), isComplete };
  books.push(book);
  saveBooks();
  renderBooks();
  showToast(`📚 "${title}" berhasil ditambahkan!`, 'success');
}

// ---- Toggle Complete ----
function toggleComplete(id) {
  const book = books.find(b => b.id === id);
  if (!book) return;
  book.isComplete = !book.isComplete;
  saveBooks();
  renderBooks();
  const label = book.isComplete ? 'selesai dibaca ✅' : 'belum selesai dibaca 📖';
  showToast(`"${book.title}" dipindah ke rak ${label}`, 'edit');
}

// ---- Delete Book ----
function deleteBook(id) {
  const book = books.find(b => b.id === id);
  const title = book ? book.title : '';
  books = books.filter(b => b.id !== id);
  saveBooks();
  renderBooks();
  showToast(`🗑 "${title}" berhasil dihapus.`, 'delete');
}

// ---- Edit Modal ----
function openEditModal(id) {
  const book = books.find(b => b.id === id);
  if (!book) return;

  document.getElementById('editBookId').value      = book.id;
  document.getElementById('editTitle').value        = book.title;
  document.getElementById('editAuthor').value       = book.author;
  document.getElementById('editYear').value         = book.year;
  document.getElementById('editIsComplete').checked = book.isComplete;

  document.getElementById('editModal').style.display = 'flex';
}

function closeEditModal() {
  document.getElementById('editModal').style.display = 'none';
}

function saveEdit(id, title, author, year, isComplete) {
  const book = books.find(b => b.id === id);
  if (!book) return;
  book.title      = title;
  book.author     = author;
  book.year       = parseInt(year);
  book.isComplete = isComplete;
  saveBooks();
  renderBooks();
  closeEditModal();
  showToast(`✏️ "${title}" berhasil diperbarui!`, 'edit');
}

// ---- Update Submit Button Label ----
function updateSubmitLabel() {
  const isComplete = document.getElementById('bookFormIsComplete').checked;
  const label = document.getElementById('shelfLabel');
  if (label) label.textContent = isComplete ? 'Selesai Dibaca' : 'Belum Selesai';
}

// ---- Event Listeners ----
document.addEventListener('DOMContentLoaded', () => {
  loadBooks();
  renderBooks();

  // Add Book Form
  document.getElementById('bookForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const title      = document.getElementById('bookFormTitle').value.trim();
    const author     = document.getElementById('bookFormAuthor').value.trim();
    const year       = document.getElementById('bookFormYear').value;
    const isComplete = document.getElementById('bookFormIsComplete').checked;

    if (!title || !author || !year) return;

    addBook(title, author, year, isComplete);
    e.target.reset();
    updateSubmitLabel();
  });

  // Checkbox change → update button label
  document.getElementById('bookFormIsComplete').addEventListener('change', updateSubmitLabel);

  // Search Form
  document.getElementById('searchBook').addEventListener('submit', (e) => {
    e.preventDefault();
    const query = document.getElementById('searchBookTitle').value;
    renderBooks(query);
  });

  // Live search
  document.getElementById('searchBookTitle').addEventListener('input', (e) => {
    renderBooks(e.target.value);
  });

  // Edit Form
  document.getElementById('editForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const id         = parseInt(document.getElementById('editBookId').value);
    const title      = document.getElementById('editTitle').value.trim();
    const author     = document.getElementById('editAuthor').value.trim();
    const year       = document.getElementById('editYear').value;
    const isComplete = document.getElementById('editIsComplete').checked;

    if (!title || !author || !year) return;
    saveEdit(id, title, author, year, isComplete);
  });

  // Close Modal
  document.getElementById('closeModal').addEventListener('click', closeEditModal);
  document.getElementById('editModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('editModal')) closeEditModal();
  });

  // Keyboard shortcut — Escape to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeEditModal();
  });
});
