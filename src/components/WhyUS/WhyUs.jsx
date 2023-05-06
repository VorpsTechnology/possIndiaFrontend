import React  from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import './WhyUs.css'

function WhyUs() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
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
    <div >
      <div className='whyusblock'>
      
        <div className='whitediv'>
          <div style={{backgroundColor:'white'}}>
            <h3 className='whyus' style={{backgroundColor:'white'}}>Why Us ?</h3>
          </div>

          <div className='divone'>
            <p  style={{backgroundColor:'white',color:'black',fontWeight:'500',fontSize:'18px'}}>
            From grooming and pampering to helping you buy the best products for your pets, consider Poss as your one-stop destination for all-things-pets.
             <br /> <br /> We understand what a pet parent truly wants - to have their pets lead a life brimming with health and happiness - and are passionate about making that possible.

 <br /> <br /> As pet parents ourselves, we consider pets as family and are excited about connecting pet parents to the right pet care professionals so that your best buddies can get lifetime access to cuddles, walkies, scritches, playtime, and more!
            </p>
          </div>
       
       
        </div>
        <div className='videodiv' style={{backgroundColor:'white'}} >
        <Carousel responsive={responsive}>
            <div>
            <video  height="400" style={{width:'100%'}}  controls autoplay >
                    <source src='Videos/possk.mp4' />
                    " Your browser does not support the video tag."
                </video> 
            </div>
            <div>
            <video  height="400" style={{width:'100%'}} controls  >
                    <source src='Videos/possv.mp4' />
                    " Your browser does not support the video tag."
                </video> 
            </div>
            <div>
            <video  height="400" style={{width:'100%'}} controls  >
                    <source src='Videos/possc.mp4' />
                    " Your browser does not support the video tag."
                </video> 
            </div>
            <div>
            <video  height="400" style={{width:'100%'}} controls autoplay >
                    <source src='Videos/possn.mp4' />
                    " Your browser does not support the video tag."
                </video> 
            </div>
          </Carousel>;
        
        {/* <video  height="400" controls style={{width:'650px'}}>
              <source src='Videos/possk.mp4' />
              " Your browser does not support the video tag."
          </video> */}
        </div>
     </div>
     </div>

     </>

  )
}

export default WhyUs
