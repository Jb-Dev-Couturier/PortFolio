import React from 'react';

import { About, Footer, Header, Skills, Testimonials, Work } from './container';
import { Navbar } from './components';

import './animationBG.css';
import './App.scss'

const App = () => {
  return (
    <>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="app">
         <Navbar /> 
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
