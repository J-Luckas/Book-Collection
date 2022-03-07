/* eslint-disable no-unused-vars */
import { Book } from '../entities/book';

export interface IBooksRepositories {
    create(book: Book): Promise<Book>;
    findById(id: string): Promise<Book>;
    findByTitle(title: string): Promise<boolean>;
    findAll(): Promise<Book[]>;
    update(book: Book): Promise<Book>;
    delete(id: string): Promise<void>;
}
