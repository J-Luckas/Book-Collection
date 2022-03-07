import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { ICreateBookDTO } from '../../../../dtos/ICreateBookDTO';
import { Book } from '../../entities/book';
import { IBooksRepositories } from '../../repositories/IBooksRepositories';

@injectable()
export class CreateBookUseCase {
  constructor(
      @inject('BooksRepository')
        // eslint-disable-next-line no-unused-vars
        private bookRepository: IBooksRepositories,
  ) {}

  async execute({
    title, pages, authorId, publishedAt,
  }: ICreateBookDTO) {
    const bookExists = await this.bookRepository.findByTitle(title);
    if (bookExists) throw new Error('Book already exists');

    const book: Book = Book.create({
      title,
      pages,
      authorId,
      publishedAt,

    });
    const bookResp = await this.bookRepository.create(book);

    return bookResp;
  }
}
