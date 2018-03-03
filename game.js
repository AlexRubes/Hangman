//display when the page loads

//create array of words to guess
let words = ["bulls", "hornets", "warriors", "wizards", "suns"];
let guesses = 10;
let lettersGuessed = [];
let guessIndex = -1;
let numberSpaces = [];


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
            }
        }




//screen displays dash marks that correspond to word length


//run loop until you cover all the spaces that have that correct letter
//if false, add letter to already guessed section in no particular order
//with each letter guessed, decrese the number of guesses by 1
//if word is correctly guessed, increase win count by 1 and restart process
//if user runs out of guesses (=0), display you lose

