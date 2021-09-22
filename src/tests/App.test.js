import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

describe('App component tests', () => {
  it('Sanity test for App component', () => {
    console.log('App component sanity test passed!');
  });

  test('has theme text Light Mode', () => {
    render(<App />);
    const spanNode = screen.getByText(/light mode/i);
    expect(spanNode).toHaveTextContent('Light Mode');
  });

  test('theme button should be unchecked on first load only', () => {
    render(<App />);

    const themeButton = screen.getByLabelText('theme-switch');

    expect(themeButton).toMatchObject({ checked: false });
  });

  test('theme button changes text to Dark Mode', () => {
    render(<App />);

    const themeButton = screen.getByLabelText('theme-switch');

    userEvent.click(themeButton);
    const spanNode = screen.getByText(/dark mode/i);

    expect(spanNode).toHaveTextContent('Dark Mode');
  });

  test('theme button changes to checked true', () => {
    render(<App />);

    const themeButton = screen.getByLabelText('theme-switch');

    expect(themeButton).toMatchObject({ checked: true });
  });

  test('should render Album cover', () => {
    render(<App />);

    const albumCover = screen.getByAltText(/queen is dead.*? album cover/i);

    expect(albumCover).toMatchObject({
      alt: 'queen is dead album cover',
    });
  });
});
