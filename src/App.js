import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyboardIcon from './images/keyboardIcon.png';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Pricing from './components/pages/Pricing'
import Contact from './components/pages/Contact'

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <body>
        <Home/>
        <br/> 
        <About/>    
        <br/>
        <Pricing/>
        <br/>
        <Contact/>
      </body>
      </div>
  );
}

export default App;
