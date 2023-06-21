let container = document.body; // Fastest way to select the body
let addButton = document.querySelector('#add');

let form = document.querySelector('form');

//POP UP form mechanism
addButton.addEventListener('click', () => {
    form.classList.toggle('inactive');
});