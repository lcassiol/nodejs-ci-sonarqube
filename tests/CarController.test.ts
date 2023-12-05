/*
 * Nodejs-Ci-Example, Just an example of project integrated with SonarCloud.
 * Cassio Carvalho
 * github.com/lcassiol
 */

import superTest from 'supertest';
import Server from '../src/server';

describe('API E2E Test Suite', () => {
  test('GET / - should return an empty array', async () => {
    const response = await superTest(Server).get('/');
    const data = JSON.parse(response.text);
    expect(data).toBeInstanceOf(Array);
  });

  test('POST / - should create a new car', async () => {
    const newCar = {
      'plate': 1,
      'year': 2023,
      'model': 'GOL',
      'brand': 'VW'
    };
    const response = await superTest(Server).post('/').send(newCar)
    .set('Content-Type', 'application/json');

    const savedCard = JSON.parse(response.text);
    expect(savedCard).toStrictEqual(newCar);
  });
});
