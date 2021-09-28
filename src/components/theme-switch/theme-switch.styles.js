import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export const ThemeSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 100;
  position: fixed;
  right: 25px;
  top: 30px;
`;

export const StyledToggleIconContainer = styled.span`
  margin-right: 10px;
  font-size: 1rem;
`;

export const ToggleTextSpan = styled.span`
  position: relative;
  right: 5px;
  color: var(--title);
`;

export const TopIconSun = styled(FontAwesomeIcon).attrs({
  icon: faSun,
})`
  color: var(--title);
`;

export const TopIconMoon = styled(FontAwesomeIcon).attrs({
  icon: faMoon,
})`
  color: var(--title);
`;

export const ThemeSwitchLabel = styled.label`
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
`;

export const ThemeSwitchInput = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;

  :checked + .slider {
    background: var(--primary-color);
  }

  :checked + .slider::before {
    transform: translateX(26px);
  }
`;

export const RoundSlider = styled.div.attrs({
  className: 'slider',
})`
  background: #fff;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
  border-radius: 34px;

  ::before {
    background: #000000;
    bottom: 4px;
    content: '';
    height: 26px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 26px;
    border-radius: 50%;
  }
`;
