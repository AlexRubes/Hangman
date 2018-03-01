//display when the page loads

//create array of words to guess
let words = ["bulls", "hornets", "warriors", "wizards", "suns"];
let guesses = 10;
let userGuess = document.getElementById("already-guess");
let lettersGuessed = [];

//game starts on first click
document.onkeyup = function (event) {
    //take letter pressed as an event aka userText
    userText = event.key;
    //push userText into an array
    lettersGuessed.push(userText);
    document.getElementById("already-guess").innerHTML = lettersGuessed;
    console.log(userText);
    console.log(lettersGuessed);

    console.log(compArray.includes(userText));

    if (compArray.includes(userText)) {
        console.log("it works!");
        //if userText is a letter in compArray, put in current word
        document.getElementById("blank-blank").innerHTML = userText;
    }
}
//on page load the game chooses a word
    let randomNumber = Math.floor(Math.random()*5);
    let compChoice = words[randomNumber];

//break letters of chosen word into array
    let compArray = Array.from(compChoice);
    console.log(compArray);

//screen displays dash marks that correspond to word length
window.onload = function() {
    let numberSpaces = compArray.fill("_");
    console.log(compArray.fill("_"));
    document.getElementById("blank-blank").innerHTML = numberSpaces;
};

//if true, assign letter to correct position on screen

//use indexof to get position of the letter
if a in word let location = word.indexof ('a')
//sets location to zero

//use splice to replace dashes with letters


//run loop until you cover all the spaces that have that correct letter
//if false, add letter to already guessed section in no particular order
//with each letter guessed, decrese the number of guesses by 1
//if word is correctly guessed, increase win count by 1 and restart process
//if user runs out of guesses (=0), display you lose

//.join("") turns array into string

