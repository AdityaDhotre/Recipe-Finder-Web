// Import necessary React hooks and Link for SPA-friendly navigation links.
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Switch } from 'antd'; // Ant Design UI components
import { useUserAuth } from './AuthContext'; // Custom hook for accessing user authentication context
import { useNavigate } from 'react-router-dom'; // Hook for programmatic navigation
import {
  HomeOutlined, // Icons for navigation menu items
  InfoCircleOutlined,
  ContactsOutlined,
  LoginOutlined,
  CoffeeOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

// Header component definition
const Header = () => {
  // Destructure isAuthenticated and logout from the user authentication context
  const { isAuthenticated, logout } = useUserAuth();
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle logout
  const processLogout = () => {
    logout(); // Invoke the logout function from context
    navigate('/'); // Redirect to home page after logout
  };

  // Style object for customizing the navigation menu and links
  const menuStyle = {
    borderBottom: 'none', // Remove the bottom border from the menu
    link: {
      textDecoration: 'none', // Styles for navigation links
    },
  };

  return (
    <div data-testid="header-component" >
      {/* Navigation menu */}
      <Menu  mode="horizontal" style={menuStyle}>
        {/* Site title or logo */}
        <Menu.Item style={{ marginRight: 'auto' }}>
          <Link to="/" style={menuStyle.link}>
            <span>
              <strong>Recepie Finder</strong> {/* Name of the application */}
            </span>
          </Link>
        </Menu.Item>

        {/* Display menu items based on the authentication status */}
        {isAuthenticated ? (
          <>
            {/* Navigation menu items for authenticated users */}
            <Menu.Item>
              <Link to="/" style={menuStyle.link}>
                <HomeOutlined />
                Home
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/recipe" style={menuStyle.link}>
                <CoffeeOutlined />
                Explore Recepie
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/aboutus" style={menuStyle.link}>
                <InfoCircleOutlined />
                About Us
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/ContactUs" style={menuStyle.link}>
                <ContactsOutlined />
                Contact Us
              </Link>
            </Menu.Item>
            {/* Logout action */}
            <Menu.Item onClick={processLogout}>
              <LogoutOutlined />
              Logout
            </Menu.Item>

          </>
        ) : (
          <>
            {/* Navigation menu items for unauthenticated users */}
            <Menu.Item>
              <Link to="/" style={menuStyle.link}>
                <HomeOutlined />
                Home
              </Link>
            </Menu.Item>

            <Menu.Item>
              <Link to="/aboutus" style={menuStyle.link}>
                <InfoCircleOutlined />
                About Us
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/ContactUs" style={menuStyle.link}>
                <ContactsOutlined />
                Contact Us
              </Link>
            </Menu.Item>
            {/* Login navigation */}
            <Menu.Item>
              <Link to="/login" style={menuStyle.link}>
                <LoginOutlined />
                Login
              </Link>
            </Menu.Item>
           
          </>
        )}
      </Menu>
    </div>
  );
};

export default Header;
