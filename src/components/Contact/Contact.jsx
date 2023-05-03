import React from 'react'

import contactusslide from '../../assets/contactusslide.png'
import mediafoot from '../../assets/mediafoot.png'
import secmediafoot from '../../assets/secmediafoot.png'

import float from '../../assets/float.png'
import './Contact.css'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { createContact } from '../../Api/ContactRequest'


function Contact() {

  const userData =localStorage.getItem("userId")
  const userInfo =localStorage.getItem("userInfo")

  const [address, setAddress] =React.useState({
    firstName:"",

    email: "",

    lastName: "",
    mobile:"",
   message:""
    

  });
const navigate=useNavigate()

  const contact=async(e)=>{
    e.preventDefault();
   
    if(userData && userInfo){
     const ata={
      
          firstName:address.firstName,
          lastName:address.lastName,
          mobile:address.mobile,
          email:address.email,
          message:address.message

      
      
     }
     console.log(ata);
     const tata= await createContact(ata)
     if(tata){
    
      swal("Thank you for reaching out, We will get back to you Shortly !")
      navigate('/')
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
     message:""
      
  
    })
  }
  return (
    <>
  

   <div style={{height:'0px'}} className='flexl'>
      <div className='flexp'><img src={mediafoot} alt="" /></div>
      <div className='flexr'><img src={secmediafoot} alt="" /></div>
    </div>
   <div align="center" className='Conatctheader' style={{marginTop:'30px'}}><h4>Contact US</h4> </div>
  
   <div align="center" className='Conatctheader'><h2 style={{paddingBottom:'30px'}}>Any questions, get in touch with our team</h2></div>
  <div className='floatimg' ><img src={float} alt="" /></div>
  <div className='container-fluid' >
  <div className="container" id='content700' >
        <div className="contact__wrapper shadow-lg mt-n9"   >
          <div className="row no-gutters" id='thim' >
            <div className="col-lg-4  order-lg-2"  id='looloo'  >
              <h3 className="color--black mb-3">Contact US</h3>
              <h6 className="color--black mb-5">Fill the form our team will get back to you withing 24 hours.</h6>
              <ul className="contact-info__list list-style--none position-relative z-index-101">
                <li className="mb-4">
                
                  <span className="position-absolute"><i className="fas fa-envelope" /></span>possindia
                  21@gmail.com
                </li>
                <li className="mb-4 ">
                  <span className="position-absolute"><i className="fas fa-phone" /></span> +91 99996 95078
                </li>
                <li className="mb-4 ">
                  <span className="position-absolute"><i className="fas fa-map-marker-alt" /></span> 38A Jacaranda  
                  <br /> Marg DLF Phase 2,
                  <br /> Gurugram (Haryana) 122022
                  <div className="mt-3">
                    <a href="/https://www.google.com/maps" target="_blank" className="text-link link--right-icon" style={{color:'#F3CA6D'}}>Get directions <i className="link__icon fa fa-directions" /></a>
                  </div>
                </li>
              </ul>
              <figure className="figure position-absolute m-0 opacity-06 z-index-100"  style={{bottom: 0, right: '10px',  backgroundImage: {contactusslide}}}>
                
              </figure>
            </div>
            <div className="col-lg-7 contact-form__wrapper p-3 order-lg-1"  id='looloo'>
              <form action="#" onSubmit={contact} className="contact-form form-validate" noValidate="novalidate" >
                <div className="row" style={{backgroundColor:'white'}} >
                  <div className="col-sm-6 mb-3" style={{backgroundColor:'white'}}>
                    <div className="form-group" style={{backgroundColor:'white'}}>
                      <label className="required-field" htmlFor="firstName" style={{backgroundColor:'white',fontWeight:'800',fontSize:'15px'}}>First Name</label>
                      <input type="text" className="form-control" id="firstName" style={{backgroundColor:'white'}}  onChange={handleChange} name='firstName' value={address.firstName}placeholder="First Name" />
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3" style={{backgroundColor:'white'}}>
                    <div className="form-group" style={{backgroundColor:'white'}}>
                      <label htmlFor="lastName" style={{backgroundColor:'white',fontWeight:'800',fontSize:'15px'}}>Last Name</label>
                      <input type="text" className="form-control" id="lastName"  onChange={handleChange} name='lastName' value={address.lastName} placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3" style={{backgroundColor:'white'}}>
                    <div className="form-group" style={{backgroundColor:'white'}}>
                      <label className="required-field" htmlFor="email" style={{backgroundColor:'white',fontWeight:'800',fontSize:'15px'}}>Email</label>
                      <input type="text" className="form-control" id="email"  onChange={handleChange} name='email' value={address.email} placeholder="Enter Your Mail" />
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3" style={{backgroundColor:'white'}}>
                    <div className="form-group" style={{backgroundColor:'white'}}>
                      <label htmlFor="phone" style={{backgroundColor:'white',fontWeight:'800',fontSize:'15px'}}>Phone Number</label>
                      <input type="tel"  style={{backgroundColor:'white'}} className="form-control" id="phone"  onChange={handleChange} name='mobile' value={address.mobile} placeholder="Enter Your Number"   />
                    </div>
                  </div>
                  <div className="col-sm-12 mb-3" style={{backgroundColor:'white'}}>
                    <div className="form-group" style={{backgroundColor:'white'}}>
                      <label className="required-field" htmlFor="message" style={{backgroundColor:'white',fontWeight:'800',fontSize:'15px'}}>How can we help? </label>
                      <textarea style={{backgroundColor:'white'}} className="form-control" id="message"  onChange={handleChange} name='message' value={address.message} rows={4} placeholder="Your Query" defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-sm-12 mb-3" style={{backgroundColor:'white'}}>
                    <button type="submit" name="submit" className="Contactbutton">Submit</button>
                  </div>
                </div>
              </form>
            </div>
            {/* End Contact Form Wrapper */}
          </div>
        </div>
      </div>
  </div>
   

   
     
    </>
  )
}

export default Contact
