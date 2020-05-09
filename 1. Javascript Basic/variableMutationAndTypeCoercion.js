/*************************
* Variable mutation and type coercion
*/

var firstName = "Nayem"
var age = 21

console.log(firstName + " " +age); // Nayem 21

var job, isMarried;
job = "Developer"
isMarried = false

console.log(firstName + " is a " + age + " year old " + job +'. Is he married? '+ isMarried);
// Nayem is a 21 year oldDeveloper. Is he married? false


// Variable Mutation
age = 20
job = "Web Developer"

console.log(firstName + " is a " + age + " year old " + job +'. Is he married? '+ isMarried);
// Nayem is a 20 year old Web Developer. Is he married? false


var a = "5"
var b = 5

console.log(a+b); // 55 


var lastName = prompt("What is your last name?")
console.log(firstName + " " + lastName) 