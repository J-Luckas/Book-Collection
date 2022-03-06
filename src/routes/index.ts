import { Router } from 'express';
import { authorsRouter } from './authors.routes';
import { booksRouter } from './books.routes';

export const router = Router();

router.use('/authors', authorsRouter);
router.use('/books', booksRouter);
