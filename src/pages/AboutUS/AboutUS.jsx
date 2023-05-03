import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import WhyUs from '../../components/WhyUS/WhyUs'
import { Footer } from '../../components/Footer/Footer'
import MediaFooter from '../../components/Footer/MediaFooter'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'

function AboutUS() {
  return (
    <div>
        <Navbar />
        <MediaNavbar/>

        <div align='center' className='OurServiceSlider' style={{padding:'0px 0px 30px 0px'}}><h4>We're always here for our furry friends.</h4></div>
       <div className='container'>
       <div align='center'><p>
        We are Poss India,  an undertaking by The Rolling Groomers, that makes all your pet needs possible. As pet parents ourselves, we are acutely aware of the need to buy the right products for them, and the benefits of regular, careful grooming. And we are here to offer you just that; affordable pet care for your quadruped children.
The Rolling Groomers started their journey in 2021, providing grooming services on the go from a van. It proved incredibly popular among pet owners, and gave us the confidence to expand into a physical store with Poss India. Here we offer the same level of quality and care, only with a wider range of products and services to choose from.

          </p></div>
          <div align='center'>
            <p>Our store is also a repository of unique and interesting toys for your pets. In this busy, urban world, it often become difficult to provide your pets with the mental and physical engagement they need. Toys specially designed for them often help us bridge the gap that exists in their daily dose of amusement. From chew toys, plushies and fetch balls to rope toys for tug of war games, Poss India has you covered. We also offer pet utility products like collars, leashes, scoopers and other essentials. Everything is sourced from reputable manufacturers who use non toxic and durable material to make their products, ensuring that no harm comes to your child.</p>
            <p>Our store is stuffed with premium food products from all the essential pet brands, including Farmina N&D, Purina, Drools, Origen, Royal Canine, Acana and others, so you can choose the items and brands that are the most agreeable for your pet’s digestion. In case of grooming and medical needs as well, Poss has your covered, with the availability of soaps, shampoos, medicines and even an on call veterinarian at scheduled times.</p> <br />
            <p>So, no matter what you need, you can visit our store and leave absolutely satisfied. And that extends to any grooming services as well!</p>
          </div>
          <div>
         
          <div align='center'><p>Poss India offers Regular and Medicated Baths, Hair Cutting Services, Body Massages, and Full Grooming sessions, tailored specifically to the size and breed of the pets in question. So whether your kid is a feisty Chihuahua, a Scooby Doo Great Dane, or a regal and feral cat, Poss India has you covered, with a grooming experience unlike any other.</p></div>
          <div align='center'><p>We also provide boarding services for cats and dogs, where you can leave your pets during office hours or trips. With our huge facility, your baby will have a wide open area to run around and play in, as our host of trained employees fret over them constantly. You will find them in the best of health upon return, ready to jump back into their daily lives immediately!</p></div>
          <div align='center'><p>And the best part? Our rates are affordable, providing value for money, services to the young and on the go pet parent. Today, the tertiary costs of keeping and maintaining a pet is exorbitant. It is not helped by the industrial complex built up by pet specialist services, which keep many animal lovers from adopting their own.
</p></div>
<div align='center'><p>We at Poss are here to level the playing field by offering quality care to pets of all shapes, sizes, and breeds, ensuring a happy, healthy life of love and play to them and their owners.</p></div>
<div align='center'><p>We hope to see you and yours soon, at Poss India; the best home a pet has ever had!</p></div>
          </div>
       </div>
        <br />
        <WhyUs />
        <br />
        <br />
        <Footer />
        <MediaFooter />
    </div>
  )
}

export default AboutUS