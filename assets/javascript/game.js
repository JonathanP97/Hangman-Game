$(document).ready( function() {

	var numWins;
	var currentWord;
	var numGuesses = 12;
	var wordFound = false;

	var wordBank = ["moneky", "turtle", "parrot", "zebra", "sloth", 
					"horse", "starfish", "giraffe", "elephant", "gorilla"];

	$(document).keyup( function() {

		var num;
		var keyhit = event.key;
		console.log(keyhit);

		//To search if the key hit by user is located in word
		num = currentWord.search(keyhit);

		//Value would return -1 if not within word and would decrease number of guesses
		if (num == -1) {

			numGuesses -=1;
			$("#guess").html(numGuesses);
		} // else {
			//the key hit was found within unknown word
			//Displays the letter found onto page
			//
		}


		}
		//If statement to determine when the complete word is found 
			//Wins is incremented
			//Reset number of guesses
			//Invoke getWord function
	
	});

	//Function will generate random number
	//Random number will be index for the word bank 
	function getWord() {

		var arrayIndex = Math.floor((Math.random() * wordBank.length)+1);
		currentWord = wordBank[arrayIndex];

		$("#unknown-word").html(currentWord);
		console.log(currentWord);
	}

	getWord();
});
