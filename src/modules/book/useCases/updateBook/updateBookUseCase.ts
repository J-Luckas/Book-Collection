import { ICreateBookDTO } from '../../../../dtos/ICreateBookDTO';
import { IBooksRepositories } from '../../repositories/IBooksRepositories';

export class UpdateBookUseCase {

  constructor(private bookRepository: IBooksRepositories) {}

  async execute({
    id, pages, title, authorId, publishedAt,
  }: ICreateBookDTO): Promise<ICreateBookDTO> {
    try {
      const existBook = await this.bookRepository.findById(id);

      if (!existBook) throw new Error('Book not found');

      const updatedBook = await this.bookRepository.update({
        id,
        pages: pages || existBook.pages,
        title: title || existBook.title,
        authorId: authorId || existBook.authorId,
        publishedAt: publishedAt || existBook.publishedAt,
      });

      return updatedBook;
    } catch (err) {
      throw new Error(err);
    }
  }
}
