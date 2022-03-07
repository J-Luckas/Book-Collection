import { inject, injectable } from 'tsyringe';
import { ICreateAuthorDTO } from '../../../../dtos/ICreateAuthorDTO';
import { IAuthorsRepositories } from '../../repositories/IAuthorRepositories';

@injectable()
export class CreateAuthorUseCase {
  constructor(
    @inject('AuthorsRepository')
      // eslint-disable-next-line no-unused-vars
      private authorRepository: IAuthorsRepositories,
  ) {}

  async execute({ name, email, dateOfBirth }: ICreateAuthorDTO) {
    const authorExists = await this.authorRepository.findByName(name);

    if (authorExists) throw new Error('Author already exists');

    const author = await this.authorRepository.create({
      name,
      email,
      dateOfBirth,
    });
    return author;
  }
}
