import React from 'react';

import 'bulma';
import './Errors.scss';

export const Errors = ({ errors }) => {
  console.log(errors);
  return (
    <div className="Errors">
      {
        Object.values(errors).map(error =>
          <p>
            {error}
          </p>
        )
      }
    </div>
  );
};
