// Solution

var mark = {
    fullName : 'Mark',
    height: 1.5,
    mass : 60,
    calculateBMI: function () {
       return this.BMI = this.mass / (this.height*this.height)
    }
}

var john = {
    fullName : 'John',
    height: 1.8,
    mass : 75,
    calculateBMI: function () {
        return this.BMI = this.mass / (this.height*this.height)
     }
}

/*
* This way can be done

john.calculateBMI()
mark.calculateBMI()



if (john.BMI > mark.BMI) {
    console.log(john.fullName, "has the highest BMI with the BMI score", john.BMI);
} else if (john.BMI < mark.BMI) {
    console.log(mark.fullName, "has the highest BMI with the BMI score", mark.BMI);
}  else {
    console.log("They have the same BMI");
}

*/

/**
 * This can also be done by this way
 */

if (john.calculateBMI() > mark.calculateBMI()) {
    console.log(john.fullName, "has the highest BMI with the BMI score", john.BMI);
} else if (john.BMI < mark.BMI) {
    console.log(mark.fullName, "has the highest BMI with the BMI score", mark.BMI);
}  else {
    console.log("They have the same BMI");
}