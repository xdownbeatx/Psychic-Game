


var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

		 var wins = 0;
		 var losses = 0;
		 var numGuesses = 9;
		 var guessChoice = [];

		 document.onkeyup = function(event) {

             var userGuess = event.key.toLowerCase();

		 	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            
             console.log(computerGuess);

		 	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
		 	

			if (options.indexOf(userGuess) > -1) {

				if (userGuess === computerGuess) {
					wins++;
					numGuesses = 9;
                    guessChoice = [];
                    document.querySelector(".Winning-key").innerHTML = "your right the answer was: " + computerGuess;
                    
				}

				if (userGuess != computerGuess) {
					numGuesses --;
					guessChoice.push(userGuess);
				}

				if (numGuesses === 0) {

				numGuesses = 9;
				losses ++;
				guessChoice = [];

				
			}

			var html = 
			"<h1> The Psychic Game </h1>" +
			"<p>Guess what letter I'm thinking of!</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + numGuesses + "</p>" +
            "<p>Your Guesses so far: " + guessChoice.join(", ") + "</p>"
            "<p class='Winning-key'></p>"
            ;

			document.querySelector("#game").innerHTML = html;

			
			}
		};	
