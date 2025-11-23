/*
  OBJECT CREATION USING FACTORY FUNCTION
  --------------------------------------
  - A function that returns an object.
  - No need for 'new'.
  - Simple and flexible.
*/

function createCar(brand, model, year) {
  return {
    brand,
    model,
    year,
    start() {
      console.log(`${this.brand} is starting...`);
    },
  };
}

const car = createCar("Lamborghini", "Huracán", 2022);

console.log("Car Object:", car);

/*
  ADDING PROPERTY
*/
car.color = "Yellow";

/*
  MODIFYING PROPERTY
*/
car.year = 2024;

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
  - Flexible, simple, readable.
  - Good when no prototype/ inheritance needed.
*/
