const user = document.querySelector('.nav-user');
const dropdown = document.querySelector('.dropdown');
const header = document.querySelector('header');
const body = document.querySelector('body');

user.addEventListener('click', function(){
    header.classList.toggle('bbottom-none');
    dropdown.classList.toggle('display');
});


const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');
const logoWrapp = document.querySelector('.logo-wrapper');
const auth = document.querySelector('.auth-wrapper');
const closeIcon = document.querySelector('.close-icon');

menuIcon.addEventListener('click', function(){
    navMenu.classList.add('open'); 
    logoWrapp.classList.add('open');
    auth.classList.add('no-display');
    menuIcon.classList.add('no-display');
    closeIcon.classList.add('display');
});

closeIcon.addEventListener('click', function(){
    navMenu.classList.remove('open'); 
    logoWrapp.classList.remove('open'); 
    menuIcon.classList.remove('no-display');
    auth.classList.remove('no-display');

});