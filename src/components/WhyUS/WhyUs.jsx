import React  from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import './WhyUs.css'

function WhyUs() {


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
        <div className='videodiv' >
        <Carousel>
                <div>
                <video  height="400" controls autoplay >
                    <source src='Videos/possk.mp4' />
                    " Your browser does not support the video tag."
                </video> 
                </div>
                <div>
                <video  height="400" controls autoplay >
                    <source src='Videos/possv.mp4' />
                    " Your browser does not support the video tag."
                </video> 
                </div>
                <div>
                <video  height="400" controls autoplay >
                    <source src='Videos/possc.mp4' />
                    " Your browser does not support the video tag."
                </video> 
                </div>
                <div>
                <video  height="400" controls autoplay >
                    <source src='Videos/possn.mp4' />
                    " Your browser does not support the video tag."
                </video> 
                </div>

              
            </Carousel>
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
