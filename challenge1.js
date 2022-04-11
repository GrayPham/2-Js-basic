var MassStoreMark = 60;
var HeightStoreMark = 170;
var MassJohn = 70;
var HeightJohn = 160;

BMIsMark = MassStoreMark / (HeightStoreMark * HeightStoreMark);
BMIsJohn = MassJohn / (HeightJohn * HeightJohn);

checkBMI = BMIsMark > BMIsJohn;
console.log("Is Mask's BMI higher than John's? " + checkBMI);
