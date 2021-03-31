import React, { useEffect } from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import SoundfontProvider from './SoundfontProvider';


const ThisPiano = ({ musicalTyping }) => {

  // webkitAudioContext fallback needed to support Safari
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

  const noteRange = {
    first: MidiNumbers.fromNote('c3'),
    last: MidiNumbers.fromNote('f4'),
  };
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: noteRange.first,
    lastNote: noteRange.last,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  let isWebAudioUnlocked = false;
  let isHTMLAudioUnlocked = false;

  const overrideSilentSwitchMobile = () => {
    if (isWebAudioUnlocked && isHTMLAudioUnlocked) return;

    // Unlock WebAudio - create short silent buffer and play it
    // This will allow us to play web audio at any time in the app
    const context = audioContext;
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

  const absorbEvent = (event) => {
    event.returnValue = false;
  }

  const disableSelect = () => {
    let pianoElement = document.getElementsByClassName("piano")[0];
    pianoElement.addEventListener("touchstart", absorbEvent);
    pianoElement.addEventListener("touchend", absorbEvent);
    pianoElement.addEventListener("touchmove", absorbEvent);
    pianoElement.addEventListener("touchcancel", absorbEvent);
  }

  const BasicPiano = () => {
    return (
      <SoundfontProvider
        instrumentName="acoustic_grand_piano"
        audioContext={audioContext}
        hostname={soundfontHostname}
        render={({ isLoading, playNote, stopNote }) => (
          <Piano
            id="piano"
            className="piano"
            noteRange={noteRange}
            playNote={playNote}
            stopNote={stopNote}
            disabled={isLoading}
            keyboardShortcuts={musicalTyping === true ? keyboardShortcuts : []}
            onPlayNoteInput={() => {
              overrideSilentSwitchMobile();
              disableSelect();
            }}
          />
        )}
      />
    );
  }

  return (
    <div className="piano">
      <BasicPiano musicalTyping={musicalTyping} />
    </div>
  );
}

export default ThisPiano;

