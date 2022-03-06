import { prisma } from '../../../../database/prismaClient';

export class DeleteAuthorUseCase {
  async execute(id: string) {
    const author = await prisma.author.findFirst({
      where: {
        id: {
          equals: id,
          mode: 'insensitive',
        },
      },
    });

    if (!author) {
      throw new Error('Author not found');
    }

    await prisma.author.delete({
      where: {
        id,
      },
    });
  }
}
