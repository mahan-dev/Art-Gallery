import React from 'react';
import Slider_Style from "../Styles/Slider_Style.module.css";
import Sweeper from './Sweeper';
const Slider_image_Back = () => {
    return (
        <section id={Slider_Style.background_image_wrapper} >
            <Sweeper />
        </section>

    );
};

export default Slider_image_Back;