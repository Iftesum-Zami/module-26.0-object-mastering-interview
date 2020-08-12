class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('hero', 'Hamada', 20000);
console.log(heroPerson);

const friendlyPerson = new Person('hero', 'tadashi', 30000);
console.log(friendlyPerson);

// class is a patern to make object of same property*
// new is used for making a new object from class 