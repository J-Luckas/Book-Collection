import { Request, Response } from 'express';
import { DeleteBookUseCase } from './deleteBookUseCase';

export class DeleteBookController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteBookUseCase = new DeleteBookUseCase();
    await deleteBookUseCase.execute(id);

    return res
      .status(204)
      .json({ message: 'Book deleted with success' });
  }
}
