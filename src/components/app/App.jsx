import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardDetailContainer from '../../containers/CardDetailContainer';
import ListContainer from '../../containers/ListContainer';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route 
            path="/"
            exact
            render={(routerProps) => (
              <ListContainer {...routerProps} />
            )}
          />
          <Route 
            path="/:id"
            exact
            render={(routerProps) => (
              <CardDetailContainer {...routerProps} />
            )}
          />
          <Route />
        </Switch>
      </Router>
    </div>
  );
}
