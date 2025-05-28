//variable declared with var keyword have function scope if declared inside a function and have global scope if declared outside a function

var a = 10; // var variable with global scope
function varFunction() {
  var a = 20; // var variable with function scope
  console.log("Inside varFunction, var a:", a); // Outputs 20
  var b = 30; // var variable with function scope
}
{
  var blockScopedVar = 40; // var variable with block scope
  console.log("Inside block, var blockScopedVar:", blockScopedVar); // Outputs 40
}
varFunction();
console.log("Outside varFunction, var a:", a); // Outputs 10
console.log("Outside block, var blockScopedVar:", blockScopedVar); // Outputs 40
// console.log("Outside varFunction, var b:", b); // throw ReferenceError (b is not defined outside the function)

// variable declared with let keyword have block scope if declared inside a block and have global scope if declared outside
let c = 50; // let variable with global scope
function letFunction() {
  console.log("Inside letFunction, let c:", c); // Outputs 50
  let d = 60; // let variable with function scope redeclaration posible bkz the scope is different
  console.log("Inside letFunction, let d:", d); // Outputs 60
}
letFunction();
{
  let blockScopedLet = 70; // let variable with block scope
  console.log("Inside block, let blockScopedLet:", blockScopedLet); // Outputs 70
}
// accessing let variable outside the block
// console.log("Outside block, blockScopedLet", blockScopedLet); // throw reference error

const d = 80; // const variable with global scope
function constFunction() {
  console.log("Inside constFunction, const d:", d); // Outputs 80
  const d = 90; // const variable with function scope redeclaration possible bkz the scope is different
  console.log("Inside constFunction, const d:", d); // Outputs 90
  // const d = 90; // re-declaration of const variable will throw an error
  // console.log("Inside constFunction, const d:", d); // Uncommenting this line will throw an error
}
constFunction();
