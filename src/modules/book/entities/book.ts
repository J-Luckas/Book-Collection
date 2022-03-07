import { ICreateBookDTO } from '../../../dtos/ICreateBookDTO';

export class Book {
  id?: string;

  title: string;

  pages: number;

  authorId?: string;

  publishedAt?: Date;

  private constructor(book: ICreateBookDTO) {
    // eslint-disable-next-line no-constructor-return
    return Object.assign(this, book);
  }

  static create({
    title, pages, authorId, publishedAt,
  }) {
    return new Book({
      title,
      pages,
      authorId,
      publishedAt,
    });
  }
}
