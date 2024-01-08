import React from 'react'
import "./Slides.css"
import { useState, useEffect } from 'react';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function Slides() {


   const [currentSlide, setCurrentSlide] = useState(0);




   const handleCarouselClick = (index) => {
       setCurrentSlide(index);
   };


   const slides = [
       <div className="general">
           <div className='main_text'>
               <h1 className='first_line'>
                   Great Design Collection
               </h1>
               <h1 className='second_line'>
                   Cloth Covered Accent Chair
               </h1>
               <p className='paragraph'>
                   Lorem ipsum dolor, sit amet consectetur
                   adipisicing elit. Odio dolore cumque maxime animi,
                   quia iure blanditiis, dolores quam quo itaque
                   voluptatibus cum tempore placeat inventore.
               </p>
               <div className='price'>
                   <span className='first_price'>--- $ 399.00 &nbsp; &nbsp;</span>
                   <span className='second_price'> $499.00</span>
               </div>
               <div className='buttons'>
                   <button className='add_cart'>
                       <img src="/icons/plus.png" alt="" />
                       Add to Cart
                   </button>
                   <button className='more_info'>More Info</button>
               </div>
           </div>
           <img className="chair_image" src="/slider/slider1.png" alt="" />
       </div>
       ,


       <div className="general">
           <div className='main_text'>
               <h1 className='first_line'>
                   Great Design Collection
               </h1>
               <h1 className='second_line'>
                   Cloth Covered Accent Chair
               </h1>
               <p className='paragraph'>
               TWO ipsum dolor, sit amet consectetur
                   adipisicing elit. Odio dolore cumque maxime animi,
                   quia iure blanditiis, dolores quam quo itaque
                   voluptatibus cum tempore placeat inventore.
               </p>
               <div className='price'>
                   <span className='first_price'>--- $ 399.00 &nbsp; &nbsp;</span>
                   <span className='second_price'> $499.00</span>
               </div>
               <div className='buttons'>
                   <button className='add_cart'>
                       <img src="/icons/plus.png" alt="" />
                       Add to Cart
                   </button>
                   <button className='more_info'>More Info</button>
               </div>
           </div>
           <img className="chair_image" src="/slider/slider2.png" alt="" />
       </div>,


       <div className="general">
           <div className='main_text'>
               <h1 className='first_line'>
                   Great Design Collection
               </h1>
               <h1 className='second_line'>
                   Cloth Covered Accent Chair
               </h1>
               <p className='paragraph'>
               THREE ipsum dolor, sit amet consectetur
                   adipisicing elit. Odio dolore cumque maxime animi,
                   quia iure blanditiis, dolores quam quo itaque
                   voluptatibus cum tempore placeat inventore.
               </p>
               <div className='price'>
                   <span className='first_price'>--- $ 399.00 &nbsp; &nbsp;</span>
                   <span className='second_price'> $499.00</span>
               </div>
               <div className='buttons'>
                   <button className='add_cart'>
                       <img src="/icons/plus.png" alt="" />
                       Add to Cart
                   </button>
                   <button className='more_info'>More Info</button>
               </div>
           </div>
           <img className="chair_image" src="/slider/slider3.png" alt="" />
       </div>,
   ];


   useEffect(() => {
       const interval = setInterval(() => {
           setCurrentSlide(currentSlide => (currentSlide + 1) % slides.length);
       }, 10000); // 10000 ms for 10 seconds
  
       return () => clearInterval(interval); // Cleanup interval on component unmount
   }, [slides.length]);
  
   return (
       <main style={{overflowX:"hidden"}}>


           <div className="slide_content" style={{ transform: `translateX(-${currentSlide * 16.53}%)` }}>
               {slides}
           </div>
           <div className="carousel_buttons">
               {slides.map((_, index) => (
                   <button
                       key={index}
                       className={currentSlide === index ? 'active_carousel' : 'carousel'}
                       onClick={() => handleCarouselClick(index)}
                   >
                    <div className='period'>
                       {currentSlide === index ? <FiberManualRecordIcon style={{width:"10px"}}/> : <PanoramaFishEyeIcon style={{width:"10px"}}/>}
                    </div>
                   </button>
               ))}
           </div>




       </main>
   )
}


export default Slides;