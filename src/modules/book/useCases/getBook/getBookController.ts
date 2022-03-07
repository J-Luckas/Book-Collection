import { Request, Response } from 'express';
import { PrismaBooksRepository } from '../../repositories/implementations/PrismaBooksRepository';
import { GetBookUseCase } from './getBookUseCase';

export class GetBookController {
  async handle(req: Request, res: Response) {
    const bookRepository = new PrismaBooksRepository();
    const getBookUseCase = new GetBookUseCase(bookRepository);
    const books = await getBookUseCase.execute();

    res
      .status(200)
      .json(books);
  }
}
