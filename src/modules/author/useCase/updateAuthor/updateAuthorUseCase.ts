import { prisma } from '../../../../database/prismaClient';
import { formatToDateTime } from '../../../../shared/utils/formatToDateTime';
import { ICreateAuthorDTO } from '../../dtos/ICreateAuthorDTO';

export class UpdateAuthorUseCase {
  async execute({
    id,
    name,
    email,
    dateOfBirth,
  }): Promise<ICreateAuthorDTO> {
    const author = await prisma.author.findFirst({
      where: {
        id: {
          equals: id,
          mode: 'insensitive',
        },
      },
    });

    if (!author) throw new Error('Author not found!');

    const updatedAuthor = await prisma.author.update({
      where: { id },
      data: {
        name: name || author.name,
        email: email || author.email,
        dateOfBirth: (dateOfBirth && formatToDateTime(dateOfBirth)) || author.dateOfBirth,
      },
    });
    return updatedAuthor;
  }
}
