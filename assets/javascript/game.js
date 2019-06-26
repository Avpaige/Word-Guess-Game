 //Global Variables
  
  var words =["the mighty ducks", "flying v", "coach bombay", "iceland", "goldberg", "knuckle puck"];
  var randWord = Math.floor(Math.random() * words.length); 
  var rightGuess = [];
  var wrongGuess= [];
  var chosenWord = words [randWord];
  var underScore = [];
  var wins = 0;
  var losses =0;
  var currentWord ="current-word";
  var placeHoldUnder = document.getElementsByClassName("underScore");
  var guesses = 11;
  
  var displayWord = document.getElementById ("word")

console.log("word chosen" + chosenWord);

 var generateUnderscore = () => {
    for (var loop = 0; loop < chosenWord.length; loop++){
        underScore.push ("_");
       
    }
    return underScore;

 }

 console.log (generateUnderscore()); 
 
document.addEventListener('keypress', (event) => {
      var keyword= String.fromCharCode(event.keyCode);

      if(chosenWord.indexOf(keyword) > -1)      {
        rightGuess.push (keyword);
        underScore[chosenWord.indexOf(keyword)]= keyword;

        placeHoldUnder.innerHTML = underScore.join(" ");
        console.log(rightGuess);


        
      } else
        wrongGuess.push(keyword);
        


        console.log(wrongGuess);
              
      if (guesses===0);
      losses++;
      console.log (guesses);


console.log(underScore);

if (underScore.join(" ") === chosenWord) {
    alert ("You Win!") ;
    wins++;

  }

  document.getElementById("wins-text").innerHTML = ("Wins " + wins);
  console.log("=" + wins);

  document.getElementById("losses-text").innerHTML = ("Lossess " + losses);
  console.log("=" + wins);

  document.getElementById("guesses-left").innerHTML = ("# of Guesses Remaining " + guesses);
  console.log("=" + guessess);
  
  document.getElementById("word").innerHTML= ("Test" + underScore);

  document.getElementById("wrong").innerHTML= ("TWrong Guesses" + "<br>" + wrongGuess);

 

});









