import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import redirect_artists from "../../Styles/redirect_artists.module.css";

import Navbar from '../Navbar';
import Footer from "../Footer";
import Redirect_Exhibitions_Footer from './Redirect_Exhibitions_Footer';
// import Redirect_Exhibitions_Footer from "/Redirects/redirect_exhibitions_footer";
// Import Images
import image1 from "../../assets/images/artists_pics/1.jpg";
import image2 from "../../assets/images/artists_pics/2.jpg";
import image3 from "../../assets/images/artists_pics/3.jpg";
import image4 from "../../assets/images/artists_pics/4.jpg";
import image5 from "../../assets/images/artists_pics/5.jpg";
import image6 from "../../assets/images/artists_pics/6.jpg";
//

// importing Aos Library
import AOS from "aos";
import "aos/dist/aos.css";


const RedirectArtists = () => {
    // const [previousScroll, setPreviousScroll] = useState(null);/
    // const [scrolldown, setScrollDown] = useState(false);

    // const controlScroll = () => {
    //     const currentScroll = window.scrollY;
    //     if (currentScroll > previousScroll) {
    //         setScrollDown(true);
    //     }
    //     else {
    //         setScrollDown(false);
    //     }
    //     setPreviousScroll(currentScroll);
    // }

    const [scrollDirection, setScrollDirection] = useState('down');
    const prevScrollY = useRef(0);

    const handleScrollAos = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > prevScrollY.current) {
            setScrollDirection('down');
        } else {
            setScrollDirection('up');
        }
        prevScrollY.current = currentScrollY;
    }

    useEffect(() => {
        // window.addEventListener("scroll", controlScroll)

        AOS.refresh();


        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            anchorPlacement: 'top-bottom',
            offset: 400,
        })
        window.addEventListener("scroll", handleScrollAos);
        return()=>{
            window.removeEventListener("scroll", handleScrollAos);
        }
    }, []);

    return (
        <div className='relative z-40'>

            <Navbar />
            <section className={`${redirect_artists.wrapper}`}>
                <section className={`${redirect_artists.wrapper__contents} wrapper__contents_tailwdind`}>
                    <h1 className="h1_title">ARTISTS</h1>
                    <section className={`${redirect_artists.wrapper_authors} redirect_tailwdinCss`}>
                        <div><Link to="#">ESTHER JANSSEN</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                        <div><Link to="#">name author</Link></div>
                    </section>

                    <section className={redirect_artists.artists_wrapper_image}>
                        <div className={`${redirect_artists.image_wrapper} `} data-aos={scrollDirection === "down" ? "fade-up" : "fade-up"}>
                            <img src={image1} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper}`}data-aos={scrollDirection === "down" ? "fade-up" : "fade-down"} >
                            <img src={image2} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper}`}data-aos={scrollDirection === "down" ? "fade-up" : "fade-down"} >
                            <img src={image3} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper}`}data-aos={scrollDirection === "down" ? "fade-up" : "fade-down"} >
                            <img src={image4} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper}`}data-aos={scrollDirection === "down" ? "fade-up" : "fade-down"} >
                            <img src={image5} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper}`}data-aos={scrollDirection === "down" ? "fade-up" : "fade-down"} >
                            <img src={image6} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>

                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-down" : "fade-up"}`} data-aos="fade-up">
                            <img src={image1} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-down" : "fade-up"}`} data-aos="fade-up">
                            <img src={image2} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-down" : "fade-up"}`} data-aos="fade-up">
                            <img src={image3} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-down" : "fade-up"}`} data-aos="fade-up">
                            <img src={image4} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-down" : "fade-up"}`} data-aos="fade-up">
                            <img src={image5} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-down" : "fade-up"}`} data-aos="fade-up">
                            <img src={image6} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>

                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-down" : "fade-up"}`} data-aos="fade-up">
                            <img src={image1} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-down" : "fade-up"}`} data-aos="fade-up">
                            <img src={image2} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-down" : "fade-up"}`} data-aos="fade-up">
                            <img src={image3} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-down" : "fade-up"}`} data-aos="fade-up">
                            <img src={image4} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-down" : "fade-up"}`} data-aos="fade-up">
                            <img src={image5} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-down" : "fade-up"}`} data-aos="fade-up">
                            <img src={image6} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>

                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-down" : "fade-up"}`} data-aos="fade-up">
                            <img src={image1} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-down" : "fade-up"}`} data-aos="fade-up" >
                            <img src={image2} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-down" : "fade-up"}`} data-aos="fade-up" >
                            <img src={image3} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-down" : "fade-up"}`} data-aos="fade-up" >
                            <img src={image4} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-down" : "fade-up"}`} data-aos="fade-up" >
                            <img src={image5} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-down" : "fade-up"}`} data-aos="fade-up" >
                            <img src={image6} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>

                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-down" : "fade-up"}`} data-aos="fade-up" >
                            <img src={image1} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-down" : "fade-up"}`} data-aos="fade-up" >
                            <img src={image2} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                        <div className={`${redirect_artists.image_wrapper} ${scrollDirection === "up" ? "fade-down" : "fade-up"}`} data-aos="fade-up" >
                            <img src={image3} alt="" />
                            <div>
                                <p>name family-name</p>
                            </div>
                        </div>
                    </section>
                </section>
                <Redirect_Exhibitions_Footer />
            </section>
            {/* <Footer />/ */}
        </div>
    );
};

export default RedirectArtists;