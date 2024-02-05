import React from 'react'
import Header from '../../components/home/header/Index'
import { Typography } from '@mui/material'
import './style.css'
import { AdminPictures } from '../../config/data'
import Navbar from '../../components/navbar'
const About = () => {
    return (
    <div>
      <Header/>
      <Navbar/>
      <div className='about'>
        <Typography variant='h2'>
            About
        </Typography>
        
      </div>
      <div className='aboutgrid'>
        {AdminPictures.map(admin=>{
            return <img src={admin} alt='Picture' className='pic' width={400} height={400}/>
        })}
      </div>
    </div>
  )
}

export default About