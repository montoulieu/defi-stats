import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Stats from './pages/Stats';

// call the function

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Stats} />
      </Switch>
    </Router>
  );
}
