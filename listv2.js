var todos = ["Buy new Turtle"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
	// handle input
  if (input === "list") {
    listTodos();
  } else if (input === "new") {
	  addTodos();
  } else if ( input === "delete") {
    deleteTodos();
  }
// ask again for new input
  input = prompt("What would you like to do?");
}
console.log("Ok, you quit the app");


function listTodos() {
  console.log("******")
    todos.forEach(function(todo, i) {
      console.log(i + ": " + todo);
    });
  console.log("******")
}

function addTodos() {
  // ask for new todo
    var newTodo = prompt("Enter new Todo");
  // add to array
    todos.push(newTodo);
    console.log("Added toDo");
}

function deleteTodos(){
 // ask for index of todo to be deleted
    var index = prompt("Enter index of todo to delete")
    // delete that todo
    // splice
    todos.splice(index, 1);
    console.log("Deleted toDo");
}