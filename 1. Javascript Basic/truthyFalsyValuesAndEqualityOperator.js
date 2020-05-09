/**
 * Truthy and Falsy Values
 */

 // A value that is false is called falsy value

 // List of falsy values : undefined, null, 0, "", Nan
 // Truthy Values : All the values that aren't falsy

 var height;


 if (height) {
     console.log("Variable is defined");
 } else{
     console.log("Variable has NOT been defined");
 }

 // Variable has NOT been defined

 var height = 0 


 if (height) {
     console.log("Variable is defined");
 } else{
     console.log("Variable has NOT been defined");
 }

 // Variable has NOT been defined

 var height;


 if (height || height === 0) {
     console.log("Variable is defined");
 } else{
     console.log("Variable has NOT been defined");
 }

 // Variable has NOT been defined


 var height;

 height = ""


 if (height || height === 0) {
     console.log("Variable is defined");
 } else{
     console.log("Variable has NOT been defined");
 }

 // Variable has NOT been defined


 /**
  * Equality Operator
  */

 var height = 23

if (height == "23") {
    console.log("The == operator does type coercion!");
}

// The == operator does type coercion!

if (height === "23") {
    console.log("The === operator does type coercion!");
} else {
    console.log("The === operator doesn't do type coercion!");
}

// The === operator doesn't do type coercion