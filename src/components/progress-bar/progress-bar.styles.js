import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  background: var(--progress-container);
  border-radius: 5px;
  cursor: pointer;
  margin: 40px 20px;
  height: 4px;
  width: 90%;
`;

export const StyledProgressBar = styled.div`
  background: var(--progress-bar);
  border-radius: 5px;
  height: 100%;
  width: 0%;
  transition: width 0.1s linear;
`;

export const DurationWrapper = styled.div`
  color: var(--primary-color);
  position: relative;
  top: -25px;
  display: flex;
  justify-content: space-between;
`;
