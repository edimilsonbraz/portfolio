const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {

  if(window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  }else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', () => {
  backToTop()
}) 


//========= DARK MODE ===========//
const body = document.querySelector('body')
const icon = document.getElementById('icon-dark')

const USER_THEME = 'light'
icon.addEventListener('click', () => {

  if(body.classList.contains('dark')) {
    body.classList.remove('dark')
    body.classList.add('light')
    icon.src = "img/moon.png";
    localStorage.setItem('theme','light')
  }
  else{
    body.classList.remove('light')
    body.classList.add('dark')
    icon.src = "img/sun.png";
    localStorage.setItem('theme','dark')
  }

})
//add class na body pegando do LocalStorage
const themes = body.classList.add(localStorage.getItem('theme')) 


//========= MENU MOBILE ===========//
const menuMobile = document.getElementById('btn-mobile')

menuMobile.addEventListener('click', toggleMenu);

function toggleMenu() {
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')

}