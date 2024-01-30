import React, { useState, useRef } from "react";
import "./StarReview.css";

function StarReview({ onRatingSelected }) {
  const [displayedRating, setDisplayedRating] = useState(0);
  const [isRatingActive, setIsRatingActive] = useState(true);
  const starContainerRef = useRef(null);

  const updateRating = (clientX) => {
    if (!starContainerRef.current) return;
    const rect = starContainerRef.current.getBoundingClientRect();
    const position = clientX - rect.left;
    const exactRating = (position / rect.width) * 10;
    const roundedRating = Math.round(exactRating * 100) / 100;
    setDisplayedRating(roundedRating);
  };

  const handleMouseMove = (e) => {
    if (!isRatingActive) return;
    updateRating(e.clientX);
  };

  const handleStarClick = (e) => {
    updateRating(e.clientX);
    if (isRatingActive) {
      setIsRatingActive(false);
      onRatingSelected(displayedRating); // Pass the selected rating to the parent component
    } else {
      setIsRatingActive(true);
    }
  };

  return (
    <div className="review_star_display" ref={starContainerRef} onMouseMove={handleMouseMove} onClick={handleStarClick}>
      <div className="review_product_star_container" style={{ width: `${displayedRating * 10}%` }} />
      <div className="review_stars">
        {[...Array(5)].map((_, index) => (
          <img key={index} className="review_product_star" src="/star/star3.png" alt="" />
        ))}
      </div>
    </div>
  );
}

export default StarReview;
