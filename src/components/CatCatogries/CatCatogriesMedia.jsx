import React from 'react'
import catone from '../../assets/catone.png'
import cattwo from '../../assets/cattwo.png'
import './CatCatogriesMedia.css'
import {EffectCoverflow,Pagination,Navigation} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import catthree from '../../assets/catthree.png'
import icon from '../../assets/icon.png'
import catpc1 from '../../assets/catpc1.png'
import catpc2 from '../../assets/catpc2.png'
import catpc3 from '../../assets/catpc3.png'
import catpc4 from '../../assets/catpc4.png'
import { useNavigate } from 'react-router-dom';
import catfour from '../../assets/catfour.png'
import catseven from '../../assets/catseven.png'


function CatCatogriesMedia() {

  const navigate = useNavigate();
  function handleProduct(data){
    
    console.log(data);
    navigate(`/ProductPage/${data.petCategoryy}/${data.typeCatagoryy}`);
  }
  return (
    <div className='Mediacontainer'>
           <div align='center' className='container'>
           <div  className='catslider'  style={{marginTop:'10px',marginBottom:'20px'}}>
   <span >
    <h4 align="center">
    <div  className="dropdownbutton">
        <button className="dropbtn20"><img style={{height:'20px'}} src={icon} alt="" /></button>
        <div className="dropdown-content20" >
        <a className="dropdown-item"    onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"FOOD"
                })
              }} >Food </a>
                <a className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"TREAT"
                })
              }} >Treats</a>
                <a className="dropdown-item"    onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"TOY"
                })
              }} >Toys </a>
                
                <a className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"APPARELS"
                })
              }} >Apparels</a>
                <a className="dropdown-item"    onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"ACCESSORIES"
                })
              }} >Accessories</a>
               
                <a className="dropdown-item"    onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"MAT"
                })
              }} >Bed And Mats</a>
                
                <a className="dropdown-item"    onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"HEALTH & HYGIENE"
                })
              }} >Health and
              <br /> Hygiene</a>
        </div>
      </div>
   <span className='dogheader'>Cat
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
        // pagination={{el:'.swiper-pagination',clickable:true}}
        // navigation={{
        //   nextEl:'swiper-button-next',
        //   prevEl:'swiper-button-prev',
        //   backgroundColor:'transparent',
        //   clickable:true,


          
        // }}
       modules={[EffectCoverflow,Pagination,Navigation]}
       
        >

        
          <SwiperSlide >
          <div className='inner'>
          <img 
             onClick={()=>{
              handleProduct({
                "petCategoryy":"CAT",
                "typeCatagoryy":"FOOD"
              })
            }}
          src={catpc1} alt="" />
          <div className='cardtitle'>Food</div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='inner'>
            <img  onClick={()=>{
              handleProduct({
                "petCategoryy":"CAT",
                "typeCatagoryy":"ACCESSORIES"
              })
            }}
              src={catpc2} alt="" />
          <div className='cardtitle'>Litter</div>
            </div>
          
          </SwiperSlide>
          <SwiperSlide>
            <div className='inner'>
            <img    onClick={()=>{
              handleProduct({
                "petCategoryy":"CAT",
                "typeCatagoryy":"HEALTH & HYGIENE"
              })
            }}  src={catpc3} alt="" />
            <div className='cardtitle'>Carriers</div>
            </div>
           
          </SwiperSlide>
          <SwiperSlide>
            <div className='inner'>
            <img  onClick={()=>{
              handleProduct({
                "petCategoryy":"CAT",
                "typeCatagoryy":"TOY"
              })
            }}  src={catpc4} alt="" />
          <div className='cardtitle'>Toys</div>
            </div>
          
          </SwiperSlide>
          <div className="slider-controler" >
        
          <div className="swiper-pagination"></div>

          </div>
        </Swiper>
      </div> 
    </div>
  )
}

export default CatCatogriesMedia
