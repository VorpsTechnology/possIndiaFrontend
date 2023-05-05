import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useNavigate }  from 'react-router-dom';
import './OurPricesMedia.css'
import {EffectCoverflow,Pagination,Navigation} from 'swiper'
import tick from '../../assets/tick.png'


function OurPriceMedia() {
    const navigate = useNavigate();
    function handlebook(event) {
      navigate('/PurchaseItem');
    }
  return (
    <>
 
    <div className='MediaPrice' >
      <div align='center' className='container-fluid' style={{paddingTop:'20px',paddingBottom:'40px'}} >

        {/* <div align='center' className='servicesheader'><h2>Subtext here--</h2> </div> */}
        <Swiper
         slidesPerView={1}
         effect={'coverflow'}
         grabCursor={true}
         // centeredSlides={true}
         loop={true}
         background={'transparent'}
         coverflowEffect={
           {
             rotate: 0,
           
             depth: 150,
             modifier: 1.5,
             slideShadows: false,
             centeredSlides: true,
             loop: true,
             paginationClickable: true,
             pagination: '.swiper-pagination',
           }
         }
         pagination={{ el: '.swiper-pagination', clickable: true }}
         navigation={{
           nextEl: 'swiper-button-next',
           prevEl: 'swiper-button-prev',
           
           clickable: true,
         }}
         modules={[EffectCoverflow, Pagination, Navigation]}
        >
         <SwiperSlide >
        <div>
        <div className='card lg-shadow' id='cardPrice'>
        <div align="center" className='headerbook' ><h2>Haircut & Styling</h2></div>
        {/* <div align="center" className='pricebook'> <h2>₹2499.00</h2> </div> */}
        <div className='listst' style={{textAlign:'left'}} >
        <ul  style={{listStyle:'none'}} >
        <li>
          <div style={{display:'flex'}}>
          <div> <img   className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5>Shaving</h5> </div>
          </div>
        </li>
        <li>
          <div style={{display:'flex'}}>
          <div><img className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5>Hairstyling</h5></div>
          </div>
        </li>
        <li>
          <div style={{display:'flex'}}>
          <div><img className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5>Hairstyling
          (Breed Specific)</h5> </div>
          </div>
        </li>
        <li>
          <div style={{display:'flex'}}>
          <div><img className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5> Comes with
           Face Trim</h5></div>
          </div>
        </li>
        <li>
          <div style={{display:'flex'}}>
          <div><img className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5> Comes with
           Fanny Trim</h5></div>
          </div>
        </li>
          {/* <li><h4><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}} >Shaving</span></h4></li>
            <li><h4><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}} > Hairstyling</span></h4></li>
            <li><h4><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}} > Hairstyling(Breed Specific)</span></h4></li>
            <li><h4><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}} > Comes with Face Trim</span></h4></li>
            <li><h4><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}} >Comes with Feet Trim</span></h4></li>
            <li><h4><img className='ticksize' src={tick} alt="" /><span style={{marginLeft:'20px'}} >Comes with Fanny Trim</span></h4></li> */}
            
            {/* <li ><h4><img src={tick} alt="" /><span  style={{marginLeft:'20px'}}>Teeth and Ear Cleaning</span></h4></li>
            <li ><h4 ><img src={tick} alt="" /><span  style={{marginLeft:'20px',textAlign:'center'}}>Paw Massage and Mouth Spray</span></h4></li>
            <li ><h4><img src={tick} alt="" /><span  style={{marginLeft:'20px'}}>Spritz of Perfume Dry</span></h4></li> */}
          </ul>
        </div>
        <div align="center" ><div> <button onClick={handlebook} className='booknowbtn'  >Book now</button> </div></div> 
      </div>   
        </div>
       </SwiperSlide>
       <SwiperSlide >
        <div>
        <div className='card' id='cardPrice' >
        <div className='headerbook'  align="center" ><h2 >PETS FULL GROOMING</h2></div>
        {/* <div align="center" className='pricebook' > <h2 >₹2499.00</h2> </div> */}
        <div className='listitems' style={{textAlign:'left'}} >
        <ul  style={{listStyle:'none'}} >
        <li>
          <div style={{display:'flex'}}>
          <div> <img   className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5>Include Bath</h5> </div>
          </div>
        </li>
        <li>
          <div style={{display:'flex'}}>
          <div> <img   className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5>Shampoo</h5> </div>
          </div>
        </li>
        <li>
          <div style={{display:'flex'}}>
          <div> <img   className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5>Blow Dry</h5> </div>
          </div>
        </li>
        <li>
          <div style={{display:'flex'}}>
          <div> <img   className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5>Brushing</h5> </div>
          </div>
        </li>
        <li>
          <div style={{display:'flex'}}>
          <div> <img   className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5> Nail Trim</h5> </div>
          </div>
        </li>
        <li>
          <div style={{display:'flex'}}>
          <div><img className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5>Scissoring Feet</h5></div>
          </div>
        </li>
        <li>
          <div style={{display:'flex'}}>
          <div><img className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5>Teeth Brushing</h5></div>
          </div>
        </li>
        <li>
          <div style={{display:'flex'}}>
          <div><img className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5>Paw Hair
           Trimming</h5></div>
          </div>
        </li>
        <li>
          <div style={{display:'flex'}}>
          <div><img className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5> Ear cleaning 
          or Flushing</h5> </div>
          </div>
        </li>
        <li>
          <div style={{display:'flex'}}>
          <div><img className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5> Hairstyling
          (Breed Specific)</h5></div>
          </div>
        </li>
        <li>
          <div style={{display:'flex'}}>
          <div><img className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5> Conditioner</h5></div>
          </div>
        </li>
          </ul>
        </div>
        <div align="center" ><div> <button onClick={handlebook} className='booknowbtn'  >Book now</button> </div></div> 
      </div>  
        </div>
       </SwiperSlide>
       <SwiperSlide >
        <div>
        <div className='card' id='cardPrice' >
        <div align="center" className='headerbook' ><h2 >MEDICATED BATH</h2></div>
        {/* <div align="center" className='pricebook' > <h2 >₹2499.00</h2> </div> */}
        <div  className='listitems' >
        <ul  style={{listStyle:'none'}} >
        <li>
          <div style={{display:'flex'}}>
          <div> <img   className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5>Shampoo</h5> </div>
          </div>
        </li>
        <li>
          <div style={{display:'flex'}}>
          <div> <img   className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5>Blow Dry</h5> </div>
          </div>
        </li>
        <li>
          <div style={{display:'flex'}}>
          <div> <img   className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5>Brushing</h5> </div>
          </div>
        </li>
        <li>
          <div style={{display:'flex'}}>
          <div> <img   className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5> Nail Trim</h5> </div>
          </div>
        </li>
        <li>
          <div style={{display:'flex'}}>
          <div><img className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5>Scissoring Feet</h5></div>
          </div>
        </li>
        
        <li>
          <div style={{display:'flex'}}>
          <div><img className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5>Paw 
           Trimming</h5></div>
          </div>
        </li>
        <li>
          <div style={{display:'flex'}}>
          <div><img className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5>Teeth Brushing</h5></div>
          </div>
        </li>
        <li>
          <div style={{display:'flex'}}>
          <div><img className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5>Scissoring/
          Trimming feet hair</h5> </div>
          </div>
        </li>
        <li>
          <div style={{display:'flex'}}>
          <div><img className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5>  Ear cleaning
           or Flushing</h5></div>
          </div>
        </li>
        <li>
          <div style={{display:'flex'}}>
          <div><img className='ticksize' src={tick} alt="" /></div>
          <div style={{marginLeft:'20px'}}> <h5> Plus Tick
           Treatment</h5></div>
          </div>
        </li>
          </ul>

        </div>
         <div align="center" ><div> <button onClick={handlebook} className='booknowbtn'  >Book now</button> </div></div> 
      </div>
        </div>
       </SwiperSlide>
     
          
     
        
          <div className="slider-controler" >
        
          <div className="swiper-pagination"></div>

          </div>
        </Swiper>
      </div>
    </div>
    </>
  )
}

export default OurPriceMedia
