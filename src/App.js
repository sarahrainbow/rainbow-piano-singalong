import React from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Pricing from './components/pages/Pricing'
import Contact from './components/pages/Contact'

function App() {
  return (
    <div className="App">
        <Header/>
          <Home/>
          <About/>    
          <Pricing/>
          <Contact/>
      </div>
  );
}

export default App;
