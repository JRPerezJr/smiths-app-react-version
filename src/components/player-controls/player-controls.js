import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {
  PlayerControlsContainer,
  StyledIcon,
  StyledPlayIcon,
} from './player-controls.styles';

const PlayerControls = () => (
  <PlayerControlsContainer>
    <StyledIcon icon={faBackward} title="Previous" />
    <StyledPlayIcon />
    <StyledIcon icon={faForward} title="Next" />
  </PlayerControlsContainer>
);

export default PlayerControls;
