import React from 'react';
import ThirdImage from "../../assets/images/redirectVoices-images/third_slide.jpg";
import styles from "../../Styles/picGrid.module.css";
const PicGrid = () => {
    return (
        <div className={`${styles.wrapperGrid}`}>
            {console.log("ew[fjowj")}
            <img src={ThirdImage} alt="" />
            <img src={ThirdImage} alt="" />
            <img src={ThirdImage} alt="" />
            
            <img src={ThirdImage} alt="" />
            <img src={ThirdImage} alt="" />
        </div>
    );
};

export default PicGrid;