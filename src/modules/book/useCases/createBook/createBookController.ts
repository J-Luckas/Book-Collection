import { Request, Response } from 'express';
import { ICreateBookDTO } from '../../../../dtos/ICreateBookDTO';
import { PrismaBooksRepository } from '../../repositories/implementations/PrismaBooksRepository';
import { CreateBookUseCase } from './createBookUseCase';

export class CreateBookController {
  async handle(req: Request, res: Response) : Promise<Response> {
    const {
      title, pages, authorId, publishedAt,
    } :ICreateBookDTO = req.body;
    const bookRepository = new PrismaBooksRepository();
    const createBookUseCase = new CreateBookUseCase( bookRepository );
    const createdBook = await createBookUseCase.execute({
      title,
      pages,
      authorId,
      publishedAt,
    });

    return res
      .status(201)
      .json(createdBook);
  }
}
