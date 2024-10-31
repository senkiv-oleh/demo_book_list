const BASE_URL = 'https://671cab0609103098807ac8fc.mockapi.io';


export const request = (url, options) => {
  console.log(url);
  return fetch(`${BASE_URL}${url}`, options)
      .then((res) => res.json());
};

export const remove = (url) => request(url, {
  method: 'DELETE',
});

export const post = (url, book) => request(url, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify(book),
});

export const put = (url, {
  title,
  author,
  category,
  isbn,
}) => request(url, {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    title,
    author,
    category,
    isbn,
  }),
});
