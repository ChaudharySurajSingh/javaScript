/*To create a symbol in JavaScript, you can use the 'Symbol()' function
The 'Symbol()' function returns a new, unique symbol each time it is called.  */
const symbol1 = Symbol(1);//here 1 is only optional discription that can use for debuging purpose 
const symbol2 = Symbol();

// You can also provide an optional description as an argument to the Symbol() function to add additional information or for debugging purposes:
let symbol = Symbol('My Symbol');
//the symbol will have the description "My Symbol". The description does not affect the uniqueness of the symbol and can be accessed using the description property:
console.log(symbol.description);  // My Symbol

// It's important to note that symbols are immutable, meaning their value cannot be changed once created. Each symbol is a unique identifier that remains constant throughout its lifecycle.

symbol = "i am modified";//  TypeError: Assignment to constant variable.
console.log(symbol.description);// return undefined

//Symbols are often used as keys for object properties to ensure uniqueness and avoid naming collisions:
const obj = {
    [Symbol('key')]: 'value',
    //we can also use symbol as identifier symbol as key
    [symbol1]:'value'
};



