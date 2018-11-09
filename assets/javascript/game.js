var winCount = document.querySelector('.win-count');
var lossCount = document.querySelector('.loss-count');
var guessesLeft = document.querySelector('.guesses-left');
var previousGuesses = document.querySelector('.previous-guesses');
var winningKey = document.querySelector(".Winning-key");
var gameWon = false;
var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoice = [];
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.addEventListener('keyup', function(){
	
	var userGuess = event.key.toLowerCase();

	if (computerChoices.indexOf(userGuess) > -1){
		if (userGuess === computerGuess) {
			wins++;
			numGuesses = 10;
			guessChoice = [];
			gameWon = true;
			winningKey.innerText = `The winning character was ${computerGuess.toUpperCase()}`;
			computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		}
	
		if (numGuesses === 1) {
			numGuesses = 10;
			losses ++;
			guessChoice = [];
			gameWon = false;
			winningKey.innerText = ``;
		}

		if (userGuess !== computerGuess && numGuesses > 0) {
			numGuesses--;
			guessChoice.push(userGuess);
			gameWon = false;
			winningKey.innerText = ``;
		}
	}

	winCount.innerText = `Wins: ${wins}`;
	lossCount.innerText = `Losses: ${losses}`;
	guessesLeft.innerText = `Guesses Left: ${numGuesses}`;
	previousGuesses.innerText = `Your Guesses so far: ${guessChoice}`;

});