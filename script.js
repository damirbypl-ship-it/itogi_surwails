// Кнопка "Играть"

const button = document.getElementById("playButton");

button.addEventListener("click", function(){

    alert("Скоро игра будет доступна!");

});

// Плавное появление карточек

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", ()=>{

    cards.forEach(card=>{

        const position = card.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }

    });

});

// Начальное состояние анимации

cards.forEach(card=>{

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s";

});
