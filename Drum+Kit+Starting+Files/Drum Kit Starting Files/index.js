function handleClick() {
    // alert("I got clicked!");
    // let sound = new Audio('./sounds/tom-1.mp3');
    // sound.play();

    let thisDrum = this.textContent;
    // alert(thisDrum);

    makeSound(thisDrum);
}

buttons = document.querySelectorAll(".drum");

buttons.forEach(element => {
    element.addEventListener("click", handleClick);
    
});

document.addEventListener("keydown", function(event) {
    // alert(event.key);
    makeSound(event.key);
    
})


function makeSound(key) {

    if (key === "w") {
        // alert("W");
        let sound = new Audio('./sounds/crash.mp3');
        sound.play();
    } else if (key === "a") {
        let sound = new Audio('./sounds/kick-bass.mp3');
        sound.play();
    } else if (key === "s") {
        let sound = new Audio('./sounds/snare.mp3');
        sound.play();
    } else if (key === "d") {
        let sound = new Audio('./sounds/tom-1.mp3');
        sound.play();
    } else if (key === "j") {
        let sound = new Audio('./sounds/tom-2.mp3');
        sound.play();
    } else if (key === "k") {
        let sound = new Audio('./sounds/tom-3.mp3');
        sound.play();
    } else if (key === "l") {
        let sound = new Audio('./sounds/tom-4.mp3');
        sound.play();
    }
}
