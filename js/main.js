const backToTopButton = document.querySelector('.back-to-top')
console.log(backToTopButton)

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