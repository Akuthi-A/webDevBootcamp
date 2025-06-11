let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let randomChoice = nextSequence();
let randomChosenColour = buttonColours[randomChoice];
gamePattern.push(randomChosenColour);




function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);
}
