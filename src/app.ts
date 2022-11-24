interface Named {
  readonly name: string; //force to initialize once
  printName?:() => void; //? means optional, classes that implements Named can have or not have printName()
}
interface Greetable extends Named {
  //intefaces can exptends from multiple interfaces   //interface Greetable extends Named, AnotherOne
  greet(phrase: string): void; //parameters and what the method should return
}

//every object that is instance of class Person should have Greetable properties, and Greetable inforces to have Named properties
class Person implements Greetable {
  //class Person implements Greetable, Named{} also possible if Greetable doesn't extends from Named
  public name: string;
  public age?: number;
  constructor(n: string, age?: number) {
    this.name = n;
    if(age){
        this.age = age;
    } 
  }
  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }
  printName() {
    console.log(this.name);
  }
  printAge() {
    if(this.age){
        console.log(this.age);
    } else {
        console.log('Hi')
    }
   
  }
}

let person1: Greetable; //we later create an object based on interface
person1 = new Person('Max', 30);
person1.greet('Hi there, I am');
const person2: Person = new Person('Manu');
person2.printAge();