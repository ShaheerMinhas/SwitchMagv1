// Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Link to="/" className="nav-link">
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/podcast" className="nav-link">
          <ListItem button>
            <ListItemText primary="Podcast" />
          </ListItem>
        </Link>
        <Link to="/blogs" className="nav-link">
          <ListItem button>
            <ListItemText primary="Blogs" />
          </ListItem>
        </Link>
        <Link to="/about" className="nav-link">
          <ListItem button>
            <ListItemText primary="About Us" />
          </ListItem>
        </Link>
        <Link to="/community" className="nav-link">
          <ListItem button>
            <ListItemText primary="Community" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <header className='home-header'>
      <div className="header-content">
        {/* Menu icon for opening the drawer */}
        <MenuIcon onClick={toggleDrawer(true)} />

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

        {/* Drawer for the navigation links */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
