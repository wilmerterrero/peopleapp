import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Base } from './components/Base';
import { Contact } from './components/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Base} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>   
  );
}

export default App;
