import express from 'express';
import Routes from './routes';

const port = 3000;
const server = express();
server.use(express.json());
server.use(Routes);

server.listen(port);
export default server;
