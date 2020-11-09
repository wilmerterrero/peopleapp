import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Base } from './components/Base';
import { Contact } from './components/Contact';
import { EditContact } from './components/EditContact';
import { NewContact } from './components/NewContact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Base} />
        <Route exact path="/contact/:id" component={Contact} />
        <Route exact path="/create" component={NewContact} />
        <Route exact path="/edit/:id" component={EditContact} />
        <Route exact path="/delete/:id" component={Contact} />
      </Switch>
    </Router>   
  );
}

export default App;
