import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'; // Load render, screen, and fireEvent utilities from testing library
import ContactUs from '../../allComponents/ContactUs'; // Load the ContactUs component for the test

// Test case: Verify the onChange event when the input value is changed
test('onchange event on input change', () => {
  // Render the ContactUs component for the test
  render(<ContactUs/>);
  
  // Locate the input element by its label
  const input = screen.getByLabelText('Your name'); // Fetch the input by its label text
  fireEvent.change(input, { target: { value: 'a' } }); // Trigger a change event with the input value 'a'
  
  // Verify if the input value is updated correctly
  expect(input.value).toBe('a'); // Confirm that the input value matches the expected value 'a'
});