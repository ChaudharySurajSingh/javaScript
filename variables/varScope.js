var a = 10;
function varFunction() {
  console.log("inside function global var a:", a); //undefined bkz the compilere consider it as the variable of this function and hoisted it at the compile time but the intilization is not executed then give undefined
  var a = 20; // var variable with function scope
  console.log("Inside varFunction, var a:", a); // Outputs 20
  var b = 30; // var variable with function scope
}
varFunction();
// try to access in block
if (true) {
  console.log("inside block global var a:", a); // Outputs 10, a is global variable and can be accessed here
  var a = 20;
  console.log(a);
}
