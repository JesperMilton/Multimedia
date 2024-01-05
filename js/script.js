let bakG;
let b1;
let b2;
let b3;

function init() {
    bakG = document.querySelector("#middle .mid_layer")

    b1 = document.getElementById("nav-1");
    b1.addEventListener("click", function () {
        changeBack("blue");
    });

    b2 = document.getElementById("nav-2");
    b2.addEventListener("click", function () {
        changeBack("red");
    });

    b3 = document.getElementById("nav-3");
    b3.addEventListener("click", function () {
        changeBack("yellow");
    });
}

window.addEventListener("load", init);

function changeBack(color) {
    bakG.style.transition = "background-color 1s ease";
    bakG.style.backgroundColor = color;

    setTimeout(function() {
        bakG.style.transition = "";
    }, 500);
}

