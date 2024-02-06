// Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Button, Divider } from '@mui/material';
import './styless.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="areanav">
      <AppBar position="static">
        <div className="navcontainer">
          <Toolbar sx={{ justifyContent: 'center' }}>
            <Link to="/" className="nav-link">
              <Button color="inherit">H o m e</Button>
            </Link>
            
            <Divider orientation="vertical" sx={{ mx: 2, backgroundColor: 'white', height: '100%' }} />
            
            <Button color="inherit" className="nav-link">A b o u t</Button>
            
            <Divider orientation="vertical" sx={{ mx: 2, backgroundColor: 'white', height: '100%' }} />
            
            <Button color="inherit" className="nav-link">A r t i c l e s</Button>
            
            <Divider orientation="vertical" sx={{ mx: 2, backgroundColor: 'white', height: '100%' }} />
            
            <Link to="/podcast" className="nav-link">
              <Button color="inherit">P o d c a s t s</Button>
            </Link>
            
            <Divider orientation="vertical" sx={{ mx: 2, backgroundColor: 'white', height: '100%' }} />
            <Link to="/community" className="nav-link">
            <Button color="inherit" className="nav-link">C o m m u n i t y</Button>
            </Link>
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
};

export default Navbar;
