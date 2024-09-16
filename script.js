var randomNumber = Math.floor(Math.random() * 100) + 1;
document.querySelector(".number").innerHTML = randomNumber;

document.querySelector(".about").addEventListener("click", function(){
    var aboutContainer = document.querySelector(".about-container");
    var bodyElement = document.querySelector("body");
    var aboutElement = document.querySelector(".about");

    if (aboutContainer.classList.contains("visible")) {
        aboutContainer.classList.remove("visible");
        aboutContainer.classList.add("invisible");
        bodyElement.style.backgroundColor = "#03A5C8";
        aboutElement.innerHTML = "click to show details";
        aboutElement.classList.remove("visible");
        bodyElement.classList.remove("invisible");
    } else {
        aboutContainer.classList.remove("invisible");
        aboutContainer.classList.add("visible");
        bodyElement.classList.add("invisible");
        bodyElement.style.backgroundColor = "#012932";
        aboutElement.innerHTML = "click to hide details";
        aboutElement.classList.add("visible");
    }
})