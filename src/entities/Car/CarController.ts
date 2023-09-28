import { Request, Response } from "express";
import { CarInterface } from "./CarInterface";
import { CarService } from "./CarService";

const carService = new CarService();

const httpStatusCodeSuccess = 200;
const httpStatusCodeCreated = 201;
export class CarController {

  async list (request: Request, response: Response) {
    const cars = await carService.list();
    response.status(httpStatusCodeSuccess).json(cars);
  }

  async create (request: Request, response: Response) {
    const newCar = request.body as CarInterface;
    await carService.create(newCar);
    response.status(httpStatusCodeCreated).json(newCar);
  }
}