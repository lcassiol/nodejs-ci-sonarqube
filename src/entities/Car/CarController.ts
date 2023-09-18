import { Request, Response } from "express";
import { CarInterface } from "./CarInterface";
import { CarService } from "./CarService";

const carService = new CarService();

export class CarController {

  async list (request: Request, response: Response) {
    return response.status(200).json(carService.list());
  }

  async create (request: Request, response: Response) {
    const newCar = request.body as CarInterface;
    carService.create(newCar);
    return response.status(201).json(newCar)
  }
}