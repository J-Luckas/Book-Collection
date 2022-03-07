import { inject, injectable } from 'tsyringe';
import { prisma } from '../../../../database/prismaClient';
import { ICreateBookDTO } from '../../../../dtos/ICreateBookDTO';
import { IBooksRepositories } from '../../repositories/IBooksRepositories';

@injectable()
export class GetBookUseCase {

  constructor(
      @inject('BooksRepository')
      private bookRepository: IBooksRepositories ) {}

  async execute(): Promise<ICreateBookDTO[]> {
    const allBooks = await this.bookRepository.findAll();
    return allBooks;
  }
}
