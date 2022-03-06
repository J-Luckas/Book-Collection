import { prisma } from '../../../database/prismaClient';

interface ICreateAuthor {
  name: string;
  email: string;
  dateOfBirth: string;

}

export class CreateAuthorUseCase {
  async execute({ name, email, dateOfBirth }: ICreateAuthor) {
    const authorExists = await prisma.author.findFirst({
      where: {
        email: {
          equals: email,
          mode: 'insensitive',
        },
      },
    });

    if (authorExists) throw new Error('Author already exists');

    const formDateOfBirth = new Date(dateOfBirth).toISOString();
    const author = await prisma.author.create({
      data: {
        name,
        email,
        dateOfBirth: formDateOfBirth,
      },
    });

    return author;
  }
}
