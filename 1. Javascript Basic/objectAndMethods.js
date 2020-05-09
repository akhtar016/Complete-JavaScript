/**
 * Object and Methods
 */
var person = {
    firstName : 'Nayem',
    lastName: 'Khan',
    birthYear: 1999,
    family: ['Sakib', 'Tamim', 'Akhtar', 'Emma'],
    job: 'Developer',
    isMarried: false,
    calculateAge :  function (){
        this.age =  2020 - this.birthYear
    }
}

person.calculateAge()

console.log(person);

