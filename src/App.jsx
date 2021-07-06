import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Header } from './Header';
import { Dashboard } from './Dashboard';
import { BookForm } from './BookForm';
import './App.scss';

const App = () => (
  <>
    <Header />
    <div className="App">
      <Switch>
        <Route exact path="/book">
          <Dashboard />
        </Route>
        <Route path="/addbook" component={BookForm}/>
        <Route exact path="/book/:bookId" component={BookForm}/>
        
        <Redirect path="/" to="/book" />
      </Switch>

    </div>
  </>
);

export default App;
