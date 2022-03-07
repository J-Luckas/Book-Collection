import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import { CreateBookController } from '../modules/book/useCases/createBook/createBookController';
import { GetBookController } from '../modules/book/useCases/getBook/getBookController';
import { UpdateBookController } from '../modules/book/useCases/updateBook/updateBookController';
import { DeleteBookController } from '../modules/book/useCases/deleteBook/deleteBookController';

export const booksRouter = Router();

const createBookController = new CreateBookController();
const getBooksController = new GetBookController();
const updateBookController = new UpdateBookController();
const deleteBookController = new DeleteBookController();

booksRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      pages: Joi.number().required(),
      authorId: Joi.string().required(),
      publishedAt: Joi.date().required(),
    },
  }),
  createBookController.handle,
);
booksRouter.get('/', getBooksController.handle);
booksRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string(),
      pages: Joi.number(),
      authorId: Joi.string(),
      publishedAt: Joi.date(),
    },
  }),
  updateBookController.handle,
);
booksRouter.delete('/:id', deleteBookController.handle);
