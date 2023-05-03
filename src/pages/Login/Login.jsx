import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Login.css'

import flyingjat from '../../assets/flyingjat.png'
import { Footer } from '../../components/Footer/Footer'

import MediaFooter from '../../components/Footer/MediaFooter'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import { useEffect } from "react";
import {  useNavigate } from 'react-router-dom';
import { login } from "../../Api/AuthRequest";
import {LoginSocialFacebook} from "reactjs-social-login"
import {FacebookLoginButton} from "react-social-login-buttons"

//import { useGoogleOneTapLogin } from "react-google-one-tap-login";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {

  const userInfo = localStorage.getItem("userInfo");
  const [user, setData] = useState({
  
    email: "",

    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);

  const handleChange = (e) => {
    setData({ ...user, [e.target.name]: e.target.value });
  };

  //form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.email === "") {
      setError2(true);
    } else {
      try {
        const { data } = await login(user);
        console.log(data);
        localStorage.setItem("userInfo", data);
        console.log(data.user._id);
        localStorage.setItem("userId", data.user._id);
        resetForm();
        navigate("/");
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
  };

  useEffect(() => {
    if (userInfo) {
    navigate("/");
    }
  }, [useNavigate]);

  const resetForm = () => {
    setConfirmPass(true);
    setData({ email: "",  password: "" });
  };
  const [confirmPass, setConfirmPass] = useState(true);


  return (
    <>
    <div>  
      <MediaNavbar />
      <Navbar />
      <div className='flyingjaat'><img src={flyingjat} alt="" /></div>
      <div className='loginheader'><h4>Log In</h4></div>
  
      <div className='container-fluid'>
  <form action="" onSubmit={handleSubmit}>
      <div align="center" className="container">
      <div className='dangle' >
    <div>
        <div style={{float:'left',margin:'10px'}}> <b>Email</b> </div>
        <div ><input  
                                      placeholder="Enter Your Email"
                                      style={{backgroundColor:'white'}}
                                      name="email"
                                      className='inputarea' 
                                      type="Email"
               value={user.email}
               onChange={handleChange}
         /></div>
             {error2 && (
              <span style={{ color: "red" }}>Email is required</span>
            )}
      </div>
      <div>
        <div   style={{float:'left',margin:'10px'}}> <b>Password</b> </div>
        <div><input  className='inputarea'  type="password"
           placeholder="Enter Your Password"
           style={{backgroundColor:'white'}}
           name="password"
          
           
value={user.password}
onChange={handleChange}
        
        
        /></div>
          {error && (
              <span style={{ color: "red" }}>Password is required</span>
            )}
      </div>
    </div>
    
      
        
        <div><button  className='Accountbtn'>Login</button> </div>
  
      
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
      </div>
     
   
     
      
      
      

    </div>

   

    <Footer />
   <MediaFooter />
   
    </>
  )
}

export default Login
