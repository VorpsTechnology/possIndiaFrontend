import React from 'react'
import './Multistepper.css'

  
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import PageOne from '../InstantPurchase/PageOne';
import Payment from '../../components/Payment/Payment';
import {Footer} from '../../components/Footer/Footer'
import MediaFooter from '../../components/Footer/MediaFooter';
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar';


  
import PayThree from '../InstantPurchase/PageThree'
import Navbar from '../../components/Navbar/Navbar';
const steps = [
    "Select campaign settings",
    "Create an ad group",
    "Create an ad",
];
  

function Multistepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
        setActiveStep(0);
    };
  
    const content = 
    { 1:<PageOne/>, 2:<Payment/>, 3:<PayThree/>
}



  



  return (
<>
<MediaNavbar />
<Navbar />
    <div className="App">
    
    <div
        className="head"
        style={{
            width: "fit-content",
            margin: "auto",
           
        }}
    >
  
    </div>
   
    <br />
    {/* <Button className='backbtn'
                       
                      
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                    >
                        Back
                    </Button> */}
    <Box align='center'  sx={{ width: "100%" ,height:'auto'}}>
        <Stepper   style={{justifyContent:'center',width:'50%'}}  sx={{ padding:'20px 20px' }} activeStep={activeStep}>
            <Step >
                <StepLabel 
            
                 >Info</StepLabel>
            </Step>
            <Step>
                <StepLabel>Payment</StepLabel>
            </Step>
            <Step>
                <StepLabel>Overview</StepLabel>
            </Step>
        </Stepper>
        {activeStep === steps.length ? (
            <React.Fragment>
              
                  
                <Box sx={{ 
                    display: "flex", 
                    flexDirection: "row", 
                    pt: 2 ,
                  
                }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button onClick={handleReset}>
                        Reset
                    </Button>
                </Box>
            </React.Fragment>
        ) : (
            <React.Fragment>
                <Typography sx={{ mt: 1, mb: 1 }}>
                
               
                <Typography sx={{ mt: 1, mb: 1 }}>
                {content[activeStep+1]}
                </Typography>
                </Typography>
                
                  
                <Box sx={{ 
                    display: "flex", 
                    flexDirection: "row", 
                    pt: 2 
                }}>
                  
                    <div align='center'>
                    {/* <Button  className="onClickbtn" onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 
                            "Finish" : "Next"}
                    </Button>  */}
                    </div>
                    

                  
                </Box>
            </React.Fragment>
        )}
    </Box>
</div>
<Footer />


<MediaFooter />
</>
  )
}

export default Multistepper