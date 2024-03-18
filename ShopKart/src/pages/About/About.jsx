import React from 'react'
import about from '..//../assets/About.jpg'
import './About.css'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>

      <section className="about-us">
        <div className="about">
          <img src={about} className="pic" />
          <div className="text">
            <h2>About Us</h2>
            <h5>We are one family # <span>ShopKart</span></h5>
            <p>At SHOPKART, we believe in the power of connecting people with the products they love. Founded on the principle of making shopping enjoyable, we strive to provide a seamless and delightful experience for every customer, every time.
              Our journey began with a simple idea: to create a destination where shopping feels personal, effortless, and enjoyable. Whether you're browsing for everyday essentials, searching for that perfect gift, or treating yourself to something special, we're here to make your experience memorable.</p>
            <div className="data">
              <Link to="/contact" className="hire">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About