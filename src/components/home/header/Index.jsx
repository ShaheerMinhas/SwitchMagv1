import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
  return (
    <header className='home-header'>
      <div className="header-content">
        <div className="header-text">
          <h1>
            <span style={{ color: 'purple' }}>Switch Magazine</span>
          </h1>
          <p>Tech blog about cool FYPS</p>
        </div>
        <div className="join-button">
          <Link to="/signin">
            <button>Join Us</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
