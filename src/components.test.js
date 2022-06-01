import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Nav from './components/Nav';

it('Footer renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
