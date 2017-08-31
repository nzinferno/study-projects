function getSleepHours(day){
  switch (day)
    case 'monday':
        return 8;
        break;
    case 'tuesday':
        return 8;
      	break;
    case 'wednesday':
      	return 8;
      	break;
    case 'thursday':
      	return 8;
      	break;
    case 'friday':
      	return 8;
      	break;
    case 'saturday':
      	return 8;
      	break;
    case 'sunday':
      	return 8;
      	break;
     
}
      
function getActualSleepHours () {
       return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  }
  
function getIdealSleepHours () {
  var idealHours = 8
  return idealHours * 7;
}
  
function calculateSleepDebt(){
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
}
  
if (actualSLeepHours === idealSleepHours){
  console.log("User got the perfet amount of sleep");
} else if (actualSleepHours > idealSleepHours) {
  console.log("User got more sleep than needed!")
} else {
  console.log("User shoud grab some Zzzzzzs");
}
  
  
  getSleepHours("monday");
  
  
  
  