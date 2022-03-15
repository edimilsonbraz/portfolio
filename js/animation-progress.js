const circles = document.querySelectorAll('.circle-course');
circles.forEach(elem => {
  let dots = elem.getAttribute('data-dots')
  let marked = elem.getAttribute('data-percent')
  let percent = Math.floor(dots * marked / 100);
  let rotate = 360/dots;
  let points = "";

  for(let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
  }
  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll('.points');
  for(let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add('marked')
  }
})