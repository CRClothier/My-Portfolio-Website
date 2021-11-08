const hamburger = document.querySelector('.hamburger');
let mobileMenu = document.querySelector('#mobile_menu')

function showMenu() {
  mobileMenu.classList.replace('hidden','show_menu')
}


hamburger.addEventListener('click', showMenu);