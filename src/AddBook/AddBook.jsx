import React, { useState, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import 'bulma';
import './AddBook.scss';

import { getCategories, getCategory } from '../api/category'
import { addBook } from '../api/books'
import { ErrorsPlace } from '../ErrorsPlace'

export const AddBook = () => {

  const [categoties, setCategories] = useState([]);
  const [errorVisible, setErrorVisible] = useState(false)
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    category: '',
    ISBN: '',
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

      addNewBook({ ...newBook });

    }

  }

  const selectedCategoryId = (categoryId) => {
    if (categoryId !== 0) {
      getCategory(categoryId)
        .then(data => setNewBook(({ ...newBook, category: data.name })));
    }
  };

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

    for (let name in newBook) {
      switch (name) {
        case 'title': newErrors.emptyTitle = newBook[name] === '' ? `The book title field cannot be blank` : '';
          break;
        case 'author':
          newErrors.emptyAuthor = newBook[name] === '' ? `The book author field cannot be blank` : '';
          newErrors.numberInAuthor = newBook[name].match(/\d+/g) ? `The book author cannot contain numbers` : '';
          break;
        case 'category':
          newErrors.noCategory = newBook[name] === '' ? `Select book category` : '';
          break;
        case 'ISBN':
          newErrors.emptyISBN = newBook[name] === '' ? `The book ISBN field cannot be blank` : '';
          newErrors.lettersInISBN = newBook[name].match(/[a-zA-Z]/g) ? `The book ISBN cannot contain letters` : '';
          newErrors.lengthISBN = newBook[name].length === 13 ? '' : `The book ISBN field must contain 13 digits`;
          break;

        default:
          break;
      }
    }

    return newErrors;
  }

  const errors = useMemo(validateForm, [newBook]);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setNewBook((current) => ({ ...current, [name]: value }));
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


  const addNewBook = ({ title, author, category, ISBN: isbn }) => {
    const createBook = {
      title,
      author,
      category,
      isbn,
    };

    addBook(createBook);
    redirect();
  };

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
          value={newBook.title}
          onChange={handleChange}
        />
        <input
          className="input is-small field"
          name="author"
          type="text"
          placeholder="Author of book"
          value={newBook.author}
          onChange={handleChange}
        />
        <select
          name="category"
          id="category"
          className="AddBook__select select is-small field"
          onChange={event => selectedCategoryId(+event.target.value)}

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
              value={category.id}
              key={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>

        <input
          className="input is-small field"
          name="ISBN"
          type="text"
          placeholder="ISBN of book"
          value={newBook.ISBN}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="AddBook__button button"
        >
          Add book
        </button>
      </form>
      <div className="AddBook__errors errors">
        {errorVisible && <ErrorsPlace errors={errors} />}
      </div>
    </div>
  );
};
