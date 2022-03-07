import { container } from "tsyringe";

import { IBooksRepositories } from "../../modules/book/repositories/IBooksRepositories";
import { PrismaBooksRepository } from "../../modules/book/repositories/implementations/PrismaBooksRepository";

container.registerSingleton<IBooksRepositories>('BooksRepository', PrismaBooksRepository);
