import { render, fireEvent, screen } from '@testing-library/react';
import { toHaveClass } from '@testing-library/jest-dom';
import Calculator from './components/Calculator';
import App from './App';

console.log(toHaveClass);

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
  it('navigation to quote', () => {
    render(
      <App />,
    );
    fireEvent.click(screen.getByText('Quote'));
    expect(screen.getByText('William Paul Thurson')).toBeInTheDocument();
  });

  it('navigation to maths', () => {
    render(
      <App />,
    );
    fireEvent.click(screen.getByText('Calculator'));
    expect(screen.getByText('Let\'s do some math!!')).toBeInTheDocument();
  });
});
