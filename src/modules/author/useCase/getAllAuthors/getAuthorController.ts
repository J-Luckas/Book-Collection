import { Request, Response } from 'express';
import { GetAuthorUseCase } from './getAuthorUseCase';

export class GetAuthorController {
  async handle(req: Request, res: Response) {
    const getAuthorUseCase = new GetAuthorUseCase();
    const authors = await getAuthorUseCase.execute();
    return res
      .status(200)
      .json(authors);
  }
}
