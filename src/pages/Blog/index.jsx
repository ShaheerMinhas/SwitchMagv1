import React, { useEffect, useState } from 'react';

import ReactMarkdown from 'react-markdown';

import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import Header from '../../components/home/header/Index';

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
    <div className='divider'></div>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <Typography variant='h5'>
            <h1 className='blog-title'>{blog.title}</h1></Typography>
           
          </header>
         
          <img src={blog.cover} alt='cover' />
          <div className="blog-text">
            <Typography>
          <ReactMarkdown className="wrapText">{blog.description}</ReactMarkdown>
          </Typography>  </div>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
