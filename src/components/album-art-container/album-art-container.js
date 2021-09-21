import React from 'react';
import {
  StyledImage,
  StyledImageContainer,
} from './album-art-container.styles';

import QueenIsDead from '../../assets/the_queen_is_dead.jpg';

const AlbumArtComponent = () => (
  <StyledImageContainer>
    <StyledImage src={QueenIsDead} alt="album cover" />
  </StyledImageContainer>
);

export default AlbumArtComponent;
