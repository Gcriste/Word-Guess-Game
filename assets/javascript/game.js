
var wordBank = ["catdog ", "rugrats", "doug", "keenan&kel" , "all_that", "animorphs", "spongebob"];


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
var wrongGuess=[];




var word = wordBank[Math.floor(Math.random()*wordBank.length)];
    console.log(word)
//set up the word after user hits any key


function reset() {
    document.getElementById("button").innerHTML = "Guess a letter of a 90s Nickolodeon TV show to start the Game!"
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

function Wrong(){
    console.log(wrongGuess)
    guessedLetters.textContent = "Letters Guessed: " + wrongGuess;
   
};
      
function win(){ 
    if (answer ===word)
    answer.toString("");
        winNum++;
        wins.textContent = "wins" + winNum;
        reset();
    };

function Loss(){

    if (guessesLeft <= 0){
        loseNum++;
        reset();
    };
};



document.onkeyup = function(event) {
    gameStart = true;

    Loss();
    
    var yourGuess = event.key
    remainingGuesses.textContent = "Remaining Guesses: " + guessesLeft;
    wins.textContent = "Wins: " + winNum;
    losses.textContent = "Losses: " + loseNum;

    
    for(var i = 0; i < word.length; i++) {
        if (word[i] === yourGuess){
            answer[i] = yourGuess;      
        }
       

        else if (answer===word) {
              win();
            };
    };

    if( answer[i]!== yourGuess) {
        wrongGuess= yourGuess
        console.log(yourGuess)
     }
    if (wrongGuess === yourGuess){
        guessesLeft--;
        Wrong();

    firstTime=false;
    currentWord.textContent = "Current Word: " + answer.join("");
   
    };

};
