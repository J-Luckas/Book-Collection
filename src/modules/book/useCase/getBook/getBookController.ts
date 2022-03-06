import { Request, Response } from 'express';
import { GetBookUseCase } from './getBookUseCase';

export class GetBookController {
  async handle(req: Request, res: Response) {
    const getBookUseCase = new GetBookUseCase();
    const books = await getBookUseCase.execute();

    res
      .status(200)
      .json(books);
  }
}
