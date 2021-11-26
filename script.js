'use strict';

$(document).ready(function(){
    $(window).scroll(function(){
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });  

       

});

const navbar = document.querySelector('.nav_ul');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav_links');

hamburger.addEventListener('click', mobileMenu);
function mobileMenu(){
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
}

navLinks.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
}

const dissapearNav = document.querySelector('.nav_menu ');;
// HIDE NAVIGATION MENU ON SCROLL
let lastScrollTop;
window.addEventListener('scroll',function(){
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
dissapearNav.style.top='-100px';
}
else{
dissapearNav.style.top='0';
}
lastScrollTop = scrollTop;
});
// HIDE NAVIGATION MENU ON SCROLL   END