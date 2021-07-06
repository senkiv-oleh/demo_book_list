 const BASE_URL = 'https://books-data-base.herokuapp.com';


export const request = (url, options) => fetch(`${BASE_URL}${url}`, options)
  .then(res => res.json());

export const remove = url => request(url, { method: 'DELETE' });

export const post = (url, book) => request(url, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify(book),
});

export const put = (url, {title, author, category, isbn}) => request(url, {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({title, author, category, isbn}),
});
