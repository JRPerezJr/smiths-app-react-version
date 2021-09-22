import React from 'react';
import PlayerContainerComponent from './components/player-container/player-container';

import ThemeSwitch from './components/theme-switch/theme-switch';

function App() {
  return (
    <>
      <ThemeSwitch />
      <PlayerContainerComponent />
    </>
  );
}

export default App;
