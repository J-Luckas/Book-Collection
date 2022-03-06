import { prisma } from '../../../../database/prismaClient';
import { ICreateBookDTO } from '../../../../dtos/ICreateBookDTO';

export class UpdateBookUseCase {
  async execute({
    id, pages, title, authorId, publishedAt,
  }: ICreateBookDTO): Promise<ICreateBookDTO> {
    try {
      const existBook = await prisma.book.findFirst({
        where: {
          id,
        },
      });

      if (!existBook) throw new Error('Book not found');

      const updatedBook = await prisma.book.update({
        where: {
          id,
        },
        data: {
          title: title || existBook.title,
          pages: pages || existBook.pages,
          authorId: authorId || existBook.authorId,
          publishedAt: publishedAt || existBook.publishedAt,
        },
      });

      return updatedBook;
    } catch (err) {
      throw new Error(err);
    }
  }
}
