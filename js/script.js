let menuIcon = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header navbar a');

window.onscroll = () => {

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
    };


    ScrollReveal({ 
        reset: true,
        distance:'80px',
        duration:2000,
        delay:200


    });

    ScrollReveal().reveal('.home-sci,.btn-box,.services h1,.button,.button1', { origin:'top' });
    ScrollReveal().reveal('.portfolio-box', { origin:'bottom' });