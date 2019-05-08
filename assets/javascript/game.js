
var wordBank = ["bootcamp", "vanderbilt", "coding", "hangman", "trilogy" ];


var directions = document.getElementById("directions-text");
var currentword = document.getElementById("currentWord");
var guessedLetters = document.getElementById("guessedLetters");
var remainingGuesses = document.getElementById("remainingGuess");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = 10;



directions.textContent = "Press any key to start the game!";
currentWord.textContent = "Current Word: ";
guessedLetters.textContent = "Letters Guessed: ";
remainingGuesses.textContent = "Remaining Guesses: ";
wins.textContent = "Wins: ";
losses.textContent = "Losses: ";

//set up the word after user hits any key
document.onkeyup = function(event) {

    var initialHit = event.key;
    directions.textContent = "";
    var word = wordBank[Math.floor(Math.random()*wordBank.length)];
    console.log(word)

    remainingGuesses.textContent = "Remaining Guesses: " + guessesLeft;


  
   
    
   document.onkeyup = function(event){
    var answer = [];
    for(var i = 0; i < word.length; i++) {
        answer[i] = "_ ";
      currentWord.textContent = "Current Word: " + answer;
     
    
        
   var yourGuess = event.key
    for (var j = 0; j < word.length; j++){
        if (word[j] === yourGuess){
            answer[j] = yourGuess;
           
            guessesLeft-=1;
            
        };
    };

    };
    };
};

