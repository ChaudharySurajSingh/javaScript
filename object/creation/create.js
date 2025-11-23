/*
  OBJECT CREATION USING Object.create()
  -------------------------------------
  - Creates a new object with a specified prototype.
  - Useful for strict prototype-based inheritance.
*/

const carPrototype = {
  start() {
    console.log(`${this.brand} is starting...`);
  },
};

const car = Object.create(carPrototype);

// Adding properties after creation
car.brand = "Mercedes";
car.model = "S-Class";
car.year = 2022;

console.log("Car Object:", car);

/*
  ACCESSING PROPERTIES
*/
car.start();

/*
  MODIFYING PROPERTIES
*/
car.year = 2024;

/*
  DELETING PROPERTIES
*/
delete car.model;

console.log("After updates:", car);

/*
  USE CASE:
  - Ideal when fully controlling prototype chain.
  - Useful in low-level inheritance design.
*/
