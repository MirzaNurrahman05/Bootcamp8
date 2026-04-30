const STORAGE_KEY = 'BOOKSHELF_APP_DATA';
let books = [];
let editingBookId = null;

// Element Referensi
const bookForm = document.getElementById('bookForm');
const inputTitle = document.getElementById('bookFormTitle');
const inputAuthor = document.getElementById('bookFormAuthor');
const inputYear = document.getElementById('bookFormYear');
const inputIsComplete = document.getElementById('bookFormIsComplete');
const submitBtnSpan = document.querySelector('#bookFormSubmit span');
const formTitle = document.getElementById('formTitle');
const bookFormSubmit = document.getElementById('bookFormSubmit');

const searchForm = document.getElementById('searchBook');
const searchInput = document.getElementById('searchBookTitle');

const incompleteBookList = document.getElementById('incompleteBookList');
const completeBookList = document.getElementById('completeBookList');

// Cek dukungan localStorage
function isStorageExist() {
if (typeof (Storage) === undefined) {
showToast('Browser kamu tidak mendukung local storage');
return false;
}
return true;
}

// Load data dari storage
function loadDataFromStorage() {
if (isStorageExist()) {
const serializedData = localStorage.getItem(STORAGE_KEY);
let data = JSON.parse(serializedData);
if (data !== null) books = data;
}
renderBooks();
}

// Save data ke storage
function saveData() {
if (isStorageExist()) {
const parsed = JSON.stringify(books);
localStorage.setItem(STORAGE_KEY, parsed);
}
}

// Buat Objek Buku
function generateBookObject(id, title, author, year, isComplete) {
return { id, title, author, year: Number(year), isComplete }; // Memastikan year bertipe number
}

// Update Teks Tombol Submit berdasarkan Checkbox
inputIsComplete.addEventListener('change', function() {
if (editingBookId) return; // Jika mode edit, teks tidak perlu berubah berdasarkan checkbox otomatis
submitBtnSpan.innerText = this.checked ? 'Selesai dibaca' : 'Belum selesai dibaca';
});

// Menambah atau Mengubah Buku
bookForm.addEventListener('submit', function (e) {
e.preventDefault();
const title = inputTitle.value;
const author = inputAuthor.value;
const year = inputYear.value;
const isComplete = inputIsComplete.checked;

if (editingBookId) {
// Mode Edit
const bookIndex = books.findIndex(book => book.id === editingBookId);
if (bookIndex !== -1) {
books[bookIndex] = generateBookObject(editingBookId, title, author, year, isComplete);
showToast('Data buku berhasil diperbarui!');
}
// Reset Mode
editingBookId = null;
formTitle.innerText = 'Tambah Buku Baru';
bookFormSubmit.innerHTML = 'Masukkan Buku ke rak ' + (isComplete ? 'Selesai dibaca' : 'Belum selesai dibaca') + '';
} else {
// Mode Tambah Baru
const id = +new Date(); // Generate ID unik berupa number
const newBook = generateBookObject(id, title, author, year, isComplete);
books.push(newBook);
showToast('Buku baru berhasil ditambahkan!');
}

saveData();
renderBooks();
bookForm.reset();
// Reset text checkbox state
submitBtnSpan.innerText = 'Belum selesai dibaca';
});

// Mencari Buku
searchForm.addEventListener('submit', function (e) {
e.preventDefault();
const query = searchInput.value.toLowerCase();
renderBooks(query);
});

searchInput.addEventListener('keyup', function (e) {
const query = e.target.value.toLowerCase();
renderBooks(query);
});

// Toggle Status Selesai Dibaca
function toggleComplete(id) {
const bookTarget = books.find(book => book.id === id);
if (bookTarget) {
bookTarget.isComplete = !bookTarget.isComplete;
saveData();
renderBooks(searchInput.value.toLowerCase());
showToast(bookTarget.isComplete ? 'Dipindah ke rak Selesai' : 'Dipindah ke rak Belum Selesai');
}
}

// Menghapus Buku
function deleteBook(id) {
const bookIndex = books.findIndex(book => book.id === id);
if (bookIndex !== -1) {
books.splice(bookIndex, 1);
saveData();
renderBooks(searchInput.value.toLowerCase());
showToast('Buku berhasil dihapus!');
}
}

