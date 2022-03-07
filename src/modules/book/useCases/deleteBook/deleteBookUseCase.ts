import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { IBooksRepositories } from '../../repositories/IBooksRepositories';

@injectable()
export class DeleteBookUseCase {
  constructor(
      @inject('BooksRepository')
      // eslint-disable-next-line no-unused-vars
      private bookRepository: IBooksRepositories,
  ) {}

  async execute(id: string): Promise<void> {
    const bookExists = await this.bookRepository.findById(id);

    if (!bookExists) throw new Error('Book not found');

    this.bookRepository.delete(id);
  }
}
