// Валидация 
$(document).ready(function () {
    $(".subscribe__form").validate({
        rules: {
            userName: {
                required: true,
                minlength: 2,
                maxlength: 15
            },
            userEmail: {
                required: true,
                email: true
            }
        },
        errorElement: "div",
        errorClass: "invalidSubscribe",
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: " Имя не короче двух букв",
                maxlength: " Имя не должно превышать 15 символов"
            },
            userEmail: {
                  required: "Заполните поле ",
                      email: "Введите корректный email"
            }
        }
    });

});