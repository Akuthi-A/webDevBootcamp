let userClickedPattern = [];
let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let level = 0

// alert(idSelect)
// alert(randomChosenColour)
// alert(selectButton)

function playAudio(name) {
    let soundUrl = name + ".mp3";
    // alert(soundUrl);
    // alert(name)
    let audio = new Audio("./sounds/"+soundUrl);
    audio.play();
}



jQuery(".btn").click(function () {
    let lastElement = userClickedPattern.length - 1;
    let userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    checkAnswer(lastElement);
    animatePress(userChosenColour);

    playAudio(this.id)
})


function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    let idSelect = "#" + randomChosenColour;
    jQuery("h1").text("Level "+ level)
    level += 1;


    jQuery("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playAudio(randomChosenColour)
}



function animatePress(currentColour) {
    let elementID = "#" + currentColour;
    let self = jQuery(elementID);
    self.addClass("pressed")
    setTimeout(function(){
        self.removeClass("pressed");
    }, 100);
}
let start = false;
jQuery(document).on("keydown", function(o) {
    if (!start) {
        nextSequence();
    }
    start = true;
})


function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        console.log("Success");
        for (let i = 0;  i < currentLevel; i++) {
            if (userClickedPattern[i] == gamePattern[i]) {
                console.log("Success in");
            }
            else {
                console.log("noooooooo!!")
            }
        }
    } else {
        console.log("wrong");
    }
}
