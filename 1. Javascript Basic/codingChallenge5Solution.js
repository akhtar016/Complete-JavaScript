var tipsJohn = []
var totalsJohn = []
var johnBill = {
    bills : [124, 48, 268, 180, 42],
    calculateTip: function () {
        for (let i = 0; i < this.bills.length; i++) {
            
            if (this.bills[i] < 50) {
                let tip = this.bills[i]*.20
                let total = tip + this.bills[i]
                tipsJohn.push(tip)
                totalsJohn.push(total)
                
            } else if (this.bills[i] >= 100 && this.bills[i] <= 300) {
                let tip = this.bills[i]*.10
                let total = tip + this.bills[i]
                tipsJohn.push(tip)
                totalsJohn.push(total)
            } else {
                let tip = this.bills[i]*.25
                let total = tip + this.bills[i]
                tipsJohn.push(tip)
                totalsJohn.push(total)
            }
           
        }
    }
}

johnBill.calculateTip()

console.log("John",totalsJohn);
console.log("John",tipsJohn);

var tipsMark = []
var totalsMark = []
var markBill = {
    bills : [77, 375, 110, 45],
    calculateTip: function () {
        for (let i = 0; i < this.bills.length; i++) {
            
            if (this.bills[i] < 100) {
                let tip = this.bills[i]*.20
                let total = tip + this.bills[i]
                tipsMark.push(tip)
                totalsMark.push(total)
                
            } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
                let tip = this.bills[i]*.15
                let total = tip + this.bills[i]
                tipsMark.push(tip)
                totalsMark.push(total)
            } else {
                let tip = this.bills[i]*.25
                let total = tip + this.bills[i]
                tipsMark.push(tip)
                totalsMark.push(total)
            }
           
        }
    }
}

markBill.calculateTip()

console.log("Mark",totalsMark);
console.log("Mark",tipsMark);


var tipsArrayJohn = tipsJohn
var tipsArrayMark = tipsMark

console.log("John", tipsArrayJohn);
console.log("Mark", tipsArrayMark);

function sumArrayElements (arr) {
    let sum = 0 
    for (let i=0 ; i <arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum;
}

var totalTipsJohn = sumArrayElements(tipsArrayJohn);
var totalTipsMark = sumArrayElements(tipsArrayMark);

console.log("John",totalTipsJohn);
console.log("Mark",totalTipsMark);

var averageTipsJohn = totalTipsJohn / tipsArrayJohn.length
var averageTipsMark = totalTipsMark / tipsArrayMark.length

console.log("John",averageTipsJohn);
console.log("Mark",averageTipsMark);

if ( averageTipsJohn > averageTipsMark) {
    console.log("John's family pays more tips");
} else if ( averageTipsJohn < averageTipsMark) {
    console.log("Mark's family pays higher tips");
} else {
    console.log("Both pays equal tips");
}



/**
 * Efficient Solution
 */

 var john = {
     name:"John",
     bills: [124,48,268,180,42],
     calculateTips : function () {
         this.tips = []
         this.finalValues = []
          for (let i = 0; i < this.bills.length; i++) {
              var percentage;
              var bill = this.bills[i]

              if (bill < 50) {
                  percentage = 0.2
              } else if (bill >=50 && bill <= 200) {
                  percentage = 0.15
              } else {
                  percentage = 0.1
              }

              this.tips[i] = bill * percentage
              this.finalValues[i] = this.tips[i] + bill
          }
     }
 }

 var mark = {
    name:"Mark",
    bills: [77, 475, 110, 45],
    calculateTips : function () {
        this.tips = []
        this.finalValues = []
         for (let i = 0; i < this.bills.length; i++) {
             var percentage;
             var bill = this.bills[i]

             if (bill < 100) {
                 percentage = 0.2
             } else if (bill >=100 && bill <= 300) {
                 percentage = 0.1
             } else {
                 percentage = 0.25
             }

             this.tips[i] = bill * percentage
             this.finalValues[i] = this.tips[i] + bill
         }
    }
}

function calculationAverage (tipsArray) {
    var sum = 0 
    for (let i = 0; i < tipsArray.length; i++) {
        sum = sum + tipsArray[i]
    }
    return sum/tipsArray.length
}



// Do the calculation
mark.calculateTips()
john.calculateTips()

console.log(john, mark);

john.average = calculationAverage(john.tips)
mark.average = calculationAverage(mark.tips)

console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.name + "'s family pays higher tips, with an average of $", + john.average);
} else if (john.average < mark.average) {
    console.log(mark.name + "'s family pays higher tips, with an average of $", + mark.average);
} 