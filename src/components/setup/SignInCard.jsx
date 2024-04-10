import React from 'react';
import { styled, Paper, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
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

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user= userCredential.user;
      console.log(user) 
      Navigate('/')
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    })
  }
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
            type="name"
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
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign In
          </Button>
      </form>
      <Typography variant="body2" style={{ marginTop: '1rem' }}>
        Dont have an account?{' '}
        <Link to="/signup">Sign Up</Link>
      </Typography>
      <Typography variant="body2" style={{ marginTop: '0.5rem' }}>
        <Link href="#" onClick={() => console.log('Forgot password')}>Forgot password?</Link>
      </Typography> 
    </StyledPaper>
  );
};

export default SignInForm;
