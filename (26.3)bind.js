const normalPerson = {
    firstName: 'rahim',
    lastName: 'uddin',
    salary: 15000,
    getFullName: function(){ // anonymous function, method
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        console.log(this);
        this.salary = this.salary - amount;
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

// normalPerson.chargeBill();

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);  // "heroPerson" is the value of this in the chargeBill function. Next call will show result
                                                                // will print the object
heroBillCharge(2000);
heroBillCharge(3000);
console.log(heroPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson); 
// friendlyChargeBill(2000);
// friendlyChargeBill(10); 
// friendlyChargeBill(10); 
