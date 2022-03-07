import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteAuthorUseCase } from './deleteAuthorUseCase';

export class DeleteAuthorController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const deleteAuthorUseCase = container.resolve(DeleteAuthorUseCase);
    await deleteAuthorUseCase.execute(id);
    return res
      .status(200)
      .json({ message: 'Author deleted' });
  }
}
