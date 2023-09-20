import express from "express";
import { CarController } from "./entities/Car/CarController";

const routes = express.Router();
const carController = new CarController();

// Root route
// routes.get('/', (req, res) => res.json({ Api_status: 'working' }));
routes.get('/', carController.list);
routes.post('/', carController.create)

export default routes;