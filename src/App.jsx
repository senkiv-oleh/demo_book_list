import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Header } from './Header';
import { Dashboard } from './Dashboard';
import { AddBook } from './AddBook';
import { EditBook } from './EditBook';
import './App.scss';

const App = () => (
  <>
    <Header />
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/addbook" component={AddBook}/>
        <Route path="/editbook" component={EditBook}/>
        
        <Redirect path="/home" to="/" />
      </Switch>

    </div>
  </>
);

export default App;
