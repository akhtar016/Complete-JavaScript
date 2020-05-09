/**
 * if...else statement
 */


var firstName = "Nayem"
var civilStatus = "Single"

if (civilStatus === 'married') {
    console.log(firstName + " " + "is Married");
} else {
    console.log(firstName + " " + "is Single");
}
// Nayem is Single

var isMarried = true
if (isMarried) {
    console.log(firstName + " " + "is Married");
} else {
    console.log(firstName + " " + "is Single");
}
// Nayem is Married

var burgerPrice = 10

if (burgerPrice < 15) {
    console.log("I will buy burger");
} else {
    console.log("I won't buy burger");
}
// I'll buy burger

var num1 = 20
var num2 = 30

if (num1 >num2) {
    console.log(num1 + " is the higher number");
} else {
    console.log(num2 + " is the higher number.");
}
