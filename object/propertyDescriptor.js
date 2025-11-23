//the property descriptor is the the matadata
// A property descriptor is the control structure that governs visibility, mutability, and behavior of a property.

let obj = {
  name: "priyanka",
  age: 21,
  get name() {
    console.log("motherfucker why are you aceesing me");
    return this._name;
  },
};
console.log(obj.name);
Object.defineProperty(obj, "name", {
  writable: false,
});
obj.name = "ruchima";
console.log(obj);
