import React, { useEffect, useState } from 'react';

import {
  RoundSlider,
  StyledToggleIconContainer,
  ThemeSwitchInput,
  ThemeSwitchLabel,
  ThemeSwitchWrapper,
  ToggleTextSpan,
  TopIconMoon,
  TopIconSun,
} from './theme-switch.styles';

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false);
  const [mode, setMode] = useState('Light Mode');

  const toggleDarkMode = () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    setIsDark(true);
  };

  const switchTheme = e => {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    }
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      if (currentTheme === 'dark') {
        document.querySelector('input[type="checkbox"]').checked = true;
        toggleDarkMode();
      }
    }
  }, []);

  useEffect(() => {
    isDark ? setMode('Dark Mode') : setMode('Light Mode');
  }, [isDark]);

  return (
    <ThemeSwitchWrapper>
      <StyledToggleIconContainer>
        <ToggleTextSpan>{mode}</ToggleTextSpan>
        {isDark ? <TopIconMoon /> : <TopIconSun />}
      </StyledToggleIconContainer>
      <ThemeSwitchLabel>
        <ThemeSwitchInput
          aria-label="theme-switch"
          aria-checked="false"
          onChange={switchTheme}
        />
        <RoundSlider />
      </ThemeSwitchLabel>
    </ThemeSwitchWrapper>
  );
};

export default ThemeSwitch;
