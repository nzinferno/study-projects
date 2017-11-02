var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
	// Genererate all new colours
	colors = generateRandomColors(6);
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