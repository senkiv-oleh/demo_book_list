import React from 'react';

// import 'bulma';
import { NavLink } from 'react-router-dom';

export const Header = () => (
  <nav className="navbar">
    <NavLink
      to="/"
      exact
      className="navbar-item is-tab"
    >
      Dashboard
    </NavLink>
    <NavLink to="/addbook" className="navbar-item is-tab">
      Add a Book
    </NavLink>
  </nav>
);
