import React from 'react'
import { db } from '../Firebase'
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import "./Collection.css";


function Collection() {

  const painting = [{
    img_1: "/paintings/p1/p1_01.webp",
    img_2: "/paintings/p1/p1_02.webp",
    img_3: "/paintings/p1/p1_03.webp",
    title: "Original painting on canvas, Seascape, Clipper Ship in the stormy ocean, Signed",
    desc: "This is an amazing original painting on canvas depicting a Clipper Ship under Full Sail. The sea surrounds the ship with gentle waves lapping against the hull,  and creating white foam. You might see the ship's hull cutting through the waves as it moves forward, leaving a wake behind it. \n\nA sailing ship in the sea evokes a sense of adventure, freedom, and wonder, as well as the power and beauty of nature. It is a timeless image that has inspired artists and writers for centuries and continues to capture the imagination of people today. \n\nFramed measuring 14\" x 12\" & painting measures 10\" x 8\". Good condition. \n\nPresented in a gorgeous gold frame. Please see the photos, they are part of the description. \n\nSigned in the lower right corner but is difficult to read.",
    price: "$150.00 USD",
  },
  {
    img_1: "/paintings/p2/p2_01.webp",
    img_2: "/paintings/p2/p2_02.webp",
    img_3: "/paintings/p2/p2_03.webp",
    title: "Original oil painting on canvas, Hunting scene, Framed, Signed Robbins",
    desc: "Up for sale is an original oil painting on canvas depicting a classic English hunting scene, red-coated riders are depicted in a picturesque country landscape, galloping on majestic horses. The hunters exude elegance and adventure as they follow the pack of well-trained hunting dogs, keenly tracking the scent of the fox. Amidst the rolling hills and meadows, the scene captures the timeless tradition and thrill of fox hunting in rural England. The painting evokes a sense of camaraderie and the age-old pursuit of outdoor sport, showcasing the rich cultural heritage of the British countryside. \n\nSigned in the lower-right corner probably Robbins. \n\nProfessionally framed. The frame has some scuffs, the painting is in good condition. \n\nPlease see the photos. \n\nFramed 30.5\" x 26.5\", painting 16\" x 12\".",
    price: "$850.00",
  }, 
  {
    img_1: "/paintings/p3/p3_01.webp",
    img_2: "/paintings/p3/p3_02.webp",
    img_3: "/paintings/p3/p3_03.webp",
    title: "1864 ADOLF CHARLEMAGNE 1826-1901 Imperial Academy, antique original oil painting",
    desc: "Up for sale is very rare unique Antique 19-century original oil painting on metal plate depicting a carriage ride by famous Russian Artist of His Imperial Majesty Alexander II -  Adolf Jossifowitsch Charlemagne (1826-1901).\n\nSigned Ad. Charlemagne and dated 1864 on the lower left.\n\nThe painting is in good/antique condition.\n\nHoused in an old ornate frame.  Please see the photos, the photos are part of the description.\n\nMeasures with the frame 18.5\" X 14.5\", painting 14\" x 11\".\n\nFree insured Shipping. Additional photos upon request.",
    price: "$15,500.00",
  }];

  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "paintings"));
      const paintingData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPaintings(paintingData);
    };

    fetchData();
  }, []);

  const mapToDatabase = async () => {
    await Promise.all(painting.map((painting, index) =>
      setDoc(doc(db, "paintings", "painting " + (index+1)), painting)
    ));
  };


  return (
    <div>
      <button onClick={mapToDatabase}>update data</button>
      <div>
        {paintings.map((painting) => (
          <div className="painting" key={painting.id}>
            <div>Title: {painting.title}</div>
            <img src={painting.img_1} alt="" />
            <img src={painting.img_2} alt="" />
            <p style={{ whiteSpace: "pre-line" }}>Desc: {painting.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Collection
