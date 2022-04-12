// falsy value: underfined, null, 0, '', NaN
// Truthy values: NOT falsy
var height;
height = 23;
if (height || height === 0) {
  console.log("Variable is defiend");
} else {
  console.log("Variable has NOT been defiend.");
}
// Equality Operators
if (height == "23") {
  console.log("The == operator does type coercion");
}
