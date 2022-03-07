import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateBookUseCase } from './updateBookUseCase';

export class UpdateBookController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const {
      pages, title, authorId, publishedAt,
    } = req.body;

    const updateBookUseCase = container.resolve(UpdateBookUseCase);
    const book = await updateBookUseCase.execute({
      id,
      pages,
      title,
      authorId,
      publishedAt,
    });

    res
      .status(200)
      .json(book);
  }
}
