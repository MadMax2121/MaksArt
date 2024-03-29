import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { collection, query, onSnapshot, doc, orderBy } from "firebase/firestore";
import { db } from "../Firebase";
import "./ProductInfo.css";
import CustomerReviews from "./CustomerReviews/CustomerReviews";
import Review from "./Review/Review";
import { AuthContext } from "../Login/AuthContext";
import { DimmedScreenContext } from "../DimmedScreenContext";

function ProductInformation() {
  const location = useLocation();
  const painting = location.state && location.state.painting;
  const [image, setImage] = useState(0);
  const [reviews, setReviews] = useState([]);
  const paintingId = painting.id;
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const paintingRef = doc(db, "paintings", paintingId);
    const reviewsCollectionRef = collection(paintingRef, "reviews");
    const q = query(reviewsCollectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const updatedReviews = [];
      querySnapshot.forEach((doc) => {
        updatedReviews.push({ id: doc.id, ...doc.data() });
      });
      setReviews(updatedReviews);
    });

    return () => unsubscribe(); // Detach listener on unmount
  }, [paintingId]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [image]);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const image_list = [painting.img_1, painting.img_2, painting.img_3];

  const [showReviewModal, setShowReviewModal] = useState(false);
  const { dimScreen} = useContext(DimmedScreenContext);

  const handleWriteReviewClick = () => {
    if (currentUser) {
      dimScreen();
      setShowReviewModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <main className="productInformation_main">
      <div className="productInformation">
        <div className="back_arrow">
          <img onClick={goBack} src="/footer_images/arrow_left.svg" alt="" />
        </div>
        <div className="centered_content">
          <div>
            <div className="product_image">
              <img src={image_list[image]} alt="" />
            </div>
            <div className="selector_images">
              <img onClick={() => setImage(0)} className={image === 0 ? "selector_image_active" : "selector_image"} src={painting.img_1} alt="" />
              <img onClick={() => setImage(1)} className={image === 1 ? "selector_image_active" : "selector_image"} src={painting.img_2} alt="" />
              <img onClick={() => setImage(2)} className={image === 2 ? "selector_image_active" : "selector_image"} src={painting.img_3} alt="" />
            </div>
          </div>
          <div className="product_info">
            <h1>{painting.title}</h1>
            <div className="star_display">
              <div className="product_star_container">
                <img className="product_star" src="/star/star3.png" alt="" />
                <img className="product_star" src="/star/star3.png" alt="" />
                <img className="product_star" src="/star/star3.png" alt="" />
                <img className="product_star" src="/star/star3.png" alt="" />
                <img className="product_star" src="/star/star3.png" alt="" />
              </div>
              <div className="product_review"></div>
              <button className="review_button">Write a review</button>
            </div>
            <p className="product_price">{painting.price_string}</p>
            <p style={{ whiteSpace: "pre-line" }}>{painting.desc}</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Recent Customer Reviews</h2>
        <button onClick={handleWriteReviewClick}>Write a review</button>
        {showReviewModal && (
            <Review paintingId={painting.id} />
        )}
        <CustomerReviews reviews={reviews} />
      </div>
    </main>
  );
}

export default ProductInformation;
