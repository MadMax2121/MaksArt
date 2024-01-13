import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import "./ProductInfo.css";

function ProductInformation() {
    const location = useLocation();
    const painting = location.state && location.state.painting;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <main className='productInformation_main'>
            <div className='product_image'>
                <img src={painting.img_1} alt="" />
            </div>
            <div className='product_info'>
                <h1>{painting.title}</h1>
                <div>
                    <div className='product_star_container'>
                        <img className="product_star" src="/star/star3.png" alt="" />
                        <img className="product_star" src="/star/star3.png" alt="" />
                        <img className="product_star" src="/star/star3.png" alt="" />
                        <img className="product_star" src="/star/star3.png" alt="" />
                        <img className="product_star" src="/star/star3.png" alt="" />
                    </div>
                    <div className='product_review'></div>
                </div>
                <p className='product_price'>{painting.price_string}</p>
                <p style={{ whiteSpace: 'pre-line' }}>{painting.desc}</p>

            </div>

            {/* ... other details ... */}
        </main>
    );
}

export default ProductInformation;