import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import './index.css';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
const WriteSomethingForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [wordCount, setWordCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    // Calculate word count
    const words = value.split(/\s+/).filter((word) => word !== '');
    setWordCount(words.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form); // Example: Logging form data
  };

  return (
    <div className="contact-form-container">
        <div className="upperPortion">
        <ModeEditOutlineOutlinedIcon />
        <Typography variant="h5">
            Create A Post
        </Typography>
        </div>
        
      <form name="contact" method="POST" onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write Something..."
            className="feedback-input"
            required
          ></textarea>
        </div>
        <div className="word-count">
            <Typography>

            Word Count: {wordCount}
            </Typography>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WriteSomethingForm;
