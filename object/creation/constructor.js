/*
  OBJECT CREATION USING new Object()
  ----------------------------------
  - Traditional constructor-based object creation.
  - Properties are assigned after object creation.
  - Less commonly used today, Object Literal is preferred.
*/

const car = new Object(); // Creating empty object

// Adding properties using dot notation
car.brand = "Audi";
car.model = "A6";

// Adding property using bracket notation
car["year"] = 2021;

// Adding a dynamic property at runtime
let dynamicKey = "top speed";
car[dynamicKey] = 280;

console.log("Car Object:", car);

/*
  MODIFYING PROPERTIES
*/
car.year = 2024;
car[dynamicKey] = 300;

/*
  DELETING PROPERTIES
*/
delete car["top speed"];

console.log("After updates:", car);

/*
  USE CASE:
  - Older style, often seen in legacy code.
  - Good when constructing objects step by step.
*/