// Mengedit Buku
function editBook(id) {
const bookTarget = books.find(book => book.id === id);
if (bookTarget) {
editingBookId = bookTarget.id;
inputTitle.value = bookTarget.title;
inputAuthor.value = bookTarget.author;
inputYear.value = bookTarget.year;
inputIsComplete.checked = bookTarget.isComplete;

formTitle.innerText = 'Edit Data Buku';
bookFormSubmit.innerText = 'Simpan Perubahan';

// Scroll smoothly ke atas form
window.scrollTo({ top: 0, behavior: 'smooth' });


}
}

// Render Data ke HTML (Mematuhi Aturan data-testid yang ketat)
function renderBooks(searchQuery = '') {
incompleteBookList.innerHTML = '';
completeBookList.innerHTML = '';

// Filter berdasarkan pencarian
const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchQuery));

if (filteredBooks.length === 0) {
if (books.length === 0) {
incompleteBookList.innerHTML = 'Belum ada buku di rak ini.';
completeBookList.innerHTML = 'Belum ada buku di rak ini.';
} else {
incompleteBookList.innerHTML = 'Buku tidak ditemukan.';
completeBookList.innerHTML = 'Buku tidak ditemukan.';
}
return;
}

let hasIncomplete = false;
let hasComplete = false;

for (const book of filteredBooks) {
// Membuat kontainer utama
const bookItem = document.createElement('div');
bookItem.classList.add('book-item');
bookItem.setAttribute('data-bookid', book.id);
bookItem.setAttribute('data-testid', 'bookItem');

// Membuat Title
const title = document.createElement('h3');
title.setAttribute('data-testid', 'bookItemTitle');
title.innerText = book.title;

// Membuat Author
const author = document.createElement('p');
author.setAttribute('data-testid', 'bookItemAuthor');
author.innerText = `Penulis: ${book.author}`;

// Membuat Year
const year = document.createElement('p');
year.setAttribute('data-testid', 'bookItemYear');
year.innerText = `Tahun: ${book.year}`;

// Membuat container actions
const actions = document.createElement('div');
actions.classList.add('actions');

// Button Toggle Complete
const btnToggle = document.createElement('button');
btnToggle.setAttribute('data-testid', 'bookItemIsCompleteButton');
btnToggle.classList.add('btn-toggle');
btnToggle.innerText = book.isComplete ? 'Belum selesai dibaca' : 'Selesai dibaca';
btnToggle.addEventListener('click', () => toggleComplete(book.id));

// Button Hapus
const btnDelete = document.createElement('button');
btnDelete.setAttribute('data-testid', 'bookItemDeleteButton');
btnDelete.classList.add('btn-delete');
btnDelete.innerText = 'Hapus Buku';
btnDelete.addEventListener('click', () => deleteBook(book.id));

// Button Edit
const btnEdit = document.createElement('button');
btnEdit.setAttribute('data-testid', 'bookItemEditButton');
btnEdit.classList.add('btn-edit');
btnEdit.innerText = 'Edit Buku';
btnEdit.addEventListener('click', () => editBook(book.id));

// Append buttons ke actions container
actions.append(btnToggle, btnDelete, btnEdit);

// Append semua ke bookItem
bookItem.append(title, author, year, actions);

// Masukkan ke rak yang sesuai
if (book.isComplete) {
  completeBookList.append(bookItem);
  hasComplete = true;
} else {
  incompleteBookList.append(bookItem);
  hasIncomplete = true;
}


}

// Handle Empty State jika salah satu rak kosong setelah difilter
if (!hasIncomplete) incompleteBookList.innerHTML = 'Tidak ada buku di rak ini.';
if (!hasComplete) completeBookList.innerHTML = 'Tidak ada buku di rak ini.';
}

// Fungsi Custom Toast UI (Pengganti alert)
function showToast(message) {
const toast = document.getElementById("toast");
toast.innerText = message;
toast.className = "show";
setTimeout(function(){
toast.className = toast.className.replace("show", "");
}, 3000);
}

// Inisialisasi Aplikasi Saat DOM Siap
document.addEventListener('DOMContentLoaded', () => {
loadDataFromStorage();
});