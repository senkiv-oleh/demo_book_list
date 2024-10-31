import React from 'react';
import 'bulma';
import './Errors.scss';

export const Errors = ({errors}) => {
  console.log(errors);
  return (
    <div className="Errors">
      {
        Object.values(errors).map((error, index) =>
          <p key={index + error}>{error}</p>,
        )
      }
    </div>
  );
};
