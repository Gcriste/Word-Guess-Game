
var wordBank = ["bootcamp", "vanderbilt", "coding", "hangman", "trilogy" ];


var directions = document.getElementById("directions-text");
var currentword = document.getElementById("currentWord");
var guessedLetters = document.getElementById("guessedLetters");
var remainingGuesses = document.getElementById("remainingGuess");
var wins = document.getElementById("wins");
var winNum = 0;
var loseNum = 0;
var losses = document.getElementById("losses");
var guessesLeft = 10;
var gameStart = false;
var answer = [];
var firstTime = true;
var wrongGuess="";




var word = wordBank[Math.floor(Math.random()*wordBank.length)];
    console.log(word)
//set up the word after user hits any key


function btnFunction() {
    document.getElementById("button").innerHTML = "Guess a letter to start the Game!"
    currentWord.textContent = "Current Word: ";
    guessedLetters.textContent = "Letters Guessed: ";
    remainingGuesses.textContent = "Remaining Guesses: ";
    wins.textContent = "Wins: ";
    losses.textContent = "Losses: ";
    for(var j = 0; j < word.length; j++)
    if (firstTime) {
        answer[j] = "_ "; 
  }
};




document.onkeyup = function(event) {
    gameStart = true;

    Wrong();
    win();
    Loss();
    
    var yourGuess = event.key
    remainingGuesses.textContent = "Remaining Guesses: " + guessesLeft;
    wins.textContent = "Wins: " + winNum;
    losses.textContent = "Losses: " + loseNum;

    
    for(var i = 0; i < word.length; i++) {
        if (word[i] === yourGuess){
            answer[i] = yourGuess;
               
        }
        else if( answer[i]!= yourGuess) {
           wrongGuess= yourGuess
           
           
            
        };

    };

    if (wrongGuess = yourGuess){;
        guessesLeft--}

    firstTime=false;
    currentWord.textContent = "Current Word: " + answer.join("");
   

}

function Wrong(){

    guessedLetters.textContent = "Letters Guessed: " + wrongGuess;
   
};


            
function win(){

    if (guessesLeft >=0 &&  answer.indexOf(word)){
        winNum++;
        wins.textContent = "wins"
    };
};

function Loss(){

    if (guessesLeft <= 0){
        loseNum++;
    };
};

