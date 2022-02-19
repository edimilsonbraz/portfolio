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

icon.addEventListener('click', () => {
  body.classList.toggle('dark')

  if(document.body.classList.contains('dark')) {
    icon.src = "img/sun.png";
  }else{
    icon.src = "img/moon.png";
  }
})
