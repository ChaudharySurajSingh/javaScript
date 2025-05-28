let a = 50;
let b = 60;
{
  console.log("inside block, let b:", b); // Outputs 60, b is block scoped variable and can be accessed here bkz the compiler consider it as the global scoped variable bkz not other let variable is declared with the same name in this block

  //console.log("Inside block, let a:", a);
  //cannot be accessed here, will throw a ReferenceError because  a is re-declared in this block and the compiler hoisted it at the compile time and cosider it as the variable of this block and put into TDZ and cannot be accessed before its declaration  and intialization executed

  let a = 100; // block scoped variable
  console.log("Inside block, let a:", a); // Outputs 100, a is block scoped variable and can be accessed here bkx its declaration and initialization is executed
  let c = 200; // block scoped variable
}
console.log("***** try to access in function ******");
function fun() {
  console.log(a);
  console.log(b);
  var a = 25;
  console.log(a);
  b = b + 20;
  console.log(b);
}
fun();
