import { render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  //render the component to test
  render(<App />);
  //find element that we're interested in
  //button with initial text of 'name'
  const button = screen.getByRole('button', { name: 'Change to blue'});

  expect(button).toHaveStyle({ backgroundColor: 'red'});
});

test('button has correct initial text', () => {

});

test('button turns blue when clicked', () => {

});
