import React, { useState, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';

import 'bulma';
import './BookForm.scss';

import { getCategories } from '../api/category'
import { updateCurrentBook, getBook, addBook } from '../api/books'
import { Errors } from '../Errors'

export const BookForm = ({ match }) => {

  const [categoties, setCategories] = useState([]);
  const [errorVisible, setErrorVisible] = useState(false)
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
    isbn: '',
  })

  const bookId = match.params.bookId;
  const history = useHistory();

  useEffect(() => {
    getBook(bookId)
      .then(data => setBook({ ...data }));
    getCategories()
      .then(data => setCategories(data));

  }, [bookId]);

  const onSubmit = (event) => {
    event.preventDefault();
    setErrorVisible(true);

    if (countError() === 0) {
      saveBook(book);
    }
  }

  const saveBook = (book) => {
    if (bookId) {
      updateCurrentBook(book);
    } else {
      addBook(book);
    }   
     redirect();
  };

  const validateForm = () => {
    const newErrors = {
    };

    for (let name in book) {
      switch (name) {
        case 'title': newErrors.emptyTitle = book[name].length === 0 ? `The book title field cannot be blank` : '';
          break;
        case 'author':
          newErrors.emptyAuthor = book[name] === '' ? `The book author field cannot be blank` : '';
          newErrors.numberInAuthor = book[name].match(/\d+/g) ? `The book author cannot contain numbers` : '';
          break;
        case 'category':
          newErrors.noCategory = book[name] === '' ? `Select book category` : '';
          break;
        case 'isbn':
          newErrors.emptyISBN = book[name] === '' ? `The book ISBN field cannot be blank` : '';
          newErrors.lettersInISBN = book[name].match(/[a-zA-Z]/g) ? `The book ISBN cannot contain letters` : '';
          newErrors.lengthISBN = book[name].length === 13 ? '' : `The book ISBN field must contain 13 digits`;
          break;

        default:
          break;
      }
    }

    return newErrors;
  }

  const errors = useMemo(validateForm, [book]);

  const countError = () => {
    let count = 0;
    for (const key in errors) {
      if (errors[key].length > 0) {
        count++;
      }
    }
    return count;
  }
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setBook((current) => ({ ...current, [name]: value }));
  }

  const redirect = () => {
    history.replace('/book')
  }

  return (
    <div className="BookForm">
      <form
        className="BookForm__form "
        onSubmit={onSubmit}
        action="/book"
      >
        <input
          className="input is-small field is-grouped-centered"
          name="title"
          type="text"
          placeholder="Title of book"
          value={book.title}
          onChange={handleChange}
        />
        <input
          className="input is-small field"
          name="author"
          type="text"
          placeholder="Author of book"
          value={book.author}
          onChange={handleChange}
        />
        <select
          name="category"
          id="category"
          className="BookForm__select select is-small field"
          onChange={handleChange}
          value={book.category}

        >
          <option
            value="0"
            hidden
            selected
          >
            Select category of book
          </option>
          {categoties.map(category => (
            <option
              value={category.name}
              key={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>

        <input
          className="input is-small field"
          name="isbn"
          type="text"
          placeholder="ISBN of book"
          value={book.isbn}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="BookForm__button button"
        >
          Save
        </button>
      </form>
      <div className="BookForm__errors errors">
        {errorVisible && <Errors errors={errors} />}
      </div>
    </div>
  );
};
