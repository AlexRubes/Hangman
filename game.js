//display when the page loads

//declare variables and arrays
let words = ["bulls", "hornets", "warriors", "wizards", "suns", "heat", "lakers","timberwolves"];
let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let guessRemain = 10;
let lettersGuessed = [];
let numberSpaces = [];
let wins = 0;
let losses = 0;
let randomNumber ;
let compChoice ;
let compArray ;  

//start the game
function init() {
    //resets all of the displayed variables
    numberSpaces = [];
    lettersGuessed = [];
    guessRemain = 10;
    //generates random number
    randomNumber = Math.floor((Math.random() * words.length));
    //uses randomly generated numbers as index to find word in words array
    compChoice = words[randomNumber];
    //creates array of letters from the word chosen from the array 
    compArray = Array.from(compChoice);
    console.log(compArray);
    
    //loop through word to create an array of letters and spaces
    for (var i=0; i < compArray.length; i++) {
      numberSpaces.push("_");
      //.join removes commas from array created
      document.getElementById("blank-blank").innerHTML = numberSpaces.join(" ");
      //put values of wins, losses, and guesses in respective html locations
      document.getElementById("win-win").innerHTML = wins;
      document.getElementById("loss-loss").innerHTML = losses;
      document.getElementById("guess-remain").innerHTML = guessRemain;
    }

}
//game starts on first click
document.onkeyup = function (event) {
    //take letter pressed as an event aka userText
    if (alpha.includes(event.key)) {
    userKey = event.key; 
    //convert any capital letters to be lowercase
    let userText = userKey.toLowerCase();
    
    //is the word that needs to be guessed contains the key that the user pressed, put it in the correct space
     if (compChoice.includes(userText) === true) {
        //loop through to find duplicate letters in word
        for (var i=0; i < compChoice.length; i++) {
            if (compChoice[i] === userText) {
                numberSpaces[i] = userText;
                document.getElementById("blank-blank").innerHTML = numberSpaces.join(" ");
            }
        } 
    }
    else { 
            //if word does not contain letter the user selected, put in array of incorrect letters guessed
            lettersGuessed.push(userText);
            document.getElementById("already-guess").innerHTML = lettersGuessed;
            //console log different results to make sure game is working
            console.log(userText);
            console.log(lettersGuessed);
            console.log(compArray.includes(userText));
            //if userText goes into lettersGuessed, guesses remaining - 1
            guessRemain--;
            document.getElementById("guess-remain").innerHTML = guessRemain;
            }  
            //if there are no more guesses left, count as loss
            if (guessRemain === 0) {
                losses++;
                document.getElementById("loss-loss").innerHTML = losses;
                init();
             //if the computer generated array matches all the letters that are in word count as win
             } if (compArray.toString() == numberSpaces.toString()){
                 wins++;
                 document.getElementById("win-win").innerHTML = wins;
                 init();    
             }
        } else alert("PICK LETTERS ONLY");
    }
    
    init();
    
    //figure out how to exclude non-letters


