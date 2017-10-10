var todos = ["Buy new Turtle"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
	// handle input
  if (input === "list") {
    console.log("******")
    todos.forEach(function(todo, i) {
      console.log(i + ": " + todo);
    });
	console.log("********");
  } else if (input === "new") {
	// ask for new todo
    var newTodo = prompt("Enter new Todo");
	// add to array
    todos.push(newTodo);
  }

// ask again for new input
  input = prompt("What would you like to do?");
}
console.log("Ok, you quit the app");