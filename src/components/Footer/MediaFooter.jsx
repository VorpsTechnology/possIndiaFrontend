import React from 'react'
import './MediaFooter.css'
import facebooklink from '../../assets/facebooklink.png'
import instalink from '../../assets/instalink.png'
import poss_two from '../../assets/poss_two.png'

function MediaFooter() {
  return (
    <div className='container-fluid' id='mediafoot'>
   <div align='center'>
 
  <div style={{margin:'0px 0px 0px 0px'}}><img style={{width:'70px',height:'70px'}} src={poss_two} alt="" /></div> 
  <div className='instalinks' style={{display:'flex',justifyContent:'center'}}>
            <div><button style={{backgroundColor:'transparent',borderColor:'transparent'}}><img src={facebooklink} alt="" /></button></div>
            <div><button style={{backgroundColor:'transparent',borderColor:'transparent'}}><img src={instalink} alt="" /></button></div>
      </div>
      <div className='row'>
  <p className="pt-2" >
                     <div style={{marginTop:'2px'}}><a href="/ContactUs" style={{textDecoration:'none',color:'black'}}> <h5 style={{fontWeight:'bold'}}>Contact Us</h5> </a></div> 
                    <div style={{marginTop:'10px'}}><a href="/AboutUs" style={{textDecoration:'none',color:'black'}}> <h5 style={{fontWeight:'bold'}}>About Us</h5> </a></div>  
                    
                     <div style={{marginTop:'10px'}}><a href="/PrivacyPolicy" style={{textDecoration:'none',color:'black',marginTop:'10px'}}><h5 style={{fontWeight:'bold'}}>Privacy Policy</h5></a></div> 
                     <div style={{marginTop:'10px'}}><a href="/ReturnPolicy" style={{textDecoration:'none',color:'black',marginTop:'10px'}}><h5 style={{fontWeight:'bold'}}>Returns Policy</h5></a></div>
                     <div style={{marginTop:'10px'}}> <a href="/ShippingPolicy" style={{textDecoration:'none',color:'black',marginTop:'10px'}} ><h5 style={{fontWeight:'bold'}}>Shipping Policy</h5></a> </div>
                      <div style={{marginTop:'10px'}}> <a href="/TermCondition" style={{textDecoration:'none',color:'black',marginTop:'10px'}}><h5 style={{fontWeight:'bold'}}>Terms and Condition</h5></a></div>


                      
                    </p>
                    <p className="pt-2" >
                    {/* <h5  href="/Contact" style={{fontWeight:'bold'}}>Contact Us</h5>
                      <h5  href="/AboutUs" style={{fontWeight:'bold'}}>About Us</h5> */}
                      
                     
                   
   </p>
  </div>
        <div style={{display:'inline'}}>
        <h4 className='foottext'>© 2023 Poss India Private Limited. All Rights Reserved.</h4>
    
        <h4 className='foot'>Developed By <span><a href="http://vorpstech.com/" target="_blank">Vorps Technologies</a></span> </h4>

        </div>
   </div>
      
    </div>
  )
}

export default MediaFooter
