import { request, remove, post, put } from './api';

export const getBooks = () => request(`/books`);

export const getBook = (bookId) => request(`/books/${bookId}`);


export const getBookDelete = bookId => remove(`/books/${bookId}`);

export function addBook(book) {
  return post(`/books`, book);
}

export const updateCurrentBook= ({ id, title, author, category, isbn }) => put(`/books/${id}`, {title, author, category, isbn})
