/**
 * Operator Precedence
 */

 var now = 2020
 var yearBorn = 1999
 var fullAge = 21

 var isFullAge = now - yearBorn  >= fullAge
 console.log(isFullAge); // true


 var ageNayem = now - yearBorn
 var ageMark = 35
 var average = (ageNayem + ageMark) / 2 
 console.log(average); // 28



 // Multiple Assignment
 var a, b

 a = b = (3+5)* 4-6
 console.log(a); //26
 console.log(a==b); // true


 //More Operators

 a = (a = a*2)
 b = (a *=2)

 var isEqual = (a == b) // 52 == 52
 console.log(isEqual); // true

 