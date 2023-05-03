import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
 import swal from "sweetalert"
import MediaFooter from '../../components/Footer/MediaFooter'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import Sidebar from '../Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import { createBlog } from '../../Api/blogRequest'

function Diaries() {

    const userData =localStorage.getItem("userId")
    const userInfo =localStorage.getItem("userInfo")
  
    const [address, setAddress] =React.useState({
      image:"",
  
      desc: "",
  
      title: "",

      content:""
    
      
  
    });
  const navigate=useNavigate()
  
    const contact=async(e)=>{
      e.preventDefault();
     
      if(userData && userInfo){
       const ata={
        
            title:address.title,
            image:address.image,
            desc:address.desc,
            content:address.content
          
  
        
        
       }
       console.log(ata);
       const tata= await createBlog(ata)
       if(tata){
      
        swal("Created !")
        navigate('/Diaries')
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
        desc:"",
    
        image: "",
    
        title: "",
        content:""
      
        
    
      })
    }
  return (
   
        <>
        <div className='container-fluid'>
            <Navbar />
            <MediaNavbar />
          <div className='mediaview'>
          <div className='row'  id='rowid'>
                <div className='col-2' id='colid' >
                    <Sidebar />
                </div>
                <div className='col-10' id='colid2'>
                <div className='container' id='container'>
                <div><h4 className='passwordlabel'>Add Diaries</h4></div>
                <hr />
                <div>
                    <form action="" onSubmit={contact}>
                        <div>
                            <div className='formlabel'><label htmlFor="">Title *</label></div>
                            <div><input className='inputbox' onChange={handleChange} type="text" name='title' value={address.title} required /></div>
                        </div>
                        <div>
                            <div className='formlabel'><label htmlFor="">Image link</label></div>
                            <div><input   onChange={handleChange} type="text" name='image' value={address.image} required   />
                          
                            </div>
                            <div>
                            <div className='formlabel'><label>Short Description *</label></div>
                            <div><textarea className='inputbox' onChange={handleChange} type="text" name='desc' value={address.desc} required  cols="40" rows="10"></textarea></div>
                           
                            </div>
                            <div>
                            <div className='formlabel'><label>Content *</label></div>
                            <div><textarea className='inputbox'onChange={handleChange} type="text" name='content' value={address.content} required  cols="40" rows="10"></textarea></div>
                            
                           
                            </div>
                            
                        </div>
                        <div className='button'><button>Submit</button></div>
                    </form>
                </div>
            </div>
                </div>
            </div>
          </div>
        </div>
        <MediaFooter/>
        </>
  )
}

export default Diaries