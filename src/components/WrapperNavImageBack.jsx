import React from 'react';
import Navbar from './Navbar';
import Slider_image_Back from './Slider_image_Back';
import Main from './Main';
import "../Styles/WrapperOfMain.css";
import Footer from './Redirects/Redirect_Exhibitions_Footer';


const WrapperNavImageBack = () => {
    return (
        <>
            <Navbar />
            <Slider_image_Back />
            <div className='wrapper'>
                <Main />
            </div>
            <Footer className="footerHome" />

        </>
    );
};

export default WrapperNavImageBack;