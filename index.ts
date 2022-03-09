class Vehicle {
  color: string;

  constructor(color: string){
    this.color = color;
  }

  drive(): void {
    console.log("chugga chugga!");
  }

  honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("red");
console.log("### Vehicle ###");
vehicle.drive();
vehicle.honk();
console.log(vehicle.color);
