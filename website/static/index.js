deleteNote = (id) => {
    fetch('/delete-note', {
        method: 'POST',
        body: JSON.stringify({ noteId: id }),
    }).then((_res) => {
        // reload window
        window.location.href = '/';
    });
}

const toggle = document.getElementById('toggleDark');
const navbar = document.querySelector('.navbar');
const body = document.querySelector('body');
const noteForm = document.querySelector('#noteForm');
const title = document.getElementById('title');
const notes = document.querySelectorAll('.list-group-item');
const inputs = document.querySelectorAll('input');
// const button = document.querySelectorAll('.toggle-button');

toggle.addEventListener('click', () => {
    console.log(button);
    toggle.classList.toggle('bi-moon');
    toggle.classList.toggle('bi-brightness-high');
    if (toggle.classList.contains('bi-brightness-high')) {
        // document.cookie = "mode=light";
        navbar.classList.remove('navbar-dark');
        navbar.classList.remove('bg-dark');
        navbar.classList.add('navbar-light');
        navbar.classList.add('bg-light');
        toggle.style.color = 'black';
        body.style.background = "white";
        body.style.color = "black";
        noteForm.style.background = "white";
        title.style.color = "black";
        notes.forEach(note => {
            note.style.background = "white";
            note.style.color = "black";
            note.querySelector('.note-data').style.color = "black";
        });
        inputs.forEach(input => {
            input.style.background = "white";
            input.style.color = "black";
        });
    } else {
        // document.cookie = "mode=dark";
        navbar.classList.remove('navbar-light');
        navbar.classList.remove('bg-light');
        navbar.classList.add('navbar-dark');
        navbar.classList.add('bg-dark');
        toggle.style.color = 'white';
        body.style.background = "#333333";
        body.style.color = "white";
        noteForm.style.background = "#333333";
        title.style.color = "white";
        notes.forEach(note => {
            note.style.background = "#333333";
            note.style.color = "white";
            note.querySelector('.note-data').style.color = "white";
        });
        inputs.forEach(input => {
            input.style.background = "#333333";
            input.style.color = "white";
        });
    }
});
