import { container } from 'tsyringe';

import { IBooksRepositories } from '../../modules/book/repositories/IBooksRepositories';
import { PrismaBooksRepository } from '../../modules/book/repositories/implementations/PrismaBooksRepository';

import { IAuthorsRepositories } from '../../modules/author/repositories/IAuthorRepositories';
import { PrismaAuthorsRepository } from '../../modules/author/repositories/implementations/PrismaAuthorsRepository';

container.register<IAuthorsRepositories>('AuthorsRepository', PrismaAuthorsRepository);
container.registerSingleton<IBooksRepositories>('BooksRepository', PrismaBooksRepository);
