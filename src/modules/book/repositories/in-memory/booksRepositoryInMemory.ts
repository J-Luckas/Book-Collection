import { v4 as uuid } from 'uuid';
import { Book } from '../../entities/book';
import { IBooksRepositories } from '../IBooksRepositories';

export class BooksRepositoryInMemory implements IBooksRepositories {
  private books: Book[] = [];

  async create(book: Book): Promise<Book> {
    Object.assign(book, {
      id: uuid(),
    });

    this.books.push(book);

    return book;
  }

  async findById(id: string): Promise<Book> {
    const bookExists = this.books.find((book) => book.id === id);
    return bookExists;
  }

  async findByTitle(title: string): Promise<boolean> {
    const bookExists = this.books.some((book) => book.title === title);
    return !!bookExists;
  }

  async findAll(): Promise<Book[]> {
    return this.books;
  }

  async update({
    id, title, pages, authorId, publishedAt,
  }: Book): Promise<Book> {
    const updatedBook = this.books.find((book) => book.id === id);

    if (updatedBook) {
      Object.assign(updatedBook, {
        title,
        pages,
        authorId,
        publishedAt,
      });
    }

    return updatedBook;
  }

  async delete(id: string): Promise<void> {
    this.books = this.books.filter((book) => book.id !== id);
  }
}
