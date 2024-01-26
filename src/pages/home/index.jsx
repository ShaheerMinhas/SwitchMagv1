import React from 'react';
import Header from '../../components/home/header/Index';
import BlogList from '../../components/home/bloglist';
import { blogList } from '../../config/data';
import './styles.css'; // Import a CSS file for styling (create this file)
import ContactUs from '../../components/ contact/Contactus';
import Navbar from '../../components/NavBar/Navbar';
const Home = () => {
  return (
    <div>
    
      <Header />
      <Navbar />
      <div className='divider'></div>
      <div className="blog-list-container">
        <BlogList blogs={blogList} />
      </div>
     
    <div className="contact-home"> <ContactUs /></div>

 </div>
  );
};

export default Home;