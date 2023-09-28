/*a WeakMap consturctor is used to create the WeakMap object */

let weakMap = new WeakMap();
let objkey1={};//in a weakmap a key can only be an object or unregister symbols 
let objkey2={};
let value1= "suraj singh";
let value2= "Ruchima singh";
weakMap.set(objkey1,value1);
weakMap.set(objkey2,value2);
console.log(weakMap.get(objkey1));
//checking if the key is present in the weakmap

console.log(weakMap.has(objkey2));

//deleting the value from the weakmap

weakMap.delete(objkey1);
console.log(weakMap.has(objkey1));;