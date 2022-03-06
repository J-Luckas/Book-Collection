import { prisma } from '../../../../database/prismaClient';
import { ICreateBookDTO } from '../../../../dtos/ICreateBookDTO';

export class CreateBookUseCase {
  async execute({
    title, pages, authorId, publishedAt,
  }: ICreateBookDTO) {
    const bookExists = await prisma.book.findFirst({
      where: {
        title: {
          equals: title,
          mode: 'insensitive',
        },
      },
    });

    if (bookExists) throw new Error('Book already exists');

    const book = await prisma.book.create({
      data: {
        title,
        pages,
        authorId,
        publishedAt,
      },
    });

    return book;
  }
}
