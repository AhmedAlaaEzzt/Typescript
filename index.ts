interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

interface Drink {
  color: string;
  carbonated: boolean;
  sugar: number;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const pepsi = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of suger`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

const printDrink = (drink: Drink): void => {
  console.log(drink.summary());
};

printVehicle(oldCivic);
printDrink(pepsi);
