import React from 'react';
import AudioItem from '../AudioItem';
import { Box } from '@mui/material';
import './styles.css'
const AudioList = ({ blogs }) => {
  return (
    <div className='audioList-wrap'>
      {blogs.map((blog, index) => (
        <Box key={index} className='audioItem-container'>
          <AudioItem blog={blog} />
        </Box>
      ))}
    </div>
  );
};

export default AudioList;
