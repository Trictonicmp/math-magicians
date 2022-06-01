import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Nav from './components/Nav';
import CalcButton from './components/CalcButton';
import Calculator from './components/Calculator';

it('nav renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('Calculator renders correctly', () => {
  const tree = renderer
    .create(<CalcButton />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('CalcButton renders correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
