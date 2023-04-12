import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Banner = () => {
  return (
    <div  className='relative'>
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"></div>
      <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      interval={5000}
      >
        <div className=''>
          <img loading='lazy'  src=' https://links.papareact.com/gi1' alt='xxxx'/>
        </div>
        <div className=''>
          <img loading='lazy'  src=' https://links.papareact.com/6ff' alt='carousel'/>
        </div>
        <div className=''>
          <img loading='lazy'  src=' https://links.papareact.com/7ma' alt='carousel'/>
        </div>
      </Carousel>
    </div>
  )
}
