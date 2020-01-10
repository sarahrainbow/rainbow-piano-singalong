import React, { Component } from 'react';
import Quote from '../Quote';
import happyEquation from '../../images/happyEquation.png';
// import piano from '../../images/rainbowPiano.jpg';
import { Element } from 'react-scroll';
// import soundfile from '../../audio/alto.mp3';
// import Sound from 'react-sound';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import MyPiano from '../MyPiano';

class Home extends Component {
    render(){
            const firstNote = MidiNumbers.fromNote('c3');
            const lastNote = MidiNumbers.fromNote('f5');
            const keyboardShortcuts = KeyboardShortcuts.create({
              firstNote: firstNote,
              lastNote: lastNote,
              keyboardConfig: KeyboardShortcuts.HOME_ROW,
            });

        return(
            <Element name='home' id="Home" className="container-fluid section">
                <img alt="happy equation" src={happyEquation} className="center"/>
                <Quote className="center">Best night of my life</Quote>    
                {/* <img alt='piano' src={piano} className="center"/> */}
                <MyPiano />
                {/* <Piano
                    noteRange={{ first: firstNote, last: lastNote }}
                    playNote={(midiNumber) => {
                    }}
                    stopNote={(midiNumber) => {
                        // Stop playing a given note - see notes below
                    }}
                    width={1000}
                    keyboardShortcuts={keyboardShortcuts}
                    /> */}
            </Element>
        );
    }
}

export default Home;