import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { router } from './routes';

import './shared/container';

const app = express();

app.use(express.json());

app.use(router);

// eslint-disable-next-line no-unused-vars
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on port ${process.env.SERVER_PORT};`);
});
