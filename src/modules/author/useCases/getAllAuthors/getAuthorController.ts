import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetAuthorUseCase } from './getAuthorUseCase';

export class GetAuthorController {
  async handle(req: Request, res: Response) {
    const getAuthorUseCase = container.resolve(GetAuthorUseCase);
    const authors = await getAuthorUseCase.execute();
    return res
      .status(200)
      .json(authors);
  }
}
