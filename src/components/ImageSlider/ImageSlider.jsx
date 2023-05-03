import React from 'react'
import slide1 from '../../assets/slide1.jpg'
import slide2 from '../../assets/slide2.jpg'
import slidethree from '../../assets/slidethree.jpg'
import './ImageSlider.css'
import { useNavigate } from 'react-router-dom'

document.body.style = 'background: rgba(230, 235, 229, 1);'

const ImageSlider = () => {
  const navigate=useNavigate()
  function handleProduct(data){
  
    console.log(data);
    navigate(`/ProductPage/${data.petCategoryy}/${data.typeCatagoryy}`);
  }
  return (

  <div className='container-fluid' id='imageslider' >
     <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
        <ol className="carousel-indicators" style={{width:'0px'}}>
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
          <div className="carousel-inner" >
            <div className="carousel-item active">
               <a  onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"TOY"
                })
              }} >
               <img 
                
                 className="d-block" style={{width:'100%',borderRadius:'20px'}}   src={slide1} alt="First slide" />
               </a> 
                
          </div>
          <div className="carousel-item"  >
           <a href='#priceContainer' ><img className="d-block "  style={{width:'100%',borderRadius:'20px'}}  src={slide2} alt="Second slide" /></a>

         
          </div>
          <div className="carousel-item" >
            <img className="d-block"  style={{width:'100%',borderRadius:'20px'}}  src={slidethree} alt="Third slide" />
           
          </div>
        </div>
        <a style={{padding:'10px'}}  className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="false" />
          <span className="sr-only">Previous</span>
        </a>
        <a style={{padding:'10px'}} className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="false" />
          <span className="sr-only">Next</span>
        </a>
      </div>
  </div>
  )
}

export default ImageSlider
