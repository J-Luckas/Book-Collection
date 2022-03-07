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
    if (!title) throw new Error('Title is not defined');
    if (!pages || pages < 0) throw new Error('Pages is not defined');

    return new Book({
      title,
      pages,
      authorId: authorId || null,
      publishedAt,
    });
  }
}
