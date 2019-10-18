import React from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Pricing from './components/pages/Pricing'
import Contact from './components/pages/Contact'

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header/>
        <body>
          <Home/>
          <About/>    
          <Pricing/>
          <Contact/>
        </body>
      </div>
  );
}

export default App;
