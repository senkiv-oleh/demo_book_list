import React from 'react';

import {BooksTable} from '../BooksTable';
import './Dashboard.scss';


export const Dashboard = () =>
  <>
    <h1 className="Dashboard__title title">Books Table</h1>
    <BooksTable />
  </>;
