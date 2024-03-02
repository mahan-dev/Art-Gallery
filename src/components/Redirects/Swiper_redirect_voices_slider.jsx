import { Swiper, SwiperSlide } from "swiper/react";

// importing slide images
import image_1 from "../../assets/images/redirectVoices-images/first_slide.jpg";
import image_2 from "../../assets/images/redirectVoices-images/second_slide.jpg";
import image_3 from "../../assets/images/redirectVoices-images/third_slide.jpg";

import { Navigation, Pagination, Autoplay, EffectFade ,} from 'swiper/modules';
import SwiperCore from 'swiper/core';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "../../Styles/swipp.css";
// import "styles.css";

import "../../../node_modules/swiper/swiper-bundle.min.css";
// import "../../../node_modules/swiper"/
// node_modules/swiper/swiper-bundle.min.css
// import "../Styles/swipp.css";
import "swiper/css/autoplay";
SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade]);
const sweeper_redirect_voices_slider = () => {
  const swiperParams = {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

  }
  return (
    <section style={{width: "100%"}}>
<Swiper
        style={{ height: "500px", width: "100vh" }}
        {...swiperParams}

        spaceBetween={20}
        effect={"fade"}
        loop={true}

        navigation={true}
        
        pagination={{
          clickable: true,
        }}

        slidesPerView={1}
        // modules={[Pagination, Navigation, EffectFade]}
      className="mySwiper"
      >
        <SwiperSlide className='swiper-slide'> <img src={image_1} alt="" /> </SwiperSlide>
        <SwiperSlide className='swiper-slide'> <img src={image_2} alt="" /> </SwiperSlide>
        {/* <SwiperSlide className='swiper-slide'> <img src={image_2} alt="" /> </SwiperSlide> */}
        <SwiperSlide className='swiper-slide'> <img src={image_3} alt="" /> </SwiperSlide>
        {/* <SwiperSlide className='swiper-slide'> <img src={image_3} alt="" /> </SwiperSlide> */}

      </Swiper>
    </section>
      
    
  );
};

export default sweeper_redirect_voices_slider;