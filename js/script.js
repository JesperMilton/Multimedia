let bakG;
let b1;
let b2;
let b3;
let text;

const lagSound = new Audio("sound/Lager.mp3");
const matSound = new Audio("sound/Mat(1).mp3");
const sakSound = new Audio("sound/Sakerhet.mp3");

lagSound.preload = "auto";
matSound.preload = "auto";
sakSound.preload = "auto";

let currentSound = null;

function init() {
    bakG = document.querySelector("#middle .mid_layer");
    text = document.querySelector("#textChange");

    // Preload images
    const image1 = new Image();
    image1.src = "../img/Tent.svg";
    image1.onload = function () {
        b1 = document.getElementById("nav-1");
        b1.addEventListener("click", function () {
            changeBack('url("' + image1.src + '")', lagSound);
        });
    };

    const image2 = new Image();
    image2.src = "../img/Sak.svg";
    image2.onload = function () {
        b2 = document.getElementById("nav-2");
        b2.addEventListener("click", function () {
            changeBack('url("' + image2.src + '")', sakSound);
        });
    };

    const image3 = new Image();
    image3.src = "../img/mat.svg";
    image3.onload = function () {
        b3 = document.getElementById("nav-3");
        b3.addEventListener("click", function () {
            changeBack('url("' + image3.src + '")', matSound);
        });
    };
}

window.addEventListener("load", init);

function changeBack(color, sound) {
    bakG.style.transition = "background-image 1s ease";
    bakG.style.backgroundImage = color;

    textChange(color);
    playSound(sound);

    setTimeout(function () {
        bakG.style.transition = "";
    }, 1000);
}

function textChange(color) {
    if (color.includes('Tent.svg')) {
        text.innerText = "Det Skyddande Lagret";
    } else if (color.includes('Sak.svg')) {
        text.innerText = "Säkerhet"; 
    } else if (color.includes('mat.svg')) {
        text.innerText = "Mat och vatten"; 
    }
}
function playSound(sound) {
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }
    sound.play();
    currentSound = sound;
}