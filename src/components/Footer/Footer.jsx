import React from 'react'
import facebooklink from '../../assets/facebooklink.png'
import instalink from '../../assets/instalink.png'

import poss_two from '../../assets/poss_two.png'
import './Footer.css'



export const Footer = () => {
  
  return (
 <div className='container-fluid' id='desktop'>
     <div style={{marginTop:'10px',backgrounColor:'#F4F7EE'}}>
        
        <footer className="bg-white text-center text-black" style={{width:'100%',backgroundColor:'#F4F7EE'}}>
          <div className="container-fluid p-4 pb-0"  >
            <section  style={{backgrounColor:'#F4F7EE'}} >
  
              <div className='flexcontent' style={{display:'flex'}}>
                <div className='flexleft' style={{justifyContent:'left'}}>
                  <div className='row'>
                    <div className='col-md-auto'>
                    <p className="pt-2" >
                     <div style={{marginTop:'2px'}}><a href="/ContactUs" style={{textDecoration:'none',color:'black'}}> <h5 style={{fontWeight:'bold'}}>Contact Us</h5> </a></div> 
                    <div style={{marginTop:'10px'}}><a href="/AboutUs" style={{textDecoration:'none',color:'black'}}> <h5 style={{fontWeight:'bold'}}>About Us</h5> </a></div>  
                    
                     <div style={{marginTop:'10px'}}><a href="/PrivacyPolicy" style={{textDecoration:'none',color:'black',marginTop:'10px'}}><h5 style={{fontWeight:'bold'}}>Privacy Policy</h5></a></div> 
                     <div style={{marginTop:'10px'}}><a href="/ReturnPolicy" style={{textDecoration:'none',color:'black',marginTop:'10px'}}><h5 style={{fontWeight:'bold'}}>Returns Policy</h5></a></div>
                     <div style={{marginTop:'10px'}}> <a href="/ShippingPolicy" style={{textDecoration:'none',color:'black',marginTop:'10px'}} ><h5 style={{fontWeight:'bold'}}>Shipping Policy</h5></a> </div>
                      <div style={{marginTop:'10px'}}> <a href="/TermCondition" style={{textDecoration:'none',color:'black',marginTop:'10px'}}><h5 style={{fontWeight:'bold'}}>Terms and Condition</h5></a></div>


                      
                    </p>
                    </div>
                    <div className='col-md-auto'>
                    <p className="pt-2" >

                      
                    
                      
                   
                      {/* <h5><a href="/DashBoard">Dashboard</a></h5> */}
                      {/* <h5><a onClick={()=>{
                        navigate("/Account")
                      }}>My Account</a></h5> */}
                   
                    </p>
                    </div>
                    </div> 
                </div>
                <div className='flexright' style={{justifyContent:'right'}}>
                <div className="form-outline form-white mb-4" >
                      
                      <div style={{marginTop:'20px',marginLeft:'200px'}} >
                       <div style={{margin:'0px 0px 20px 0px'}}><img style={{width:'70px',height:'70px'}} src={poss_two} alt="" /></div> 
                        <div><h4 style={{fontWeight:'bold',fontSize:'20px',paddingBottom:'20px',backgroundColor:"white"}}>Follow us</h4></div>
                    <a href='https://www.facebook.com/possbytherollinggroomers' target="_blank">    <img  src={facebooklink}  alt="" /></a> <span style={{margin:'10px'}} >
                      
                    <a href='https://www.instagram.com/possindia/' target="_blank"> 
                      <img src={instalink}  alt="" />
                      </a>
                      </span></div>
                    </div>
                </div>
              </div>
         
            </section>
          </div>
  
  
          
          <div >
          <div className='flexcontent' style={{display:'flex',justifyContent:'space-between'}} >
            <div style={{paddingLeft:'40px'}}  className="md-3" id='flexleft'>  <h4>© 2023 Poss India . All Rights Reserved.</h4></div>
            <div  style={{paddingRight:'40px'}}   className="md-3" id='flexright'><h4>Developed By <span><a href="http://vorpstech.com/" target="_blank">Vorps Technologies</a></span> </h4></div>
          </div>
            
          </div>
          
        </footer>
      </div>
 </div>
  )
}
