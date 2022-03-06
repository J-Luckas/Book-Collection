import { prisma } from '../../../../database/prismaClient';
import { ICreateBookDTO } from '../../../../dtos/ICreateBookDTO';

export class GetBookUseCase {
  async execute(): Promise<ICreateBookDTO[]> {
    const allBooks = await prisma.book.findMany({
      include: {
        author: true,
      },
    });

    return allBooks;
  }
}
