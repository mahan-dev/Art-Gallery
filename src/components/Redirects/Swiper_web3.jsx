import { Swiper, SwiperSlide } from "swiper/react";

// importing slide images
import image_1 from "../../assets/images/redirectVoices-images/first_slide.jpg";
import image_2 from "../../assets/images/redirectVoices-images/second_slide.jpg";
import image_3 from "../../assets/images/redirectVoices-images/third_slide.jpg";


import { Scrollbar } from 'swiper/modules';
import SwiperCore from 'swiper/core';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "../../Styles/SwiperNextArrow.css";

import "../../../node_modules/swiper/swiper-bundle.min.css";
import "swiper/css/autoplay";

// import "../../Styles/second_slide_viewer_swiper_change.css";

SwiperCore.use([Scrollbar]);
const Swiper_slide = () => {
  const swiperParams = {
    // slideClass: "swiper-slide",

  }
  return (
    
      <Swiper
        {...swiperParams}
        className="second_slide_viewerz  mb-7"
        spaceBetween={20}
        scrollbar={{ draggable: true, }}
        slidesPerView={1}
        breakpoints={
          {
            576: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }
        }
      >
        <SwiperSlide>
          <section className="wrapperImageWeb3">
            <img src={image_1} alt="" />
            <div className="">hi there</div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="wrapperImageWeb3">
          <img src={image_1} alt="" />
          <div>kjdsbv</div>

          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="wrapperImageWeb3">
          <img src={image_2} alt="" />
          <div>slkdjfkolsdhjfp</div> 

        </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="wrapperImageWeb3">
          <img src={image_3} alt="" />
          <div>s;dljfjpofwe</div>

          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="wrapperImageWeb3">
          <img src={image_1} alt="" />
          <div>something as paragraph</div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="wrapperImageWeb3">
          <img src={image_2} alt="" />
          <div>something as paragraph</div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="wrapperImageWeb3">
          <img src={image_3} alt="" />
          <div>something as paragraph</div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="wrapperImageWeb3">
          <img src={image_1} alt="" />
          <div>something as paragraph</div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="wrapperImageWeb3">
          <img src={image_2} alt="" />
          <div>something as paragraph</div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="wrapperImageWeb3">
          <img src={image_3} alt="" />
          <div>something as paragraph</div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="wrapperImageWeb3">
          <img src={image_2} alt="" />
          <div>something as paragraph</div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="wrapperImageWeb3">
          <img src={image_3} alt="" />
          <div>something as paragraph</div>
          </section>
        </SwiperSlide>


      </Swiper>



  );
};
export default Swiper_slide;