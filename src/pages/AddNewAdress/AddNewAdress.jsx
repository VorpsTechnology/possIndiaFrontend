import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AccountSidebar from '../Account/AccountSidebar'
import './AddNewAdress.css'

import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import MediaFooter from '../../components/Footer/MediaFooter'

function AddNewAdress() {
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
            <h4 style={{marginTop:'20px',marginBottom:'20px'}}>Add new adress</h4>
            <p>We need an address where we could deliver products.</p>
                
              <div>
                <div className='flexk' style={{display:'inline'}}>
                    <div className='flek1'><h5 className='adfl'>STREET ADDRESS *</h5></div>
                    <div className='flek2'><input className='inputbox2' placeholder='House name and Street' type="text" /></div>
                </div>

                <div className='flexk' style={{display:'inline'}}>
                    <div ><h5 className='adfl'>Country</h5></div>
                    <div><input className='inputbox2' placeholder='country' type="text" /></div>
                </div>
                <div className='flexk' style={{display:'inline'}}>
                    <div ><h5 className='adfl'>STATE/PROVINCE *</h5></div>
                    <div><input className='inputbox2' placeholder='State/PROVINCE' type="text" /></div>
                </div>
                
                <div className='flexk10' style={{display:'inline'}}>
                    <div className='flek10'   ><h5 className='adfl'>Default Address</h5></div>
                    <div className='flek10' >Make Default Address <span><input placeholder='House name and Street' type="checkbox" /></span></div>
                </div>
              </div>
                <div className='Addressbutton'>
                    <button style={{width:'159px'}}> Save </button>
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

export default AddNewAdress
