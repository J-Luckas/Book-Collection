import { inject, injectable } from 'tsyringe';
import { prisma } from '../../../../database/prismaClient';
import { IBooksRepositories } from '../../repositories/IBooksRepositories';

@injectable()
export class DeleteBookUseCase {

  constructor(
      @inject('BooksRepository')
      private bookRepository: IBooksRepositories){}

  async execute(id: string): Promise<void> {

    const bookExists = await this.bookRepository.findById(id);

    if (!bookExists) throw new Error('Book not found');

    this.bookRepository.delete(id);
  }
}
