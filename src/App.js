import React from 'react';
import './App.scss';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Pricing from './components/pages/Pricing'
import Contact from './components/pages/Contact'

function App() {

  let isWebAudioUnlocked = false;
let isHTMLAudioUnlocked = false;

function overrideSilentSwitchMobile() {
    if (isWebAudioUnlocked && isHTMLAudioUnlocked) return;

    // Unlock WebAudio - create short silent buffer and play it
    // This will allow us to play web audio at any time in the app
    const context = new AudioContext();
    const buffer = context.createBuffer(1, 1, 22050); // 1/10th of a second of silence
    const source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.onended = function () {
        console.log('WebAudio unlocked!');
        isWebAudioUnlocked = true;
        if (isWebAudioUnlocked && isHTMLAudioUnlocked) {
            console.log('WebAudio unlocked and playable w/ mute toggled on!');
        }
    };
    source.start();

    // Unlock HTML5 Audio - load a data url of short silence and play it
    // This will allow us to play web audio when the mute toggle is on
    const silenceDataURL = 'data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBIAAAABAAEAQB8AAEAfAAABAAgAAABmYWN0BAAAAAAAAABkYXRhAAAAAA';
    const tag = document.createElement('audio');
    tag.controls = false;
    tag.preload = 'auto';
    tag.loop = false;
    tag.src = silenceDataURL;
    tag.onended = function () {
        console.log('HTMLAudio unlocked!');
        isHTMLAudioUnlocked = true;
        if (isWebAudioUnlocked && isHTMLAudioUnlocked) {
            console.log('WebAudio unlocked and playable w/ mute toggled on!');
        }
    };
    const p = tag.play();
    if (p) {
        p.then(() => {
            console.log('play success');
        }, (reason) => {
            console.log('play failed', reason);
        });
    }
}

overrideSilentSwitchMobile();

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
