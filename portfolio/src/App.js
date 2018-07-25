import React, { Component } from 'react';
import Hero from './components/Hero';
import './App.css';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
  } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="app-wrapper">
         <Switch>
            <Route exact path="/" component={() => ( <Hero /> )} />
            <Redirect from="*" to="/" />
         </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
