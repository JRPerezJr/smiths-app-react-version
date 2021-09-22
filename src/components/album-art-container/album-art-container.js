import React from 'react';
import {
  StyledImage,
  StyledImageContainer,
} from './album-art-container.styles';

const AlbumArtComponent = props => (
  <StyledImageContainer>
    <StyledImage src={props.albumCover} alt="queen is dead album cover" />
  </StyledImageContainer>
);
export default AlbumArtComponent;
