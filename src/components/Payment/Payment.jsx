import React from 'react'
import './Payment.css'
import product from '../../assets/product.png'
import tick from '../../assets/tick.png'
import flying from '../../assets/flying.png'
import back from '../../assets/back.png'
import crip from '../../assets/crip.png'
import umi from '../../assets/umi.png'


function Payment() {
  return (
<>
<div className='container-fluid'>
<div className='flying'><img style={{height:'300px'}} src={flying} alt="" /></div> 
    <div className='flexcontent4' style={{marginTop:'40px'}}>
    <div   className='formobile'>
    <div className='flexleft0'>
      <div id='lomnk' className='container'>
    <div   className='card' id='card50'>
                
                
                
                <div align='center' className='container'>
                <div id='cardbig'>
                      <div><img src={product} alt="" /></div>
                      <div>
                        <hr />
                      <div className='container'>
                <div style={{display:'flex',margin:'20px',justifyContent:'space-between'}}>
                      <div>price Subtotal :</div>
                      <div>Rates</div>
                  </div>
                  <div style={{display:'flex',margin:'20px',justifyContent:'space-between'}}>
                      <div>Shipping Charges xxx</div>
                      <div>Rates</div>
                  </div>
                  <div >
                      <div align='center'><button className='totalbutton'>Total Amount : ₹5.42</button></div>
                      
                  </div>
                </div>
                      </div>
                  </div>
                </div>
                <hr />
               
             
              </div>
    </div>
      </div>
    </div>
        <div align='center' className='flexleft0' >
     
            <div align='left' className='card' id='card10'>
                <h4  className='shiphead'>Ship To</h4>
                <h6>Address here</h6>
            </div>
            <div align='left' className='card' style={{marginTop:'20px'}} id='card10'>
                <h4 className='shiphead' >Method</h4>
                <h6>Shiiping Charge fixed 0.00</h6>
            </div>
            <div align='left' style={{height:'0px'}} className='umi'><img src={umi} alt="" /></div>
            <div align='right' style={{height:'0px'}} className='cripimg'><img src={crip} alt="" /></div>
            <div className='paymentgatway2'>
                <div className='headingpay'><h4>Payment Methods</h4></div>
               
                <div align='center'   id='paycontainer2'>
                <div  className='card' id='paycards2'><h3> <img src={tick} alt="" /> <span style={{marginLeft:'20px'}}>UPI</span> </h3></div>
            <div className='card'  id='paycards2' style={{marginTop:'20px'}}><h3><img src={tick} alt="" /><span style={{marginLeft:'20px'}}>COD</span></h3></div>
            <div className='card' id='paycards2' style={{marginTop:'20px'}}><h3> <img src={tick} alt="" /><span style={{marginLeft:'20px'}}>Net Banking</span></h3></div>
                </div>

            </div>
                
    <div className='cssbtn'  ><button className='paybtn2'> <span style={{marginRight:'10px'}}><img src={back} alt="" /></span> Pay with Upi</button></div>
        </div>
        <div   className='flexright0'>
            <div  className='card' id='card20'>
                
              <div className='container'>
              <div style={{display:'flex',margin:'20px',justifyContent:'space-between'}}>
                    <div>product Subtotal :</div>
                    <div>Rates</div>
                </div>
                <div style={{display:'flex',margin:'20px',justifyContent:'space-between'}}>
                    <div>Shipping Charge :Fixed</div>
                    <div>Rates</div>
                </div>
                <div >
                    <div align='center'><button className='totalbutton'>Total : ₹5.42</button></div>
                    
                </div>
              </div>
              <hr />
              <div className='container'>
              <div id='cardbig'>
                    <div><img src={product} alt="" /></div>
                    <div>
                    <div   className='card' id='cardotherid' style={{width:'150px',height:'100px',marginTop:'30px'}}>
                        <div align="center"><h6 style={{padding:'10px',fontSize:'15px',fontWeight:'700'}}>Product Name</h6></div>
                        <div align="center"  style={{display:"flex",justifyContent:'space-between'}}>
                            <div style={{padding:'0px 20px 20px 20px'}}>Price</div>
                            <div style={{padding:'0px 20px 20px 0px'}}>₹54.12</div>
                        </div>
                    </div>
                    </div>
                </div>
              </div>
              <hr />
              <div className='container'>
                <div className='bootonbutton'>
                  <div className='procard'><button>₹54.3</button></div>
                </div>
              </div>
           
            </div>
        </div>
        
    </div>

  </div>


  
</>
  )
}

export default Payment