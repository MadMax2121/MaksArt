import React from 'react'
import "./FeaturedProducts.css"

function FeaturedProducts() {
  return (
    <main>
      <div className='banner'>
        <img src="/collection/sofa-collection-banner.jpg" alt="" />
        <div className='banner_text'>
            <h2>Unlimited Sofa Collection</h2>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            tenetur dolorem nisi quod qui neque facilis, voluptatem eligendi 
            veritatis nostrum ipsum et maiores aliquam illo distinctio numquam, 
            exercitationem ducimus recusandae.
            </p>
            <div>Starting From  <span style={{color:"rgb(220, 157, 73)"}}>$ 199</span></div>
            <button>View More</button>
        </div>

      </div>
    </main>
  )
}

export default FeaturedProducts
