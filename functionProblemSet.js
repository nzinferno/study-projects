function isEven(num){
	if (num % 2 === 0) {
		console.log("True");
	} else {
		console.log("False");
	}
}

isEven(4)


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


function kebabToSnake(kebab) {
	var kebabString = kebab;
	var snakeString = kebabString.replace(/-/g, "_");
	return snakeString
}

