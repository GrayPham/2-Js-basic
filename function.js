function calculateAge(birthYear) {
  return 2018 - birthYear;
}
var ageJohn = calculateAge(1990);
console.log(ageJohn);

function yearsUnitRetirement(birthYear, firstName) {
  var age = calculateAge(birthYear);
  var retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName + " retiremnent in " + retirement + " year.");
  } else {
    console.log(firstName + " is already retired.");
  }
}
yearsUnitRetirement(1900, "John");
