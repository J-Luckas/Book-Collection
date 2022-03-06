import { prisma } from '../../../../database/prismaClient';
import { ICreateAuthorDTO } from '../../dtos/ICreateAuthorDTO';

export class GetAuthorUseCase {
  async execute() {
    const authors: ICreateAuthorDTO[] = await prisma.author.findMany();

    return authors;
  }
}
