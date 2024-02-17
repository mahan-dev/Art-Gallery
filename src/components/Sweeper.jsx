import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay , EffectFade } from 'swiper/modules';
import SwiperCore from 'swiper/core';
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/swiper-bundle.min.css";
import "../../node_modules/swiper/swiper-bundle.min.css"
import "../Styles/swipp.css";
import "swiper/css/autoplay";
// import "swiper/components/effect-flip/effect-flip.scss";

// import images

import image_1 from "../assets/images/image-1.jpg";
import image_2 from "../assets/images/image-2.jpg";
import image_3 from "../assets/images/image-3.jpg";


// import 'swiper/swiper.min.css';
// SwiperCore.use
// import

// import "../Styles/swipp.css";
SwiperCore.use([Autoplay, Pagination, EffectFade]);

// import {pagination} from "swiper/modules";
const Sweeper = () => {
  const swiperRef = useRef(null);
  const [swiper, setSwiper] = useState(null);
  const [autoplay, Setautoplay] = useState(true);


  // useEffect(() => {
  //   const swiper = Swiper(swiperRef.current, {
  //     loop: true,
  //     speed: 1500,
  //     effect: 'fade',
  //     fadeEffect: {
  //       crossFade: true,
  //     },
  //     autoplay: {
  //       delay: 2000,
  //     },
  //     pagination: {
  //       el: '.swiper-pagination',
  //     },
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //   });
  // }, []);
    // if(swiperRef.current) {
    //   const swiperInstance = swiperRef.current.swiper;
    //   setSwiper(swiperInstance);
    // }
    // if (swiper) {
    //   const nextSlideElement = swiper.slides[swiper.activeIndex + 1];
    //   nextSlideElement.style.opacity = 1;
    // }

    //failed effect

    // if (swiper) {
    //   swiper.on('transitionStart', () => {
    //     const currentSlideElement = swiper.slides[swiper.activeIndex];
    //     currentSlideElement.style.transition = 'opacity 0.4s ease-out';
    //     currentSlideElement.style.opacity = 0;
  
    //     const nextSlideElement = swiper.slides[swiper.activeIndex + 1];
    //     nextSlideElement.style.opacity = 1;
    //     nextSlideElement.style.transition = 'opacity 0.6s ease-in';
    //     nextSlideElement.style.opacity = 1;
    //   });
    // }
    
  // }, [swiper, swiperRef]); is for useeffect 
  // const [isVisble, setIsVisible] = useState(true);
  
  
  // useEffect(() => {
  //   let lastScrollPosition = window.scrollY;
  //   const handleScroll = () => {
  //     const currentScrollPosition = window.scrollY;

  //     if(currentScrollPosition > lastScrollPosition) {
  //       setIsVisible(false);
  //       console.log(currentScrollPosition);
  //       console.log(lastScrollPosition);
  //     } else{
  //       setIsVisible(true);
  //     }
  //     lastScrollPosition = currentScrollPosition;
  //   };

    
    
  //   window.addEventListener("scroll", handleScroll);
  // }, []);
  
  
  const handleMouseEnter = () => {
    const swiper = swiperRef.current.swiper;
    if (swiper && swiper.autoplay) {
      swiper.autoplay.stop();
      console.log('Swiper autoplay paused');
    }
  };

  const handleMouseLeave = () => {
    const swiper = swiperRef.current.swiper;
    if (swiper && swiper.autoplay) {
      swiper.autoplay.start();
      console.log('Swiper autoplay resumed');
    }
  };
  
  // const swiperParams = {
    //   autoplay : {
      //     delay : "2000",
      //     disableOnInteraction: false,
      //   },
      // };
      
      const swiperParams = {
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          // clickable: true,
        },
        
    // loop: true,
    // pauseOnHover: true, // Add this property to pause on hover
  };
  const swiperContainer = swiperRef.current && swiperRef.current.el;
  

  



  return (
    <>
      <Swiper
        ref={swiperRef} {...swiperParams}
        // onSwiper={(swiper) => Setswiper(swiper)}
        // onMouseEnter={()=> swiperParams.autoplay.disable()}

        // onMouseEnter={MouseonHover}
        // onMouseLeave={MouseOnLeave}
        spaceBetween={20}
        effect={"fade"}
        // navigation={true}
        pagination={{
          clickable: true,
        }}

        slidesPerView={1}
        modules={[Pagination, EffectFade]}
        className="mySwiper"
      // autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        <SwiperSlide onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className='swiper-slide'> <img src={image_1} alt=""  /> </SwiperSlide>
        <SwiperSlide onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className='swiper-slide'> <img src={image_2} alt=""  /> </SwiperSlide>
        <SwiperSlide onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className='swiper-slide'> <img src={image_3} alt=""  /> </SwiperSlide>
        {/* <SwiperSlide className='swiper-slide'> <img src={image_1} alt="" /> </SwiperSlide>
        <SwiperSlide className='swiper-slide'> <img src={image_2} alt="" /> </SwiperSlide>
        <SwiperSlide className='swiper-slide'> <img src={image_3} alt="" /> </SwiperSlide>
        <SwiperSlide className='swiper-slide'> <img src={image_1} alt="" /> </SwiperSlide>
        <SwiperSlide className='swiper-slide'> <img src={image_2} alt="" /> </SwiperSlide>
        <SwiperSlide className='swiper-slide'> <img src={image_3} alt="" /> </SwiperSlide> */}
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