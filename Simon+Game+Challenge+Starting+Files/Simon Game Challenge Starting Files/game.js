let userClickedPattern = [];
let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];

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
    let userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    animatePress(userChosenColour);

    playAudio(this.id)
})



function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    let idSelect = "#" + randomChosenColour;


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

jQuery(document).on("keydown", function(o) {
    nextSequence();
})
