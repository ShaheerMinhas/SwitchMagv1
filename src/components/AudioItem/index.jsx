import React from 'react';
import { Typography, Box, Paper, IconButton } from '@mui/material';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import './styles.css';

function AudioItem({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
    duration,
  },
}) {
  const linkStyle = {
    textDecoration: 'none', // Remove underline
    color: 'inherit',       // Inherit text color from parent
  };

  return (
    <>
      <Paper elevation={3} className="bg" style={{ padding: '16px', display: 'flex', alignItems: 'center', backgroundColor: '#cfcfc4', marginTop: '20px' }}>
        {/* Display blog.id on the left side */}
        <Typography variant="body2" style={{ marginRight: '16px',fontSize: '20px' }}>
          {id}
        </Typography>

        {/* Square Image */}
        <img src={authorAvatar} alt="Author" style={{ width: '100px', height: '100px', marginRight: '16px', borderRadius: '8px' }} />
        
        <Box>
          <IconButton color="primary" aria-label="play">
            <PlayCircleOutlineOutlinedIcon style={{ fontSize: 40 }} /> {/* Adjust the fontSize as needed */}
          </IconButton>
          <Typography variant="h6" style={{ marginBottom: '8px' }}>
            {title}
          </Typography>

          <Typography variant="body2" color="textSecondary">
            Duration: {duration} | Date: {createdAt}
          </Typography>
        </Box>
      </Paper>
    </>
  );
}

export default AudioItem;
