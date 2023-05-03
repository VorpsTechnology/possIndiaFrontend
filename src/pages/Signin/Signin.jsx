import {React,useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Signin.css'

import doganimation from '../../assets/doganimation.png'
import sign from '../../assets/sign.png'
import { Footer } from '../../components/Footer/Footer'

import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import MediaFooter from '../../components/Footer/MediaFooter'

import {  useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { signUp } from "../../Api/AuthRequest.js";
import { ToastContainer, toast } from "react-toastify";
import mediasign from '../../assets/mediasign.png'
import {LoginSocialFacebook} from "reactjs-social-login"
import {FacebookLoginButton} from "react-social-login-buttons"

//import { useGoogleOneTapLogin } from "react-google-one-tap-login";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

const Signin = () => {
    //user state
    const [user, setData] = useState({
    
      email: "",
     firstName:"",
     lastName:"",
     mobile:"",
      password: "",
      confirmpass: "",
    });
    const [confirmPass, setConfirmPass] = useState(true);

    //handle input change
  const handleChange = (e) => {
 
    setData({ ...user, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  console.log(user);

  //form sunmit to server
  const handleSubmit = async (e) => {

    e.preventDefault();
    if (user.firstName === "" || user.email === "" || user.mobile === "") {
      toast.error("Fields can't be empty");
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)
    ) {
      toast.error("Enter valid email id");
    } else if (user.password !== user.confirmpass) {
      toast.error("Password dosen't match");
    } else {
      try {
        const { data } = await signUp(user);
        console.log(data);
        localStorage.setItem("userInfo", data);
        console.log(data.user._id);
        localStorage.setItem("userId", data.user._id);
        resetForm();
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  //resetting form
  const resetForm = () => {
    setConfirmPass(true);
    setData({
     
      email: "",
     lastName:"",
     firstName:"",
     mobile:"",
      password: "",
      confirmpass: "",
    });
  };
  return (
    
        <>
        <Navbar />
        <MediaNavbar />
<div>
<div className='loginheader'><h4>  Create  Account</h4></div>
<form action=""  onSubmit={handleSubmit}>
      <div align="center" className="container">
    <div className='dangle' >
    <div>
        <div style={{float:'left',margin:'10px'}}> <b>First Name</b> </div>
        <div ><input  
                                               placeholder="Enter Your Name"
                                      
                                               name="firstName"
                                               className='inputarea' 
                                               type="text"
                                              
                                             
                                               onChange={handleChange}
                                              
                                               value={user.firstName}
                                              
         /></div>
      </div>
      <div>
        <div   style={{float:'left',margin:'10px'}}> <b>Last Name</b> </div>
        <div><input  className='inputarea'  type="text" 
          name="lastName"
          placeholder="Enter Your Last Name"
          onChange={handleChange}
         
          value={user.lastName}
          
        
        /></div>
      </div>
    </div>
    
        <div className='dangle'>
           <div>
           <div  style={{float:'left',margin:'10px'}}> <b> Email</b></div>
           <div><input  
               placeholder="Enter Your Email"
                                       
               name="email"
               className='inputarea' 
               type="email"
value={user.email}
onChange={handleChange}
            /></div>
           </div>
           <div>
           <div  style={{float:'left',margin:'10px'}}> <b>Phone number</b> </div>
           <div><input
              className='inputarea' placeholder='Enter your Phone number' 
              name="mobile"
            
              onChange={handleChange}
             
              value={user.mobile}
            
              
              /></div>
           </div>
       
        </div>
        <div className='dangle'>
           <div>
           <div  style={{float:'left',margin:'10px'}}> <b> Password</b></div>
           <div><input  
            name="password"
            placeholder="Enter Your Confirm Password"
            onChange={handleChange}
           
            value={user.password}
            className='inputarea' 
             /></div>
           </div>
           <div>
           <div  style={{float:'left',margin:'10px'}}> <b>Confirm Password</b> </div>
           <div><input  
           type="password "
           placeholder="Enter Your password"
          
           name="confirmpass"
           className='inputarea' 
           onChange={handleChange}
           value={user.confirmpass}
            /></div>
           </div>
       
        </div>
        <div><button className='createbtn'>Create Account</button> </div>
      
     
      <div>

      </div>
 
    
        <div className="flexcontainer3" style={{display:'flex',justifyContent:'center',padding:'40px'}}>
          <div className='flexleft'>

          <LoginSocialFacebook
                               appId='716781016838370'
                               onResolve={(response)=>{
                                console.log(response)
                                if(response){
                                navigate("/")
                                }
                               }}

                               onReject={(error)=>{
                                console.log(error);
                               }}
                               >


                               <FacebookLoginButton  style={{height:"36px"}}/>
                               </LoginSocialFacebook>
          </div>
          <div className='flexright'>

          <GoogleOAuthProvider clientId="820965083830-suli7t5b5bul27109gngq9i9ks8fsv9e.apps.googleusercontent.com">
                                  
                                  <GoogleLogin 
                                    onSuccess={credentialResponse => {
                                      console.log(credentialResponse);
                                      if(credentialResponse){
                                       navigate("/")
                                      }
                                    }}
                                    onError={() => {
                                      console.log('Login Failed');
                                    }}
                                  />
                                </GoogleOAuthProvider>
          </div>
        </div>
    
      </div>
      </form>
      <div align='right'  className='container' style={{float:'right',height:'100%'}} id='mediaanimation'>

        <img src={mediasign} alt="" />
        </div> 
  
      <ToastContainer />
      <div className='signimg'><img src={sign} alt="" /></div>

      <div className='doganimation'><img src={doganimation} alt="" /></div>
       
</div>


<Footer />
<MediaFooter />
  
    </>
   

  )
}

export default Signin
