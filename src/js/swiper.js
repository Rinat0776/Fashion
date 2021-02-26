$(document).ready(function () {

    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 5,
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
