import { Swiper, SwiperSlide } from "swiper/react";

// importing slide images
import image_1 from "../../assets/images/redirectVoices-images/first_slide.jpg";
import image_2 from "../../assets/images/redirectVoices-images/second_slide.jpg";
import image_3 from "../../assets/images/redirectVoices-images/third_slide.jpg";

import { Navigation, EffectFade } from 'swiper/modules';
import SwiperCore from 'swiper/core';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../Styles/SwiperNextArrow.css";


import "../../../node_modules/swiper/swiper-bundle.min.css";
// import "../../../node_modules/swiper"/
// node_modules/swiper/swiper-bundle.min.css
// import "../Styles/swipp.css";
import "swiper/css/autoplay";
SwiperCore.use([Navigation, EffectFade]);
const sweeper_redirect_voices_slider = () => {
  const swiperParams = {


  }
  return (
    <section style={{ width: "100%" }}>
      <Swiper
        style={{ height: "500px", marginTop: "2rem" }}
        {...swiperParams}

        spaceBetween={20}
        effect={"fade"}
        loop={true}

        navigation={true}



        slidesPerView={1}
        // modules={[Pagination, Navigation, EffectFade]}
        className="mySwiper"

      >
        <SwiperSlide className='swiper-slide'>
          <section>
            <img src={image_1} alt="" />
            <section style={{ position: "absolute", zIndex: "1", top: "70%", color: "black", fontSize: "1.5rem", textAlign: "left" }}>
              <p>8 February - 21 March 2024</p>
              <h2>More Than One Memory</h2>
              <h3>something for display </h3>
            </section>
          </section>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <section>
            <img src={image_2} alt="" />
            <section style={{ position: "absolute", zIndex: "1", top: "70%", color: "black", fontSize: "1.5rem", textAlign: "left" }}>
              <p>2 February - 1 March 2024</p>
              <h2>More Than One Memory</h2>
              <h3>something for display </h3>
            </section>
          </section>

        </SwiperSlide>
        {/* <SwiperSlide className='swiper-slide'> <img src={image_2} alt="" /> </SwiperSlide> */}
        <SwiperSlide className='swiper-slide'>
          <section>
            <img src={image_3} alt="" />
            <section style={{ position: "absolute", zIndex: "1", top: "70%", color: "black", fontSize: "1.5rem", textAlign: "left" }}>
              <p>8 november - 24 december 2023</p>
              <h2>More Than One Memory</h2>
              <h3>something for display </h3>
            </section>
          </section>


        </SwiperSlide>
        {/* <SwiperSlide className='swiper-slide'> <img src={image_3} alt="" /> </SwiperSlide> */}


      </Swiper>
    </section>


  );
};
export default sweeper_redirect_voices_slider;