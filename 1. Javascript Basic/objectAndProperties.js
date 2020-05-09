/**
 * Objects and Properties
 */

 // Object Literal
var person = {
    firstName : 'Nayem',
    lastName: 'Khan',
    birthYear: 1999,
    family: ['Sakib', 'Tamim', 'Akhtar', 'Emma'],
    job: 'Developer',
    isMarried: false
}

console.log(person.firstName); // Nayem
console.log(person['lastName']); // Khan

var x = 'birthYear'
console.log(person[x]);
person.job = 'designer'
person['isMarried'] = true
console.log(person);


// new Object syntax
var emma = new Object()
emma.name = "Emma",
emma.lastName = "Watson",
emma.birthYear = 1990,
emma['job'] = "Actress"
console.log(emma);