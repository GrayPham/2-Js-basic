//John and Mike
var ScoredJohn = [89, 120, 103];

var ScoredMike = [116, 94, 123];
var sum = 0;
for (let score of ScoredJohn) {
  sum += score;
}
var avageJohn = sum / 3;
var avageMike = 0;
for (let score of ScoredMike) {
  avageMike += score;
}
avageMike = avageMike / 3;

var scoreMary = [97, 134, 105];
var sumMary = 0;
for (let score of scoreMary) {
  sumMary += score;
}
var avageMary = sumMary / 3;

avageMike > avageJohn
  ? avageMike > avageMary
    ? console.log("The team win is Mike's team with: " + avageMike + " score")
    : console.log("The team win is Mary's team with: " + avageMary + " score")
  : avageJohn > avageMary
  ? console.log("The team win is John's team with: " + avageJohn + " score")
  : console.log("The team win is Mary's team with: " + avageMary + " score");
