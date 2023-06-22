let container = document.body; // Fastest way to select the body
let addBookButton = document.querySelector('#add-book');

let form = document.querySelector('form');
let addButton = document.querySelector('#add');

let books = [];

function Book(title, author, pages, read) {
    this.title = title;
    this. author = author;
    this.pages = pages;
    this.read = read;
}

function readInput() {
    let title = document.getElementById('book-title').value;
    let author = document.getElementById('book-author').value;
    let pages = document.getElementById('book-pages').value;
    let read = document.getElementById('book-read').value;
    books.push(new Book(title, author, pages, read));
}

//POP UP form mechanism
addBookButton.addEventListener('click', () => {
    form.classList.toggle('inactive');
});

addButton.addEventListener('click', readInput);