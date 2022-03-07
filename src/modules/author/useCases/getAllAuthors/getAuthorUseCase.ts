import { inject, injectable } from 'tsyringe';
import { IAuthorsRepositories } from '../../repositories/IAuthorRepositories';

@injectable()
export class GetAuthorUseCase {
  constructor(
    @inject('AuthorsRepository')
    // eslint-disable-next-line no-unused-vars
    private authorRepository: IAuthorsRepositories,
  ) { }

  async execute() {
    const authors = await this.authorRepository.findAll();
    return authors;
  }
}
