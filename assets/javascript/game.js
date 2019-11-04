
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
    //Directions
    document.getElementById("header").innerHTML = "Guess a letter of a 90s Nickolodeon TV show to start the Game!"
  
    //starting number of guesses
   guessesLeft = 9;


   //Generates a new word
   word = wordBank[Math.floor(Math.random()*wordBank.length)];
    console.log(word)


    //splits the word into string
    answer = word.split("");

    numBlanks = answer.length;
    blanks = [];
    wrongGuess = [];

    // making the spaces for the word
    for (var i = 0; i < numBlanks; i++){
    blanks.push("_");}

    console.log(blanks)

    // showing the html to the page
    document.getElementById("remainingGuess").innerHTML = "Remaining Guesses: " + guessesLeft;
    document.getElementById("currentWord").innerHTML= blanks.join(" ");
    document.getElementById("guessedLetters").innerHTML= "Guessed Letters:   " + wrongGuess.join(", ");
    currentword.textContent = "Current Word: " + blanks.join(" ");

};



function checkLetters(letter){
var letterCorrect = false;

// if the guessed letter matches in the word, then set the letterCorrect to true 
for (var i = 0; i < numBlanks; i++){
   if (word [i]===letter){
       letterCorrect = true;
   }
}

    // if the letter is correct then fill in the space with the letter
    if(letterCorrect){
        for (var j = 0; j < numBlanks; j++){

        if (word[j]===letter){
            blanks[j] = letter;
        }
        }
        console.log(blanks)
    }

    // if the word is incorrect, push the letter to the wrongGuess array
        else {
            if (wrongGuess.includes(letter)){
                alert("You have already guessed that letter")
            }
            else{
                wrongGuess.push(letter);
                guessesLeft--;
            }
        }
}


function roundComplete(){
    document.getElementById("remainingGuess").innerHTML = "Remaining Guesses: " + guessesLeft;
    document.getElementById("currentWord").innerHTML = blanks.join(" ");
    document.getElementById("guessedLetters").innerHTML = "Guessed Letters:  " + wrongGuess.join(" ");
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





// when you press a key the game starts
document.onkeyup = function(event) {
    letterGuessed = String.fromCharCode(event.which).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
  



};
