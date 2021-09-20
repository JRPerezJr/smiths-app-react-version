import React from 'react';

import renderer from 'react-test-renderer';

// import { mount } from 'enzyme';

import App from '../App';

describe('App component tests', () => {
  it('Sanity test for App component', () => {
    console.log('App component sanity test passed!');
  });

  test('snapshot renders without errors', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  // test('renders main title', () => {

  // });
});
