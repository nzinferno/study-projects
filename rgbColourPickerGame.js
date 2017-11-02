var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)",
 ]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

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
      	messageDisplay.textContent = "Correct!"
      	changeColors(clickedColor);

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
	// hange each colour to match given colour
}