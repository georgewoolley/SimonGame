var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    var idSelector = "#" + randomChosenColour;

    // Flash the button
    $(idSelector).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

// Call the nextSequence function to generate and flash a new color
nextSequence();