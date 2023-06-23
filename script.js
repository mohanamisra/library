let container = document.body; // Fastest way to select the body
let addBookButton = document.querySelector('#add-book');

let form = document.querySelector('form');
let others = document.querySelectorAll('body >*:not(.form)');
let addButton = document.querySelector('#add');

let books = [];

function Book(title, author, pages, read) {
    this.title = title;
    this. author = author;
    this.pages = pages;
    this.read = read;
}

function makeCard(book) {
   let card = document.createElement('div');
   let cardTitle = document.createElement('div');
   let cardAuthor = document.createElement('div');
   let cardPages = document.createElement('div');
   let cardRead = document.createElement('div');
}

function readInput() {
    let title = document.getElementById('book-title').value;
    let author = document.getElementById('book-author').value;
    let pages = document.getElementById('book-pages').value;
    let read = document.getElementById('book-read').value;
    books.push(new Book(title, author, pages, read));
    makeCard(books.pop());
}

function closeForm(event) {
    if((!form.contains(event.target)) || event.target == addButton) {
        form.classList.remove('active');
        form.classList.add('inactive');
        others.forEach(e => e.classList.remove('blur'));
        document.removeEventListener('click', closeForm);
    }
}

function openForm() {
    form.classList.remove('inactive');
    form.classList.add('active');
    others.forEach(e => e.classList.add('blur'));
    document.addEventListener('click', closeForm, true);
}

//POP UP form mechanism
addBookButton.addEventListener('click', function(event) {
    openForm();
    event.stopPropagation(); // Prevent event propagation to the document
  });
  

addButton.addEventListener('click', function(event) {
    closeForm(event);
    readInput();
});