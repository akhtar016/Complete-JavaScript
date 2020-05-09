/**
 * Functions
 */

function calculateAge (birthYear, currentYear = 2020) {
    return currentYear - birthYear ;
}

var ageMine = calculateAge(1999)
var ageAkhtar = calculateAge(1998)
var ageKhan = calculateAge(1997)
console.log(ageMine, ageAkhtar, ageKhan);


function yearsUntilRetirement(birthYear, name) {
    var age = calculateAge (birthYear)
    var retirement = 65 - age

    if (retirement > 0) {
        console.log(name + " retires in " + retirement + ' years');
    } else {
        console.log(name, "is already retired");
    }
    
}

yearsUntilRetirement(1955, "Nayem")
yearsUntilRetirement(1997, "Khan")
yearsUntilRetirement(1999, "AKhtar")












