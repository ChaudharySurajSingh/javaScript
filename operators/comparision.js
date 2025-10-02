// comparisoin operetors always return a boolean value
// ==
let a = 20;
let b = 10;
console.log(a == b); //false
b = 20.0;
console.log(a === b);

//===
let obj = {
  name: "suraj",
  age: 20,
};
let obj2;
obj2 = obj;
console.log(obj === obj2);
let obj3 = {
  name: "suraj",
  age: 20,
};
console.log(obj == obj3);
