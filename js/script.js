let bakG;
let b1;
let b2;
let b3;
let text;

function init() {
    bakG = document.querySelector("#middle .mid_layer");
    text = document.querySelector("#textChange");

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
    textChange(color);

    setTimeout(function() {
        bakG.style.transition = "";
    }, 500);
}

function textChange(color) {
    if (color === "blue") {
        text.innerText = "Ändrar till blått";
    } else if (color === "red") {
        text.innerText = "Ändrar till rött";
    } else if (color === "yellow") {
        text.innerText = "Ändrar till gult";
    }
}