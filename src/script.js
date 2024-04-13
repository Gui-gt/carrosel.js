const slider = document.querySelector('slider')
const btnprev = document.getElementById('prev-button')
const btnnext = document.getElementById('next-button')

let currentSlide = 0;

function hideslider () {
    slider.forEach(item => item.classList.remove('on'))
}