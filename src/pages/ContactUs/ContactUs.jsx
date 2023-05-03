import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Contact from '../../components/Contact/Contact'
import { Footer } from '../../components/Footer/Footer'
import MediaFooter from '../../components/Footer/MediaFooter'

function ContactUs() {
  return (
    <div>
        <Navbar />
        <Contact />
        <Footer />
        <MediaFooter />
    </div>
  )
}

export default ContactUs
