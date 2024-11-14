import React from "react";
import { useState } from "react";

import image1 from '../images/image-1.jpg'
import image2 from '../images/image-2.jpg'
import image3 from '../images/image-3.jpg'
import image4 from '../images/image-4.jpg'
import image5 from '../images/image-5.jpg'



export const ImageSlider = () => {

 const images = [
   image1, image2, image3, image4, image5
]


    // use states
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // go to the next image function
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    }

    React.useEffect(() =>{
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);



    // go to the previous image
    const prevSlide = () =>{
        setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1 );
    };
  
    
    React.useEffect(() =>{
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // change image every 3 seconds
        return () => clearInterval(interval); // clean up interval on unmount 
    }, [currentIndex]);

    const leftBtn ={
      position: 'absolute',
      top: '50%',
      left: '0',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: '#fff',
      border: 'none',
      padding: '10px',
      cursor: 'pointer',
      margin:'30px'
    }

    const rightBtn ={
      position: 'absolute',
      top: '50%',
      right: '0',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: '#fff',
      border: 'none',
      padding: '10px',
      cursor: 'pointer',
      margin:'30px'  
    }
    const img ={
      width: '100%', 
      height: 'auto',
      opacity: 0.5
    }
    return (
      <>
          <div className="slider-container">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={img}/>
          <button
        onClick={prevSlide}
        style={leftBtn}
      >
        &#9664;
      </button>
      
      <button
        onClick={nextSlide}
        style={rightBtn}
      >
        &#9654;
      </button>
        <div className="slider-text">
        <h2>Your health, Our Priority</h2>
        <p>Providing quality healthcare to families and individual.</p>
        <a href="#booking" className="booking-btn">Booking an appointment</a> 
        </div>
        </div>
      
      </>
        
    )


}
