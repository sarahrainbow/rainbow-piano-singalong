import React from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
// import DimensionsProvider from './DimensionsProvider';
import SoundfontProvider from './SoundfontProvider';
import './styles.css';

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

function MyPiano() {
  return (
    <div className="mt-5">
      <BasicPiano />
    </div>
  );
}

function BasicPiano() {
  return (
    <SoundfontProvider
      instrumentName="acoustic_grand_piano"
      audioContext={audioContext}
      hostname={soundfontHostname}
      render={({ isLoading, playNote, stopNote }) => (
        <Piano
          noteRange={noteRange}
          width='100%'
          playNote={playNote}
          stopNote={stopNote}
          disabled={isLoading}
          keyboardShortcuts={keyboardShortcuts}
        />
      )}
    />
  );
}

// function ResponsivePiano(props) {
//   return (
//     <DimensionsProvider>
//       {({ containerWidth, containerHeight }) => (
//         <SoundfontProvider
//           instrumentName="acoustic_grand_piano"
//           audioContext={audioContext}
//           hostname={soundfontHostname}
//           render={({ isLoading, playNote, stopNote }) => (
//             <Piano
//               noteRange={noteRange}
//               width={containerWidth}
//               playNote={playNote}
//               stopNote={stopNote}
//               disabled={isLoading}
//               // keyboardShortcuts={keyboardShortcuts}
//               {...props}
//             />
//           )}
//         />
//       )}
//     </DimensionsProvider>
//   );
// }

export default MyPiano;

