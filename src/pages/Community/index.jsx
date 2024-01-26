import React from 'react';
import Header from '../../components/home/header/Index';
import Navbar from '../../components/NavBar/Navbar';
import WriteSomething from '../../components/Community/WriteSomething';
import { blogList } from '../../config/data';
import './styles.css'; // Import the styles for BlogList
import { Typography } from '@mui/material';

function Community() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="community-container">
        <WriteSomething />
        <div className="divider"></div>
        <div className="other-articles-blog-list-container">

        <h2>Other Articles</h2>
          {blogList.map((blog) => (
            <div key={blog.id} className="blog-item">

              {/* Render your blog item component */}
              <div className="blog-item-content">
              <Typography>
 {blog.title}
                <img className='blogItem-cover' src={blog.cover} alt='cover' />
                <p>{blog.content}</p>
              </Typography>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Community;
