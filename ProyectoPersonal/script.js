

// Imagenes Slides
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Cambia la imagen automáticamente cada 3 segundos




// Solapar header con Nav
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var nav = document.getElementById('nav');
        var offset = nav.offsetTop-58;

        if (window.scrollY > offset) {
            nav.classList.add('fixed-nav');
        } else {
            nav.classList.remove('fixed-nav');
        }
    });
});



