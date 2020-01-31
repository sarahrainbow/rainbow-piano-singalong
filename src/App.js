import React from 'react';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work'
import Contact from './components/pages/Contact'

function App() {
  return (
    <div className="App">
        <Header/>
          <Home/>
          <About/>    
          <Work/>
          <Contact/>
      </div>
  );
}

export default App;
