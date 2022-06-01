import { render, fireEvent, screen } from '@testing-library/react';
import { Router, MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import { toHaveClass } from '@testing-library/jest-dom';
import Calculator from './components/Calculator';
import Nav from './components/Nav';

describe('first test', () => {
  test('check that button 8 is clicked and the imput is selected', async () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText('8'));
    const boxes = await screen.findAllByText(/8/i);

    expect(boxes[0]).toHaveClass('input');
    expect(boxes[1]).toHaveClass('calc-button');
  });
});

describe('Nav menu', () => {

  // it('navigation to calculator', () => {
  //   const history = createMemoryHistory();
  //   render(<Nav />);
  //   fireEvent.click(screen.getByText('Calculator'));
  //   expect(history.location.pathname).toBe('/maths');
  // });

  it('navigation to quote', () => {
    const tree = renderer
    .create(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    )
    .toJSON();
    fireEvent.click(screen.getByText('Quote'));
    expect('Mathematics is not about numbers, equations, computations, algorithms: it is about understanding.').toBeInTheDocument();
  });
});
