import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import SuperDeals from '../components/SuperDeals/SuperDeals'
import ImageSlider from '../components/ImageSlider/ImageSlider'
import DogCatogries from '../components/DogCatogries/DogCatogries'
import CatCatogries from '../components/CatCatogries/CatCatogries'

import WhyUS from '../components/WhyUS/WhyUs'
// import LearnWithPoss from '../components/LearnWithPoss/LearnWithPoss'
import Contact from '../components/Contact/Contact'
import Review from '../components/Review/Review'
import { Footer } from '../components/Footer/Footer'
import OurPrices from '../components/OurPrices/OurPrices';
import Brands from '../components/Brands/Brands';
import MediaFooter from '../components/Footer/MediaFooter';
import MediaNavbar from '../components/MediaNavbar/MediaNavbar';
import DogCatogriesMedia from '../components/DogCatogries/DogCatogriesMedia';
import CatCatogriesMedia from '../components/CatCatogries/CatCatogriesMedia';

import MediaDealCard from '../components/MediaDealCard/MediaDealCard';
// import CardCarasouel from '../components/CardCarasouel/CardCarasouel'
import OurPricesMedia from '../components/OurPrices/OurPricesMedia'



const Home = () => {
  return (
  <div >
  
    <MediaNavbar />
    <Navbar />
    <ImageSlider />
    <br />
    
    <SuperDeals />
   <MediaDealCard />
    <br />


    <DogCatogries />
      <DogCatogriesMedia />


    <br />
    <CatCatogries />
      <CatCatogriesMedia />



    <br />
    
    <br />
    <OurPrices />
    <OurPricesMedia />


    <br />
    <Review />
    <br />
    <WhyUS />
    
    {/* <CardCarasouel /> */}
 

  

    <Brands />
   

    <Contact />
    
    <MediaFooter />

    <Footer />
    </div>
    );
};

    export default Home;