//an interface describes structure of object, we don't assign values, we use it as a type, no implementations in interface
//vs class is blueprint / we can assign values

interface Guest {    
    name: string;
    age: number;
    greet(phrase: string): void;//parameters and what the method should return
}
/*VS* 

type Person = {
    name: string;
    age: number;
    greet(phrase: string): void;//parameters and what the method should return
}

Interface in TypeScript can be used to define a type and also to implement it in the class
Classes that are derived from an interface must follow the structure provided by their interface.
The TypeScript compiler does not convert interface to JavaScript. 
It uses interface for type checking.
Classes can implement many interfaces but extends only one class
*/

let guest1: Guest;//we later create an object based on interface

guest1={
    name: 'Max',
    age: 30,
    greet(phrase: string){
        console.log(phrase+' '+this.name);

    }
};

guest1.greet('Hi there, I am');