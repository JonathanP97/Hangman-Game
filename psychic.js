var win = 0;
var lose = 0;
var numGuess = 12;
var psychGuess = getLetter();
var gArray = [];
var colorIndex = 0;
var psychLetter;
var outcomes = "abcdefghijklmnopqrstuvwxyz";

document.onkeyup = function(event) {

	var isRepeat;
	var isLetter = false;

	var keyhit = event.key;
	console.log("key hit was: " + keyhit);

	if(keyhit == psychGuess) {

		win += 1;
		document.getElementById("wins").innerHTML = win;
		newGame();
	} else {

		for (var i = 0; i< gArray.length; i++) {

			if(gArray[i] == keyhit) {
				isRepeat = true;
			}
		}

		for (var i = 0; i<outcomes.length; i++) {
		
			if(isLetter == false) {
				if(outcomes.charAt(i) == keyhit) {

					isLetter = true;
				} 

			} 
		}

		if (isRepeat != true && isLetter == true) {
			numGuess -= 1;
			gArray.push(keyhit);

			document.getElementById("guesses").innerHTML = gArray;
			document.getElementById("numOfGuess").innerHTML = numGuess;
		}
	}

	if(numGuess == 0) { 
		newGame(); 
	}
	colorIndex ++;

	if(colorIndex == 4) {
		colorIndex = colorIndex-4;
	}
	console.log("color index is: " + colorIndex);
	colorFun(colorIndex);


	function colorFun(num) {

		var colorBank = ["#f5f556", "#56f556", "#5691f5", "#f55656"];
		var numA = num;
		var numB = num+1;
		var numC = num+2;
		var numD = num+3;

		if(numD>3) {
			numD = numD-4;
		}
		if(numC>3) {
			numC = numC-4;
		}
		if(numB>3) {
			numB = numB-4;
		}

		document.getElementById("w").style.backgroundColor = colorBank[numA];
		document.getElementById("l").style.backgroundColor = colorBank[numB];
		document.getElementById("g").style.backgroundColor = colorBank[numC];
		document.getElementById("last").style.backgroundColor = colorBank[numD];
	
	}
}

function newGame() {

	numGuess = 12;
	document.getElementById("numOfGuess").innerHTML = numGuess;
	lose += 1;
	document.getElementById("lose").innerHTML = lose;

	gArray = [];
	psychGuess = getLetter();
	
}

function getLetter() {

	var letter = "";
	var outcomes = "abcdefghijklmnopqrstuvwxyz"; 

	text = outcomes.charAt(Math.floor(Math.random() * outcomes.length ));
	return text;
}

