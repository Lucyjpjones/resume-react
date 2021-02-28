import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import HeroSection from './components/HeroSection';
import useVH from 'react-viewport-height';

function App() {
  useVH();

  return (
    <div className="vh">
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/contact' exact component={Contact} />
          <Route path='*' exact component={Home} />
        </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
