import React from 'react'
import './Sidebar.css'
import { useNavigate } from 'react-router-dom'


function  Sidebar() {
  const navigate=useNavigate()
  return (
<>
    <div className="sidebar">
   
    <a onClick={()=>{
      navigate("/Anlyists")

    }}>   Analytics Home</a>
    <a  onClick={()=>{
      navigate("/AdminProducts")

    }}>All Products</a>
    {/* <a h onClick={()=>{
      navigate("/ParentCatogry")

    }}>All Parent Catogory's</a> */}
   
    {/* <a  onClick={()=>{
      navigate("/AllCategory")

    }}>All Catogory's</a> */}
    <a  onClick={()=>{
      navigate("/AllOrder")

    }}>All Orders</a>
  
     <a  onClick={()=>{
      navigate("/Returns")

    }}>Returns</a>
    <a  onClick={()=>{
      navigate("/Cancellation")

    }}>Cancellation</a>
   
    <a  onClick={()=>{
      navigate("/Diaries")

    }}>Diaries</a>
  </div>
  

</>
  )
}

export default Sidebar