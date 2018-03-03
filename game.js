//display when the page loads

//declare variables and arrays
let words = ["bulls", "hornets", "warriors", "wizards", "suns"];
let guessRemain = 10;
let lettersGuessed = [];
let guessIndex = -1;
let numberSpaces = [];
let wins = 0;


//on page load the game chooses a word
let randomNumber = Math.floor(Math.random()*5);
let compChoice = words[randomNumber];

//break letters of chosen word into array
let compArray = Array.from(compChoice);
console.log(compArray);

for (var i=0; i < compChoice.length; i++) {
    numberSpaces.push("_");
}

//game starts on first click
document.onkeyup = function (event) {
    //take letter pressed as an event aka userText
    userText = event.key; 
    
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
                alert("loser face");
                
             } if (compArray.toString() == numberSpaces.toString()){
                 wins++;
                 document.getElementById("win-win").innerHTML = wins;
             }
        }

    

    


