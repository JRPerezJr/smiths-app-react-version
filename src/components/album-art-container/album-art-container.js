import React from 'react';
import {
  StyledImage,
  StyledImageContainer,
} from './album-art-container.styles';

const AlbumArtComponent = ({ albumCover, title, artist }) => (
  <StyledImageContainer>
    <StyledImage
      src={albumCover}
      alt={`track artwork for ${title} by ${artist}`}
    />
  </StyledImageContainer>
);
export default AlbumArtComponent;
