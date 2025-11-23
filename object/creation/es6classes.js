/*
  OBJECT CREATION USING CLASS
  ---------------------------
  - Modern and clean syntax.
  - Syntactic sugar over constructor function and prototype.
*/

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.brand} is starting...`);
  }
}

const car = new Car("Tesla", "Model S", 2021);

console.log("Car Object:", car);

/*
  ADDING PROPERTY
*/
car.color = "Red";

/*
  MODIFYING PROPERTY
*/
car.year = 2025;

/*
  CALLING METHOD
*/
car.start();

/*
  DELETING PROPERTY
*/
delete car.color;

console.log("After updates:", car);

/*
  USE CASE:
  - Best when modeling real-world entities.
  - Modern, readable, widely used in professional code.
*/
