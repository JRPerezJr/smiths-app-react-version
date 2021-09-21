import React from 'react';

import AlbumArtComponent from '../album-art-container/album-art-container';
import {
  StyledArtist,
  StyledPlayerContainer,
  StyledTitle,
} from './player-container.styles';

import QueenIsDeadAudio from '../../music/The Queen Is Dead/01-TheSmiths-TheQueenIsDead.mp3';

const PlayerContainerComponent = () => {
  return (
    <StyledPlayerContainer>
      {/* Song */}
      <AlbumArtComponent />
      <StyledTitle>The Queen is Dead</StyledTitle>
      <StyledArtist>The Smiths</StyledArtist>
      <audio src={QueenIsDeadAudio} />
      {/* Progress */}
    </StyledPlayerContainer>
  );
};

export default PlayerContainerComponent;
