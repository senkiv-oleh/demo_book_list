import React from 'react';

import 'bulma';
import './ErrorsPlace.scss';

export const ErrorsPlace = ({ errors }) => {

  return (
    <div className="ErrorsPlace">
      <p>
        {errors.emptyTitle}
      </p>
      <p>
        {errors.emptyAuthor}
      </p>
      <p>
        {errors.numberInAuthor}
      </p>
      <p>
        {errors.noCategory}
      </p>
      <p>
        {errors.emptyISBN}
      </p>
      <p>
        {errors.lettersInISBN}
      </p>
      <p>
        {errors.lengthISBN}
      </p>
    </div>
  );
};
