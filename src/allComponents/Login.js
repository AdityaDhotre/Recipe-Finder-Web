import React, { useState } from 'react';
import { useUserAuth } from './AuthContext'; // Utilizing the custom hook for user authentication.
import { useNavigate } from 'react-router-dom'; // Hook for programmatic navigation.
import { Input, Button } from 'antd'; // UI components from Ant Design.
import { UserOutlined, LockOutlined } from '@ant-design/icons'; // Icons for the UI.

// Login functional component.
function Login() {
  // Extract the login function from the useUserAuth hook.
  const { userLogin } = useUserAuth();
  // State variables for username and password, initialized with 'Admin' and '123' respectively.
  const [username, setUsername] = useState('Admin');
  const [password, setPassword] = useState('123');
  // Hook for programmatic navigation.
  const navigate = useNavigate();

  // Function to handle user login.
  const handleLogin = () => {
    // Ensure username and password are not empty.
    if (username && password) {
      userLogin(); // Invoke the login function from the auth context.
      navigate('/recipe'); // Redirect to the recipe page post successful login.
    } else {
      // Prompt the user to enter credentials if any field is empty.
      alert('Please enter your username and password.');
    }
  };

  // Render the login form.
  return (
    <section className="vh-100 ant-custom-container">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              {/* Username input field with an icon */}
              <div className="form-outline mb-4 ant-form-item">
                <Input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  addonBefore={<UserOutlined className="site-form-item-icon" />}
                />
              </div>

              {/* Password input field with an icon */}
              <div className="form-outline mb-3 ant-form-item">
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  addonBefore={<LockOutlined className="site-form-item-icon" />}
                />
              </div>

              {/* Login button */}
              <div className="text-center text-lg-start mt-4 pt-2">
                <Button
                  type="button"
                  id="login-button"
                  className="btn btn-primary btn-lg ant-btn ant-btn-lg"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Make the Login component available for import in other parts of the application.
export default Login;
