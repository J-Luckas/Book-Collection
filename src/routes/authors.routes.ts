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

authorsRouter.post('/', createAuthorController.handle);
authorsRouter.get('/', getAllAuthorController.handle);
authorsRouter.delete('/:id', deleteAuthorController.handle);
authorsRouter.put('/:id', updateAuthorController.handle);
