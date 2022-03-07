import { inject, injectable } from 'tsyringe';
import { IAuthorsRepositories } from '../../repositories/IAuthorRepositories';

@injectable()
export class DeleteAuthorUseCase {
  constructor(
        @inject('AuthorsRepository')
        // eslint-disable-next-line no-unused-vars
        private authorRepository: IAuthorsRepositories,
  ) {}

  async execute(id: string) {
    const author = await this.authorRepository.findById(id);

    if (!author) {
      throw new Error('Author not found');
    }

    await this.authorRepository.delete(id);
  }
}
