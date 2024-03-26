import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserAuthProvider } from './allComponents/AuthContext';
import Header from './allComponents/Header';
import Home from './allComponents/Home'
import Login from './allComponents/Login';
import ContactUs from './allComponents/ContactUs';
import AboutUs from './allComponents/AboutUs';
import RecipeExplorer from './allComponents/RecipeExplorer';
import { Provider } from 'react-redux';
import './App.css';

function App() {
  return (
      <UserAuthProvider>
          <BrowserRouter >
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />     
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/recipe" element={<RecipeExplorer />} />
            </Routes>
          </BrowserRouter>
      </UserAuthProvider>
  );
}

export default App;

