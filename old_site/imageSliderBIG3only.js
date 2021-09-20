const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prvBtn = document.querySelector('#prvBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
 let counter = 0;
 const size = 837;
// const size = 1200;
carouselSlide.style.transform = 'translateX(' + (-size)  + 'px)'; 

//Button Listeners

nextBtn.addEventListener('click', () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prvBtn.addEventListener('click', () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (counter > carouselImages.length - 1) {
        carouselSlide.style.transition = "none";
        counter = 0;
        carouselSlide.style.transform = 'translateX(0px)';
    } else if (counter < 0) {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 1;
        carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
    }
});