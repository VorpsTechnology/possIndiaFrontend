import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'



const DashBoard = () => {
  const AdminInfo=localStorage.getItem("AdminInfo")

  const navigate=useNavigate()

  useEffect(()=>{
     if(AdminInfo){
      navigate("/DashBoard")
     }else{
      navigate("/Adminlogin")
     }
  },[])
  return (
<>
<Navbar />
    <div className='container-fluid'>
      
      <div className='row'>
        <div className='col-2'>
       
       <Sidebar />
        </div>
        <div className='col-10'>
         
        </div>

      </div>
    </div>
</>
  )
}

export default DashBoard