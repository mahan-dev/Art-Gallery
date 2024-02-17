import React from 'react';
// import image_back_1 from "../assets/images/image-1.jpg";
import Slider_Style from "../Styles/Slider_Style.module.css";
import img_1 from "../assets/images/image-1.jpg";
import img_2 from "../assets/images/image-2.jpg";
import img_3 from "../assets/images/image-3.jpg";

import Sweeper from './Sweeper';
const Slider_image_Back = () => {

    

    return (
        <section id={Slider_Style.background_image_wrapper} >
            <Sweeper />
            {/* <img src={img_1} alt="img" /> */}
            {/* <img src={img_2} alt="img" />
            <img src={img_3} alt="img" /> */}
            {/* <div>
                <h2>welcome to this journey</h2>
            </div> */}
            {/* <img src={img_2} alt="" />
            <img src={img_3} alt="" /> */}
        </section>

    );
};

export default Slider_image_Back;