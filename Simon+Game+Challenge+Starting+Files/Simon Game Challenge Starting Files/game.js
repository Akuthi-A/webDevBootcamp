let userClickedPattern = [];
let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let level = 0
let start = false;



jQuery(document).on("keydown", function(o) {
    if (!start) {
        nextSequence();
        start = true;
    }
    
})


jQuery(".btn").click(function () {
    let lastElement = userClickedPattern.length - 1;
    let userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);

    console.log(userClickedPattern);
    console.log(gamePattern);

    animatePress(userChosenColour);
    checkAnswer(lastElement);

    playAudio(userChosenColour);
})


function nextSequence() {
    userClickedPattern = [];
    level += 1;

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    let idSelect = "#" + randomChosenColour;
    jQuery("h1").text("Level "+ level)
    


    jQuery("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playAudio(randomChosenColour);

}


function playAudio(name) {
    let soundUrl = name + ".mp3";
    // alert(soundUrl);
    // alert(name)
    let audio = new Audio("./sounds/"+soundUrl);
    audio.play();
}

function animatePress(currentColour) {
    let elementID = "#" + currentColour;
    let self = jQuery(elementID);
    self.addClass("pressed")
    setTimeout(function(){
        self.removeClass("pressed");
    }, 100);
}




function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("Success");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000)
        }
    } else {
        console.log("wrong");
    }
}
