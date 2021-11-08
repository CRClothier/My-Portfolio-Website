const hamburger = document.querySelector('.hamburger');
let mobileMenu = document.querySelector('#mobile_menu')
const crossButton = document.querySelector('#cross')

function showMenu() {
  mobileMenu.classList.replace('hidden','show_menu')
}
function hideMenu() {
  mobileMenu.classList.replace('show_menu','hidden')
}


hamburger.addEventListener('click', showMenu)
crossButton.addEventListener('click',hideMenu)