import React ,{useState} from 'react'

import './MediaNavbar.css'

import posslogogif from '../../assets/posslogogif.gif'
import { Link, useNavigate } from 'react-router-dom'
import shopingcart from '../../assets/shopingcart.png'


function MediaNavbar() {
const  [isMobile,setIsMobile] = useState(false);
const navigate = useNavigate();
const userInfo=localStorage.getItem("userInfo")
const handleSearch=()=>{
 
    navigate("/ProductPage/DOG/FOOD")

}
function handleProduct(data){
 
 console.log(data);
 navigate(`/ProductPage/${data.petCategoryy}/${data.typeCatagoryy}`);
}
 function handleLogin(event){
   navigate('/Login');
 }
  return (
    
    <div className='MediaNavbar'>
  <div style={{display:'flex',justifyContent:'space-between',width:'100%',padding:'10px 5px 5px 5px'}}>
    <div style={{justifyContent:'left'}}>

    <>
   <img onClick={()=>{
    navigate("/")
   }} src={posslogogif } style={{borderRadius:"30px"}} className='logo' alt="" />
    </>
    </div>
    <div align='center' style={{justifyContent:'center'}}>
    <form  className='search-container'  >
     
      
     <div> <input 
             onClick={()=>{handleSearch()}}
            
            type="text"  style={{width:'80%'}} placeholder="Search.." name="search" />  
      <span> <button type="submit" style={{marginLeft:"5px",backgroundColor:'transparent',borderColor:'transparent',marginLeft:"-1rem"}}><i class="fa fa-search" aria-hidden="true"></i></button>
</span>
</div>
    </form>
    </div>
    <div style={{justifyContent:'right'}}>
    <button className='mobile-menu-icon' 
  onClick={()=>setIsMobile(!isMobile)}
  >
    {
      isMobile ? (
        <i className='fas fa-times'></i>
      ):(
        <i className='fas fa-bars'></i>
      )
    }
  </button>
  <li className={isMobile?'nav-links-mobile':'nav-links'}  onClick={()=> setIsMobile(false)}>
        
       <ul  style={{display:'flex',textDecoration:'none',padding:'10px'}}>
        <li style={{listStyle:'none'}}><Link to="/login" className='home'><img src={shopingcart} style={{width:"20px"}} alt="" />
          </Link>
        </li>
   
        <li style={{ listStyle:'none'}}><Link to="/login" className='home'><i className="fa fa-heart"></i>
          </Link>
          </li>
    
       </ul>
        <li style={{margin:'0'}}>
        <button
    className="dropdown-toggle"
    type="button"
    id="menu1"
    data-toggle="dropdown"
  >
         Dogs
    <span className="caret" />
  </button>
  <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
    <li role="presentation" id='listmo' >
      <a role="menuitem" tabIndex={-1}  onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"FOOD"
                })
              }} >
      Food
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} 
       onClick={()=>{
        handleProduct({
          "petCategoryy":"DOG",
          "typeCatagoryy":"TREAT"
        })
      }} >
      Treats
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} 
       onClick={()=>{
        handleProduct({
          "petCategoryy":"DOG",
          "typeCatagoryy":"TOY"
        })
      }} >
      Toys
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} 
      
      onClick={()=>{
        handleProduct({
          "petCategoryy":"DOG",
          "typeCatagoryy":"APPARELS"
        })
      }} >
      Apparels
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} 
       onClick={()=>{
        handleProduct({
          "petCategoryy":"DOG",
          "typeCatagoryy":"ACCESSORIES"
        })
      }} >
      Accessories
      </a>
    </li>
    
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} 
       onClick={()=>{
        handleProduct({
          "petCategoryy":"DOG",
          "typeCatagoryy":"MAT"
        })
      }} >
      Bed And Mats 
      </a>
    </li>
   
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} 
       onClick={()=>{
        handleProduct({
          "petCategoryy":"DOG",
          "typeCatagoryy":"HEALTH & HYGIENE"
        })
      }} >
      Health and Hygiene 
      </a>
    </li>


 
  </ul>
</li>
        
<li>
        <button
    className="dropdown-toggle"
    type="button"
    id="menu1"
    data-toggle="dropdown"
  >
         Cats
    <span className="caret" />
  </button>
  <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1}  onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"FOOD"
                })
              }} >
      Food
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"TREAT"
                })
              }}>
      Treats
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} 
      onClick={()=>{
        handleProduct({
          "petCategoryy":"CAT",
          "typeCatagoryy":"TOY"
        })
      }}>
      Toys
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"APPARELS"
                })
              }}>
      Apparels
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"ACCESSORIES"
                })
              }}>
      Accessories
      </a>
    </li>
   
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"MAT"
                })
              }}>
      Bed And Mats 
      </a>
    </li>
   
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"HEALTH & HYGIENE"
                })
              }}>
      Health and Hygiene 
      </a>
    </li>


 
  </ul>
</li>

<li>
        <button
    className="dropdown-toggle"
    type="button"
    id="menu1"
    data-toggle="dropdown"
    style={{margin:'0px 0px 0px 0px',textAlign:'center'}}

  >
         Other
         Animals
    <span className="caret" />
  </button>
  <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
    <li role="presentation" id='listmo' >
      <a role="menuitem" tabIndex={-1} onClick={()=>{
                handleProduct({
                  "petCategoryy":"RABBIT",
                  "typeCatagoryy":"FOOD"
                })
              }}>
      RABBIT      
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} onClick={()=>{
                handleProduct({
                  "petCategoryy":"HAMSTER",
                  "typeCatagoryy":"FOOD"
                })
              }}>
      HAMSTER
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1}onClick={()=>{
                handleProduct({
                  "petCategoryy":"GUINEA PIG",
                  "typeCatagoryy":"FOOD"
                })
              }}>
      GUINEA PIG
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} onClick={()=>{
                handleProduct({
                  "petCategoryy":"BIRD",
                  "typeCatagoryy":"FOOD"
                })
              }}>
      BIRD
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} onClick={()=>{
                handleProduct({
                  "petCategoryy":"TURTLE",
                  "typeCatagoryy":"FOOD"
                })
              }}>
      TURTLE
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} onClick={()=>{
                handleProduct({
                  "petCategoryy":"FISH",
                  "typeCatagoryy":"FOOD"
                })
              }}>
      FISH
      </a>
    </li>
   
   
   


 
  </ul>
</li>
     
        <li style={{ margin: '20px 10px'}}><Link to="/" className='home'>Contact
          </Link></li>
       
         
        <li style={{ margin: '20px 10px'}}>
        <Link to="/" className='home'>About </Link>
        </li>
       {userInfo ?<>
        <li style={{ margin: '20px 10px'}}><Link to="/Account" className='home'>My Account
          </Link></li>
          
       
        <li onClick={()=>{
              localStorage.removeItem("userInfo")
              localStorage.removeItem("userId")
              navigate("/")
            }} style={{ margin: '20px 10px'}}><Link to="/signin" className='home'>Logout
          </Link></li></> :
       <>
        <li style={{ margin: '20px 10px'}}><Link to="/signin" className='home'>SignUp
          </Link></li>
          <li style={{ margin: '20px 10px'}}><Link to="/login" className='home'>Login
          </Link></li>

         </>
       }
          
         
  </li>
    </div>
  </div>

 


  

   

    </div>
        
  )
}

export default MediaNavbar