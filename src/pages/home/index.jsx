import React from 'react';
import Header from '../../components/home/header/Index';
import BlogList from '../../components/home/bloglist';
import { blogList } from '../../config/data';
import './styles.css'; // Import a CSS file for styling (create this file)

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className='divider'></div>
      <div className="blog-list-container">
        <BlogList blogs={blogList} />
      </div>
    </div>
  );
};

export default Home;
