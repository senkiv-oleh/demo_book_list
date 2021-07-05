import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';


import 'bulma';
import './EditBook.scss';

import { getCategories } from '../api/category'
import { updateCurrentBook, getBooks } from '../api/books'

export const EditBook = () => {
  const location = useLocation();
  console.log(location.state);
  const { book } = location.state;
  const [categoties, setCategories] = useState([]);
  const [title, setTitle] = useState(book ? book.title : '');
  const [author, setAuthor] = useState(book ? book.author : '');
  const [category, setCategory] = useState(book ? book.category : '');
  const [isbn, setISBN] = useState(book ? book.isbn : '');
  const [books, setBooks] = useState([]);


  const onTitleChange = event => setTitle(event.target.value);
  const onAuthorChange = event => setAuthor(event.target.value);
  const onCategoryChange = event => setCategory(event.target.value);
  const onISBNChange = event => setISBN(event.target.value);

  useEffect(() => {
    getCategories()
      .then(data => setCategories(data))
    getBooks()
      .then(data => setBooks(data))
  }, [])

  const history = useHistory();

  const updateBook = (updatedBook) => {
    const copy = [...books];
    const index = books.findIndex(book => book.id === updatedBook.id);

    copy.splice(index, 1, updatedBook);
    setBooks(copy);

    updateCurrentBook(updatedBook);
  }

  const saveBook = (formData) => {
    updateBook({ ...book, ...formData });
  }

const onSubmit = (event) => {
    event.preventDefault();
    saveBook({title, author, category, isbn});
redirect();
  }

  const redirect = () => history.push('/')

  return (
<>
    <form
      className="AddBook__form"
      onSubmit={onSubmit}
    >
      <input
        className="input is-small"
        name="title"
        type="text"
        placeholder="Title of book"
        value={title}
        onChange={onTitleChange}
        required
      />
      <input
        className="input is-small"
        type="text"
        placeholder="Author of book"
        value={author}
        onChange={onAuthorChange}
        required
      />

      <select
        name="category"
        id="category"
        className=" select is-small"
        onChange={onCategoryChange}
        value={category}
        required
      >
        <option
          value="0"
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
        className="input is-small"
        name="isbn"
        type="text"
        placeholder="ISBN of book"
        value={isbn}
        onChange={onISBNChange}
        required
      />

      <button
        type="submit"
        className="NewCommentForm__submit-button button"
      >
        Save
      </button>
    </form>
            {/* {errorVisible && <ErrorsPlace errors={errors} />} */}

</>
  );
};
