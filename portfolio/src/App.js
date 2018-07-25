import React, { Component } from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

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
          <Route exact path="/" component={() => ( <Hero /> )} />
          <Route exact path="/" component={() => ( <About /> )} />
          <Route exact path="/" component={() => ( <Projects /> )} />
          <Route exact path="/" component={() => ( <Footer /> )} />
          <Switch>
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
