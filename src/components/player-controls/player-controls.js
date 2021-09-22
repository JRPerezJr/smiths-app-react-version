import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import {
  PlayerControlsContainer,
  StyledIcon,
  StyledPlayPauseIcon,
} from './player-controls.styles';

const PlayerControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = () => {
    setIsPlaying(true);
    console.log('playing');
  };

  const pauseSong = () => {
    setIsPlaying(false);
    console.log('paused');
  };

  return (
    <PlayerControlsContainer>
      <StyledIcon icon={faBackward} title="Previous" />
      {!isPlaying ? (
        <StyledPlayPauseIcon
          icon={faPlay}
          title="Play"
          onClick={isPlaying ? pauseSong : playSong}
        />
      ) : (
        <StyledPlayPauseIcon
          icon={faPause}
          title="Pause"
          onClick={isPlaying ? pauseSong : playSong}
        />
      )}
      <StyledIcon icon={faForward} title="Next" />
    </PlayerControlsContainer>
  );
};

export default PlayerControls;
