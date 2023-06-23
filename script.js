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
   card.classList.add('card');

   let cardTitle = document.createElement('div');
   cardTitle.innerText = book.title;

   let cardAuthor = document.createElement('div');
   cardAuthor.innerText = book.author;

   let cardPages = document.createElement('div');
   cardPages.innerText = book.pages;

   let cardRead = document.createElement('div');
   cardRead.innerText = book.read;

   card.appendChild(cardTitle);
   card.appendChild(cardAuthor);
   card.appendChild(cardPages);
   card.appendChild(cardRead);

   container.appendChild(card);
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
    if(!form.contains(event.target)) {
        form.classList.add('inactive');
        others.forEach(e => e.classList.remove('blur'));
        document.removeEventListener('click', closeForm);
    }
}

function openForm() {
    form.classList.remove('inactive');
    others.forEach(e => e.classList.add('blur'));
    document.addEventListener('click', closeForm, true);
}

//POP UP form mechanism
addBookButton.addEventListener('click', function(event) {
    openForm();
    event.stopPropagation(); // Prevent event propagation to the document
  });
  
    // form.classList.toggle('inactive');
    // document.querySelectorAll('body >*:not(.form)').forEach(e => e.classList.add('blur'));
    // others.forEach(e => e.classList.toggle('blur'));
    // others.forEach(e => e.addEventListener('click', () => {
    //     console.log('triggered');
    //     form.classList.add('inactive');
    // }));

addButton.addEventListener('click', readInput);