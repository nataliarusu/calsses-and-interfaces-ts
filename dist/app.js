"use strict";
//every object that is instance of class Person should have Greetable properties
class Person {
    constructor(n, age) {
        this.name = n;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
    printName() {
        console.log(this.name);
    }
    printAge() {
        console.log(this.age);
    }
}
let person2; //we later create an object based on interface
person2 = new Person('Max', 30);
person2.greet('Hi there, I am');
//# sourceMappingURL=app.js.map