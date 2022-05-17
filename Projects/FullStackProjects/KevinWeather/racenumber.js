let raceNumber = Math.floor(Math.random() * 1000);
let early = false;
let runnerAge = 17 ;

if (early && runnerAge >= 18) {
  raceNumber += 1000;
}

if (early && runnerAge >= 18) {
  console.log(`Race will begin at 9:30, your race number is ${raceNumber}`)
} else if (!early && runnerAge > 18){
  console.log(`Race will begin at 11:00, your    race number is ${raceNumber}`)   
} else if (runnerAge < 22){
  console.log(`Race will begin at 12:30, your race number is: ${raceNumber}.`)
}  else {
  console.log('Please aproach the registration desk, thanks.');
}