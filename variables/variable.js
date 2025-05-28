//there are four way to declare a variable in js
/*1 - var- varaible declaredwith var keyword can be re-declared and updated. and have function scope
2 - let - variable declared with let keyword can be updated but not re-declared and have block scope
3 - const - variable declared with const keyword can neither be updated nor re-declared and have block scope
4 - none keyword  - variabele declared without any keyword can be updated and re-declared and have global scope
*/

var a = 10; // let variable
const b = 20; // const variable
let c = 30; // var variable
d = 40; // variable without keyword (global scope)
// function declaration
console.log("var a:", a);
console.log("const b:", b);
console.log("let c:", c);
console.log("d:", d);

//re-declaration and update of va
a = a + 10; // update of var variable
console.log("Updated var a:", a);
var a = 50; // re-declaration of var variable
console.log("Re-declared var a:", a);

// re-declaration and update of let
c = c + 10; // update of let variable
console.log("Updated let c:", c);
// let c = 70; // re-declaration of let variable will throw an error
console.log("Re-declared let c:", c); // Uncommenting this line will throw an error

// re-declaration and update of const
// b = b + 10; // update of const variable will throw an error
console.log("const b:", b); // Uncommenting this line will throw an error
// const b = 70; // re-declaration of const variable will throw an error
console.log("Re-declared const b:", b); // Uncommenting this line will throw an error

// re-declaration and update of variable without keyword
d = d + 10; // update of variable without keyword
console.log("Updated variable without keyword d:", d);
// variable without keyword can be re-declared
d = 80; // re-declaration of variable without keyword
console.log("Re-declared variable without keyword d:", d);
