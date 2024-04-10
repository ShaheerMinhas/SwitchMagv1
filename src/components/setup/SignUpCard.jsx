import React from 'react';
import { styled, Paper, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { updateProfile } from '@firebase/auth';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const User = userCredential.user;
      updateProfile(User, {
        displayName: name
      }).then(() => {
        console.log('User created')
      }).catch((error) => {
        console.log(error)
      })
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    })
  };

  return (
    <StyledPaper>
      <Typography variant="h5" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <WhiteTextField
          label="Name"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          onChange={(e) => setName(e.target.value)}
        />
        <WhiteTextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <WhiteTextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <WhiteTextField
          label="Date of Birth"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
      <Typography variant="body2" style={{ marginTop: '1rem' }}>
        Already have an account?{' '}
        <Link to="/signin">Log In</Link>
      </Typography>
      <Typography variant="body2" style={{ marginTop: '0.5rem' }}>
        <Link href="#" onClick={() => console.log('Forgot password')}>Forgot password?</Link>
      </Typography>
    </StyledPaper>
  );
};

export default SignUpForm;
