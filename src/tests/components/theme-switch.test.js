import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ThemeSwitch from '../../components/theme-switch/theme-switch';

// let component = null;

// beforeEach(() => {

// });

describe('ThemeSwitch component tests', () => {
  it('Sanity test for ThemeSwitch component', () => {
    console.log('ThemeSwitch component sanity test passed!');
  });

  test('has correct theme text Light Mode', () => {
    render(<ThemeSwitch />);
    const spanNode = screen.getByText(/light mode/i);
    expect(spanNode).toHaveTextContent('Light Mode');
  });

  test('theme button should be unchecked on first load only', () => {
    render(<ThemeSwitch />);

    const themeButton = screen.getByLabelText('theme-switch');

    expect(themeButton).toMatchObject({ checked: false });
  });

  test('theme button changes text to Dark Mode', () => {
    render(<ThemeSwitch />);

    const themeButton = screen.getByLabelText('theme-switch');

    userEvent.click(themeButton);
    const spanNode = screen.getByText(/dark mode/i);

    expect(spanNode).toHaveTextContent('Dark Mode');
  });

  test('theme button changes to checked true', () => {
    render(<ThemeSwitch />);

    const themeButton = screen.getByLabelText('theme-switch');

    expect(themeButton).toMatchObject({ checked: true });
  });
});

// afterEach(() => {

// });
