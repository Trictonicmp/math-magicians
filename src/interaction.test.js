import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from './components/Calculator';

test('check that button 8 is clicked and the imput is selected', async () => {
  render(<Calculator />);

  fireEvent.click(screen.getByText('8'));
  const boxes = await screen.findAllByText(/8/i);

  expect(boxes[0]).toHaveClass('input');
  expect(boxes[1]).toHaveClass('calc-button');
});
