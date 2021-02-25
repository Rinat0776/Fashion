'use strict';

let modal = document.querySelector('.modal');
let headerBars = document.querySelector('.header__bars');
let menuClose = document.querySelector('.menu__close');

function toggleMenu() {
    modal.classList.toggle('hidden');
}

headerBars.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);

 var myswiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 5,
      loop: true,
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
//Валидация 
// $(function(){
//     $('.subscribe__input').validate({
//   rules: {
//    userEmail: {
//             required: true,
//             email: true
//          }
//   },
//      errorElement: "div",
//      errorClass: "invalidSubscribe",
//   messages: {
//   userEmail: {
//  required: "Поле 'Email' обязательно к заполнению",
//  email: "Введите корректный email"
//  },
//   }
//  });
// }); 

    