const normalPerson = {
    firstName: 'rahim',
    lastName: 'uddin',
    salary: 15000,
    getFullName: function(){ // anonymous function, method
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tax, tips){
        console.log(this);
        this.salary = this.salary - amount - tax - tips;
        return this.salary; 
    }
};

const heroPerson = {
    firstName: 'hero',
    lastName: 'hamada',    // 3 systems for calling method function: bind
    salary: 25000
};

const friendlyPerson = {
    firstName: 'hero', 
    lastName: 'tadashi',
    salary: 50000
};


// normalPerson.chargeBill.call(heroPerson, 900, 100, 10); // this is the 1st value after (,)
// console.log(heroPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [900, 100, 10]);
console.log(heroPerson.salary);