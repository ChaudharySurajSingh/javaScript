//object is the collection properties and each property is key value pair

let obj = {
  name: "Suraj singh",
  age: 21,
  "last name": "singh",
};
// we can access the value by using different way
// obj.key notation

console.log(obj.name); // suraj singh
// the key with the special charactor and computed should be accessed using the ["key"]

console.log(obj["last name"]); // singh
