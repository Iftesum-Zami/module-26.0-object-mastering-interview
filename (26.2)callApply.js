const normalPerson = {
    firstName: 'rahim',
    lastName: 'uddin',
    salary: 15000,
    getFullName: function(){ // anonymous function, method
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
};

// console.log(normalPerson);
normalPerson.chargeBill(150);
normalPerson.chargeBill(3000);
console.log(normalPerson.salary);