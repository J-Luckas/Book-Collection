import { prisma } from '../../../../database/prismaClient';
import { Book } from '../../entities/book';
import { IBooksRepositories } from '../IBooksRepositories';

export class PrismaBooksRepository implements IBooksRepositories {
  async create({
    title, authorId, pages, publishedAt,
  }: Book): Promise<Book> {
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

  async findById(id: string): Promise<Book> {
    const bookExists = await prisma.book.findFirst({
        where: {
            id: {
                equals: id,
            },
        },
    });
    return bookExists;
  }

  async findByTitle(title: string): Promise<boolean> {


    const bookExists = await prisma.book.findFirst({
        where: {
            title: {
            equals: title,
            mode: 'insensitive',
            },
        },
    });
    return !!bookExists;
  }

  async findAll(): Promise<Book[]> {
    const allBooks = await prisma.book.findMany({
      include: {
        author: true,
      },
    });
    return allBooks;
  }

  async update({ id, title, pages, authorId, publishedAt }: Book): Promise<Book> {
    const updatedBook = await prisma.book.update({
        where: {
            id,
        },
        data: {
            title: title,
            pages: pages,
            authorId: authorId,
            publishedAt: publishedAt,
        },
    });
    return updatedBook;
  }

  async delete(id: string): Promise<void> {
    await prisma.book.delete({
      where: {
        id,
      },
    });
  }
}
