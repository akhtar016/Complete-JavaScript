// Solution

var tip = [];
var total = [];


function tipCalculator(bill) {


  if (bill < 50) {
    let tipA = Number((bill * 0.2).toFixed(2));
    let totalA = bill + bill * 0.2;

    tip.push(tipA)
    total.push(totalA)

    //console.log("The bill is under 50 so the tips is ", (bill*0.2).toFixed(2));
    // return {
      
    // };
  } else if (bill >= 50 && bill <= 200) {

    let tipA = Number((bill * 0.15).toFixed(2));
    let totalA = bill + bill * 0.15;

    tip.push(tipA)
    total.push(totalA)

    //console.log("The bill is between 50 to 200 so the tips is", (bill*0.15).toFixed(2));
    // return {
    //   tip: Number((bill * 0.15).toFixed(2)),
    //   total: bill + bill * 0.15,
    // };
  } else {
    let tipA = Number((bill * 0.1).toFixed(2));
    let totalA = bill + bill * 0.1;

    tip.push(tipA)
    total.push(totalA)

    //console.log("The bill is over 200 so the tips is ", (bill*0.1).toFixed(2));
    // return {
    //   tip: Number((bill * 0.1).toFixed(2)),
    //   total: bill + bill * 0.1,
    // };
  }
}

(tipCalculator(124));
(tipCalculator(48));
(tipCalculator(268));

console.log("The tip array",tip);
console.log("The total amount array",total);



/**
 * Efficient Solution
 */

 function tipCal(bill) {
     var percentage;

     if (bill <50) {
         percentage = .2
     } else if ( bill >= 50 && bill <=200) {
         percentage = .15
     } else {
         percentage = .1
     }
     return bill * percentage
 }

 var billArray = [124,48,268]
 var tipArray = [tipCal(billArray[0]),tipCal(billArray[1]),tipCal(billArray[2])]
 var totalBillArray = [billArray[0] + tipArray[0],billArray[1] + tipArray[1],billArray[2] + tipArray[2]]

 console.log("The bill array is", billArray);
 console.log("The tip array is", tipArray);
 console.log("The total bill array is", totalBillArray);