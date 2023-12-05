/*
 * Nodejs-Ci-Example, Just an example of project integrated with SonarCloud.
 * Cassio Carvalho
 * github.com/lcassiol
 */

import { CarService } from '../src/entities/Car/CarService';
test('It should be create a car', async function () {
    const carService = new CarService();
    const car = {
      'plate': 1,
      'year': 2023,
      'model': 'GOL',
      'brand': 'VW'
    };
  
    const savedCar = carService.create(car);
    expect(savedCar).toStrictEqual(car);
});

test('It should be list cars', async function () {
  const carService = new CarService();
  const car = {
    'plate': 1,
    'year': 2023,
    'model': 'GOL',
    'brand': 'VW'
  };

  const savedCar = carService.create(car);
  expect(savedCar).toStrictEqual(car);
  expect(carService.list()).toEqual([car]);
});