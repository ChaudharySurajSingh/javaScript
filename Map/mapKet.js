let map = new Map();
let numKey = 1
let strKey = "a string key";
let objKey = {k:"an object key",v:5};
map.set(numKey,"value associated with the number");
map.set(strKey,"value associated with the string");
map.set(objKey, "value associated with the object key");
console.log(map);

// using NaN as the map key
let map1 = new Map();
map1.set(NaN,"not a number");
map1.set(null,"null value");
map1.set(undefined,"value is not defined");
console.log(map1);
let key1

const keyValuePairs = [
    [key1, 165694,9966464],
    ['key2', 'value2'],
    ['key3', 'value3']
];

const myMap = new Map(keyValuePairs);
myMap.delete(key1)
console.log(myMap);
myMap.clear();
console.log(myMap.has(1));
myMap.set(NaN,"not a number");
myMap.set(NaN,"again not a number");
console.log(myMap);
let map2= new Map();
map2.set(1, "one");
map2.set(2, "two");
map2.set(3, "three");
map2.set(4, "four");
map2.set(5, "five");
console.log(map2.entries());
console.log(map.entries());
