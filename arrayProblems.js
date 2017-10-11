function printReverse(array) {
 for (var i = array.length - 1; i >= 0; i--) {
 	console.log(array[i]);
 }
}

printReverse([1,2,3,4]);


// isUniform() starts

function isUniform(arr) {
	var first = arr[0];
	for (var i = 1;  i<arr.length; i++) {
		if(arr[i] !== first) {
			return false
		}
	}
   return true;
	}


// sumArray()

function sumArray(arr) {
	
}