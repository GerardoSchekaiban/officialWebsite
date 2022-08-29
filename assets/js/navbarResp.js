const authWrapper = document.querySelector('.nav-auth');
const dropdown = document.querySelector('.dropdown');


authWrapper.addEventListener('click', function(){
    dropdown.classList.toggle('display');
});

const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');
const logoWrapp = document.querySelector('.nav-logo');
const closeIcon = document.querySelector('.close-icon');

menuIcon.addEventListener('click', function(){
    navMenu.classList.add('open'); 
    logoWrapp.classList.add('open');
    authWrapper.classList.add('no-display');
    menuIcon.classList.add('no-display');
    closeIcon.classList.add('display');
});

closeIcon.addEventListener('click', function(){
    navMenu.classList.remove('open'); 
    logoWrapp.classList.remove('open'); 
    menuIcon.classList.remove('no-display');
    authWrapper.classList.remove('no-display');
});