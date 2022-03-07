import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';
import { ICreateAuthorDTO } from '../../../../dtos/ICreateAuthorDTO';
import { IAuthorsRepositories } from '../../repositories/IAuthorRepositories';

@injectable()
export class UpdateAuthorUseCase {
  constructor(
        @inject('AuthorsRepository')
        // eslint-disable-next-line no-unused-vars
        private authorRepository: IAuthorsRepositories,
  ) {}

  async execute({
    id,
    name,
    email,
    dateOfBirth,
  }): Promise<ICreateAuthorDTO> {
    const author = await this.authorRepository.findById(id);

    if (!author) throw new Error('Author not found!');

    const updatedAuthor = await this.authorRepository.update({
      id,
      name: name || author.name,
      email: email || author.email,
      dateOfBirth: dateOfBirth || author.dateOfBirth,
    });

    return updatedAuthor;
  }
}
