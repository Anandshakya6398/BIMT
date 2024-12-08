var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,    
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});


let currentIndex = 0;
const images = document.querySelectorAll('#slider img'); // Select all images in the slider
const totalImages = images.length;
function showNextImage() {
  images[currentIndex].classList.add('hidden'); // Hide the current image
  currentIndex = (currentIndex + 1) % totalImages; // Move to the next image
  images[currentIndex].classList.remove('hidden'); // Show the next image
}
setInterval(showNextImage, 3000);