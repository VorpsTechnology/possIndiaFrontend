import React from 'react'

import container from '../../assets/container.png'
import dogfood from '../../assets/dogfood.png'
import newcat from '../../assets/newcat.png'
import dogimg from '../../assets/dogimg.png'
import icon from '../../assets/icon.png'
import { useNavigate } from 'react-router-dom';
import sec from '../../assets/sec.png'
import first from '../../assets/first.png'
import third from '../../assets/third.png'
import forth from '../../assets/forth.png'
import six from '../../assets/six.png'
import secmediafoot from '../../assets/secmediafoot.png'
import mediafoot from '../../assets/mediafoot.png'
import { EffectCoverflow, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './DogMediaCatogries.css'


function DogCatogriesMedia() {

  const navigate = useNavigate();
  function handleProduct(data){
    
    console.log(data);
    navigate(`/ProductPage/${data.petCategoryy}/${data.typeCatagoryy}`);
  }
  return (
    <div className='Mediacontainer'>
      <div className='flexl'>
        <div className='flexp'><img src={mediafoot} alt="" /></div>
        <div className='flexr'><img src={secmediafoot} alt="" /></div>
      </div>
      <div align='center' className='container'>
        <div className='dogslider' style={{marginTop:'20px',marginBottom:'40px'}} >
          <span >
            <h4 align="center">
              <div className="dropdownbutton">
                <button className="dropbtn20"><img style={{ height: '20px' }} src={icon} alt="" /></button>
                <div className="dropdown-content20" style={{  position:"absolute" , zIndex:"100" }}>
                <a  className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"FOOD"
                })
              }}>Food</a>
                <a className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"TREAT"
                })
              }} >Treats</a>
                <a className="dropdown-item"  onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"TOY"
                })
              }} >Toys </a>
               
                <a className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"APPARELS"
                })
              }}  >Apparels</a>
                <a className="dropdown-item"    onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"ACCESSORIES"
                })
              }}>Accessories</a>
               
                <a className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"MAT"
                })
              }}  >Bed And Mats</a>
            
                <a className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"HEALTH & HYGIENE"
                })
              }} >Health and <br /> Hygiene</a>
                </div>
              </div>
              <span className='dogheader'>Dog
                <select  name="" id="">
                <option value="" className="dropdown-item">Upto 1 years</option>
                <option value="">Upto 2 years</option>
       <option value="">Upto 3 years</option>
      <option value="">Upto 4 years</option>
      <option value="">Above 5 years</option>
                </select></span></h4>
          </span>
        </div>
        
        <Swiper
        effect={'coverflow'}
        // grabCursor={true}
        // centeredSlides={true}
        loop={true}
        // slidesPerView={'auto'}
        // background={'transparent'}
        coverflowEffect={
          {
            rotate: 0,
            stretch: 100,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
            centeredSlides: true,
            loop: true,
            paginationClickable: true,
            pagination: '.swiper-pagination',

          }
        }
        // pagination={{ el: '.swiper-pagination', clickable: true }}
        // navigation={{
        //   nextEl: 'swiper-button-next',
        //   prevEl: 'swiper-button-prev',
        //   backgroundColor: 'transparent',
        //   clickable: true,



        // }}
        modules={[EffectCoverflow, Pagination, Navigation]}

        >
          <SwiperSlide >
           <div className='inner'>
           <img  src={container} alt="" 
             onClick={()=>{
              handleProduct({
                "petCategoryy":"DOG",
                "typeCatagoryy":"ACCESSORIES"
              })
            }}
           />
            <div className='cardtitle'>Accessories</div>
           </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='inner'>
            <img  src={newcat} alt=""
                onClick={()=>{
                  handleProduct({
                    "petCategoryy":"DOG",
                    "typeCatagoryy":"TREAT"
                  })
                }}
            />
            <div className='cardtitle'>Treats</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='inner'>
            <img  src={dogimg} alt="" 
            onClick={()=>{
              handleProduct({
                "petCategoryy":"DOG",
                "typeCatagoryy":"TOY"
              })
            }}
            />
            <div className='cardtitle'>Toys</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
           <div className='inner'>
           <img  src={dogfood} alt=""

onClick={()=>{
  handleProduct({
    "petCategoryy":"DOG",
    "typeCatagoryy":"FOOD"
  })
}}
       />
            <div className='cardtitle'>Food</div>
           </div>
          </SwiperSlide>
          <div className="slider-controler" >

            <div className="swiper-pagination">
              
            </div>

          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default DogCatogriesMedia