import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import AnalyticsHome from '../AnalyticsHome/AnalyticsHome'
import Navbar from '../../components/Navbar/Navbar'

function Anlyists() {
  return (
<>
<Navbar />
    <div className='container-fluid'>
       
      <div className='row'>
        <div className='col-2'>
            <Sidebar />
        </div>
        <div className='col-10'>
        <AnalyticsHome />
        </div>
      </div>
     
    </div>
    </>
  )
}

export default Anlyists
