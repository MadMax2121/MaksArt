import React from 'react';

function CustomerReviews({ reviews }) {
  return (
    <div>
      <h2>Customer Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="review">
            <p><strong>Author:</strong> {review.author}</p>
            <p><strong>Rating:</strong> {review.rating !== null ? review.rating : 'No rating'}</p>
            <p><strong>Subject:</strong> {review.subject}</p>
            <p><strong>Comment:</strong> {review.message}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
}

export default CustomerReviews;
