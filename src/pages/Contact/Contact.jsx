import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

function Contact() {
  return (
  <>
    <Navbar />
    <div className='container-fluid' >
       
      <div className='row'>
        <div className='col-2'>
           <Sidebar />
        </div>
        <div className='col-10'>
           <div className='container' id='container'>
           <div className='row'>
                <div className='col-2' id='collabel'><label htmlFor="">Name</label></div>
                <div className='col-2' id='collabel' ><label htmlFor="">Email</label></div>
                <div className='col-2' id='collabel'><label htmlFor="">Phone Number</label></div>
                <div className='col-2' id='collabel'><label htmlFor="">Detail</label></div>
                <div className='col-2' id='collabel'> <label htmlFor="">Edit</label> </div>
                <div className='col-2' id='collabel'><label htmlFor="">Read</label></div>
            </div>
           </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Contact
