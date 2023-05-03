import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import MediaFooter from '../../components/Footer/MediaFooter'
import { Footer } from '../../components/Footer/Footer'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import { getBlog } from '../../Api/blogRequest';
import { useParams } from 'react-router-dom'

const Blogpage = () => {

  const [blogs,setBlogs]=useState([])
const params=useParams()
useEffect(() => {
  async function fetchData() {
  
    const {data}=await getBlog(params.id)
   setBlogs(data)
    console.log(data);
    // ...
  }
  fetchData();
}, []); // Or [] if effect doesn't need props or state

  return (
   <>
   <Navbar />
   <MediaNavbar />
  
   <div className='container'>
   <div align='center' style={{padding:'40px 20px 20px 20px'}}><h3>  <b>{blogs.title}</b> </h3></div>
    <div><img src="" alt="" /></div>
    <div style={{padding:'20px 20px 60px 20px'}}>
     {blogs.content}

    </div>

   </div>
   <MediaFooter />
   <Footer />
   </>
  )
}

export default Blogpage