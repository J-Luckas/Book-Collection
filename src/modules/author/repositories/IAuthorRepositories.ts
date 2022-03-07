/* eslint-disable no-unused-vars */
import { Author } from '../entities/author';

export interface IAuthorsRepositories {
    create(author: Author): Promise<Author>;
    findById(id: string): Promise<Author>;
    findByName(name: string): Promise<boolean>;
    findAll(): Promise<Author[]>;
    update(author: Author): Promise<Author>;
    delete(id: string): Promise<void>;
}
