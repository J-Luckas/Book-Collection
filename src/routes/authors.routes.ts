import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { CreateAuthorController } from '../modules/author/useCases/createAuthor/createAuthorController';
import { DeleteAuthorController } from '../modules/author/useCases/deleteAuthor/deleteAuthorController';
import { GetAuthorController } from '../modules/author/useCases/getAllAuthors/getAuthorController';
import { UpdateAuthorController } from '../modules/author/useCases/updateAuthor/updateAuthorController';

export const authorsRouter = Router();

const createAuthorController = new CreateAuthorController();
const getAllAuthorController = new GetAuthorController();
const deleteAuthorController = new DeleteAuthorController();
const updateAuthorController = new UpdateAuthorController();

authorsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      dateOfBirth: Joi.date().required(),
    },
  }),
  createAuthorController.handle,
);

authorsRouter.get('/', getAllAuthorController.handle);

authorsRouter.delete('/:id', deleteAuthorController.handle);

authorsRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      email: Joi.string(),
      dateOfBirth: Joi.date(),
    },
  }),
  updateAuthorController.handle,
);
