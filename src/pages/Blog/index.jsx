import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';
import { Typography, Grid } from '@mui/material';
import Header from '../../components/home/header/Index';
import ContactUs from '../../components/ contact/Contactus';
import AudioPlayer from '../../components/Audio/Audioplayer';
// ... (existing imports)

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="upperPortion">
        <div className='divider'></div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div>
              <Link className='blog-goBack' to='/'>
                <span> &#8592;</span> <span>Go Back</span>
              </Link>
              {blog ? (
                <div className='blog-wrap'>
                  <header>
                    <p className='blog-date'>Published {blog.createdAt}</p>
                    <Typography variant='h5'>
                      <h1 className='blog-title'>{blog.title}</h1>
                    </Typography>
                  </header>
                  {/* AudioPlayer container with centered styling */}
                  <div className='audio-player-container'>
                    <AudioPlayer />
                  </div>
                </div>
              ) : (
                <EmptyList />
              )}
            </div>
          </Grid>

          {/* Right part of the screen (Blog Picture) */}
          <Grid item xs={12} md={6}>
            {blog && <img src={blog.cover} alt='cover' style={{ width: '100%' }} />}
          </Grid>
        </Grid>
      </div>
      <div className="blog-text">
        <Typography>
          {blog && (
            <ReactMarkdown>{blog.description}</ReactMarkdown>
          )}
        </Typography>
      </div>
      <ContactUs />
    </>
  );
};

export default Blog;
