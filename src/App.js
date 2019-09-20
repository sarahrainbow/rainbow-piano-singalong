import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextArea from './TextArea';
import Quote from './Quote';
import KeyboardIcon from './images/keyboardIcon.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <br/>
        <Quote><i>‘Best night of my life’</i></Quote>
        <br/>
        <TextArea>
          <p>The human jukebox Mark Rainbow will bring harmony in every concievable way. </p>
                
          <p>Whether it be a wild <b>hen do</b>, a spectacular <b>wedding</b>, your mum’s 60th birthday <b>party</b>, your boyfriend’s 30th, or a last ditch attempt to make the office <b>christmas</b> party fun this year, he knows the key to everyone’s hearts.</p>
          
          <p>Because why sing alone when you can <b>singalong?</b></p>
        </TextArea>
        <br/>
        <Quote><i>‘The feeling of us all singing together was so moving I actually cried’</i></Quote>
        <br/>
        {/* <img src={KeyboardIcon} height='100px'/>  */}
      </header>
    </div>
  );
}

export default App;
