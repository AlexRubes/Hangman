//display when the page loads

//declare variables and arrays
let words = ["bulls", "hornets", "warriors", "wizards", "suns", "heat", "lakers"];
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


function init() {
    numberSpaces = [];
    lettersGuessed = [];
    guessRemain = 10;
    randomNumber = Math.floor((Math.random() * 5));
    compChoice = words[randomNumber]; 
    compArray = Array.from(compChoice);
    console.log(compArray);
    for (var i=0; i < compArray.length; i++) {
      numberSpaces.push("_");
      document.getElementById("blank-blank").innerHTML = numberSpaces.join(" ");
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

    let userText = userKey.toLowerCase();
    
    
     if (compChoice.includes(userText) === true) {
        for (var i=0; i < compChoice.length; i++) {
            if (compChoice[i] === userText) {
                numberSpaces[i] = userText;
                document.getElementById("blank-blank").innerHTML = numberSpaces.join(" ");
            }
        } 
    }
    else { 
            lettersGuessed.push(userText);
            document.getElementById("already-guess").innerHTML = lettersGuessed;
            console.log(userText);
            console.log(lettersGuessed);
            console.log(compArray.includes(userText));
            //if userText goes into lettersGuessed, guesses remaining - 1
            guessRemain--;
            document.getElementById("guess-remain").innerHTML = guessRemain;
            }  
            if (guessRemain === 0) {
                losses++;
                document.getElementById("loss-loss").innerHTML = losses;
                init();
                
             } if (compArray.toString() == numberSpaces.toString()){
                 wins++;
                 document.getElementById("win-win").innerHTML = wins;
                 init();    
             }
        } else alert("PICK LETTERS ONLY");
    }
    
    init();
    
    //figure out how to exclude non-letters


