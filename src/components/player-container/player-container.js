import React from 'react';

import AlbumArtComponent from '../album-art-container/album-art-container';
import {
  StyledArtist,
  StyledPlayerContainer,
  StyledTitle,
} from './player-container.styles';

import QueenIsDeadAudio from '../../music/The Queen Is Dead/01-TheSmiths-TheQueenIsDead.mp3';
import ProgressBar from '../progress-bar/progress-bar';
import PlayerControls from '../player-controls/player-controls';

const PlayerContainerComponent = () => {
  return (
    <StyledPlayerContainer>
      {/* Song */}
      <AlbumArtComponent />
      <StyledTitle>The Queen is Dead</StyledTitle>
      <StyledArtist>The Smiths</StyledArtist>
      <audio src={QueenIsDeadAudio} />
      {/* Progress */}
      <ProgressBar />
      {/* Controls */}
      <PlayerControls />
    </StyledPlayerContainer>
  );
};

export default PlayerContainerComponent;
