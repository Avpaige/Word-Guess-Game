// create var for words to be guessed
var words = ["the mighty ducks", "flying v", "coach bombay", "iceland", "goldberg", "knuckle puck"];

// create var for wins
var wins = 0 

// create var for losses
var losses = 0

// create var fo number of guesses remaining
var guesses = 12

// create var array for wrong guesses
var wrong= []

//create var array for right guesses

var right =[]
// create var for random word selected
var randomWord = Math.floor(Math.random() * words.length); 
var playword = words [randomWord]

console.log ("Random word is " + playword);

// create var for underscores to replace play word
var underScore = [];

// create loop to push underscores for letters
var generateUnderscore = () => {
    for (var loop = 0; loop < playword.length; loop++){
        underScore.push ("_");
       
    }
    return underScore;
 }

 console.log(generateUnderscore());

 document.onkeypress= function(event) {
   
    guesses = guesses -1;

    console.log("# of guesses are " + guesses);
}





// create way to detect if letter has already been pressed
// hide direction text when key has been pressed
// ignore non-letters second guesses
// replace underscores with correct guesses
// determine when player has won and add to total
// determine when player has lost and add to total
// automatically restart the game once player loses

