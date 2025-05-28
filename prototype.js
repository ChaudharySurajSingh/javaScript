/*in javascript prototype is the internal property of object that is the reference to another object 
* when we create an object in javascript it automaticaly link other internal oject */
class prto{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
let obj = new prto("suraj singh",20);
console.log(obj);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello(greet) {
        console.log(`${greet} my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const john = new Person('John', 30);
john.sayHello("good morning"); // Outputs: Hello, my name is John and I am 30 years old.

object = {
    uname: "Ruchima chaudhary",
    age :19,
    password:"ruchi@cs89",
    greet:function(){
        console.log("hey there i am "+`${this.uname}`);
    }
}
object2 = {
    uname:"priyanka",
    age:18,
    email:'priyacs90@gmail.com',
}
object2.__proto__=object;//inhariting the property of another object 
console.log(object2.password);
console.log(object2.greet());//first the function look for the uname in its calling object if not found then it move to its inharited object if the same the chaining accure at last if not found return undefined
