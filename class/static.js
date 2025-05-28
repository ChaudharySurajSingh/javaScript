/*The static keyword defines a static method or field for a class. Static properties (fields and methods) are defined on the class itself instead of each instance. Static methods are often used to create utility functions for an application, whereas static fields are useful for caches, fixed-configuration, or any other data that doesn't need to be replicated across instances. */
class MyClass {
    constructor(value) {
        this.value = value;
    }

    // Instance method
    getValue() {
        return "hello there";
    }

    // Static method
    static staticMethod() {
        return 'This is a static method.';
    }
}

// Creating an instance of MyClass
const myInstance = new MyClass('Hello, world!');

console.log(myInstance.getValue()); // Output: Hello, world!

// Calling a static method directly on the class, not on an instance
console.log(MyClass.staticMethod()); // Output: This is a static method.
//calling the method withen the derived class
class ParentClass {
    parentMethod() {
        console.log('Instance method from parent class');
    }
    parentProperty= "i am parent property"
}

class ChildClass extends ParentClass {
    childMethod() {
        // Call the parent class instance method using super
        super.parentMethod();
        console.log('Instance method from child class');
    }
    test(){
        console.log(this.parentProperty);
    }
}

const childInstance = new ChildClass();
childInstance.childMethod();
childInstance.parentMethod();
childInstance.test();

