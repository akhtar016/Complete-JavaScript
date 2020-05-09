/**
 * The Ternary Operator and Switch Operator
 */

// ternary operator

var firstName = "Nayem"
var age = 21

age >= 18 ? console.log(firstName + " is an adult.") : console.log(firstName + " is a baby.");
// Nayem is an adult

var nayemIs= age >= 18 ? "adult" : "baby"
console.log(nayemIs);
// adult


// Switch Statement

var job = 'Web Developer'

switch(job) {
    case "Teacher" :
        console.log(firstName+ " teaches kids.");
        break
    case "Developer" :
    case "Web Developer" :
        console.log(firstName+ " developes beautiful websites.");
        break
    case "Singer" :
        console.log(firstName+ " sings a song.");
        break
    default:
        console.log(firstName + " does something else.");
}
// Nayem develops beautiful websites.


age = 21
switch(true) {
    case age < 13 : console.log(firstName + " is a boy.");
    break
    case age >13 && age <20 : console.log(firstName+ " is a teenager.");
    break
    case age >=20 && age <30 : console.log(firstName+ " is a young man.");
    break
    default : console.log(firstName+ " is a man.");
}
// Nayem is a young man.










