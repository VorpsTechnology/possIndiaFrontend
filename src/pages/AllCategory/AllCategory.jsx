import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

const AllCategory = () => {
  return ( 
    <>
        <Navbar />
        <div className='container-fluid'>

<div className='row'>
    <div className='col-2'>
        <Sidebar />
    </div>
    <div className='col-10'>
        <div className='container' id='container'>
        <div className='row'>
            <div  className='col' id='collabel'><label htmlFor="">Image</label></div>
            <div className='col' id='collabel'><label htmlFor="">ID</label></div>
            <div className='col' id='collabel'><label htmlFor="">Category's Name</label></div>
            <div className='col' id='collabel'><label htmlFor="">Edit</label></div>
            <div className='col' id='collabel'><label htmlFor="">Delete</label></div>
        </div>
        </div>
    
    </div>
</div>
</div>
    </>

  )
}

export default AllCategory