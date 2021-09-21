import styled from 'styled-components';

export const StyledPlayerContainer = styled.div`
  height: 600px;
  width: 400px;
  background: var(--player-background);
  border-radius: 20px;
  box-shadow: var(--card-shadow);
`;

export const StyledTitle = styled.h2`
  font-size: 25px;
  text-align: center;
  margin: 0;
  color: var(--title);
`;

export const StyledArtist = styled.h3`
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  margin: 5px 0 0;
  color: var(--primary-color);
`;
