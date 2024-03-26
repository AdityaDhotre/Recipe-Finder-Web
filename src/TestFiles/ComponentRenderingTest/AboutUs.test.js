import React from 'react';
import { render, screen } from '@testing-library/react'; // Load render and screen utilities from testing library
import AboutUs from '../../allComponts/AboutUs'; // Load the AboutUs component for the test
import '@testing-library/jest-dom'; // Load Jest DOM for more testing utilities

// Test case: Verify if the AboutUs component displays the expected heading
test('displays AboutUs component', () => {
  // Render the AboutUs component for the test
  render(<AboutUs />);
  
  // Verify if the heading "Our Dynamic Team" is displayed in the AboutUs component
  const aboutHeading = screen.getByText('Our Dynamic Team'); // Fetch the element with the specified text
  expect(aboutHeading).toBeInTheDocument(); // Confirm that the fetched element is in the rendered component
});
