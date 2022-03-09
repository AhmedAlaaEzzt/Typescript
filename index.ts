class Vehicle {
  color: string;

  drive(): void {
    console.log("chugga chugga!");
  }

  honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log("Vroom");
  }
}

const vehicle = new Vehicle();
console.log("### Vehicle ###");
vehicle.drive();
vehicle.honk();

console.log("### car ###");
const car = new Car();
car.drive();
car.honk();
