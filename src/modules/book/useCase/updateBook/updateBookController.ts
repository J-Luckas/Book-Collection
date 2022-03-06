import { Request, Response } from 'express';
import { UpdateBookUseCase } from './updateBookUseCase';

export class UpdateBookController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const {
      pages, title, authorId, publishedAt,
    } = req.body;
    const updateBookUseCase = new UpdateBookUseCase();
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
