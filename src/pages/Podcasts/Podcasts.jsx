import React ,{ useEffect, useState } from 'react'
import Header from '../../components/home/header/Index'
import './styles.css';
import Navbar from '../../components/NavBar/Navbar';
import { useParams } from 'react-router';
import { blogList } from '../../config/data';
import AudioList from '../../components/AudioList/AudioList';

function Podcasts() {
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
    
    <Navbar />

    <div className='divider'></div>
    <AudioList blogs={blogList} />
    </>
  )
}

export default Podcasts