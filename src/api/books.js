import {
  request,
  remove,
  post,
  put,
} from './api';

export const getBooks = () => request(`/books`);

export const getBook = (bookId) => request(`/books/${bookId}`);


export const getBookDelete = (bookId) => remove(`/books/${bookId}`);

export const addBook = ({
  id,
  title,
  author,
  category,
  isbn,
}) => post(`/books`, {
  id,
  title,
  author,
  category,
  isbn,
});

export const updateCurrentBook = ({
  id,
  title,
  author,
  category,
  isbn,
}) => put(`/books/${id}`, {
  title,
  author,
  category,
  isbn,
});