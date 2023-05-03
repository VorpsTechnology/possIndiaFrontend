import React from 'react'

import { useNavigate }  from 'react-router-dom';
import tick from '../../assets/tick.png'
import './OurPrices.css'

function OurPrices() {
  const navigate = useNavigate();

  function handlebook(eve) {

    navigate(`/PurchaseItem/${eve}`);
  }


   
  return (
<>
<div align='center' style={{margin:' 0px 0px 40px 0px'}} className='serviceheader'><h4>Our Services</h4></div>

<div className='container-fluid' id='layout'>
<div  align='center'  id='layout' >
 
  <div className='container-fluid' >
  <div align='center'  id='pricerow' >
      <div className="col"  >
      <div className='card lg-shadow' id='cardPriceDesktop'>
        <div align="center" className='headerbook' ><h2>Haircut & Styling</h2></div>
        {/* <div align="center" className='pricebook'> <h2>₹2499.00</h2> </div> */}
        <div className='listst' >
          <ul  style={{listStyle:'none'}} >
          <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}} >Shaving</span></h4></li>
            <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}} > Hairstyling</span></h4></li>
            <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}} > Hairstyling(Breed Specific)</span></h4></li>
            <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}} > Comes with Face Trim</span></h4></li>
            <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}} >Comes with Feet Trim</span></h4></li>
            <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}} >Comes with Fanny Trim</span></h4></li>
            
            {/* <li ><h4><img src={tick} alt="" /><span  style={{marginLeft:'20px'}}>Teeth and Ear Cleaning</span></h4></li>
            <li ><h4 ><img src={tick} alt="" /><span  style={{marginLeft:'20px',textAlign:'center'}}>Paw Massage and Mouth Spray</span></h4></li>
            <li ><h4><img src={tick} alt="" /><span  style={{marginLeft:'20px'}}>Spritz of Perfume Dry</span></h4></li> */}
          </ul>
        </div>
        <div align="center" ><div> <button  onClick={()=>{
          handlebook("Haircut&Styling")
        }} className='booknowbtn'  >Book now</button> </div></div> 
      </div>
    
      </div>
      <div className="col" id='col1' >
      <div className='card' id='cardPriceDesktop'>
        <div className='headerbook'  align="center" ><h2 >PETS FULL GROOMING</h2></div>
        {/* <div align="center" className='pricebook' > <h2 >₹2499.00</h2> </div> */}
        <div className='listitems' >
          <ul  style={{listStyle:'none'}}>
          <li ><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{paddingLeft:'10px'}}>Include Bath</span></h4></li>
            <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{paddingLeft:'10px'}}></span>Shampoo</h4></li>
            <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{paddingLeft:'10px'}}></span> Blow Dry</h4></li>
            <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{paddingLeft:'10px'}}></span>Brushing</h4></li>
            <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{paddingLeft:'10px'}}> Nail Trim</span></h4></li>          
            <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{paddingLeft:'10px'}}>Teeth Brushing</span></h4></li>          
            <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{paddingLeft:'10px'}}>Paw Hair Trimming</span></h4></li>
            <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{paddingLeft:'10px'}}>Scissoring Feet</span></h4></li>
            <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{paddingLeft:'10px'}}> Ear cleaning or Flushing</span></h4></li>
            <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{paddingLeft:'10px'}}> Hairstyling(Breed Specific)</span></h4></li>
            <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{paddingLeft:'10px'}}>Conditioner</span></h4></li>
            {/* <li><h4><img src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Spritz of Perfume Dry</h4></li> */}
          
          </ul>
        </div>
        <div align="center" ><div> <button  onClick={()=>{
          handlebook("Petfullgrooming")
        }}  className='booknowbtn' >Book now</button> </div></div> 
      </div>

      
       
        
      </div>
      <div className="col" id='col1' style={{backgroundColor:'rgba(230, 235, 229, 1)'}}>
      <div className='card' id='cardPriceDesktop'>
        <div align="center" className='headerbook' ><h2 >MEDICATED BATH</h2></div>
        {/* <div align="center" className='pricebook' > <h2 >₹2499.00</h2> </div> */}
        <div  className='listitems' >
          <ul style={{listStyle:'none'}}  >
          <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}}></span> Shampoo</h4></li>
          <li ><h4 style={{fontSize:'18px'}} ><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}}>Blow Dry</span></h4></li>
          <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}}></span> Nail Trim</h4></li>
          <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Teeth Brushing</h4></li>
          <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Paw Hair Trimming</h4></li>
          <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Teeth Brushing</h4></li>
          <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Scissoring/Trimming feet hair</h4></li>
                    <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}}></span> Ear cleaning or Flushing</h4></li>
          <li><h4 style={{fontSize:'18px'}}><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}}></span>Plus Tick Treatment</h4></li>

  
         
          </ul>
        </div>
                <div align="center" ><div> <button  onClick={()=>{
          handlebook("Medicatedbath")
        }}  className='booknowbtn'  >Book now</button> </div></div> 
      </div>
      
  
        
      </div>

    </div>
  </div>
 </div>
</div>

</>
   
   
  )
}

export default OurPrices