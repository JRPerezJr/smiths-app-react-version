import React from 'react';

import PlayerContainerComponent from './components/player-container/player-container';

import ThemeSwitch from './components/theme-switch/theme-switch';
import TRACKS from './data/music.data';
import { FavoritesContextProvider } from './services/favorites/favorites.context';

function App() {
  return (
    <>
      <FavoritesContextProvider>
        <ThemeSwitch />
        <PlayerContainerComponent tracks={TRACKS} />
      </FavoritesContextProvider>
    </>
  );
}

export default App;
