// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { ThemeProvider, Typography } from '@mui/material';
import theme from '../../common/Theme/Theme';

import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <header className='home-header'>
      <div className="header-content">

      <MenuIcon />
        <div className="header-text">
          <h1>
          <Typography variant="h1">
          <span sclassName="headSize">Switch Magazine</span>
          </Typography>
          
          </h1>
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
