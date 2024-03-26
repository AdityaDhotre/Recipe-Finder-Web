import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'; // Load render, screen, and fireEvent utilities from testing library
import ContactUs from '../../allComponts/ContactUs'; // Load the ContactUs component for the test

// Test case: Verify the onChange event when the button is clicked
test('onchange event on button click', () => {
  // Render the ContactUs component for the test
  render(<ContactUs/>);
  
  // Locate the button element
  const btn = screen.getByRole('button'); // Fetch the button by its role
  fireEvent.click(btn); // Trigger a click event on the button
  
  // Verify if the expected response text is displayed after clicking the button
  expect(screen.getByText("Soon you will receive a response")).toBeInTheDocument(); // Confirm that the response text is in the rendered component
});