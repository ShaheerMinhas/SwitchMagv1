import React from 'react';
import { AppBar, Toolbar, Typography, createTheme, ThemeProvider } from '@mui/material';
import MosqueOutlinedIcon from '@mui/icons-material/MosqueOutlined';

// Create a custom theme with a purple primary color
const theme = createTheme({
  palette: {
    primary: {
      main: '#800080', // Set the main color to purple (change this hex code as desired)
    },
  },
});

function Headersetup() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">
            Switch Magazine
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Headersetup;