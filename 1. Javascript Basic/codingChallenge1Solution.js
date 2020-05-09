/**
 * Solution of Coding Challenge 1
 */

// Store Mark's and John's mass and height in variables
var massMark, massJohn, heightMark, heightJohn;
massMark = 60
heightMark = 1.5

massJohn = 65
heightJohn = 1.82

// Calculate both their BMIs

var BMIsOfMark, BMIsOfJohn

BMIsOfMark = massMark / (heightMark * heightMark)
console.log(BMIsOfMark.toFixed(2)); // 26.67

BMIsOfJohn = massJohn / (heightJohn * heightJohn)
console.log(BMIsOfJohn.toFixed(2)); // 19.62

// Create a boolean variable containing information about whether Mark has a higher BMI than John.
var isMarksBMIsHigher = BMIsOfMark > BMIsOfJohn

// Print a string to the console containing the variable from step 3.
console.log(isMarksBMIsHigher); // true