import express, { Request, Response } from 'express';
import Routes from './routes'

const server = express();
server.use(express.json());
server.use(Routes);

server.listen(3000, () => console.log("Monster out of jail!!"));
export default server;