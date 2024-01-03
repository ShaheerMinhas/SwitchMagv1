
import { Box } from '@mui/material';
import React from 'react';
const BackgroundImg = () => {
  const imageURL = "https://pbs.twimg.com/media/FI8KXRyVUAAATKw?format=png&name=large";
  return (
    <Box
      component="div"
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${imageURL})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    />
  );
};

export default BackgroundImg;