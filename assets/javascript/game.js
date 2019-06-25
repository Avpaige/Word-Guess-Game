 //Global Variables
  
  var words =["Mighty Ducks", "Flying V", "Coach Bombay", "Iceland", "Goldberg", "Knuckle Puck"];
  var randWord = Math.floor(Math.random() * words.length); 
  var chosenWord = words [randWord];
  var underScore = [];

 var genBlanks = () => {
    for (var i = 0; i < chosenWord.length; i++){
        underScore.push ("_");
    }
    return underScore;

 }
 
document.addEventListener ("keypress", (event) => {
    console.log(event);
    var keyWord = String.fromCharCode(event.keyCode);

    console.log(keyCode);
    console.log(keyWord);

if (keyWord.indexOf(chosenWord) >-1) {
    console.log(true);
}







 console.log(chosenWord);
 console.log(genBlanks ());
 console.log("Test")
