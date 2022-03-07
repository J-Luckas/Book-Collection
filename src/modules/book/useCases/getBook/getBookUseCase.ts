import { inject, injectable } from 'tsyringe';
import { ICreateBookDTO } from '../../../../dtos/ICreateBookDTO';
import { IBooksRepositories } from '../../repositories/IBooksRepositories';

@injectable()
export class GetBookUseCase {
  constructor(
      @inject('BooksRepository')
      // eslint-disable-next-line no-unused-vars
      private bookRepository: IBooksRepositories,
  ) {}

  async execute(): Promise<ICreateBookDTO[]> {
    const allBooks = await this.bookRepository.findAll();
    return allBooks;
  }
}
