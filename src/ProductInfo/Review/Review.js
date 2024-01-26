import React, { useContext, useState } from "react";
import "./Review.css";
import { AuthContext } from "../../Login/AuthContext";
import { db } from "../../Firebase";
import { doc, collection, addDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { DimmedScreenContext } from "../../DimmedScreenContext";
import StarReview from "./StarReview";

function Review({ paintingId, setReviews }) {
  const { currentUser } = useContext(AuthContext);
  const author = currentUser.displayName;
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(null);
  const { isScreenDimmed, dimScreen, undimScreen } = useContext(DimmedScreenContext);

  const showScreen = () => {
    dimScreen();
  };

  const hideScreen = () => {
    undimScreen();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const review = {
      author: author,
      subject: subject,
      message: message,
      rating: rating,
      createdAt: serverTimestamp(),
    };

    try {
      const paintingRef = doc(db, "paintings", paintingId);
      const reviewsCollectionRef = collection(paintingRef, "reviews");
      await addDoc(reviewsCollectionRef, review);
      setSubject("");
      setMessage("");
      setRating(null);
      hideScreen();
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit review.");
    }
  };

  const handleRatingSelected = (ratingValue) => {
    setRating(ratingValue);
  };

  return (
    <main className="review_main">
      <h2>Recent Customer Reviews</h2>
      <button onClick={showScreen}>Write a review</button>
      {isScreenDimmed && (
        <div className="dimmed-overlay">
          <div className="review_box">
            <form className="form_box" onSubmit={handleSubmit}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="subject+stars">
                  <input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                  <StarReview onRatingSelected={handleRatingSelected} />
                </div>
                <div>
                  <button onClick={hideScreen}>x</button>
                </div>
              </div>
              <input type="file" />
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button type="submit">Publish</button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default Review;
