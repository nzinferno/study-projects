var ageYear = prompt("What year were you born?");
var ageMonth = prompt("What numerical month were you born?");
var ageDay = prompt("What day were you born?");
var ageInDays = (2017-ageYear)*365 + (ageMonth*30.5) + ageDay;
alert("You have been alive approximately" + ageInDays +" days!");