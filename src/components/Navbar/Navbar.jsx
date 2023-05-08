import React from 'react'
import user from '../../assets/user.png'
import shopingcart from '../../assets/shopingcart.png'
import logo from '../../assets/logo.png'
import posslogogif from "../../assets/posslogogif.gif"
import { useNavigate }  from 'react-router-dom';
import './Navbar.css'
import swal from 'sweetalert'
import { searchInput } from '../../Api/ProductRequest'



function Navbar() {
  const navigate = useNavigate();

  function handleClick(event) {

    navigate('/Signin');
  }

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
    <div className='desktopnavbar' style={{margin:'10px'}}>
    
      <nav id='navbar' className="navbar navbar-expand-lg navbar-light"  >
        <a    className="navbar-brand"  >
    <>
   <img onClick={()=>{
    navigate("/")
   }} src={posslogogif } style={{width:"70px",height:'70px',borderRadius:'40px'}} alt="" />
    </>

        </a>
   
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul id='liskmit'  className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a   className="nav-link dropdown-toggle" data-toggle="dropdown"  href='/' id="navbarDropdown" role="button"   aria-haspopup="true" aria-expanded="false">
                Dogs
              </a>
              <div className="dropdown-menu"  aria-labelledby="navbarDropdown">
                <a  className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"FOOD"
                })
              }}>Food</a>
                <a className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"TREAT"
                })
              }} >Treats</a>
                <a className="dropdown-item"  onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"TOY"
                })
              }} >Toys </a>
               
                <a className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"APPARELS"
                })
              }}  >Apparels</a>
                <a className="dropdown-item"    onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"ACCESSORIES"
                })
              }}>Accessories</a>
               
                <a className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"MAT"
                })
              }}  >Bed And Mats</a>
            
                <a className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"HEALTH & HYGIENE"
                })
              }} >Health and Hygiene</a>
              
                
              </div>
            </li>
            <li  className="nav-item dropdown">
              <a href='/' className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Cats
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item"    onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"FOOD"
                })
              }} >Food </a>
                <a className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"TREAT"
                })
              }} >Treats</a>
                <a className="dropdown-item"    onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"TOY"
                })
              }} >Toys </a>
                
                <a className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"APPARELS"
                })
              }} >Apparels</a>
                <a className="dropdown-item"    onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"ACCESSORIES"
                })
              }} >Accessories</a>
               
                <a className="dropdown-item"    onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"MAT"
                })
              }} >Bed And Mats</a>
                
                <a className="dropdown-item"    onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"HEALTH & HYGIENE"
                })
              }} >Health and Hygiene</a>
               
              
              </div>
            </li>
            <li  className="nav-item dropdown">
              <a   href='/' className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Other Animals
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item"     onClick={()=>{
                handleProduct({
                  "petCategoryy":"BIRD",
                  "typeCatagoryy":"FOOD"
                })
              }}>BIRD </a>
                <a className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"TURTLE",
                  "typeCatagoryy":"FOOD"
                })
              }} >TURTLE</a>
                <a className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"FISH",
                  "typeCatagoryy":"FOOD"
                })
              }} >FISH </a>
                
                <a className="dropdown-item" 
                  onClick={()=>{
                    handleProduct({
                      "petCategoryy":"GUINEA PIG",
                      "typeCatagoryy":"FOOD"
                    })
                  }}
                >GUINEA PIG</a>
                <a className="dropdown-item"   onClick={()=>{
                handleProduct({
                  "petCategoryy":"HAMSTER",
                  "typeCatagoryy":"FOOD"
                })
              }} >HAMSTER</a>
                <a className="dropdown-item" 
                  onClick={()=>{
                    handleProduct({
                      "petCategoryy":"RABBIT",
                      "typeCatagoryy":"FOOD"
                    })
                  }}
                >RABBIT </a>
               
               
              
              </div>
            </li>
            {/* <li   className="nav-item">
              <a  id="navlinka" className="nav-link active" href="/AboutUS">About US</a>
            </li> */}
            <li   className="nav-item">
              <a  id="navlinka" className="nav-link active" href="/#priceContainer"
              
            //   onClick = {(e)=>{
            //     e.preventDefault();
            //     window.scrollTo({
            //     top: document.querySelector("#OurServiceSlider").offsetTop,
            //     behavior: "smooth",
            //  });}}
              >Our Services</a>
            </li>
            {/* <li   className="nav-item">
              <a  id="navlinka" className="nav-link active" href="/ContactUS">Contact US</a>
            </li> */}
           
       
           
            
          </ul>
          <form id='serachbar' className="form-inline my-2 my-lg-0">
           <div > 
            <input 
          onClick={()=>{handleSearch()}}
          style={{width:'240px',padding:'20px',backgroundColor:'white',fontSize:'15px'}} className="form-control mr-sm-2" type="search" placeholder='Search Products Here' aria-label="Search" /><span>
</span>
</div>
          </form>
          <ul  className='liskmin'>
          <li   className="nav-item">
              <a  id="navlinka" className="nav-link active" > <img onClick={()=>{
                navigate("/storeCart")
              }} src={shopingcart} style={{width:"20px"}} alt="" /></a>
            </li>
           
            <li  className="nav-item dropdown">
              <a href='/'  className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src={user} alt="" />
              </a>
              <div className="dropdown-menu" style={{marginLeft:'-80px'}} aria-labelledby="navbarDropdown">
            {userInfo ? <>
              <a  className="dropdown-item" > <button style={{backgroundColor:'transparent',borderColor:'transparent',fontSize:'15px',fontWeight:'650'}} onClick={()=>{
             
              navigate("/Account")
            }}> MY ACCOUNT </button> </a>
            
               <a  className="dropdown-item" > <button style={{backgroundColor:'transparent',borderColor:'transparent',fontSize:'15px',fontWeight:'650'}} onClick={()=>{
              swal("Do You Want To Logout")
              
              localStorage.removeItem("userInfo")
              localStorage.removeItem("userId")
              navigate("/")
            }}> LOGOUT </button> </a></>
             : <>
            <a  className="dropdown-item" > <button style={{backgroundColor:'transparent',borderColor:'transparent',fontSize:'15px',fontWeight:'650'}} onClick={handleClick}> Sign Up </button> </a>
                <a  className="dropdown-item" > <button style={{backgroundColor:'transparent',borderColor:'transparent',fontSize:'15px',fontWeight:'650'}}  onClick={handleLogin} >Login</button> </a>

            </>}
              </div>
            </li>
           
          
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
