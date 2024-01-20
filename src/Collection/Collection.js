import React from 'react'
import "./Collection.css";
import { useNavigate, useSearchParams,} from 'react-router-dom';


function Collection({paintings}) {

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentPage = parseInt(searchParams.get('page')) || 1;

  const paintingsPerPage = 12;
  const startIndex = (currentPage - 1) * paintingsPerPage;
  const endIndex = startIndex + paintingsPerPage;

  const setPage = (page) => {
    setSearchParams({ page }); // This updates the URL

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  const handlePaintingClick = (painting) => {
    navigate('/product_information', { state: { painting: painting } });
  };

  return (
    <div className='collection'>
      {currentPage === 1 && (
        <>
          <h1>Our Collection</h1>
          <p>Welcome to our collection! Please do not hesitate to look at all of our products, you can click on any of them for more information, and you can add them to cart and purchase them. Or you can also leave a review if you like!</p>
        </>
      )}
      <div className="paintings">
        {paintings.slice(startIndex, endIndex).map((painting) => (
          <div style={{ textDecoration: "none" }} className="painting" key={painting.id} onClick={() => handlePaintingClick(painting)}>
            <div className='image_button_spacing'>
              <div>
                <div className='pic_wrapper'>
                  <img className="pic" src={painting.img_1} alt="" />
                </div>
                <div className='painting_title'>{painting.title}</div>
                <img className="star1" src="/star/star3.png" alt="" />
                <img className="star1" src="/star/star3.png" alt="" />
                <img className="star1" src="/star/star3.png" alt="" />
                <img className="star1" src="/star/star3.png" alt="" />
                <img className="star1" src="/star/star3.png" alt="" />
                <div className='painting_price'>{painting.price_string}</div>
              </div>
              <div>
                <div onClick={(e) => e.stopPropagation()}>
                  <button style={{ textDecoration: "none" }} className="painting_add_to_cart_button">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="painting_buttons">
        <button className={currentPage === 1 ? "active" : ""} style={{ marginRight: "30px" }} onClick={() => setPage(1)}>1</button>
        <button className={currentPage === 2 ? "active" : ""} onClick={() => setPage(2)}>2</button>
      </div>
    </div>
  )
}

export default Collection
