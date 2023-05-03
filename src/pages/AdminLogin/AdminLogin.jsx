import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './AdminLogin.css'

import flyingjat from '../../assets/flyingjat.png'
import { Footer } from '../../components/Footer/Footer'

import MediaFooter from '../../components/Footer/MediaFooter'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import { useEffect } from "react";
import {  useNavigate } from 'react-router-dom';
import { Adminlogin } from '../../Api/AdminAuthRequest'



const AdminLogin = () => {

    const AdminInfo = localStorage.getItem("AdminInfo");
    
    useEffect(()=>{
     if(AdminInfo){
       navigate("/Dashboard")
     }else{
        navigate("/Adminlogin")
     }
    },[])
    const [user, setData] = useState({
  
        username: "",
    
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
    if (user.username === "") {
      setError2(true);
    } else {
      try {
        const { data } = await Adminlogin(user);
        console.log(data);
        localStorage.setItem("AdminInfo", data);
        console.log(data.admin._id);
        localStorage.setItem("AdminId", data.admin._id);
        resetFormm();
        navigate("/DashBoard");
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
  };

  const resetFormm = () => {
    setConfirmPass(true);
    setData({ username: "",  password: "" });
    

  };
  const [confirmPass, setConfirmPass] = useState(true);
  return (
    <>
    <div>  
      <MediaNavbar />
      <Navbar />
      <div className='flyingjaat'><img src={flyingjat} alt="" /></div>
      <div className='loginheader'><h4>ADMIN LOGIN</h4></div>
  
      <div className='container-fluid'>
  <form action="" onSubmit={handleSubmit}>
      <div align="center" className="container">
      <div className='dangle' >
    <div>
        <div style={{float:'left',margin:'10px'}}> <b>Email</b> </div>
        <div ><input  
                                      placeholder="Enter Your Email"
                                      style={{backgroundColor:'white'}}
                                      name="username"
                                      className='inputarea' 
                                      type="Email"
               value={user.username}
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

         
          </div>
          <div className='flexright'>
                        
                                
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

export default AdminLogin
