/*To achieve conversion of  object properties to primitive types using the 'toString()' or 'valueOf()' methods, or by using implicit conversion through operators. */
const person = {
    name: "John Doe",
    age: '25',
    address: "123 Main St",
    contact:54696286852,
    greet:()=>{
        agef= 32;
        console.log("hey there: how are you");
    }
};
// toString():
console.log(person.contact.toString());//converting a number to string
// valueOf():
console.log(person.age.valueOf());//converting a string to number
//implicit (concatination):
console.log(person.name+ person.contact);//adding a number to a string


//Symbol.toPrimitive(hint):
/*
There are 3 types (hints) of it:

"string" (for alert and other operations that need a string)
"number" (for maths)
"default" (few operators, usually objects implement it the same way as "number")


Call obj[Symbol.toPrimitive](hint) if the method exists,*/
