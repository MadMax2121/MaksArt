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
          <p style = {{whiteSpace:"pre-line"}}>{"Up for sale is an original oil \npainting on canvas depicting a classic English \nhunting scene,/n red-coated riders are depicted in a picturesque country landscape, /ngalloping on majestic horses. \nThe hunters exude elegance and adventure as they \nfollow the pack of well-trained hunting dogs, keenly tracking the scent of the fox. Amidst the rolling hills and meadows, the scene captures t/nhe timeless tradition and thrill of fox hunting in rural England. The painting evokes a sense of camaraderie and the age-old pursuit of outdoor sport, showcasing the rich cultural heritage of the British countryside./n Signed in the lower-right corner probably Robbins/nProfessionally framed. The frame has some scuffs, the painting is in good condition. Please see the photos. Framed 30.5 x 26.5, painting 16 x 12"}</p>
             <Link className = "link_to_collection" to = "/collection">Shop Art</Link>
        </div>
          
      </div>
    </main>
  )
}

export default About

