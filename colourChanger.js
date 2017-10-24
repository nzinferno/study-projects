var button = document.querySelector("button");

// button.addEventListener("click", function () {
// 	// if White
// 	  // Make it purple
//     // else make it white
// 		if(document.body.style.background === "white") {
// 		document.body.style.background = "purple";
// 	} else {
// 		document.body.style.background = "white";
// 	}
// });

button.addEventListener("click", function(){
  document.body.classList.toggle("purple");
});