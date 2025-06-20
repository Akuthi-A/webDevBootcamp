let userClickedPattern = [];
let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let randomChoice = nextSequence();
let randomChosenColour = buttonColours[randomChoice];
gamePattern.push(randomChosenColour);
let idSelect = "#" + randomChosenColour;


let blink = jQuery("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// alert(idSelect)
// alert(randomChosenColour)
// alert(selectButton)

function playAudio(name) {
    let soundUrl = name + ".mp3";
    // alert(soundUrl);
    alert(name)
    let audio = new Audio("./sounds/"+soundUrl);
    audio.play();
    blink.attr("onclick", "playAudio()")
}
playAudio()


jQuery(".btn").click(function () {
    let userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);

    
})



function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);
    return randomNumber;
}
