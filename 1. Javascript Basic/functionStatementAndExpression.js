/**
 * Function Statement and Expression
 */

// Function Declaration

// function occupation( job, name) {}

// Function Expression
var occupation =  function(job, name) {

    switch(job) {
        case 'teacher' :
            return name + " teaches kids how to code."
        case 'driver'  :
            return name + " drives a car."
        case 'designer':
            return name + " designs beautiful websites."
        default :
            return name + " does something else."
    }
}
console.log(occupation("driver", 'Khan'));
console.log(occupation("teacher", 'Nayem'));
console.log(occupation("designer", 'Akhtar'));


/**
 * Expression
 */

// JavaScript Expressions are pieces of code that always expect a value. As long as return a single value then it is an expression. And anything that produce result is an expression. 

/**
 * Statement
 */

 // They do just perform actions and doesn't produce any immediate value or result..