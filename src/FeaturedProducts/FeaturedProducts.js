import React from 'react'
import "./FeaturedProducts.css"

function FeaturedProducts() {

  const reviews = [
    {
      img: "/features/f1.jpg",
      name: "Designed Sofa",
      price: "$160.00"
    },
    {
      img: "/features/f2.jpg",
      name: "Dining Table",
      price: "$200.00"
    },
    {
      img: "/features/f3.jpg",
      name: "Chair and Table",
      price: "$100.00"
    },
    {
      img: "/features/f4.jpg",
      name: "Modern Arm Chair",
      price: "$299.00"
    },
  ]
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
          <div>Starting From  <span style={{ color: "rgb(220, 157, 73)" }}>$ 199</span></div>
          <button>View More</button>
        </div>
      </div>

      <div className='featured_products'>
        <h2>Featured Products</h2>

        <div className='all_ratings'>
        {reviews.map((review) => (
          <div className='rating'>
            <img src={review.img} alt="" />
            <div className='star_review'>
              <img className="star" src="/star/star.svg" alt="" />
              <img className="star" src="/star/star.svg" alt="" />
              <img className="star" src="/star/star.svg" alt="" />
              <img className="star" src="/star/star.svg" alt="" />
              <img className="star" style={{ filter: "invert(78%) sepia(5%) saturate(19%) hue-rotate(319deg) brightness(86%) contrast(86%)" }} src="/star/star.svg" alt="" />
              <div>(45 Reviews)</div>
            </div>
            <div style = {{color:"rgb(97,97,97)", "font-weight":"bold", "font-size":"13px", "margin-top":"6px"}}>{review.name}</div>
            <div style = {{color:"rgb(97,97,97)", "font-size":"14px", "margin-top":"8px"}}>{review.price}</div>
          </div>
        )
        )}
        </div>

      </div>
    </main>
  )
}

export default FeaturedProducts
