import { Request, Response } from 'express';
import { CreateAuthorUseCase } from './createAuthorUseCase';

export class CreateAuthorController {
  async handle(req: Request, res: Response) {
    const { name, email, dateOfBirth } = req.body;

    const createAuthorUseCase = new CreateAuthorUseCase();
    const result = await createAuthorUseCase.execute({
      name,
      email,
      dateOfBirth,
    });

    return res
      .json(result);
  }
}
