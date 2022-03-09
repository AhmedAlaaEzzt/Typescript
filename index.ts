class Vehicle {
  color: string;

  drive(): void {
    console.log("chugga chugga!");
  }

  honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle();
console.log("### Vehicle ###");
vehicle.drive();
vehicle.honk();
