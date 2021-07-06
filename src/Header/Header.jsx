import React from 'react';

import 'bulma';
import { NavLink } from 'react-router-dom';

export const Header = () => (
  <nav className="navbar">
    <NavLink
      to="/book"
      exact
      className="navbar-item is-tab"
      activeClassName="is-active"
    >
      Dashboard
    </NavLink>
    <NavLink
      to="/addbook"
      className="navbar-item is-tab"
      activeClassName="is-active">
      Add a Book
    </NavLink>
  </nav>
);
