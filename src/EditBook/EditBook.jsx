import React, { useState, useEffect, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import 'bulma';
import './EditBook.scss';

import { getCategories, getCategory } from '../api/category'
import { updateCurrentBook, getBooks } from '../api/books'
import { ErrorsPlace } from '../ErrorsPlace'

export const EditBook = () => {
  const location = useLocation();
  const { book } = location.state;
  const [categoties, setCategories] = useState([]);
  const [errorVisible, setErrorVisible] = useState(false)
  const [editedBook, setEditedBook] = useState({
    title: book.title,
    author: book.author,
    category: book.category,
    isbn: book.isbn,
  })

  const history = useHistory();

  useEffect(() => {
    getCategories()
      .then(data => setCategories(data))
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    setErrorVisible(true);

    if (countError() === 0) {
      saveBook(editedBook);
    }
  }

  const saveBook = (editedBook) => {

    updateBook({ ...book, ...editedBook });
    redirect();
  };

  const updateBook = (updatedBook) => {
    updateCurrentBook(updatedBook);
  }

  const validateForm = () => {
    const newErrors = {
      emptyTitle: '',
      emptyAuthor: '',
      numberInAuthor: '',
      noCategory: '',
      emptyISBN: '',
      lettersInISBN: '',
      lengthISBN: '',
    };

    for (let name in editedBook) {
      switch (name) {
        case 'title': newErrors.emptyTitle = editedBook[name] === '' ? `The book title field cannot be blank` : '';
          break;
        case 'author':
          newErrors.emptyAuthor = editedBook[name] === '' ? `The book author field cannot be blank` : '';
          newErrors.numberInAuthor = editedBook[name].match(/\d+/g) ? `The book author cannot contain numbers` : '';
          break;
        case 'category':
          newErrors.noCategory = editedBook[name] === '' ? `Select book category` : '';
          break;
        case 'isbn':
          newErrors.emptyISBN = editedBook[name] === '' ? `The book ISBN field cannot be blank` : '';
          newErrors.lettersInISBN = editedBook[name].match(/[a-zA-Z]/g) ? `The book ISBN cannot contain letters` : '';
          newErrors.lengthISBN = editedBook[name].length === 13 ? '' : `The book ISBN field must contain 13 digits`;
          break;

        default:
          break;
      }
    }

    return newErrors;
  }

  const errors = useMemo(validateForm, [editedBook]);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setEditedBook((current) => ({ ...current, [name]: value }));
  }

  const countError = () => {
    let count = 0;
    for (const key in errors) {
      if (errors[key].length > 0) {
        count++;
      }
    }
    return count;
  }



  const redirect = () => history.replace('/')

  return (
    <div className="AddBook">
      <form
        className="AddBook__form "
        onSubmit={onSubmit}
      >
        <input
          className="input is-small field is-grouped-centered"
          name="title"
          type="text"
          placeholder="Title of book"
          value={editedBook.title}
          onChange={handleChange}
        />
        <input
          className="input is-small field"
          name="author"
          type="text"
          placeholder="Author of book"
          value={editedBook.author}
          onChange={handleChange}
        />
        <select
          name="category"
          id="category"
          className="AddBook__select select is-small field"
          onChange={handleChange}
          value={editedBook.category}

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
          value={editedBook.isbn}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="AddBook__button button"
        >
          Save
        </button>
      </form>
      <div className="AddBook__errors errors">
        {errorVisible && <ErrorsPlace errors={errors} />}
      </div>
    </div>
  );
};
