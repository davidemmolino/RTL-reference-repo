import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  // render the component to test
  render(<App />);
  // find element that we're interested in
  // button with initial text of 'name'
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});

  expect(colorButton).toHaveStyle({ backgroundColor: 'red'});

  //simulate click
  fireEvent.click(colorButton);

  //expect background color to turn to blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'});

  //expect text to change 
  expect(colorButton).toHaveTextContent('Change to red');
});

// test('button has correct initial text', () => {

// });

// test('button turns blue when clicked', () => {

// });
