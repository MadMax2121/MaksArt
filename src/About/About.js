import React from 'react'
import "./About.css"
import {Link } from 'react-router-dom';

function About() {
  return (
    <main className='about'>
      <div className='image_banner'>
        <img src="/about_images/first_half.png" alt="" />
        <img src="/about_images/second_half.png" alt="" />
        <p>Dear Art lovers! Our fine art gallery houses an exceptional
          collection of original oil paintings for sale, including beautiful
          antique, vintage, and an extensive selection of contemporary art.
          No matter the genre or artist, our fine art collection offer a
          variety of styles, eras, and genre.</p>
      </div>

      <div className='about_us'>
        <img src="/about_images/about_us.webp" alt="" />
        <div className="description">
          <div>About Us</div>
          <p>We are a family-owned art gallery located in Framingham, MA. Our showroom is open by appointment. Please feel free to contact us for more information.</p>
             <Link className = "link_to_collection" to = "/collection">Shop Art</Link>
        </div>
          
      </div>
    </main>
  )
}

export default About

