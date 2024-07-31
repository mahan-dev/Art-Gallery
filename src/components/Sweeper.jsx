import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation,Pagination, Autoplay , EffectFade } from 'swiper/modules';
import SwiperCore from 'swiper/core';
import "swiper/css";
import "swiper/css/pagination";

import "../../node_modules/swiper/swiper-bundle.min.css";
import "../Styles/swipp.css";
import "swiper/css/autoplay";


// import images

import image_1 from "../assets/images/image-4.jpg";
import image_2 from "../assets/images/image-5.jpg";
import image_3 from "../assets/images/image-6.jpg"; 


SwiperCore.use([Autoplay, Pagination, EffectFade]);

// import {pagination} from "swiper/modules";
const Sweeper = () => {
  const swiperRef = useRef(null);
  const [swiper, setSwiper] = useState(null);
  const [autoplay, Setautoplay] = useState(true);


  const handleMouseEnter = () => {
    const swiper = swiperRef.current.swiper;
    if (swiper && swiper.autoplay) {
      swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    const swiper = swiperRef.current.swiper;
    if (swiper && swiper.autoplay) {
      swiper.autoplay.start();
    }
  };
      const swiperParams = {
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        
   
  };
  // const swiperContainer = swiperRef.current && swiperRef.current.el;
  
  return (
    <>
      <Swiper
        ref={swiperRef} {...swiperParams}
        loop={true}
        spaceBetween={20}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}

        slidesPerView={1}
        // modules={[Navigation,Pagination, EffectFade]}
        className="mySwiper_Main_Page"
      >
        <SwiperSlide onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className='swiper-slide'> <img src={image_1} alt=""  /> </SwiperSlide>
        <SwiperSlide onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className='swiper-slide'> <img src={image_2} alt=""  /> </SwiperSlide>
        <SwiperSlide onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className='swiper-slide'> <img src={image_3} alt=""  /> </SwiperSlide>
     
      </Swiper>
    </>
  );
};

export default Sweeper;
  // const handleMouseEnter = () => {
    
  //   if (swiper && swiper.autoplay) {
  //     swiper.autoplay.stop();
  //     console.log('Swiper autoplay paused');
  //   }
    
  //   // Setautoplay(false);
  //   console.log('Mouse entered');
  //   if (swiperRef.current && swiperRef.current.autoplay) {
  //     swiperRef.current.autoplay.stop();
  //     console.log('Swiper autoplay paused');
  //   }

  // }

  // const handleMouseLeave = () => {
  //   console.log('Mouse entered');
  //   if (swiperRef.current && swiperRef.current.autoplay) {
  //     swiperRef.current.autoplay.start();
  //     console.log('Swiper autoplay resumed'); 
  //   }
  //   // Setautoplay(true);
  // }

  // useEffect(() => {
  //   const swiper = swiperRef.current;

  //   const handleMouseEnter = () => {

  //     if (swiper && swiper.autoplay) {
  //       swiper.autoplay.stop();
  //       console.log('Swiper autoplay paused');
  //     }
  
  //     Setautoplay(false);
  //     // console.log('Mouse entered');
  //     // if (swiperRef.current && swiperRef.current.autoplay) {
  //     //   swiperRef.current.autoplay.stop();
  //     //   console.log('Swiper autoplay paused');
  //     // }
  
  //   }
  //   const handleMouseLeave = () => {
  //     // console.log('Mouse entered');
  //     // if (swiperRef.current && swiperRef.current.autoplay) {
  //     //   swiperRef.current.autoplay.start();
  //     //   console.log('Swiper autoplay resumed'); 
  //     // }
  //     Setautoplay(true);
  //   }





  //   if (swiperContainer) {
  //     swiperContainer.addEventListener('mouseenter', handleMouseEnter);
  //     swiperContainer.addEventListener('mouseleave', handleMouseLeave);
  //   }

  //   return () => {
  //     if (swiperContainer) {
  //       swiperContainer.removeEventListener('mouseenter', handleMouseEnter);
  //       swiperContainer.removeEventListener('mouseleave', handleMouseLeave);
        
  //     }
  //   };
  // }, []);