const slides = document.querySelectorAll(".slide");
var counter = 0;
const totalSlides = slides.length;
const prev = document.getElementById("slider-prev");
const next = document.getElementById("slider-next");

prev.addEventListener('click', () => {
    counter--;
    slideImage();
})

next.addEventListener('click', () => {
    counter++;
    slideImage();
})

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
});

const slideImage = () => {
    if (counter >= totalSlides) {
        counter = 0;
    }
    if (counter < 0) {
        counter = totalSlides - 1;
    }
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

setInterval(() => {
    counter++;
    slideImage();
}, 3000);
