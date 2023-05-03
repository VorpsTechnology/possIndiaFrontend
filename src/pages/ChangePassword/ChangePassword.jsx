import React from 'react'
import AccountSidebar from '../Account/AccountSidebar'
import Navbar from '../../components/Navbar/Navbar'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import MediaFooter from '../../components/Footer/MediaFooter'
import './ChangePassword.css'

const ChangePassword = () => {
  return (
    <>
        <div className='container-fluid'>
        <Navbar />
        <MediaNavbar />
        <div className='mediaview'>
        <div className='row'  id='rowid'>
        <div className='col-2'  id='colid'>
            <AccountSidebar />
        </div>
        <div className='col-10'  id='colid2'>
            <div className='container' id='container'>
                <div><h4 className='passwordlabel'>Change Password</h4></div>
                <hr />
                <div>
                    <form action="">
                        <div>
                            <div className='formlabel'><label htmlFor="">Old Password</label></div>
                            <div><input className='inputbox' type="text" required /></div>
                        </div>
                        <div>
                            <div className='formlabel'><label htmlFor="">New Password</label></div>
                            <div><input className='inputbox' type="password" required />
                            <div style={{padding:'10px'}}>
                                <li>Your password must contain at least 8 characters.</li>
                                <li>Your password can’t be a commonly used password.</li>
                                <li>Your password can’t be entirely numeric.</li>
                               
                            </div>
                            </div>
                            <div>
                            <div className='formlabel'><label>Conferm Password</label></div>
                            <div><input  className='inputbox' type="password" required /></div>
                            </div>
                            
                        </div>
                        <div className='button'><button>Request Change Password</button></div>
                    </form>
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

export default ChangePassword
