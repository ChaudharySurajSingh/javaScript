// ======================================================
// 1. Creating an object using Object Literal
// ======================================================
const person = {
  name: "Suraj Singh",
  age: 21,
};

// ======================================================
// 2. Adding new properties to the object
// ------------------------------------------------------
// Dot notation — used when the key is a valid identifier
// (no spaces, no special characters, does not start with a number)
person.profession = "Software Engineer";

// Bracket notation — required when key has spaces, symbols, etc.
person["future plan"] = "Depends on upcoming situation";

console.log("After adding properties:", person);

// ======================================================
// 3. Accessing object properties
// ------------------------------------------------------
// Dot notation (simple and common)
console.log("Name:", person.name);

// Bracket notation (useful for dynamic or computed and not a valid identifire keys)
const dynamicKey = "profession";
console.log("Dynamic property access:", person[dynamicKey]);

// ======================================================
// 4. Updating existing properties
// ------------------------------------------------------
person.age = 22;
console.log("Updated Age:", person.age);

// ======================================================
// 5. Checking if a property exists
// ------------------------------------------------------

// Using the `in` operator — checks in entire prototype chain
console.log("Does 'name' exist? ->", "name" in person);

// Using `hasOwnProperty` — checks only object's own properties
console.log(
  "Does 'future plan' exist as own property? ->",
  person.hasOwnProperty("future plan")
);

// ======================================================
// 6. Deleting a property
// ------------------------------------------------------
delete person["future plan"];
console.log("After deleting 'future plan':", person);

// ======================================================
// 7. Listing all properties
// ------------------------------------------------------
console.log("Object keys:", Object.keys(person));
console.log("Object values:", Object.values(person));
console.log("Object entries:", Object.entries(person));
