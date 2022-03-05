import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT};`);
});
