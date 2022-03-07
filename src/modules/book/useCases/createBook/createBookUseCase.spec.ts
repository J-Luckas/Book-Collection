/* eslint-disable no-undef */
import { Book } from '../../entities/book';
import { BooksRepositoryInMemory } from '../../repositories/in-memory/booksRepositoryInMemory';
import { CreateBookUseCase } from './createBookUseCase';

let booksRepositoryInMemory: BooksRepositoryInMemory;
let createBookUseCase: CreateBookUseCase;

describe('Create a book', () => {
  beforeAll(() => {
    booksRepositoryInMemory = new BooksRepositoryInMemory();
    // eslint-disable-next-line no-unused-vars
    createBookUseCase = new CreateBookUseCase(booksRepositoryInMemory);
  });

  it('Should be able to create a new book', async () => {
    const bookData: Book = {
      id: '',
      title: 'Clean Code',
      pages: 496,
      authorId: '',
      publishedAt: new Date(),
    };

    const bookDefined = await createBookUseCase.execute(bookData);

    const bookCreate = await booksRepositoryInMemory.findByTitle(bookData.title);

    expect(true).toEqual(bookCreate);
    expect(bookDefined.id).toBeDefined();
    expect(bookDefined.title).toEqual(bookData.title);
  });

  it('Should not be able to create a book with the same title', async () => {
    const bookData: Book = {
      id: '',
      title: 'Clean Code',
      pages: 496,
      authorId: '',
      publishedAt: new Date(),
    };

    await expect(createBookUseCase.execute(bookData))
      .rejects.toThrowError('Book already exists');
  });

  it('Should not be able to create a new Book without pages', async () => {
    const bookData: Book = {
      id: '',
      title: 'Clean Code 2',
      pages: undefined,
      authorId: '',
      publishedAt: new Date(),
    };

    await expect(createBookUseCase.execute(bookData))
      .rejects.toThrowError('Pages is not defined');
  });

  it('Should not be able to create a new Book without title', async () => {
    const bookData: Book = {
      id: '',
      title: undefined,
      pages: 496,
      authorId: '',
      publishedAt: new Date(),
    };

    await expect(createBookUseCase.execute(bookData))
      .rejects.toThrowError('Title is not defined');
  });

  it('Should not be able to create a new Book with 0 page', async () => {
    const bookData: Book = {
      id: '',
      title: 'Clean Code 4',
      pages: 0,
      authorId: '',
      publishedAt: new Date(),
    };

    await expect(createBookUseCase.execute(bookData))
      .rejects.toThrowError('Pages is not defined');
  });

  it('Should not be able to create a new Book with negative page', async () => {
    const bookData: Book = {
      id: '',
      title: 'Clean Code 6',
      pages: -1,
      authorId: '',
      publishedAt: new Date(),
    };

    await expect(createBookUseCase.execute(bookData))
      .rejects.toThrowError('Pages is not defined');
  });
});
