import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetBookUseCase } from './getBookUseCase';

export class GetBookController {
  async handle(req: Request, res: Response) {
    const getBookUseCase = container.resolve(GetBookUseCase);
    const books = await getBookUseCase.execute();

    res
      .status(200)
      .json(books);
  }
}
