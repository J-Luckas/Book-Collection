import { inject, injectable } from 'tsyringe';
import { ICreateBookDTO } from '../../../../dtos/ICreateBookDTO';
import { IBooksRepositories } from '../../repositories/IBooksRepositories';

@injectable()
export class CreateBookUseCase {
  constructor(
      @inject('BooksRepository')
        private bookRepository: IBooksRepositories,
  ) {}

  async execute({
    title, pages, authorId, publishedAt,
  }: ICreateBookDTO) {

    const bookExists = await this.bookRepository.findByTitle(title);
    if (bookExists) throw new Error('Book already exists');

    const book = await this.bookRepository.create({
        title,
        pages,
        authorId,
        publishedAt,
    });

    return book;
  }
}
