/*set is the builtin data type that used the store and manipulate the collection of unique values */
//creation of set
// let set1= new Set()
// set1.add(1);
// set1.add("1");
// set1.add(NaN);
// set1.add("NaN");
// set1.add(0);
// set1.add(-0);
// set1.add(+0);
// set1.add(undefined);
// set1.add(null);
// console.log(set1.size);
// console.log(set1);
let set = new Set();
set.add(1);
set.add(5);
set.add(3);
set.add(4);
set.add(5);
set.add(6);
set.add(7);
// console.log(set);
// console.log(set.has(10));
// console.log(set.entries());
console.log(set.keys());