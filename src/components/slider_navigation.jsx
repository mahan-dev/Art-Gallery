import React from 'react';
import SliderNavigation from "../Styles/Slider_Navigation.module.css";
const Slider_navigation = () => {
    return (
        <section className={SliderNavigation.slider_navigation}>
            <div className={`${SliderNavigation.btn_slider} active `}></div>
            <div className={SliderNavigation.btn_slider}></div>
            <div className={SliderNavigation.btn_slider}></div>
            <div className={SliderNavigation.btn_slider}></div>
            <div className={SliderNavigation.btn_slider}></div>
        </section>
    );
};

export default Slider_navigation;