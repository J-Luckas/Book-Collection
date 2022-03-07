import { ICreateAuthorDTO } from '../../../dtos/ICreateAuthorDTO';

export class Author {
  id?: string;

  name: string;

  email: string;

  dateOfBirth: Date;

  private constructor(author: ICreateAuthorDTO) {
    // eslint-disable-next-line no-constructor-return
    return Object.assign(this, author);
  }

  static create({
    id, name, email, dateOfBirth,
  }) {
    return new Author({
      id,
      name,
      email,
      dateOfBirth,
    });
  }
}
