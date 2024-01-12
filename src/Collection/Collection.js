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
    desc: "This is an amazing original painting on canvas depicting a Clipper Ship under Full Sail. The sea surrounds the ship with gentle waves lapping against the hull,  and creating white foam. You might see the ship's hull cutting through the waves as it moves forward, leaving a wake behind it.\n\nA sailing ship in the sea evokes a sense of adventure, freedom, and wonder, as well as the power and beauty of nature. It is a timeless image that has inspired artists and writers for centuries and continues to capture the imagination of people today.\n\nFramed measuring 14\" x 12\" & painting measures 10\" x 8\". Good condition.\n\nPresented in a gorgeous gold frame. Please see the photos, they are part of the description.\n\nSigned in the lower right corner but is difficult to read.",
    price: "$150.00",
  },
  {
    img_1: "/paintings/p2/p2_01.webp",
    img_2: "/paintings/p2/p2_02.webp",
    img_3: "/paintings/p2/p2_03.webp",
    title: "Original oil painting on canvas, Hunting scene, Framed, Signed Robbins",
    desc: "Up for sale is an original oil painting on canvas depicting a classic English hunting scene, red-coated riders are depicted in a picturesque country landscape, galloping on majestic horses. The hunters exude elegance and adventure as they follow the pack of well-trained hunting dogs, keenly tracking the scent of the fox. Amidst the rolling hills and meadows, the scene captures the timeless tradition and thrill of fox hunting in rural England. The painting evokes a sense of camaraderie and the age-old pursuit of outdoor sport, showcasing the rich cultural heritage of the British countryside.\n\nSigned in the lower-right corner probably Robbins.\n\nProfessionally framed. The frame has some scuffs, the painting is in good condition.\n\nPlease see the photos.\n\nFramed 30.5\" x 26.5\", painting 16\" x 12\".",
    price: "$850.00",
  },
  {
    img_1: "/paintings/p3/p3_01.webp",
    img_2: "/paintings/p3/p3_02.webp",
    img_3: "/paintings/p3/p3_03.webp",
    title: "1864 ADOLF CHARLEMAGNE 1826-1901 Imperial Academy, antique original oil painting",
    desc: "Up for sale is very rare unique Antique 19-century original oil painting on metal plate depicting a carriage ride by famous Russian Artist of His Imperial Majesty Alexander II -  Adolf Jossifowitsch Charlemagne (1826-1901).\n\nSigned Ad. Charlemagne and dated 1864 on the lower left.\n\nThe painting is in good/antique condition.\n\nHoused in an old ornate frame.  Please see the photos, the photos are part of the description.\n\nMeasures with the frame 18.5\" X 14.5\", painting 14\" x 11\".\n\nFree insured Shipping. Additional photos upon request.",
    price: "$15,500.00",
  },
  {
    img_1: "/paintings/p4/p4_01.webp",
    img_2: "/paintings/p4/p4_02.jpeg",
    img_3: "/paintings/p4/p4_03.jpeg",
    title: "1975 Vintage oil painting on canvas, Seascape, Sailing Ship, Signed, Framed",
    desc: "This is an amazing original large vintage oil painting on canvas depicting a nautical scene, with a large sailing ship in a choppy ocean.\n\nThis is a classic maritime style, one that is so rarely seen nowadays. A wide array of blue patterns creates a calming image and at the same time projects a feeling of freedom.\n\nFramed measuring  42\" x 30\" & painting measures 36\" x 24\".\n\nNicely framed. Please see the photos, they are part of the description.\n\nCondition: The painting is in good condition. The frame has some scuffs and scratches.\n\nSigned and dated 1975 in the lower right corner but is difficult to read.",
    price: "$750.00",
  },
  {
    img_1: "/paintings/p5/p5_01.webp",
    img_2: "/paintings/p5/p5_02.webp",
    img_3: "/paintings/p5/p5_03.webp",
    title: "18/19-th Century French Antique Original Oil Painting on canvas, Rococo, Framed",
    desc: "Up for sale is a fabulous Oil on canvas painting. French, late 18th to early 19th century. The artwork depicts a gallant scene, a shepherdess, and her lover resting in the forest. This stunning impressive piece of art is waiting to be a part of your collection. Collectible European Classical Paintings, Rococo, And Romanticism in Fine Art.\n\nMore photos are available upon request. No visible signature.\n\nOverall in very good condition.\n\nPlease see the photos, they are part of the description.\n\nThe painting is presented in a nice vintage ornate frame.\n\nFramed measuring 23.5\" x 20\", the painting measures 16.5\" x 12\".\n\nFeel free to ask me questions about this painting.",
    price: "$2,900.00",
  },
  {
    img_1: "/paintings/p6/p6_01.webp",
    img_2: "/paintings/p6/p6_02.webp",
    img_3: "/paintings/p6/p6_03.webp",
    title: "19 century, Original Antique Oil Painting in canvas, Female Portrait",
    desc: "Up for sale is a very interesting antique 19th-century original oil painting on canvas depicting a woman who overlooks a parapet and touches a bottle placed on it. With her right hand, she caresses her hair. A man behind her lifts a mirror to show the woman from behind and the window that illuminates the room.\n\nNo visible signature.\n\nCondition: overall is in good condition, craquelures.\n\nNicely framed.\n\nPlease see the photos, they are part of the description.\n\nFramed measuring 22\" x 19\", the painting measures 14\" x 11\".",
    price: "$1,200.00",
  },
  {
    img_1: "/paintings/p7/p7_01.webp",
    img_2: "/paintings/p7/p7_02.webp",
    img_3: "/paintings/p7/p7_03.jpeg",
    title: "1929 Vintage oil painting on canvas, European cityscape, framed, Signed",
    desc: "A European School, oil painting on canvas depicting an old town view.\n\nNicely framed. The frame is in good condition. The painting has one repaired tear (in the middle).\n\nSigned by the artist probably Robel and dated \"29 lower right.\n\nDimensions: 25.5\" x 21.5\" framed, painting measures 16\" x 20\".\n\nPlease see the photos, photos are part of the description.",
    price: "$350.00",
  },
  {
    img_1: "/paintings/p8/p8_01.webp",
    img_2: "/paintings/p8/p8_02.webp",
    img_3: "/paintings/p8/p8_03.webp",
    title: "Jacqueline Politis-Jobin (French, b. 1922) Oil Painting on board, Fall Landscape",
    desc: "Up for sale is an original vintage oil painting on board by French Artist Jacqueline Politis-Jobin ( born 1922), depicting a view of a field during autumn. Very detailed and textured.\n\nFramed in a vintage gold frame. The frame has some scuffs and scratches.\n\nSigned in the lower-right corner.\n\nPainting Condition: Good. Please see the photos.\n\nFramed measuring 21\" x 17\", the painting measures 17.5\" x 13.5\".",
    price: "$320.00",
  },
  {
    img_1: "/paintings/p9/p9_01.webp",
    img_2: "/paintings/p9/p9_02.webp",
    img_3: "/paintings/p9/p9_03.webp",
    title: "Original Painting on Canvas in a Fantasy Abstract Style by Serg Graff \"LOOP\" COA",
    desc: "This is a unique original acrylic painting on canvas in a fantasy abstract style by Serg Graff Titled \"Loop\". \n\nIt comes signed, dated, and with a COA (Certificate of Authenticity). \n\nPresented in a gold frame. \n\nExcellent condition. \n\nFramed measures 24 \"x 20\", painting measures 20 \"x 16\". Signed and dated on the backside by Artist Serg Graff.",
    price: "$500.00",
  },
  {
    img_1: "/paintings/p10/p10_01.jpeg",
    img_2: "/paintings/p10/p10_02.webp",
    img_3: "/paintings/p10/p10_03.jpeg",
    title: "Artist Dobritsin Oil painting on canvas, Genre scene \nAlong the street\n Framed",
    desc: "This is an original signed oil painting on canvas by Russian Artist N.I. Dobritsin, In the painting, we see a typical genre scene - a fair or folk festivals that were usually held in winter in Russia in anticipation of Christmas. \n\nPresented in a wood frame hand decorated and painted in gold. \n\nFramed measuring 30\" x 25\" & painting measures 25.5\" x 19.5\" .\n\nTitled \"Along the Street\", dated 2014 and signed on verso.\n\nPlease see photos, photos of the part of the description.",
    price: "$500.00",
  },
  {
    img_1: "/paintings/p11/p11_01.webp",
    img_2: "/paintings/p11/p11_02.webp",
    img_3: "/paintings/p11/p11_03.webp",
    title: "3D Abstract Acrylic Painting on Canvas by Serg Graff \"Funny Critters\", COA",
    desc: "This stunning 3D abstract painting on canvas titled \"Funny Critters\" by artist Serg Graff is a must-have for any art lover. The colorful multi-colored painting features a fantasy-themed subject of funny critters.\n\nThe painting is made with high-quality acrylic painting and mixed media production techniques and is entirely handmade. Within his abstract compositions, Serg Graff skillfully combines bold, vibrant colors with intricate details, forming a visual symphony that evokes both emotion and contemplation.\n\nFramed measures 24 \"x 20\", painting measures 20 \"x 16\". Funny notes from Artist on the backside. Signed and dated on the backside by Artist Serg Graff.",
    price: "$1000.00",
  },
  {
    img_1: "/paintings/p12/p12_01.webp",
    img_2: "/paintings/p12/p12_02.webp",
    img_3: "/paintings/p12/p12_03.webp",
    title: "Large Abstract Oil Painting on Canvas \"Crocodile Waltz\" by Serg Graff, COA",
    desc: "This is a unique original large acrylic painting on canvas in a fantasy abstract style by Serg Graff Titled \"Crocodile Waltz for double-bass\".\n\nIt comes signed, dated, and with a COA (Certificate of Authenticity).\n\nFramed measures 34.5\"x 29.5\", painting measures 30\"x 24\". Signed on the front and dated on the backside by Artist Serg Graff. Ready to hang.\n\nPlease see the photos.",
    price: "$999.00",
  },
  {
    img_1: "/paintings/p13/p13_01.webp",
    img_2: "/paintings/p13/p13_02.webp",
    img_3: "/paintings/p13/p13_03.webp",
    title: "Artist Dobritsin Oil painting on canvas, seascape, \"At Dawn\" Gold Frame",
    desc: "This is an original signed oil painting on canvas by Russian Artist N.I. Dobritsin, depicting a young girl in a blue dress and with a white handkerchief in hand standing on the seashore, gazing at a sailboat with scarlet sails on the horizon. The scene closely resembles a story from Alexander Grin's fairy tale \"Scarlet Sails\" - Assol awaits the Prince who is supposed to arrive on a ship with scarlet sails and take her away. Very romantic scene.\n\nPresented in a gorgeous vintage gold frame. Monogrammed in the lower-left corner.\n\nFramed measuring 34\" x 30\" & painting measures 24\" x 20\" .\n\nTitled \"At Dawn\", dated 2017 and signed on back.\n\nPlease see photos, photos of the part of the description.",
    price: "$700.00",
  },
  {
    img_1: "/paintings/p14/p14_01.webp",
    img_2: "/paintings/p14/p14_02.webp",
    img_3: "/paintings/p14/p14_03.webp",
    title: "D. Palmer Original Oil Painting on canvas Still life Flowers, Gold Ornate Frame",
    desc: "This beautiful painting by D. Palmer features a gorgeous still life of flowers.\n\nThe painting is signed by the artist and comes framed in a luxurious gold ornate frame.\n\nThis medium-sized artwork is perfect for any art lover looking to add a touch of realism to their collection. The painting is an original, handmade oil on canvas production.\n\nThe frame and painting are in good condition. Please see the photos - part of the description.\n\nSigned in a lower right corner D.Palmer.\n\nFramed 33.5\" x 30\", the painting measures 24\" x 20\".",
    price: "$650.00",
  },
  {
    img_1: "/paintings/p15/p15_01.webp",
    img_2: "/paintings/p15/p15_2.webp",
    img_3: "/paintings/p15/p15_03.webp",
    title: "Listed Italian Artist Renato Longanesi Large oil painting on canvas Clipper ship",
    desc: "This is an amazing Large vintage original oil painting on canvas depicting Clipper ships in the stormy ocean by Listed Italian Artist Renato Longanesi (b.1931).\n\nRenato Longanesi was born in 1931. He was Italian. He was orphaned as a small boy. He then graduated from the Artistic Lyceum of Turin and was aided for some years by Guise Sissoldo, a distinguished paintress who grew up under the famous painter Casorati. Longanesi later painted for some art galleries of Turin and Milan-very fine seascapes and sailing vessels. He lived in Naples. \n\nFramed measuring 44.5\" x 32.5\" & painting measures 36\" x 24\".",
    price: "$1,100.00",
  },
  {
    img_1: "/paintings/p16/p16_01.webp",
    img_2: "/paintings/p16/p16_02.webp",
    img_3: "/paintings/p16/p16_03.webp",
    title: "Original Large oil painting on canvas Seascape, Clipper ship, Gold Frame",
    desc: "This is an amazing Large original oil painting on canvas depicting Clipper ships in the stormy ocean.\n\nThis is a classic maritime style, one that is so rarely seen nowadays. A wide array of blue patterns creates a calming image and at the same time projects a feeling of freedom. \n\nNo visible signature.\n\nFramed measuring 39.5\" x 28\" & painting measures 36\" x 24\". \n\nPresented in a gold ornate frame. \n\nCondition: The painting is in good condition. The frame has some scuffs. Please see the photos, they are part of the description.",
    price: "$600.00",
  },
  {
    img_1: "/paintings/p17/p17_01.webp",
    img_2: "/paintings/p17/p17_02.webp",
    img_3: "/paintings/p17/p17_03.webp",
    title: "Original Painting on Canvas Still Life, Flowers, Framed, Signed Bossy",
    desc: "Up for sale is an original small painting on canvas depicting Still Life Composition with flowers.\n\nSigned Bossy in the lower right corner.\n\nPresented in an amazing gold frame with a liner.\n\nThe frame and picture are in good condition. Please look at the pictures to see the details. The pictures are part of the description.\n\nFramed measuring 13 \"x 15\"; painting 8 \"x 10\".",
    price: "$150.00",
  },
  {
    img_1: "/paintings/p18/p18_01.webp",
    img_2: "/paintings/p18/p18_02.webp",
    img_3: "/paintings/p18/p18_03.webp",
    title: "Listed Artist Samuel West (1810-1867) Antique oil on canvas, Dated 1860,Portrait",
    desc: "This is an Antique oil painting on canvas 19 century depicting a portrait of a British Gentleman by Listed British-Irish Artist Samuel West (1810-1860).\n\nCondition is - excellent for painting at this age.\n\nDated 1860 and is signed on the middle right side. No holes, no cracks. Presented in a golden frame.\n\nFace painted very realistically - Please look at photos to see the details. (Photos are part of the description, were taken outside with no filters).\n\nInsured domestic shipping.\n\nFramed measuring 29\" x 34\", painting measures 25\" x 30\".",
    price: "$2,800.00",
  },
  {
    img_1: "/paintings/p19/p19_01.webp",
    img_2: "/paintings/p19/p19_02.webp",
    img_3: "/paintings/p19/p19_03.webp",
    title: "Stunning Large Oil painting on Canvas, Seascape, Sailing Ships at Sunset, Framed",
    desc: "This is a stunning impressive large original oil painting on canvas depicting Chinese ships in the open Sea at Sunset. Bright orange and yellow colors make this painting powerful and fabulous.\n\nNo visible signature. Photos made outside with natural sunlight with no filters. Presented in a gold ornate frame. Frame and painting in very good condition. Please see the photos, they are part of the description. Please ask me any questions.\n\nFramed measuring 41.5\" x 29.5\" & painting measures 36\" x 24\".",
    price: "$1,300.00",
  },
  {
    img_1: "/paintings/p20/p20_01.webp",
    img_2: "/paintings/p20/p20_02.webp",
    img_3: "/paintings/p20/p20_03.webp",
    title: "1869 Antique Dutch Large Oil Painting on Canvas by Alexander Matthew Seascape",
    desc: "Up for sale is a phenomenal antique Dutch school original large oil painting on canvas depicting a seascape - several sailboats on the high seas close to the coast and a boat with fishermen or sailors.\n\nSigned in a lower-right corner Alexander Matthe and dated 1869.\n\nCondition: Stable craquelure due to age. Some minor overpainted spots, paint losses, and scratches.\n\nNicely framed. The frame was repainted gold.\n\nPlease see the photos, photos are part of the description.\n\nFramed measures 47.5\" x 35\", painting measures 42\"x 28\".",
    price: "$5,800.00",
  },
  {
    img_1: "/paintings/p21/p21_01.webp",
    img_2: "/paintings/p21/p21_02.jpg",
    img_3: "/paintings/p21/p21_03.webp",
    title: "Humberto da Silva Fernandes(1937-2005) Clipper Ship Oil Painting on Canvas",
    desc: "This is an amazing original oil painting on canvas of the famous Brazilian-American Artist, Humberto da Silva Fernandes (1937-2005) depicting a Clipper Ship under Full Sail. The sea surrounds the ship with gentle waves lapping against the hull, and creating white foam. You might see the ship's hull cutting through the waves as it moves forward, leaving a wake behind it.\n\nFramed measuring 34\" x 28\" & painting measures 30\" x 24\". Nicely framed. Please see the photos, they are part of the description.\n\nFrame and painting in good condition.\n\nSigned in the lower right corner.",
    price: "$1,200.00",
  },
  {
    img_1: "/paintings/p22/p22_01.webp",
    img_2: "/paintings/p22/p22_02.webp",
    img_3: "/paintings/p22/p22_03.webp",
    title: "Famous German Artist Fedor Encke (1851-1936) Huge Antique oil painting on canvas",
    desc: "Up for sale is an original antique oil painting on canvas by Famous German - American Artist Fedor Encke, depicting a portrait of a Gentleman dressed in a dark suit, white shirt, and dark gray tie.\n\nSigned and dated in a lower-left corner Fedor Encke 1913.\n\nMeasures with the frame 54\" X 38\", painting 47\" x 31.5\".",
    price: "$5,800.00",
  },
  {
    img_1: "/paintings/p23/p23_01.webp",
    img_2: "/paintings/p23/p23_02.jpeg",
    img_3: "/paintings/p23/p23_03.webp",
    title: "Large Antique oil painting on canvas, Venice, Italy, Artist Gini, framed",
    desc: "Up for sale original oil painting on canvas, depicting Venice, Italy. Unsigned but has a nameplate with the Artist's name \"GINI\" and some notes about Artist on the backside (difficult to read). Please see the photos, they are part of the description.\n\nThe frame has some chips and scuffs but is overall in a good condition. The painting is also in very good condition, has one small chip but is almost invisible. Insured shipping, free local contact-free pick up in Framingham, MA\n\nFramed measures 46\" x 38\", painting measures 39\" x 31\".",
    price: "$575.00",
  },
  {
    img_1: "/paintings/p24/p24_01.webp",
    img_2: "/paintings/p24/p24_02.webp",
    img_3: "/paintings/p24/p24_03.webp",
    title: "Unique Large Painting on canvas by Serg Graff \"Card Sharping\".",
    desc: "This is a rare unique original large acrylic/oil painting on canvas in a naive primitivism style depicting a group of fantasy characters gathered around a poker table.\n\nSigned by Serg Graff.\n\nThe Artist created an interesting story about every character and framed this story as an ancient papyrus. It is a very unique artwork\n\nPresent in an ornate gilt frame. Excellent condition. Framed measuring 46\" x 34\" & painting measures 36\" x 24\" . Signed in the upper right corner, and on verso by Artist Serg Graff. Painting comes with a Certificate of Authenticity signed by the Artist.",
    price: "$3,000.00",
  },
  ];

  const [paintings, setPaintings] = useState([]);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "paintings"));
      const paintingData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPaintings(paintingData);
    };

    fetchData().then(() => setVisible(true));
  }, []);

  const mapToDatabase = async () => {
    await Promise.all(painting.map((painting, index) =>
      setDoc(doc(db, "paintings", "painting " + (index + 1)), painting)
    ));
  };

  

  return (
    <div>
      <button onClick={mapToDatabase}>update data</button>
      <div className = "paintings">
        {paintings.map((painting) => (
          <div className={`painting ${visible ? 'visible' : ''}`} key={painting.id}>
            <img className = "pic" src={painting.img_1} alt="" />
            <img className = "star1" src="/star/star3.png" alt="" />
            <img className = "star1" src="/star/star3.png" alt="" />
            <img className = "star1" src="/star/star3.png" alt="" />
            <img className = "star1" src="/star/star3.png" alt="" />
            <img className = "star1" src="/star/star3.png" alt="" />
            <div className='painting_title'>{painting.title}</div>
            
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Collection
