// Import required React hooks and createContext function for context API.
import React, { createContext, useContext, useState } from 'react';

// Create a context for user authentication state.
const UserAuthContext = createContext();

// Custom hook to utilize the user authentication context.
// This hook simplifies the process of accessing the auth context across the application.
export function useUserAuth() {
  // useContext hook will make the context data accessible to any component that calls this hook.
  return useContext(UserAuthContext);
}

// Component that provides user authentication state to its children.
export function UserAuthProvider({ children }) {
  // State hook to monitor the user authentication status.
  // Initially, the user is not authenticated.
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);

  // Function to update the state to authenticated.
  const userLogin = () => {
    setUserIsAuthenticated(true);
  };

  // Function to update the state to not authenticated.
  const userLogout = () => {
    setUserIsAuthenticated(false);
  };

  // The value object includes the user authentication state and the functions to modify it.
  // This value will be available to any descendent components of UserAuthProvider.
  const value = {
    userIsAuthenticated,
    userLogin,
    userLogout,
  };

  // The UserAuthContext.Provider component makes the user authentication state and helper functions
  // accessible to any child component. This is where the context value is passed down.
  return <UserAuthContext.Provider value={value}>{children}</UserAuthContext.Provider>;
}
