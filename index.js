function handleClick() {
    playAudio(this.innerHTML);
    addAnimation(this.innerHTML);
}

function handleKeyBoard(event) {
    playAudio(event.key);
    addAnimation(event.key);
}

function playAudio(character) {

    var audio;

    switch (character) {
        case "w":
            audio = new Audio("sounds/crash.mp3");
            break;

        case "a":
            audio = new Audio("sounds/kick-bass.mp3");
            break;

        case "s":
            audio = new Audio("sounds/snare.mp3");
            break;

        case "d":
            audio = new Audio("sounds/tom-1.mp3");
            break;

        case "j":
            audio = new Audio("sounds/tom-2.mp3");
            break;

        case "k":
            audio = new Audio("sounds/tom-3.mp3");
            break;

        case "l":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        
        default:
            console.log("Invalid Key!");
            return; 
    }
    audio.play();
}

function addAnimation(key) {
    var button = document.querySelector("." + key); // eg ".w" or ".a"
    console.log(button);
    button.classList.add("pressed"); // add the button to the pressed class so that it gets its applied css

    setTimeout(function () {
        button.classList.remove("pressed");
    }, 100); // after 100 ms remove pressed
}

var btnList = document.querySelectorAll(".set button"); // buttons which are children of set class div
var i;

for (i = 0; i < btnList.length; i++) // addinng handleClick as the event handler/listener to all the buttons
    btnList[i].addEventListener("click", handleClick);

document.addEventListener("keypress", handleKeyBoard);
