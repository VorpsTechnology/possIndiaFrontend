import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '@mui/material/Card';


import CardMedia from '@mui/material/CardMedia';

import './CatCatogries.css'
import catone from '../../assets/catone.png'
import cattwo from '../../assets/cattwo.png'

import catthree from '../../assets/catthree.png'
import icon from '../../assets/icon.png'
import catpc1 from '../../assets/catpc1.png'
import catpc2 from '../../assets/catpc2.png'
import catpc3 from '../../assets/catpc3.png'
import catpc4 from '../../assets/catpc4.png'

import { useNavigate }  from 'react-router-dom';
import catfour from '../../assets/catfour.png'
import catseven from '../../assets/catseven.png'


export default function CatCatogries() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

 
  const navigate = useNavigate();
  function handleProduct(data){
    
    console.log(data);
    navigate(`/ProductPage/${data.petCategoryy}/${data.typeCatagoryy}`);
  }



  return (
    <>
    <div align='center' className='container-fluid' id='catcat'  >
      
        <div  className='catslider'>
   <span >
    <h4 align="center">
    <div style={{fontSize:'15px',backgroundColor:'white',fontWeight:'bold',borderRadius:'12px',padding:'5px',outline:'transparent',width:'130px',borderColor:'white',marginRight:'20px'}} className="dropdownbutton">
        <button className="dropbtn20"><img style={{height:'20px'}} src={icon} alt="" /></button>
        <div className="dropdown-content20">
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
      </div>
   <span className='dogheader'>Cat
    <select  style={{fontSize:'15px',textAlign:'center',backgroundColor:'white',fontWeight:'800',borderColor:'white',borderRadius:'12px',padding:'5px',outline:'transparent',marginLeft:'20px',width:"130px"}} name="" id="">
      <option value="">Upto 1 years</option>
      <option value="">Upto 2 years</option>
      <option value="">Upto 3 years</option>
      <option value="">Upto 4 years</option>
      <option value="">Above 5 years</option>
      </select></span></h4>
   </span>
      </div> 
      
          <div>
    <div className='container' id='catcontainer'>
        <Carousel responsive={responsive}>
        <div>
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia
            sx={{ height: '200px' }}
            image={catpc1}
            onClick={()=>{
              handleProduct({
                "petCategoryy":"CAT",
                "typeCatagoryy":"FOOD"
              })
            }}
          />
        
          
        </Card>
        <div className='cardtitle'>Food</div>
        </div>
        <div>
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia
            sx={{ height: '200px' }}
            image={catpc2}
            onClick={()=>{
              handleProduct({
                "petCategoryy":"CAT",
                "typeCatagoryy":"ACCESSORIES"
              })
            }}
            
          />
          </Card>
          <div className='cardtitle'>Litter</div>
        </div>
        <div>
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia
            sx={{ height: '200px' }}
            image={catpc3}
            onClick={()=>{
              handleProduct({
                "petCategoryy":"CAT",
                "typeCatagoryy":"HEALTH & HYGIENE"
              })
            }}
          />
        </Card>
        <div className='cardtitle'>Carriers</div>
        </div>
        <div>
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia
            sx={{ height: '200px' }}
            image={catpc4}
            onClick={()=>{
              handleProduct({
                "petCategoryy":"CAT",
                "typeCatagoryy":"TOY"
              })
            }}
          /> 
        </Card>
        <div className='cardtitle'>Toys</div>
        </div>
        </Carousel>
    </div>
   </div>
        </div>

       
    
</>
  );
}