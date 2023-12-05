import { CarInterface } from "./CarInterface";

export class CarService { 
  cars : CarInterface[] = [];

  list () {
    return this.cars;
  }

  create (newCar: CarInterface) {
    this.cars.push(newCar);
    return newCar;
  }
}
