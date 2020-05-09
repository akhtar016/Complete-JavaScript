/**
 * Loops and Iteration
 */

 // for loop
 for ( var i = 0 ; i <5 ; i++) {
    // console.log(i);
 }

// i = 0 , 0 < 5  true, log i to console,  i++
// i = 1 , 1 < 5  true, log i to console,  i++
// i = 2 , 2 < 5  true, log i to console,  i++
// i = 3 , 3 < 5  true, log i to console,  i++
// i = 4 , 4 < 5  true, log i to console,  i++
// i = 5 , 5 < 5  FALSE, exit the loop!


var nayem = ['Nayem', 'Khan', 1999, 'Student', false]

for (let i = 0; i < nayem.length; i++) {
    const element = nayem[i];
   // console.log(element);
}

// while loop

var i = 0
while (i < nayem.length) {
    //console.log(nayem[i]);
    i++
}


 // continue and break statements

 
var nayem = ['Nayem', 'Khan', 1999, 'Student', false, 'blue']

for (let i = 0; i < nayem.length; i++) {
    if (typeof nayem[i]  !== 'string') {
        continue 
    } 
   // console.log(nayem[i]); 
}


for (let i = 0; i < nayem.length; i++) {
    if (typeof nayem[i]  !== 'string') {
        break
    } 
   // console.log(nayem[i]); 
}



// looping backward

for (let i = nayem.length -1 ; i >= 0 ; i--) {
    console.log(nayem[i]);
}