import React from 'react'
import ssone from '../../assets/ssone.png'
import sstwo from '../../assets/sstwo.png'
import './MediaBrand.css'

function MediaBrand() {
  return (
    <div className='container-fluid' id='fgmi' >
                <div align="center" className='Conatctheader' style={{marginTop:'0px',marginBottom:'20px'}}><h4>Featured Brands</h4> </div> 
        <div align='center' className='container' id='BrandImg'>
        <div><img src={ssone} alt="" /></div>
        <div><img src={sstwo} alt="" /></div>
        </div>
       
    </div>
  )
}

export default MediaBrand