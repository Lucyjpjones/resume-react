import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';

const history = createBrowserHistory();

function App() {

  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
        <Navbar />
        <div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
          <Route path='*' component={Home} />
        </Switch>
        </div>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;


