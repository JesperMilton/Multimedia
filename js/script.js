function init() {
    document.getElementById("nav-1").addEventListener("click", function () {
        changeBack("red"); // Ändra färgen här, till exempel "red"
    });
    document.getElementById("nav-2").addEventListener("click", function () {
        changeBack("green"); // Ändra färgen här, till exempel "green"
    });
    document.getElementById("nav-3").addEventListener("click", function () {
        changeBack("blue"); // Ändra färgen här, till exempel "blue"
    });
    console.log("hej");
}
window.addEventListener("load", init);

function changeBack(color) {
    document.getElementById("middle").style.backgroundColor = color;
}



