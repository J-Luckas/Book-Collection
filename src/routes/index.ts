import { Router } from 'express';
import { authorsRouter } from './authors.routes';

export const router = Router();

router.use('/authors', authorsRouter);
