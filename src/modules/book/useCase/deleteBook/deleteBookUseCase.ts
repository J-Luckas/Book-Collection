import { prisma } from '../../../../database/prismaClient';

export class DeleteBookUseCase {
  async execute(id: string): Promise<void> {
    const bookExists = await prisma.book.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    });

    if (!bookExists) throw new Error('Book not found');

    await prisma.book.delete({
      where: {
        id,
      },
    });
  }
}
