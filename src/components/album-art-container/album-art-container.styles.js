import styled from 'styled-components';

export const StyledImageContainer = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  top: -50px;
  left: 50px;
`;

export const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: var(--image-shadow);
`;
