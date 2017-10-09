function isEven(num){
	if (num % 2 === 0) {
		console.log("True");
	} else {
		console.log("False");
	}
}

isEven(4)

// Best Answer

function isEven(num) {
	return num % 2 === 0;
}


function factorial(num){
	var result = num;
	if(num === 0 || num === 1) 
		return 1;
	while (num > 1) {
		num--;
		result = result * num;
	}
	return result;
}

factorial(4)


// Best Answer

funtion factorial (num) {
	// define a result variable
	var result = 1;
	// calculate factorial and store result
	for(var i = 2; i <=num; i++) {
		result *= i;
	}
	// return the result 
	return result;
}


function kebabToSnake(kebab) {
	var snakeString = kebab.replace(/-/g, "_");
	return snakeString
}


// Best answer 

function kebabToSnake(str) {
	// replace all "-" with "_"
	var newStr = str.replace(/-/g , "_");
	// return str
	return newStr
}
