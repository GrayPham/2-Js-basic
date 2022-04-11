var firstName = "John";
var age = 16;
age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log(firstName + " drinks juice.");

var drinks = age >= 18 ? "beer" : "juice";

var job = "teacher";
switch (job) {
  case "teacher":
    console.log(firstName + " teachers kids how to code");
    break;
  case "driver":
    console.log(firstName + " driver an uber in Lisbon");
  default:
    console.log(firstName + " does something else.");
}
