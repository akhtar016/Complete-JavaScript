/**
 * Arrays
 */

 // Initialize new array
var names = ["Nayem", 'Akhtar', 'Khan']
var years = new Array(1997,1998,1998)

console.log(names.length);
console.log(names);


// Mutate array data
names[1] = 'Akhtaruzzaman'
console.log(names);

names[6] = 'Akhtar'
console.log(names);
console.log(names.length);


// Different Data Types

var nayem =  [ 'Nayem', 1999, 'designer', false]

nayem.push("blue")
nayem.unshift('Mr.')
console.log(nayem);

nayem.pop()
nayem.pop()
nayem.shift()
console.log(nayem);

console.log(nayem.indexOf(1999))
console.log(nayem.indexOf(11)); 

nayem.indexOf('designer')  === -1 ? console.log("Nayem is not a designer") :
console.log("Nayem is a designer")