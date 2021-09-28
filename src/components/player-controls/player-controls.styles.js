import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PlayerControlsContainer = styled.div`
  position: relative;
  top: -15px;
  left: 120px;
  width: 200px;
  @media screen and (max-width: 376px) {
    top: -10px;
    left: 100px;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: var(--player-controls);
  margin-right: 30px;
  cursor: pointer;
  user-select: none;
`;

export const StyledPlayPauseIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
  position: relative;
  top: 3px;
  color: var(--player-controls);
  margin-right: 30px;
  cursor: pointer;
  user-select: none;
`;
