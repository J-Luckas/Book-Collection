import { prisma } from '../../../../database/prismaClient';
import { ICreateBookDTO } from '../../../../dtos/ICreateBookDTO';
import { IBooksRepositories } from '../../repositories/IBooksRepositories';

export class GetBookUseCase {

  constructor( private bookRepository: IBooksRepositories ) {}

  async execute(): Promise<ICreateBookDTO[]> {
    const allBooks = await this.bookRepository.findAll();
    return allBooks;
  }
}
