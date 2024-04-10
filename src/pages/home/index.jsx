import React, { useEffect, useState } from 'react';
import Header from '../../components/home/header/Index';
import BlogList from '../../components/home/bloglist';
import { blogList } from '../../config/data';
import './styles.css'; // Import a CSS file for styling (create this file)
import ContactUs from '../../components/ contact/Contactus';
import { collection, getDocs } from "firebase/firestore";
import Navbar from '../../components/navbar';
import { db } from '../../firebase';
import { QuestionAnswer } from '@mui/icons-material';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() =>{
    const getBlogs = async () => {
      const blogsCol = collection(db, "blogs");
      const blogsSnapshot = await getDocs(blogsCol);
      const blogsList = blogsSnapshot.docs.map((doc) => doc.data());
      console.log(blogsList);
      setBlogs(blogsList);
    };
    getBlogs();
  },[]);
  return (
    <div>
    
      <Header />
      <Navbar />
      <div className="blog-list-container">
        <BlogList blogs={blogs} />
      </div>
     
    <div className="contact-home"> <ContactUs /></div>

 </div>
  );
};

export default Home;