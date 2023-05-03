import React from 'react'
import AccountSidebar from './AccountSidebar'
import Navbar from '../../components/Navbar/Navbar'
import './Account.css'
import MediaFooter from '../../components/Footer/MediaFooter'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'


const Account = () => {
  return (
    <>
    <div className='container-fluid'>
        <Navbar />
        <MediaNavbar />
      <div className='mediaview'>
      <div className='row'  id='rowid'>
            <div className='col-2' id='colid' >
                <AccountSidebar />
            </div>
            <div className='col-10' id='colid2'>
                <div className='container' id='container'>
                <h1 className='manageaccount'>Manage My Account</h1>
                <p className='para'>From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.
                Select a link below to view or edit information.</p>
                <div style={{padding:'10px'}}>
                    <div className='row' >
                        <div className='col-4'>
                            <div className='card' id='accountcard'>
                                <h4 className='headeraccount'>PERSONAL PROFILE</h4>
                            </div>
                        </div>
                        <div className='col-4'>
                        <div className='card'  id='accountcard'>
                            <h4 className='headeraccount'>ADDRESS BOOK</h4>
                        </div>
                        </div>
                        <div className='col-4'>
                        <div className='card' id='accountcard'>
                            <h4 className='headeraccount'>BILLING ADDRESS</h4>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <MediaFooter/>
    </>
    
  )
}

export default Account