// var firstname = "Hungpham";
// console.log(firstname);

// var lastname = "TamNhu";
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var dateMarige = prompt("what is his name?");
// console.log(firstname + " " + dateMarige);
var year = 2018;
var yearJohn = year - 18;

console.log(yearJohn);
var yearMark = year - 18;
console.log(yearMark);

/********************************************************
 * Loops and iteration
 */
for (var i = 0; i < 10; i++) {
  console.log(i);
}

var join = ["John", "Smith", 1990, "designer", false];
for (var i = 0; i < join.length; i++) {
  console.log(join[i]);
}

var i = 0;
for (; i < join.length; i++) {
  if (typeof join[i] != "string") continue;
  console.log(join[i]);
}
i = 0;
for (; i < join.length; i++) {
  if (typeof join[i] != "string") break;
  console.log(join[i]);
}
var i = 0;
while (i < join.length) {
  console.log(join[i]);
  i++;
}
