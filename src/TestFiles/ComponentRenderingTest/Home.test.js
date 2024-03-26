import React from 'react';
import { render, screen } from '@testing-library/react'; // Load render and screen utilities from testing library
import App from '../../App'; // Load the main App component for the test
import '@testing-library/jest-dom/extend-expect'; // Load extended Jest DOM for more testing utilities

// Test case: Verify if the Home component is displayed for the default path
test('displays Home component for default path', () => {
  // Render the main App component for the test
  render(<App />);
  
  // Verify if the element with the test ID "home-component" is displayed
  const homeElement = screen.getByTestId('home-component'); // Fetch the element with the specified test ID
  expect(homeElement).toBeInTheDocument(); // Confirm that the fetched element is in the rendered component
});
