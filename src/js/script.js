
let modal = document.querySelector('.modal');
let headerBars = document.querySelector('.header__bars');
let menuClose = document.querySelector('.menu__close');

function toggleMenu() {
    modal.classList.toggle('hidden');
}

headerBars.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);

$(document).ready(function () {
  
 var mySwiper  = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 5,
      loop: true,
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
});

    