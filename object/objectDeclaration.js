// THERE ARE SEVERAL WAY TO DECLARE AN OBJECT IN JAVASCRIPT
/*Object Literal:
The simplest way to declare an object is by using object literals. It involves defining key-value pairs within curly braces {}. */
let person1 = {
    name: 'John Doe',
    age: 25,
    occupation: 'Developer'
};
console.log('---------- by object literals --------------');
console.log(person1)


/* creating instance of object:
in this method we create instance(object) for object constructor  by using new keyword that create an empty object and then we assign the properties */
let myobj = new Object();
myobj.name = 'john';
myobj.age = 25;
myobj.occupation = 'engineer';
console.log('---------- BY CREATING INSTANCE OF OBJECT --------------');
console.log(myobj);


/*Constructor Function:
JavaScript also allows to declare objects using constructor functions. we can define a function that acts as a blueprint for creating objects. Inside the constructor function, and assign properties to the newly created object using the this keyword. */
function person2(name,age,occupation) {
    this.name= name;
    this.age=age;
    this.occupation=occupation; 
}
let person = new person2('john',25,'engineer');//creating instance of function
console.log('---------- constructor function --------------');
console.log(person);


/*Object.create():
Another approach is to use the Object.create() method, which creates a new object with the specified prototype object.*/
const object = {
};

const personc = Object.create(object);//creating instance within existing object
personc.name = 'John Doe';
personc.age = 25;
personc.occupation = 'Developer';
console.log('--------- Object.create() --------------');
console.log(personc);


/*ES6 Classes:
With the introduction of ES6, JavaScript includes a class syntax for creating objects with constructor functions and methods. 

class Person {
    Pers(name,age,occupation){
        this.name= name;
        this.age= age;
        this.occupation= occupation;
    }
}
let pers = new Person('john',25,'engineer');//creating inctance of Person class
*/



