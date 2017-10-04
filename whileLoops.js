console.log(" Printing all odd numbers between 300 and 333")

var number = 300

while(number <=333) {
	if (number % 2 !== 0) {
	console.log(number);
   }
   number++;
}



console.log(" Printing all numbers divisible by 5 and 3 between 5 and 50")

var number = 5

while(number <=50) {
	if (number % 3 === 0) {
	console.log(number);
   } else if (number % 5 === 0) {
   	console.log(number);
   }
   number++;
}