
var wordBank = ["catdog", "rugrats", "doug", "keenan&kel" , "all that", "animorphs", "spongebob"];


var directions = document.getElementById("directions-text");
var currentword = document.getElementById("currentWord");
var guessedLetters = document.getElementById("guessedLetters");
var remainingGuesses = document.getElementById("remainingGuess");
var wins = document.getElementById("wins");
var winNum = 0;
var loseNum = 0;
var losses = document.getElementById("losses");
var guessesLeft = 9;
var gameStart = false;
var answer = [];
var word = "";
var blanks = [];
var firstTime = true;
var wrongGuess=[];
var letterGuessed = "";
var numBlanks = 0;



//set up the word after user hits any key


function reset() {
    document.getElementById("header").innerHTML = "Guess a letter of a 90s Nickolodeon TV show to start the Game!"
  
   guessesLeft = 9;

   word = wordBank[Math.floor(Math.random()*wordBank.length)];
    console.log(word)

    answer = word.split("");

    numBlanks = answer.length;
    blanks = [];
    wrongGuess = [];

    
    for (var i = 0; i < numBlanks; i++){
    blanks.push("_");}

    console.log(blanks)


    document.getElementById("remainingGuess").innerHTML = "Remaining Guesses: " + guessesLeft;
    document.getElementById("currentWord").innerHTML= blanks.join(" ");
    document.getElementById("guessedLetters").innerHTML= wrongGuess.join(" ");
    currentword.textContent = "Current Word: " + blanks.join(" ");

};



function checkLetters(letter){
var letterCorrect = false;

for (var i = 0; i < numBlanks; i++){
   if (word [i]===letter){
       letterCorrect = true;
   }
}

    if(letterCorrect){
        for (var j = 0; j < numBlanks; j++){

        if (word[j]===letter){
            blanks[j] = letter;
        }
        }
        console.log(blanks)
    }

        else {
            wrongGuess.push(letter);
            guessesLeft--;
        }
}


function roundComplete(){
    document.getElementById("remainingGuess").innerHTML = "Remaining Guesses: " + guessesLeft;
    document.getElementById("currentWord").innerHTML = blanks.join(" ");
    document.getElementById("guessedLetters").innerHTML = wrongGuess.join(" ");
    currentWord.textContent = "Current Word: " + blanks.join(" ");


console.log("wincount: " + winNum + "| loss count: " + loseNum + " |Num Guesses:  " + guessesLeft)
    if(answer.toString()===blanks.toString()){
        winNum++;
        alert("Good job! You won!");
        wins.textContent = "wins: " + winNum;
        reset();

    }

    else if (guessesLeft===0){
        loseNum++;
        alert("Sorry! You lose!");
        losses.textContent = "Losses: " + loseNum;
        reset();
    }

}

reset();






document.onkeyup = function(event) {
    letterGuessed = String.fromCharCode(event.which).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
  



};
