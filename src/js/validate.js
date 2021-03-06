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
    $(".purchase__form").validate({
    rules:{
        userCountry: {
            required: true,
            minlength: 2,
        },
        userRegion:{
            required: true,
            minlength: 2,
        },
        userPostcode: {
            required: true,
            minlength: 6,
        }
    },
      errorElement: "div",
     errorClass: "invalidPurchase",
     messages:{
         userCountry:{
             required: "Заполните поле ",
             minlength: "Название  не короче двух букв"
         },
          userRegion: {
              required: "Заполните поле ",
              minlength: "Название  не короче двух букв"
          },
            userPostcode: {
                required: "Индекс  обязательно",
                minlength: " Не короче шести цифр"
            }
     }
    });
    $(".personalInfo__form").validate({
    rules:{
        userFirstName:{
            required: true,
            minlength: 2,
            maxlength: 15
        },
        userLastName:{
            required: true,
            minlength: 2,
            maxlength: 15
        },
        userEmail:{
            required: true,
            email: true
        },
        userPassword:{
            required: true,
            minlength: 6,
            maxlength: 8
        }
    },
    errorElement: "div",
    errorClass: "invalidPersonalInfo",
    messages:{
        userFirstName:{
            required: "Имя обязательно",
            minlength: " Имя не короче двух букв",
            maxlength: " Имя не должно превышать 15 символов"
        },
        userLastName:{
            required: "Имя обязательно",
            minlength: " Имя не короче двух букв",
            maxlength: " Имя не должно превышать 15 символов"
        },
        userEmail:{
            required: "Заполните поле ",
            email: "Введите корректный email"
        },
        userPassword:{
            required: "Заполните поле ",
            minlength: " Пароль не короче 6 символов",
                maxlength: "Пароль не должно превышать 8 символов"
        }
    }
    });
});