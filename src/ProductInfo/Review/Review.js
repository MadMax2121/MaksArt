import React from 'react'
import { useContext, useState } from 'react'
import { AuthContext } from '../../Login/AuthContext'
import { db } from '../../Firebase';
import { doc, collection, addDoc } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';

function Review({paintingId, setReviews}) {
  const {currentUser} = useContext(AuthContext);
  const author = currentUser.displayName
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();


    const review = {
      author: author,
      subject: subject,
      message: message,
      createdAt: serverTimestamp(),
    };

    try {
      // Reference to the specific painting document
      const paintingRef = doc(db, 'paintings', paintingId);

    // Reference to the reviews subcollection of the painting
    const reviewsCollectionRef = collection(paintingRef, 'reviews');

    // Add a new review document to the reviews subcollection
    await addDoc(reviewsCollectionRef, review);

      // Reset form fields
      setSubject("");
      setMessage("");
      
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review.');
    }
  };
  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" value={author} placeholder="Name" readOnly/>
        <input type="text" placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} required/>
        <textarea type="text" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} required/>
        <button type="submit">Publish</button>
      </form>
    </div>
  )
}

export default Review
