
import image1 from "../../assets/images/artists_pics/1.jpg";
import image2 from "../../assets/images/artists_pics/2.jpg";
import image3 from "../../assets/images/artists_pics/3.jpg";
import image4 from "../../assets/images/artists_pics/4.jpg";
import image5 from "../../assets/images/artists_pics/5.jpg";
import image6 from "../../assets/images/artists_pics/6.jpg";

import StyleNews from "../../Styles/Redirect_News.module.css";
const Redirect_News = () => {
    return (
        <section className={StyleNews.gridMine} >
            <div className="wrapperGrid">
                <img src={image1} alt="img" width={350} />

                <div>
                    <p>this is just a test </p>
                </div>
            </div>
            <div className="wrapperGrid">
                <img src={image2} alt="img" width={350} />

                <div>
                    <p>this is just a test </p>
                </div>
            </div>
            <div className="wrapperGrid">
                <img src={image3} alt="img" width={350} />

                <div>
                    <p>this is just a test </p>
                </div>
            </div>
            <div className="wrapperGrid">
                <img src={image4} alt="img" width={350} />

                <div>
                    <p>this is just a test </p>
                </div>
            </div>
            <div className="wrapperGrid">
                <img src={image5} alt="img" width={350} />

                <div>
                    <p>this is just a test </p>
                </div>
            </div>
            <div className="wrapperGrid">
                <img src={image6} alt="img" width={350} />

                <div>
                    <p>this is just a test </p>
                </div>
            </div>
        </section>
    );
};

export default Redirect_News;