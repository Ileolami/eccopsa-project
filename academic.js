const navLink = document.querySelector('ul');
const hamburger = document.querySelector('#toggle');
hamburger.addEventListener('click', function (){
    navLink.classList.toggle('show');
  });