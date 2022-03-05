import { Router } from 'express';
import { CreateAuthorController } from '../modules/author/createAuthor/createAuthorController';

export const authorsRouter = Router();

const createAuthorController = new CreateAuthorController();

authorsRouter.post('/', createAuthorController.handle);
