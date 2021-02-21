'use strict';

let modal = document.querySelector('.modal');
let headerBars = document.querySelector('.header__bars');
let menuClose = document.querySelector('.menu__close');

function toggleMenu() {
    modal.classList.toggle('hidden');
}

headerBars.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);
//Валидация 
// $('.subscribe__form').validate({
// rules:{
//          userEmail: {
//             required: true,
//             email: true
//          }
//     },
//     errorElement: "div",
//     errorClass: "invalidSabmit",
//     messages: {
//         userEmail: {
//             required: "Заполните поле ",
//             email: "Введите корректный email"
//          }
//     }
// });
    