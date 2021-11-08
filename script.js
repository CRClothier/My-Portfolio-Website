const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('#mobile_menu');
const crossButton = document.querySelectorAll('.closer');

function showMenu() {
  mobileMenu.classList.replace('hidden', 'show_menu');
}
function hideMenu() {
  mobileMenu.classList.replace('show_menu', 'hidden');
}

hamburger.addEventListener('click', showMenu);
crossButton.forEach((item) => item.addEventListener('click', hideMenu));