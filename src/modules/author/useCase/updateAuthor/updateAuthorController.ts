import { Request, Response } from 'express';
import { UpdateAuthorUseCase } from './updateAuthorUseCase';

export class UpdateAuthorController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, dateOfBirth } = req.body;
    const updateAuthorUseCase = new UpdateAuthorUseCase();
    const updatedAuthor = await updateAuthorUseCase.execute({
      id,
      name,
      email,
      dateOfBirth,
    });
    return res
      .status(200)
      .json(updatedAuthor);
  }
}
