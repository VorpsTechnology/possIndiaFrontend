import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AccountSidebar from '../Account/AccountSidebar'
import './AddressBook.css'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import MediaFooter from '../../components/Footer/MediaFooter'
import { useNavigate } from 'react-router-dom'

const AddressBook = () => {
    const navigate = useNavigate();

    function handleClick(event) {
  
      navigate('/AddNewAdress');
    }
  return (

    <>
        <div className='container-fluid' >
        <MediaNavbar />
        <Navbar />
        <div className='mediaview'>
            
        <div className='row' id='rowid'>
            <div className='col-2'  id='colid'>
                <AccountSidebar />
            </div>
            <div className='col-10' id='colid2'>
            
                <div className='container' id='container' >
                <h4 style={{marginTop:'20px',marginBottom:'20px'}}>Address Book</h4>
                    
             
                    <div className='row' id='rowitem' style={{overflowX:'scroll'}}>
                        <div className='col'>Action</div>
                        <div className='col'>Full Name</div>
                        <div className='col'>Address</div>
                        <div className='col'>Region</div>
                        <div className='col'>Phone</div>
                        <div className='col'>Status</div>
              
            
                    </div>
                    <div className='Addressbutton'>
                        <button onClick={handleClick}> + Add New Address </button>
                        </div>
                </div>
            </div>
        </div>
        </div>

    </div>
    <MediaFooter />
    </>

  )
}

export default AddressBook