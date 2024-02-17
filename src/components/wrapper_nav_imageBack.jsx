// 337

import React from 'react';
import Navbar from './Navbar';
import Slider_image_Back from './Slider_image_Back';
import Footer from './Footer';
import Main from './Main';


const wrapper_nav_imageBack = () => {
    return (
        <>
            <Navbar />
            <Slider_image_Back />
            <div className='wrapper'>
                <Main />
            </div>
            <Footer />

        </>
    );
};

export default wrapper_nav_imageBack;