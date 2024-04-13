const slider = document.querySelector('slider')
const btnprev = document.getElementById('prev-button')
const btnnext = document.getElementById('next-button')

let currentSlide = 0;

function hideslider () {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider () {
    slider[currentSlide].classList.add('on')
}

function nextSlider() {
    hideslider()
    if(currentSlide === slider.length - 1){
        currentSlide = 0
    }else{
        currentSlide++
    }
    showSlider()
}
function prevSlider() {
    hideslider()
    if(currentSlide === 0){
        currentSlide = slider.length + 1
    }else{
        currentSlide--
    }
    showSlider()
}

btnnext.addEventListener('click' , () => console.log('clicado'))
btnprev.addEventListener('click' , () => console.log('clicado'))

console.log(slider)