
// var wordBank = ["bootcamp", "vanderbilt", "coding", "hangman", "trilogy" ];


// var directions = document.getElementById("directions-text");
// var currentword = document.getElementById("currentWord");
// var guessedLetters = document.getElementById("guessedLetters");
// var remainingGuesses = document.getElementById("remainingGuess");
// var wins = document.getElementById("wins");
// var winNum = 0;
// var loseNum = 0;
// var losses = document.getElementById("losses");
// var guessesLeft = 10;
// var gameStart = false;
// var answer = [];
// var firstTime = true;

// directions.textContent = "Press any key to start the game!";
// currentWord.textContent = "Current Word: ";
// guessedLetters.textContent = "Letters Guessed: ";
// remainingGuesses.textContent = "Remaining Guesses: ";
// wins.textContent = "Wins: ";
// losses.textContent = "Losses: ";


// var word = wordBank[Math.floor(Math.random()*wordBank.length)];
//     console.log(word)
// //set up the word after user hits any key







// document.onkeyup = function(event) {
//     gameStart = true;

    
//     var yourGuess = event.key
//     remainingGuesses.textContent = "Remaining Guesses: " + guessesLeft;
//     wins.textContent = "Wins: " + winNum;
//     losses.textContent = "Losses: " + loseNum;




//     for (var i = 0; i < word.length; i++) {
//     answer[i] = "_";
//  }
//  var remainingLetters = word.length;
    
//  if (remainingLetters > 0){
//     currentWord.textContent = "Current Word: " +  answer.join("");
//     var yourGuess = word[i]
//  }
//     else {
//         var yourGuess= word[i];
//      for (var j = 0; j < word.length; j++) {
//      if (word[j] === yourGuess) {
//      answer[j] = yourGuess;
//      guessesLeft--;
//      }
//      }
//      }
 
//     for(var i = 0; i < word.length; i++) {
//         if (word[i] === yourGuess){
//             answer[i] = yourGuess;     
//         }
//         else if (firstTime) {
//             answer[i] = "_ ";  

          
//         }

//         else if(word[i]!=yourGuess) { 
          
//             var incorrectGuess = yourGuess
//             guessedLetters.textContent = "Guessed Letters " + incorrectGuess;
//             guessesLeft-=1;

//         };

//     };
// };  
   
       
       


    

//     firstTime=false;
//     currentWord.textContent = "Current Word: " + answer;
  
//     win();
//     Loss();



 
//              // guessesLeft-=1;


//  //else if (word[j] != yourGuess){
//            // answer[j] != yourGuess;
//             //guessedLetters = guessedLetters + yourGuess;




            
// function win(){

//     if (answer.indexOf("_") ===-1){
//         winNum++;
//         wins.textContent = "wins"
//     }
// }

// function Loss(){

//     if (guessesLeft <= 0){
//         loseNum++;
//     };
// };

