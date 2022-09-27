// QUESTION 2

/*
Write a Javascript if-else program any condition of your choice
Note: Creativity will be rewarded higher score.
*/

// Generating random integers between 1 and 100

var n = Math.floor(Math.random() * 100);

// Console.log messages
const tooHigh = "Oops. That's a bit too high. Try again";
const tooLow = "Oops. That's a bit too low. Try again";
const justRight =
  "Spot on! You guessed it just right. I was thinking of " +
  n +
  " and you guessed it!";
const playAgain = "Want to play again? Reload the page!";
// Getting user input using HTML
document.getElementById("submit").onclick = function () {
  var guess = document.getElementById("guess").value;

  if (guess > n) {
    alert(tooHigh);
  } else if (guess < n) {
    alert(tooLow);
  } else if (guess == n) {
    alert(justRight);
    alert(playAgain);
  }
};
