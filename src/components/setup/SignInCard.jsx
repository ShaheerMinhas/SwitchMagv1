import React from 'react';
import { styled, Paper, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const StyledPaper = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: theme.spacing(4),
  backdropFilter: 'blur(10px)',
  backgroundColor: 'transparent',
  borderRadius: theme.shape.borderRadius,
  color: 'white',
  maxWidth: 300, // Set maximum width for the card
}));

const WhiteTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: 'white',
  },
  '& .MuiInputLabel-root': {
    color: 'white !important',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white !important',
  },
});

const SignUpForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
  };

  return (
    <StyledPaper>
      <Typography variant="h5" gutterBottom>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit}>
        
        <WhiteTextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type="email"
        />
        <WhiteTextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type="password"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
      <Typography variant="body2" style={{ marginTop: '1rem' }}>
        Dont have an account?{' '}
        <Link to="/">Sign Up</Link>
      </Typography>
      <Typography variant="body2" style={{ marginTop: '0.5rem' }}>
        <Link href="#" onClick={() => console.log('Forgot password')}>Forgot password?</Link>
      </Typography>
    </StyledPaper>
  );
};

export default SignUpForm;
