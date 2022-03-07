import { prisma } from '../../../../database/prismaClient';
import { ICreateBookDTO } from '../../../../dtos/ICreateBookDTO';
import { IBooksRepositories } from '../../repositories/IBooksRepositories';

export class CreateBookUseCase {
  constructor(
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
