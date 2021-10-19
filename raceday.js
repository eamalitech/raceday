//randomly assigns race number
let raceNumber = Math.floor(Math.random() * 1000);

//conditions for either early or late registry
const earlyRegistry = false; 
const age = 18;
if (age > 18 && earlyRegistry){
  raceNumber += 1000; 
} 
if (age > 18 && earlyRegistry){
  console.log(`adult runners who registered early with the following race numbers: ${raceNumber} will race at 9:30am`)
  }
else if(age > 18 && !earlyRegistry){
  console.log(`Late adults who registered with the following race numbers: ${raceNumber} will race at 11:00 am`)
}
else if(age < 18 ){
  console.log(`Youth applicants who registered with the following race numbers: ${raceNumber} will race at 12:30 pm`)
}
else{
  console.log('You are 18 years Please see the registration desk!')}
