// sumArray(), return the sum of an array

function sumArray(arr) {
	var total = 0
	for (var i = 0; i < arr.length; i++) {
	    total = total + arr[i]}
		console.log(total);
}

// max(), write a function that returns the maximum number in that array

function max(arr) {
	var highest = arr[0];
	arr.forEach (function(current, i){
	if (highest < arr[i]) {
		highest = arr[i];
	}
	});
	console.log(highest);
}

//Building own forEach

