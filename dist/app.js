"use strict";
//every object that is instance of class Person should have Greetable properties, and Greetable inforces to have Named properties
class Person {
    constructor(n, age) {
        this.name = n;
        if (age) {
            this.age = age;
        }
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
    printName() {
        console.log(this.name);
    }
    printAge() {
        if (this.age) {
            console.log(this.age);
        }
        else {
            console.log('Hi');
        }
    }
}
let person1; //we later create an object based on interface
person1 = new Person('Max', 30);
person1.greet('Hi there, I am');
const person2 = new Person('Manu');
person2.printAge();
//# sourceMappingURL=app.js.map