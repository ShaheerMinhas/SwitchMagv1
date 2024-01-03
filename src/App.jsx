import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Blog from './pages/blogs';
import SignInPage from './pages/setup/SignInPage';
import './App.css';
function App() {
  return (
    <div className='container'>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/blog/:id" element={<Blog/>} />
        <Route path="/signin" element={<SignInPage />} />

      </Routes>
    </div>
  );
}

export default App;
