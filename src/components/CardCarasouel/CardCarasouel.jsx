import React, { useEffect, useState } from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getBlogs } from '../../Api/blogRequest';
import {EffectCoverflow,Pagination,Navigation} from 'swiper'
import video from '../../assets/video.png'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './CardCarasouel.css'
import Typography from '@mui/material/Typography';
import './CardCarasouel.css'
import { useNavigate } from 'react-router-dom';

function CardCarasouel() {
  const [blogs,setBlogs]=useState([])

  useEffect(() => {
    async function fetchData() {
    
      const {data}=await getBlogs()
     setBlogs(data)
      console.log(data);
      // ...
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state
  

    function handleblogpage(event){
      navigate('/Blogpage');
    }
  const navigate = useNavigate();
  function handleblogpage(data){
    navigate(`/Blogpage/${data}`);
  }

  return (
    <div style={{backgroundColor:'white'}}>
      <div align='center' className='container-fluid' style={{paddingTop:'20px',paddingBottom:'40px'}} >
      <div  className='servicesheader'><h4>Read pets daily updates</h4> </div>
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
         pagination={{ el: '.swiper-pagination', clickable: true }}
         navigation={{
           nextEl: 'swiper-button-next',
           prevEl: 'swiper-button-prev',
           backgroundColor: 'transparent',
           clickable: true,
         }}
         modules={[EffectCoverflow, Pagination, Navigation]}
       
        >
       {blogs &&  blogs.map((ele)=>(
         
         <SwiperSlide sx={{}}>
          
         <div>
         <Card class='Slidercard'  align="center" sx={{ borderRadius:'20.1355px' }}>
              <CardMedia
                sx={{ height: 250,borderRadius:'20.1355px;' , }}
                image={ele.image}

              />
                <CardContent className='Cardcontent' >
                <Typography  align="center" gutterBottom variant="h5" component="div"  style={{color:'rgba(56, 43, 40, 1)',fontWeight:'bold',fontSize:'25px'}}>
                {ele.title}
                </Typography>
                <Typography variant="body2" className='cardcolor' sx={{fontSize:'14px'}} >
          {ele.desc}
                </Typography>
                <div align="center" className='Learnmore' style={{paddingTop:'20px'}}><button onClick={()=>{
                  handleblogpage(ele._id)
                }} >Read more</button></div>
              </CardContent>
              
            </Card>
         </div>
       </SwiperSlide>
       ))}
          
     
        
          <div className="slider-controler" >
        
          <div className="swiper-pagination"></div>

          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default CardCarasouel
