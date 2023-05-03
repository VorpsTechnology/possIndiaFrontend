import React from 'react'

import "react-multi-carousel/lib/styles.css"

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import './Review.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper'

import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';





const Review = () => {

  const value = 5

  return (
    <>
      <div className='Reviewheader'><h4>What Our Customer Has To Say About Us</h4> </div>
      
      <div align='center' className='container-fluid' id='fmki'>
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

          <SwiperSlide sx={{}}>
            <div className="card0">
              <div className='gridcontainer' style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px', }}>
                <div className='gridleft' style={{ float: 'left', paddingLeft: '40px', }}>
                  <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />
                </div>
                <div className='gridright' style={{ justifyContent: 'right', }}>
                  <div >
                    <Box
                      sx={{
                        width: 150,
                        display: 'flex',
                        alignItems: 'center',


                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        sx={{
                          fontSize: "1.5rem"
                        }}

                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="1.5rem" />}
                      />

                      <Box sx={{ ml: 2 }}></Box>
                    </Box>
                  </div>
                </div>
              </div>
              <CardContent >

                <Typography variant="body2" >
                  
                Had an amazing and beautiful experience with them.
                 The staff was super friendly and professional.
                  My fur baby Micku had fun and was really happy. 
                  Strongly recommended. Thank you POSS.
                </Typography>
              </CardContent>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="card0">
              <div className='gridcontainer' style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px', }}>
                <div className='gridleft' style={{ float: 'left', paddingLeft: '40px', }}>
                  <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />
                </div>
                <div className='gridright' style={{ justifyContent: 'right', }}>
                  <div >
                    <Box
                      sx={{
                        width: 150,
                        display: 'flex',
                        alignItems: 'center',


                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        sx={{
                          fontSize: "1.5rem"
                        }}

                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="1.5rem" />}
                      />

                      <Box sx={{ ml: 2 }}></Box>
                    </Box>
                  </div>
                </div>
              </div>
              <CardContent >

                <Typography variant="body2" >
                Best service for dogs
              And good ambience
              Nice behaviour .
              Excellent products and services.A must visit place ..loved it
                </Typography>
              </CardContent>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="card0">
              <div className='gridcontainer' style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px', }}>
                <div className='gridleft' style={{ float: 'left', paddingLeft: '40px', }}>
                  <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTZev62hzb2B5h6GQ6QMKzaulPXmbzb-fpA&usqp=CAU" />
                </div>
                <div className='gridright' style={{ justifyContent: 'right', }}>
                  <div >
                    <Box
                      sx={{
                        width: 150,
                        display: 'flex',
                        alignItems: 'center',


                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        sx={{
                          fontSize: "1.5rem"
                        }}

                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="1.5rem" />}
                      />

                      <Box sx={{ ml: 2 }}></Box>
                    </Box>
                  </div>
                </div>
              </div>
              <CardContent >

                <Typography variant="body2" >
                Quality and quantity of model of product are available.
                 The prices are so affordable and your small loved one gonna love them❤✨.
                  Thankyou POSS for giving us amazing
                  products.
                </Typography>
              </CardContent>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className="card0">
              <div className='gridcontainer' style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '30px', }}>
                <div className='gridleft' style={{ float: 'left', paddingLeft: '40px', }}>
                  <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj373yLNqjl0GBgqIwFxtVMYZSqmcBNg_EPg&usqp=CAU" />
                </div>
                <div className='gridright' style={{ justifyContent: 'right', }}>
                  <div >
                    <Box
                      sx={{
                        width: 150,
                        display: 'flex',
                        alignItems: 'center',


                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        sx={{
                          fontSize: "1.5rem"
                        }}

                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="1.5rem" />}
                      />

                      <Box sx={{ ml: 2 }}></Box>
                    </Box>
                  </div>

                </div>

              </div>
              <CardContent >

                <Typography variant="body2" >
                It was a good experience to visit POSS the other day and overwhelming to see 
                the hospitality and response by the staff.

                  Recommended to all Pet Lovers
                </Typography>
              </CardContent>
            </div>

          </SwiperSlide>
          <div className="slider-controler" >

            <div className="swiper-pagination"></div>

          </div>
        </Swiper>
      </div>

    </>

  )
}

export default Review