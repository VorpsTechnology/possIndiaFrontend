import React , {useEffect, useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.css';

import { Tab } from "@headlessui/react";
import { Country, State, City }  from 'country-state-city';
import './PurchaseItem.css'
import swal from 'sweetalert';
import {Footer } from '../../components/Footer/Footer'
import { useNavigate, useParams} from "react-router-dom";

import back from '../../assets/back.png'
import MediaFooter from '../../components/Footer/MediaFooter';
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar';
import { createBooking } from '../../Api/BookingRequest';


function PurchaseItem() {

    const [tabSelected, setTabSelected] = useState(null);

    const buttonheader = {
      backgroundColor: "transparent",
      borderRadius: "15px",
     
  
      height: "80px",
    
    };
  
    const [states,setState]=useState([])
    const [stateCode,setStateCode]=useState("AN")
    const [cityCode,setCityCode]=useState("Bamboo Flat")
    const [city,setCity]=useState([])
    const userData =localStorage.getItem("userId")
    const userInfo =localStorage.getItem("userInfo")
   
   const params =useParams()
    const [address, setAddress] =React.useState({
      firstName:"",
  
      email: "",
  
      lastName: "",
      mobile:"",
     bookingType:params.id,
     state:"KERALA",
     city:"KONGAD",
     zip:"",
     Daddress:""
      
  
    });
  const navigate=useNavigate()
  
    const book=async(e)=>{
      e.preventDefault();
     
      if(userData && userInfo){
       const ata={
        
            firstName:address.firstName,
            lastName:address.lastName,
            mobile:address.mobile,
            email:address.email,
            bookingType:address.bookingType,
            state:address.state,
            city:address.city,
            Daddress:address.Daddress,
            zip:address.zip
  
            
        
       }
       console.log(ata);
       const tata= await createBooking(ata)
       if(tata){
      
        // swal("Thank you for reaching out, We will get back to you Shortly !")

        swal({
          title: "Hurry!",
          text: "Thank you for reaching out, We will get back to you Shortly !",
          type: "success",
          Background: "#F9C058"
        });
        navigate('/ContactUs')
        reset()
       }
      }else{
       swal("Login first")
       navigate('/signin')
      }
    
        
     }
     const handleChange = (e) => {
      setAddress({ ...address, [e.target.name]: e.target.value });
    };
    const reset=()=>{
      setAddress({
        firstName:"",
  
        email: "",
    
        lastName: "",
        mobile:"",
       bookingType:"PETS BATHING",
       state:"KERALA",
       city:"KONGAD",
       zip:"",
       Daddress:""

        
    
      })
    }
 
    const handelTabCLick = (e) => {
      setTabSelected(e);
    };
  
    useEffect(() => {
      window.scrollTo(0, 0)
      setState( State.getStatesOfCountry("IN"))
      setCity(City.getCitiesOfState("IN", stateCode))
    }, [stateCode]) 
    // const [imageUri, setImageUri] = useState(paytm);
  return (
    <div>
          <>
    <div>
      <MediaNavbar />
        <Navbar />
        <div className='container-fluid'>
            <div ><button className='back' onClick={() => navigate(-1)}><span  style={{marginRight:'10px'}}><img src={back} alt="" /></span>Back</button></div>
          </div>    
        <div >


        
    <div className='tabgo'  >
 

                <Tab.Group  >
                  <div className="conatiner-fluid" style={buttonheader}>
                  

                    <Tab.List className="tablist" >
                    
                      <Tab
                        className={`tabbtn ${tabSelected === 1 ? "selected-tab" : ""}`}
                        onClick={() => handelTabCLick(1)}
                      >
                      
                      
                      Home Visit
                      
                      </Tab>
                      <Tab

                        className={`tabbtn ${tabSelected === 2 ? "selected-tab" : ""}`}
                        onClick={() => handelTabCLick(2)}
                      >

                      
                      Store Visit
                      </Tab>
                     
                    
                    </Tab.List>
                    {/* <div className='dogflot'> <img src={dogpic} alt="" /></div> */}
                  </div>

                  <Tab.Panels >
                    <Tab.Panel>
                    
                    <div >
                    <div >
                    <div align='center'>
                    <form action="" onSubmit={book}>
          <div className='poi'>
          <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">First Name</label></div>
              <div><input className='nameinput2' required type="text" onChange={handleChange} name='firstName' value={address.firstName}/></div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Last</label></div>
              <div><input className='nameinput2' required onChange={handleChange} name='lastName' value={address.lastName} type="text" /></div>
        </div>
          </div>
       
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Mobile number</label></div>
              <div><input className='Mobiinput' required type="text" onChange={handleChange} name='mobile' value={address.mobile} /></div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Email</label></div>
              <div><input className='Mobiinput' required type="email"  onChange={handleChange} name='email' value={address.email}/></div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Address</label></div>
              <div><input className='Mobiinput'  required type="text"  onChange={handleChange} name='Daddress' value={address.Daddress}/></div>
        </div>
        <div>
          <div>
   
        <div>
    <div className='poi' >
      <div >
      <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">State</label></div>
              <div>
               <select className='nameinput2'  required onChange={(e)=>{
                  setStateCode(e.target.value)
                 
            
              }} name="" id="">
            
              {states &&
            states.length > 0 &&
            states.map((ele) => (  
              <option value={ele.isoCode} >{ele.name}</option>
             ))}
                
              </select>
              
              </div>
        </div> 
          </div>
          <div>
          <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">City</label></div>
              <div>
              <select className='nameinput2' required  name="" id="" onChange={(e)=>{
                  setCityCode(e.target.value)
                 
            
              }}>
             { city.length > 0 &&
            city.map((ele) => (  
              <option value={ele.name} >{ele.name}</option>
             ))}
              </select>
              </div>
        </div> 
          </div>
          <div>
       
          </div>
          
      </div>

      <div>
          <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Booking for </label></div>
              <div>
              <select className='Mobiinput' onChange={handleChange} name="bookingType" id="">
                <option value="PETS BATHING">{params.id}</option>
               
              </select>
              </div>
        </div> 
        </div>

      <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Zip</label></div>
              <div><input className='Mobiinput' required type="text" onChange={handleChange} name='zip' value={address.zip}/></div>
        </div> 
        </div>
          </div>
        </div>
      
        <div >
                <button className='paybtn2' id='paybtn2'> <span style={{marginRight:'15px'}}><i class="fa fa-phone" aria-hidden="true"></i></span>Request Callback</button>

                </div>
        
        </form>
      
                    </div>
                    </div>
                  

                    </div>
              

                  
           
              
               
                      </Tab.Panel>
                    <Tab.Panel>

                      <div   id='container2' className='container-fluid' >
                        <div className='flexcontent' id='cardh'>
                          <div align='center' className='flecxLeft' id='line'>
                        
                          </div>
                          <div className='flexcright' id='cardq' >
                            <div align='center'>
                            <div className='card' id='carddate'>
                              <div align='center' >
                                  <div><h5 align='center'>Time</h5></div>

                                  <select className='nameinput3' name="" id="">

                                    <option value="">9:00 Am - 9:30 AM </option>
                                    <option value="">9:30 Am - 10:00 AM </option>
                                    <option value="">10:00 Am - 10:30 AM </option>
                                    <option value="">10:30 Am - 11:00 AM </option>
                                    <option value="">11:00 Am - 11:30 AM </option>
                                    <option value="">11:30 Am - 12:00 PM </option>
                                    <option value="">12:00 Pm - 12:30 PM </option>
                                    <option value="">12:30 Pm - 1:00 PM </option>
                                    <option value="">1:00 Pm - 1:30 PM </option>
                                    <option value="">1:30 Pm - 2:00 PM </option>
                                    <option value="">2:30 Pm - 3:00 PM </option>
                                    <option value="">3:00 Pm - 3:30 PM </option>
                                    <option value="">3:30 Pm - 4:00 PM </option>
                                    <option value="">4:00 Pm - 4:30 PM </option>
                                    <option value="">4:30 Pm - 5:00 PM </option>
                                    <option value="">5:00 Pm - 5:30 PM </option>
                                    <option value="">5:30 Pm - 6:00 PM </option>
                                    <option value="">6:00 Pm - 6:30 PM </option>
                                    <option value="">6:30 Pm - 7:00 PM </option>
                                    <option value="">7:00 Pm - 7:30 PM </option>
                                    <option value="">7:30 Pm - 8:00 PM </option>
                                    <option value="">8:00 Pm - 8:30 PM </option>
                                    <option value="">8:30 Pm - 9:00 PM </option>
                                    <option value="">9:00 Pm - 9:30 PM </option>
                                    <option value="">9:30 Pm - 10:00 PM </option>

                                  </select>
                                  <div align='left' >
                              </div>
                              </div>

                            </div>
                            </div>
                            

                      
                          </div>
                        </div>
                        <div  >
                        <div align='center' className='forml'  >
                    <form action="">
          <div  className='poi'>
          <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">First Name</label></div>
              <div><input className='nameinput2' type="text" /></div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Last</label></div>
              <div><input className='nameinput2' type="text" /></div>
        </div>
          </div>
       
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Mobile number</label></div>
              <div><input className='Mobiinput' type="text" /></div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Email</label></div>
              <div><input className='Mobiinput' type="text" /></div>
        </div>
        <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Address</label></div>
              <div><input className='Mobiinput' type="text" /></div>
        </div>
        <div>
          <div>
   
        <div>
    <div className='poi' >
      <div >
      <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">State</label></div>
              <div>
              <select className='nameinput2' name="" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              
              </div>
        </div> 
          </div>
          <div>
          <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">City</label></div>
              <div>
              <select className='nameinput2' name="" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              </div>
        </div> 
          </div>
          <div>
       
          </div>
          
      </div>

      <div style={{justifyContent:'left',display:'table',marginTop:'15px'}} className='flexlom'>
              <div align='left'><label htmlFor="">Zip</label></div>
              <div><input className='Mobiinput' type="text" /></div>
        </div> 
        </div>
        
          </div>
        </div>
      
          
        
        </form>
        <div  >
                <button className='paybtn2' id='paybtn2'> <span style={{marginRight:'15px'}}><i class="fa fa-phone" aria-hidden="true"></i></span>Request Callback</button>

                </div>
       
                    </div>
                        </div>


                       
                      </div>
                
                   
                

               
             </Tab.Panel>
                  
                  </Tab.Panels>
                </Tab.Group>
           
    </div>
    </div>
      
      
    </div>

    <Footer />
    <MediaFooter />


</>
    </div>
  )
}

export default PurchaseItem
