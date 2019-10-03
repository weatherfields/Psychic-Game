let wins = 0;
let losses = 0;
let guessesLeft = 10;
let guessesSoFar = [];
const goodGuesses = [];
const badGuesses = [];
var userGuess = "";

var randomNumber = Math.floor(Math.random() * 26)



const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var compGuess = alphabet[randomNumber];
console.log(compGuess);


function testGuess() {
    console.log(userGuess);
    //if guessed correctly,

    if (userGuess === compGuess) {
        wins++;
        goodGuesses.push(userGuess);
        alert("good guess! you have " + wins + " wins");
        document.getElementById("wins").innerHTML = wins;
        console.log(badGuesses)

    } else if (userGuess !== compGuess) {

        losses++;
        badGuesses.push(userGuess);
        document.getElementById("losses").innerHTML = losses;
        console.log(badGuesses)
    } else {
        alert("no key was selected!");
    }


}

document.onkeyup = function (event) {

    userGuess = event.key;

    testGuess();


}



console.log(userGuess);

document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guesses-left").innerHTML = guessesLeft;
// Learned about .join here: https://www.w3schools.com/jsref/jsref_join.asp
document.getElementById("guesses-so-far").innerHTML = guessesSoFar.join(" ");


// the app randomly picks a letter, and 


//the user has to guess which letter the app chose. 




// Guess what letter I'm thinking of -comparison btw user guess & comp guess


// Wins: (# of times the user has guessed the letter correctly)


// Losses: (# of times the user has failed to guess the letter correctly ***after exhausting all guesses***)


// Guesses Left: (# of guesses left. ****This will update*****)


// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)


// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).


// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).