interface ICreateAuthor {
  name: string;
  email: string;
  dateOfBirth: string;

}

export class CreateAuthorUseCase {
  allAuthors:ICreateAuthor[] = [];

  async execute({ name, email, dateOfBirth }: ICreateAuthor) {
    const authorExists = this.allAuthors.find((author) => author.email === email);

    if (authorExists) throw new Error('Author already exists');

    const author = {
      name,
      email,
      dateOfBirth,
    };

    this.allAuthors.push(author);
  }
}
