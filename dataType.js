var a = 10;
var b = 2.3;
let c = "hello";
const d = true;
var e = null;
var f = undefined;
var g = Symbol("unique");
var h = BigInt(12345678901234567890n);
var i = { name: "Alice", age: 30 }; // Object
var j = [1, 2, 3, 4, 5]; // Array
console.log("Data Types:");
console.log("a:", typeof a); // number
console.log("b:", typeof b);
console.log("c:", typeof c); // string
console.log("d:", typeof d); // boolean
console.log("e:", typeof e); // object (null is an object in JavaScript)
console.log("f:", typeof f); // undefined
console.log("g:", typeof g); // symbol
console.log("h:", typeof h); // bigint
console.log("i:", typeof i); // object
console.log("j:", typeof j); // object (arrays are also objects in JavaScript)
console.log("i is an object:", i instanceof Object); // true
console.log("j is not an object but the instance of object:", Array.isArray(j)); // true
console.log("j is an array:", j instanceof Array); // true
console.log("j is also the instance of object:", j instanceof Object);
