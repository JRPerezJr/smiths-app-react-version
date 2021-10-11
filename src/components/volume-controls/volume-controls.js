import React from 'react';
import {
  StyledSpan,
  VolumeBarContainer,
  VolumeContainer,
  //   VolumeWrapper,
} from './volume-controls.styles';

const VolumeControls = ({ handleVolume, volumeInput }) => (
  <VolumeBarContainer>
    <StyledSpan>Min</StyledSpan>
    <VolumeContainer
      type="range"
      min="0"
      max="2"
      value={volumeInput}
      step="0.01"
      onInput={e => handleVolume(e)}
    />
    <StyledSpan>Max</StyledSpan>
  </VolumeBarContainer>
);

export default VolumeControls;
