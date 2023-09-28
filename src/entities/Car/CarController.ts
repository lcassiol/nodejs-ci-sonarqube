import { Request, Response } from "express";
import { CarInterface } from "./CarInterface";
import { CarService } from "./CarService";

const carService = new CarService();

export class CarController {

  async list (request: Request, response: Response) {
    const cars = await carService.list();
    response.status(200).json(cars);
  }

  async create (request: Request, response: Response) {
    const newCar = request.body as CarInterface;
    await carService.create(newCar);
    response.status(201).json(newCar);
  }
}