import React from 'react';
import './PixelArtLoader.css'; // Import CSS for styling the loader

const PixelArtLoader = () => {
  return (
    <div className="pixel-art-loader">
      <div className="pacman">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
      <div className="pixel" />
      <div className="pixel" />
      <div className="pixel" />
      {/* Add more div elements with class "pixel" to create your pixel art animation */}
    </div>
  );
};

export default PixelArtLoader;
