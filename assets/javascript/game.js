  // Array of potential words
  var words =["Mighty Ducks", "Flying V", "Coach Bombay", "Iceland", "Goldberg", "Knuckle Puck"]

  // Creating variables to hold the number of wins, losses, and ties. They start at 0.
  var wins = 0;
  var losses = 0;
  var currentword = words;

  // Create variables that hold references to the places in the HTML where we want to display things.
  var directionsText = document.getElementById("directions-text");
  var userChoiceText = document.getElementById("userchoice-text");
  var lossesText = document.getElementById("losses-text");
  var winsText = document.getElementById("wins-text");
  var currentword = document.getElementById("current-word");
  var guessLeft = document.getElementById("guesses-left");
  var lettersGuessed = document.getElementById("userchoice-text");
  
  var randomWord = "";
  var lettersOfWord = []
  var blanks = 0;
  var blankAndCorrect = [];
  var wrongGuess = [];
  
function Play(){
  randomWord = words[Math.floor(Math.random() * words.length)];
  lettersOfWord = randomWord.split("");
  blanks = lettersOfWord.length; 

  for (var x=0; x<blanks; x++) {
      blanksAndCorrect.push("");

  }

  document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

  console.log(randomWord);
  console.log(lettersOfWord)
  console.log(blanks)
  console.log(blanksAndCorrect)
}


