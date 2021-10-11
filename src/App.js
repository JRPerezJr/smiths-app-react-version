import React from 'react';

import PlayerContainerComponent from './components/player-container/player-container';

import ThemeSwitch from './components/theme-switch/theme-switch';
import TRACKS from './data/music.data';

function App() {
  return (
    <>
      <ThemeSwitch />
      <PlayerContainerComponent tracks={TRACKS} />
    </>
  );
}

export default App;
