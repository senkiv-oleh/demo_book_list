import React, { useState, useEffect } from 'react';

import { Book } from '../Book';
import { getBooks, getBookDelete } from '../api/books';

import 'bulma';
import './BooksTable.scss';

export const BooksTable = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks()
      .then(res => setBooks(res));
  }, [books]);

  const removeBook = (bookId) => {
    getBookDelete(bookId)
      .then(() => {
        setBooks(carrentList => (
          carrentList.filter(books => books.id !== bookId)
        ))
      })
  }

  return (
    <>
      <table className="BooksTable table  is-striped is-narrow is-hoverable">
        <thead>
          <tr>
            <th className="BooksTable__title">Title</th>
            <th className="BooksTable__title">Author</th>
            <th className="BooksTable__title">Category</th>
            <th className="BooksTable__title">ISBN</th>
            <th className="BooksTable__title">Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => <Book book={book} books={books} onBookDeleted={removeBook} key={book.id} />)}
        </tbody>
      </table>
    </>

  );
};

