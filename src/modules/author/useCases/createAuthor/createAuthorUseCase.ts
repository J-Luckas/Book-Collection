import { prisma } from '../../../../database/prismaClient';
import { formatToDateTime } from '../../../../shared/utils/formatToDateTime';
import { ICreateAuthorDTO } from '../../../../dtos/ICreateAuthorDTO';

export class CreateAuthorUseCase {
  async execute({ name, email, dateOfBirth }: ICreateAuthorDTO) {
    const authorExists = await prisma.author.findFirst({
      where: {
        email: {
          equals: email,
          mode: 'insensitive',
        },
      },
    });

    if (authorExists) throw new Error('Author already exists');

    const author = await prisma.author.create({
      data: {
        name,
        email,
        dateOfBirth: formatToDateTime(dateOfBirth),
      },
    });

    return author;
  }
}
