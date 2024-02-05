import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import SignInPage from './pages/setup/SignInPage';
import SignUpPage from './pages/setup/signUpPage';
 // Import your LoadingIndicator component
import './App.css';
import PixelArtLoader from './components/common/loading/PixelArtLoader';
import Blog from './pages/Blog';
import theme from './components/common/Theme/Theme';
import About from './pages/About';
import PodcastPage from './pages/podcast';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data or any asynchronous operation
    const fetchData = async () => {
      // Set loading to true initially
      setLoading(true);
      
      // Perform some async operation (e.g., fetching data from an API)
      try {
        // Simulated API call using setTimeout
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a delay of 2 seconds
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []); // Run this effect only once, similar to componentDidMount

  return (
    <div className='container'>
      {loading ? (
        <PixelArtLoader/>
      ) : (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/podcast" element={<PodcastPage />} />

        </Routes>
      )}
    </div>
  );
}

export default App;
