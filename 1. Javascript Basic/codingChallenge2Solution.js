/**
 * Solution of Challenge 2
 */
var teamJohn = 89+120+103
var teamMike = 116+94+123

var averageOfTeamJohn = teamJohn / 3
var averageOfTeamMike = teamMike / 3

if (averageOfTeamJohn > averageOfTeamMike) {
    console.log("The team of John is winner with an average score: ", averageOfTeamJohn);
} else if ( averageOfTeamJohn < averageOfTeamMike) {
   console.log("The team of Mike is winner with an average score: ", averageOfTeamMike);
} else {
    console.log("There is a draw");
}

teamJohn = 117 + 120+ 123
averageOfTeamJohn = teamJohn / 3

if (averageOfTeamJohn > averageOfTeamMike) {
   console.log("The team of John is winner with an average score: ", averageOfTeamJohn);
} else if ( averageOfTeamJohn < averageOfTeamMike) {
  console.log("The team of Mike is winner with an average score: ", averageOfTeamMike);
} else {
   console.log("There is a draw");
}

var teamMary = 97 + 134 + 105
var averageOfTeamMary = teamMary / 3 

console.log("Average John's Team: ", averageOfTeamJohn, "Average Mike's Team: ", averageOfTeamMike, "Average Mary's Team: ", averageOfTeamMary);



if (averageOfTeamJohn > averageOfTeamMike  && averageOfTeamJohn > averageOfTeamMary) {
   console.log("John's team is a winner with an average score: ", averageOfTeamJohn);
} else if (averageOfTeamMike > averageOfTeamJohn  && averageOfTeamMike > averageOfTeamMary) {
   console.log("Mike's team is a winner with an average score: ", averageOfTeamMike);
} else if (averageOfTeamMary > averageOfTeamJohn  && averageOfTeamMary > averageOfTeamMike) {
   console.log("Mary's team is a winner with an average score: ", averageOfTeamMary);
} else {
   console.log("There is a draw");
}