import React from 'react';

import {
  DurationWrapper,
  ProgressBarContainer,
  StyledProgressBar,
} from './progress-bar.styles';

const ProgressBar = () => {
  return (
    <ProgressBarContainer>
      <StyledProgressBar />
      <DurationWrapper>
        <span>0:00</span>
        <span>2:30</span>
      </DurationWrapper>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
