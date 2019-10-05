// I left all of my unused/replaced code at the bottom. Please let me know if this is helpful, or if I should just delete it next time. Thank you!

// global vars

let wins = 0;
let losses = 0;
let guessesLeft = 10;
let guessesSoFar = [];
let userGuess = "";
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// HTML element variables

let winsElement = document.getElementById("wins");
let losesElement = document.getElementById("losses");
let guessesLeftElement = document.getElementById("guesses-left");
let userGuessElement = document.getElementById("guesses-so-far");

// Set initial value for HTML variables

winsElement.innerHTML = wins;
guessesLeftElement.innerHTML = guessesLeft;

alert("Welcome to The Psychic Game, the game where it's your job to psychically guess what letter the computer is thinking! Please select any key from a to z to start the game and make your first guess.");

//assign initial values to elements

document.onkeyup = function (event) {
    userGuess = event.key.toLowerCase();
    let compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    // console.log(compGuess);

    if (userGuess === compGuess) {
        wins++;
        guessesSoFar = [];
        guessesLeft = 10;
        alert("good guess! you have " + wins + " wins");
        // I didn't really understand this until reading ... https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_innerhtml
        winsElement.innerHTML = wins;
        guessesLeftElement.innerHTML = guessesLeft;
        userGuessElement.innerHTML = "";
    } 
    else if (userGuess != compGuess) {
        guessesLeft--;
        // https://www.w3schools.com/jsref/jsref_push.asp
        guessesSoFar.push(userGuess);
        guessesLeftElement.textContent = guessesLeft;
        // I learned about the .join method after googling how to make an array visible as I'm typing it (which is converting it to a string). https://www.w3schools.com/jsref/jsref_join.asp
        userGuessElement.innerHTML = guessesSoFar.join(" ");
    } 
    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 10;
        guessesSoFar = [];
        alert("Sorry, you ran out of guesses! You have " + losses + " losses");
        losesElement.innerHTML = losses;
        guessesLeftElement.textContent = guessesLeft;
        userGuessElement.innerHTML = "";
    }
}
    // else {
    //     guessesLeft--;
    //     guessesSoFar.push(userGuess);
    //     document.getElementById("guesses-so-far").innerHTML = guessesSoFar.join(" "); }
        
        //badGuesses.push(userGuess);
        // user failed
        // guessesLeft decreases
        // we push guessed letter to guessesSoFar array 
        // possibility of losing    
        //display values
        // if loses, 
        // losses increase
        //game resets and we start again
        // what happens when game resets?

        // losses++;
        // badGuesses.push(userGuess);
        // document.getElementById("losses").innerHTML = losses;
        // console.log(badGuesses)
    
    // console.log(userGuess)
    // testGuess();
    // 


// guessesSoFar = [];
        // guessesSoFar = [];
        // guessesLeft--;
        // document.getElementById("guesses-so-far").innerHTML = guessesSoFar.join(" ");
        
        // reset so taht coputer guessess again.
        // User wins, 
        // increment wins by one, reset game (what does resetting do?)...
        // keep playing, computer guesses again
        // display values, which includes values of guessesSoFAr
        // goodGuesses.push(userGuess);

        //add guessed value to array, use guessesSoFar.push("actual Value")
        // console.log(badGuesses)

        // let goodGuesses = [];
// let badGuesses = [];
// var compGuess = alphabet[randomNumber];
// let guessesLeftP = document.getElementById('guesses-left');
// geussesLeftP.textContent = guessesLeft;
