import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import image_1 from "../../assets/images/redirectVoices-images/first_slide.jpg";
import image_2 from "../../assets/images/redirectVoices-images/second_slide.jpg";
import image_3 from "../../assets/images/redirectVoices-images/third_slide.jpg";


import { Scrollbar } from 'swiper/modules';
import SwiperCore from 'swiper/core';
import "swiper/css";

import "../../../node_modules/swiper/swiper-bundle.min.css";
import { Link } from 'react-router-dom';


const Swiper_Slide_Archive = () => {
    return (
        <Swiper
        className="second_slide_viewer"
        spaceBetween={20}
        scrollbar={{ draggable: true, }}
        slidesPerView={"auto"}
      >
        <SwiperSlide>
          <section>
            <img src={image_1} alt="" />
            <h3>First Art</h3>
            <div>25 feb - 2 march  2024</div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section>
          <img src={image_1} alt="" />
          <h3>second Art</h3>
          <div>25 feb - 2 march  2024</div>

          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section>
          <img src={image_2} alt="" />
          <h3>third Art</h3> 
          <div>25 feb - 2 march  2024</div>

        </section>
        </SwiperSlide>

        <SwiperSlide>
          <section>
            <Link to ="/">
          <img src={image_3} alt="" />
          <h3>forth Art</h3>
          <div>25 feb - 2 march  2024</div>

            </Link>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section>
          <img src={image_1} alt="" />
          <h3>sixth Art</h3>
          <div>25 feb - 2 march  2024</div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section>
          <img src={image_2} alt="" />
          <h3>seventh Art</h3>
          <div>25 feb - 2 march  2024</div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section>
          <img src={image_3} alt="" />
          <h3>eights Art</h3>
          <div>25 feb - 2 march  2024</div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section>
          <img src={image_1} alt="" />
          <div>something as paragraph</div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section>
          <img src={image_2} alt="" />
          <div>something as paragraph</div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section>
          <img src={image_3} alt="" />
          <div>something as paragraph</div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section>
          <img src={image_2} alt="" />
          <div>something as paragraph</div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section>
          <img src={image_3} alt="" />
          <div>something as paragraph</div>
          </section>
        </SwiperSlide>


      </Swiper>
    );
};

export default Swiper_Slide_Archive;