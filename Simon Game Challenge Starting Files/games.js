var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userCLickedPattern = [];



function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    var idSelector = "#" + randomChosenColour;
    var mp3Selector = randomChosenColour + ".mp3";

    // Flash the button
    $(idSelector).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    var buttons = document.querySelectorAll('.btn');
  
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {

        /*   if (randomChosenColour == "blue") {
                new Audio('sounds/blue.mp3').play();
            } else if (randomChosenColour == "green") {
                new Audio('sounds/green.mp3').play();
            } else if (randomChosenColour == "red") {
                new Audio('sounds/red.mp3').play();
            } else if (randomChosenColour == "yellow") {
                new Audio('sounds/yellow.mp3').play();
            } */





           
        });
      });

        
    }


document.addEventListener('DOMContentLoaded', function () {
    // Attach a click event listener to all elements with the class "btn"
    document.querySelectorAll('.btn').forEach(function(button) {
      button.addEventListener('click', function() {
        // Access the ID of the clicked button and log it to the console
        console.log('Button ID:', button.id);
       
        animatePress(button.id);
        playButtonSound(button.id);


        // Perform any other actions based on the button ID
        // Example: playAudio(button.id);
      });
    });
  });

// Call the nextSequence function to generate and flash a new color


function playButtonSound(color) {

             if (color == "blue") {
                new Audio('sounds/blue.mp3').play();
            } else if (color == "green") {
                new Audio('sounds/green.mp3').play();
            } else if (color == "red") {
                new Audio('sounds/red.mp3').play();
            } else if (color == "yellow") {
                new Audio('sounds/yellow.mp3').play();
            } 


}


function animatePress(currentColour) {
    if (currentColour == "blue") {
        $("#blue").addClass("pressed");
    } else if (currentColour == "green") {
        $("#green").addClass("pressed");
    } else if (currentColour == "red") {
        $("#red").addClass("pressed");
    } else if (currentColour == "yellow") {
        $("#yellow").addClass("pressed");
    } 

    setTimeout(function() {
        $('.btn').removeClass('pressed');
      }, 100);
}


nextSequence();