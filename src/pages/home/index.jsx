import React from 'react'
import Header from '../../components/home/header/Index'
import BlogList from '../../components/home/bloglist'
import {blogList} from '../../config/data'
const Home = () => {
  return (
    <div>
      <Header />
      <BlogList blogs={blogList}/>

    </div>
        )
}

export default Home