import { Request, Response } from 'express';
import { PrismaBooksRepository } from '../../repositories/implementations/PrismaBooksRepository';
import { DeleteBookUseCase } from './deleteBookUseCase';

export class DeleteBookController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;


    const bookRepository = new PrismaBooksRepository();
    const deleteBookUseCase = new DeleteBookUseCase( bookRepository );
    await deleteBookUseCase.execute(id);

    return res
      .status(204)
      .json({ message: 'Book deleted with success' });
  }
}
