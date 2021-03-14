import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Base } from './components/Base';
import { FullContact } from './components/FullContact';
import { EditContact } from './components/EditContact';
import { AddContact } from './components/AddContact';
import { Config } from './components/Config';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Base} />
        <Route exact path="/contact/:id" component={FullContact} />
        <Route exact path="/create" component={AddContact} />
        <Route exact path="/edit/:id" component={EditContact} />
        <Route exact path="/config" component={Config} />
      </Switch>
    </Router>   
  );
}

export default App;
