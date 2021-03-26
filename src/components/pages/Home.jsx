import React, { useEffect, useState } from 'react';
import Quote from '../Quote';
import { Element } from 'react-scroll';
import 'react-piano/dist/styles.css';
import './home.scss'
import MyPiano from '../MyPiano.js';
import Switch from "react-switch";

const Home  = () => {
  const [musicalTyping, setMusicalTyping] = useState(false);

  useEffect(() => {
    let notes = document.getElementsByClassName('ReactPiano__Key');
    rainbowfyNotes(notes);
  });

  const rainbowfyNotes = (notes) => {
    const colours = [
      'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
    ];
    let c = 0;

    for (let i = 0; i < notes.length; i++) {
      notes[i].id = `note-${colours[c]}`;
      notes[i].classList.add(`note-${colours[c]}`);
      c = c === colours.length ? 0 : c + 1;
    }
  }


  return(
    <Element name='home' id="Home" className="container-fluid section">
      <MyPiano musicalTyping={ musicalTyping } />
        <label className="musicalTypingSwitch">
            <Switch onChange={() => setMusicalTyping(!musicalTyping)} checked={musicalTyping} />
            <p>Musical typing</p>
        </label>
      <Quote className="center">Best night of my life</Quote>
    </Element>
  )
}

export default Home;