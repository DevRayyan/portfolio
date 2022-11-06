let toggle = document.getElementById('navigation');
let navbar = document.getElementById('navbar');
let cross = document.getElementById('cross');
toggle.addEventListener('click', function () {
    navbar.classList.toggle('navbar');
    cross.classList.toggle('fa-xmark');
    cross.classList.toggle('fa-bars');
})


