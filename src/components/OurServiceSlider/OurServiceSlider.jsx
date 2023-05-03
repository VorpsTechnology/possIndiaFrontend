import React  from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import video from '../../assets/video.png'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './OurServiceSlider.css'

import Typography from '@mui/material/Typography';



const OurServiceSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <>

  <div id="OurServiceSliderr">
<section style={{backgroundColor:'white',paddingBottom:'40px'}}>
      <div className='container-fluid' style={{padding:'40px 40px 40px 40px'}}  >
        <div  className='servicesheader'><h4>Our Services</h4> </div>
        <div align='center' className='servicesheader'><h2>Subtext here--</h2> </div>
          <div align="center" style={{padding:'40px'}}>
              <Carousel    align="center"  responsive={responsive}>
              <div >

            <Card class='Slidercard'  align="center" sx={{ borderRadius:'20.1355px' }}>
              <CardMedia
                sx={{ height: 270,borderRadius:'20.1355px;' , }}
                image={video}

              />
              <CardContent className='Cardcontent' >
                <Typography  align="center" gutterBottom variant="h5" component="div"  style={{color:'rgba(56, 43, 40, 1)',fontWeight:'bold',fontSize:'25px'}}>
                Door to Door Service 
                </Typography>
                <Typography variant="body2" className='cardcolor' sx={{fontSize:'14px'}} >
                Working Day and Night and Have no Energy to Get your 
                Dog to the nearest Grooming Station? No Worries, The
                Rolling Groomers is here to Provide you with the 
                hassle-free Grooming Experience without you even 
                getting worried about the transportation.
                </Typography>
              </CardContent>
              
            </Card>
            </div>
            <div  >
            <Card class='Slidercard'  align="center" sx={{ maxWidth: 270,borderRadius:'20px',boxShadow: '0px 0px 21.32px rgba(0, 0, 0, 0.15)',height:'430px' }}>
              <CardMedia
                sx={{ height: 270 ,borderRadius:'20.1355px;' }}
                image={video}
              />
              <CardContent className='Cardcontent' >
                <Typography align="center" gutterBottom variant="h5" component="div" style={{color:'rgba(56, 43, 40, 1)',fontWeight:'bold',fontSize:'25px'}}>
                Pet Grooming
                </Typography>
                <Typography variant="body2" className='cardcolor' sx={{fontSize:'14px'}} >
                It's a Happy Day when our Furry friends can get Groomed!
                Grooming Keeps Your Pet Healthy and Active so that he 
                never misses a Ball you throw. Grooming can help remove 
                old hair and dead skin cells, as well as clean off the dirt 
                and excess oil and lingeringandlingering
                </Typography>
              </CardContent>
              
            </Card>
            </div>
            <div  >
            <Card class='Slidercard'  align="center" sx={{maxWidth:270, borderRadius:'20px',boxShadow: '0px 0px 21.32px rgba(0, 0, 0, 0.15)',height:'430px' }}>
              <CardMedia
                sx={{ height: 270 ,borderRadius:'20.1355px;' }}
                image={video}
              />
              <CardContent className='Cardcontent'>
                <Typography align="center" gutterBottom variant="h5" component="div" style={{color:'rgba(56, 43, 40, 1)',fontWeight:'bold',fontSize:'25px'}}>
                Air Conditioned Van
                </Typography>
                <Typography  variant="body2" className='cardcolor' sx={{fontSize:'14px'}}>
                It's a Happy Day when our Furry friends can get Groomed!
                Grooming Keeps Your Pet Healthy and Active so that he 
                never misses a Ball you throw. Grooming can help remove 
                old hair and dead skin cells, as well as clean off the dirt 
                and excess oil and lingeringandlingering
                </Typography>
              </CardContent>
              
            </Card>
            </div>
            <div  >   
              <Card  class='Slidercard'  align="center" sx={{maxWidth:270, borderRadius:'20px',boxShadow: '0px 0px 21.32px rgba(0, 0, 0, 0.15)',height:'430px' }}>
              <CardMedia
                sx={{ height: 270 ,}}
                image={video}
              />
              <CardContent className='Cardcontent'  >
                <Typography align="center" gutterBottom variant="h5" component="div" style={{color:'rgba(56, 43, 40, 1)',fontWeight:'bold',fontSize:'25px', backgroundColor:'white'}}>
                Air Conditioned Van
                </Typography>
                <Typography  variant="body2" className='cardcolor' sx={{fontSize:'14px'}}>
                It's a Happy Day when our Furry friends can get Groomed!
                Grooming Keeps Your Pet Healthy and Active so that he 
                never misses a Ball you throw. Grooming can help remove 
                old hair and dead skin cells, as well as clean off the dirt 
                and excess oil and lingeringandlingering
                </Typography>
              </CardContent>
              
            </Card>
            </div>
            </Carousel>
        </div>
      </div>
      </section>
     </div>
    
    </>

  )
}

export default OurServiceSlider