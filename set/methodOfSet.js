let myArr = [1,2,3,4,5,6,7,8,9,10];
let set = new Set(myArr);


//size: return the count of the element present in the set
// console.log(set.size);

//add(value): add the value to the set only if it is not present in the array

set.add(50);
// console.log(set);
//try to add the element that is already present in the set
set.add(1);
// console.log(set);

//delete(value): delete the specified value from the set if it present in the set
set.delete(50);
// console.log("after invoke the deletion function the set is");
// console.log(set);

// has(value): return true if the value is present in the set other return false
// console.log(set.has(1));//true
// console.log(set.has(50));//false
// .forEach(callBack Function) : traverse each element of the set and pass it as the argument to the callback function
let set2 = new Set();
set.forEach(ele =>{
    let sqr= ele*ele;
    set2.add(sqr);
})
set2.forEach(ele => console.log(ele));
// [...setName]:- create the array of the element present in the set
let arr2 = [...set2];
console.log(arr2);

//Array.from(setName):- create a new array just likes spread operator in js
let arr3 = Array.from(set);
console.log(arr3); 