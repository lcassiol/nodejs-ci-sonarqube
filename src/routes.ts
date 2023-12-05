import express from "express";
import { CarController } from "./entities/Car/CarController";

const routes = express.Router();
const carController = new CarController();

routes.get('/', carController.list);
routes.post('/', carController.create);

export default routes;