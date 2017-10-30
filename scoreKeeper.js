var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1display");
var p2Display = document.querySelector("#p2display");
var p1Win = document.querySelector("#p1win");
var p2Win = document.querySelector("#p2win");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("#score");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


p1Button.addEventListener("click", function() {
	if(!gameOver){
      p1Score++;
      if(p1Score === winningScore){
      	p1Display.classList.add("winner");
      	p1Win.classList.add("gamewinner");
      	gameOver = true;
      }
      p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function() {
	if(!gameOver){
      p2Score++;
      if(p2Score === winningScore){
      	p2Display.classList.add("winner");
      	p2Win.classList.add("gamewinner");
        gameOver = true;
      }
      p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset() {
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p2Score = 0;
	p1Score = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	p1Win.classList.remove("gamewinner");
	p2Win.classList.remove("gamewinner");
	gameOver = false;
};


numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
    reset();
});