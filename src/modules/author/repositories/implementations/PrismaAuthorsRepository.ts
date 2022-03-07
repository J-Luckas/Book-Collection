import { prisma } from '../../../../database/prismaClient';
import { Author } from '../../entities/author';
import { IAuthorsRepositories } from '../IAuthorRepositories';

export class PrismaAuthorsRepository implements IAuthorsRepositories {
  async create({ name, email, dateOfBirth }: Author): Promise<Author> {
    const author = await prisma.author.create({
      data: {
        name,
        email,
        dateOfBirth,
      },
    });

    return author;
  }

  async findById(id: string): Promise<Author> {
    const author = await prisma.author.findFirst({
      where: {
        id: {
          equals: id,
          mode: 'insensitive',
        },
      },
    });

    return author;
  }

  async findByName(name: string): Promise<boolean> {
    const authorExists = await prisma.author.findFirst({
      where: {
        name: {
          equals: name,
          mode: 'insensitive',
        },
      },
    });
    return !!authorExists;
  }

  async findAll(): Promise<Author[]> {
    const authors: Author[] = await prisma.author.findMany();
    return authors;
  }

  async update({
    id, name, email, dateOfBirth,
  }: Author): Promise<Author> {
    const updatedAuthor = await prisma.author.update({
      where: { id },
      data: {
        name,
        email,
        dateOfBirth,
      },
    });
    return updatedAuthor;
  }

  async delete(id: string): Promise<void> {
    await prisma.author.delete({
      where: {
        id,
      },
    });
  }
}
