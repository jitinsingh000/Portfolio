import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  const [showNavItems, setShowNavItems] = useState(false);

  const toggleNavItems = () => {
    setShowNavItems(!showNavItems);
  };

  const hideNavItems = () => {
    setShowNavItems(false);
  };

  return (
    <div className="App">
      <Navbar showNavItems={showNavItems} toggleNavItems={toggleNavItems} />
      <div className="portfolio-content" onClick={hideNavItems}>
        <Home />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
