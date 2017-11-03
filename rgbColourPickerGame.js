var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	// change visible colour options to three
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	// change visible colour options to three
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	// Genererate all new colours
	colors = generateRandomColors(numSquares);
	// pick new random colour, from array
	pickedColor = pickColor();
	// change colourDisplay to match picked Colour
	colorDisplay.textContent = pickedColor;
	// change colours of squares on the page
	for (var i = 0; i < squares.length; i++) {
 	squares[i].style.backgroundColor = colors[i];
 }
 h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	// add initial colours to squares
 	squares[i].style.backgroundColor = colors[i];
 	// add click listneres to squares
 	squares[i].addEventListener("click", function() {
      // grab colour of clicked square
      var clickedColor = this.style.backgroundColor;
      // compare colour to pickedColor
      if(clickedColor === pickedColor) {
      	messageDisplay.textContent = "Correct!";
      	resetButton.textContent = "Play Again?";
      	changeColors(clickedColor);
      	h1.style.backgroundColor = clickedColor;
      } else {
      	this.style.backgroundColor = "#232323";
      	messageDisplay.textContent = "Try Again";
      }
 	});
}

function changeColors(color) {
	// loop through all squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
	// change each colour to match given colour
}

function pickColor() {
	var random = Math.floor(Math.random()* colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// Make an array
	var arr = []
	// Add num random colors to array
	for (var i = 0;  i < num;  i++) {
	// get random colour and push into array
    arr.push(randomColor())
	}
	// return array
	return arr;
}

function randomColor() {
  // pick a "red" from 0-255
  var r = Math.floor(Math.random() * 256);
  // pick a "green" from 0-255
  var g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0-255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}