// import React from 'react';

import Navbar from "../Navbar";

// import icon
import arrow_left from "../../assets/images/redirectVoices-icons/arrow-up-left.svg";
import styleVoices from "../../Styles/Redirect_Voices.module.css";
import plus from "../../assets/images/redirectVoices-icons/plus.svg";
import TestImage from "../../assets/images/redirectVoices-images/first_slide.jpg";

import SwiperSlide from "../Redirects/Swiper_slide";
import Swiper_Slide_Archive from "../Redirects/Swiper_Slide_Archive";

// import sweeper 
import Swiper from "./Swiper_redirect_voices_slider";
import { useEffect, useState } from "react";


import Redirect_Exhibitions_Footer from "./Redirect_Exhibitions_Footer";
// import Swiper_slide from "";

// import parallex of react scrolling 
const Redirect_Voices = () => {
    
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // const [newFont, setNewFont] = useState(window.innerHeight / 100);

    // useEffect(() => {
    //     const handleResize = () => {
    //         const width = window.innerWidth;
    //         const newFontGrabber = width / 100;
    //         setNewFont(newFontGrabber);
    //         setWindowWidth(window);
    //     };

    //     // Initial setup
    //     handleResize();

    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const initialFontSize = Math.min(window.innerWidth / 100, 16); // Adjust the initial font size here
    const [newFont, setNewFont] = useState(initialFontSize);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const newFontGrabber = Math.min(width / 100, 16); // Ensure font size doesn't exceed 16rem
            setNewFont(newFontGrabber);
            setWindowWidth(width);
        };

        // Initial setup
        window.addEventListener('resize', handleResize);
        
        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  
    
    
      
    return (
        <section className={`${""} relative z-50 flex flex-col `}>

            <section className={styleVoices.header__image} style={{
                backgroundColor: "#ffffff",
                display: "flex",
                justifyContent: "start",
                minHeight: "100vh",
                scrollBehavior: 'smooth',
                position: "relative",
                zIndex : "40"
            
            }}>


                <h2 style={{  fontSize: windowWidth < 1440 ? `${newFont}rem ` : `${newFont}rem ` }} className={`${styleVoices.h2_title} flex items-center  text-[18rem] text-cyan-50 `}>Voices</h2>
            </section>
                <Navbar />
            <section className="wrapper_voices_contents px-8 pb-[3rem] relative z-50 bg-white flex-col justify-center mb-[100vh] w-full ">
                <section className="pt-8 w-full">
                    <section className="relative ">
                        <div className="sticky top-[100px]  "><p className="text-[4rem]  mr-5 ">Voices</p></div>
                        <section className="flex mt-[0] flex-col justify-start  ">
                            <div className="flex m-4 mt-[13rem]">

                                <p className="text-2xl w-[700px] text-wrap">Voices is an ideas-driven digital programme intended to spark critical
                                    conversations about art and culture, foreground new perspectives,
                                    promote curiosity and foster dialogue between disciplines.
                                    At the heart of the programme is a social mission,
                                    providing a dynamic platform for international artists grappling with the important
                                    social, political and environmental issues of our time.
                                </p>
                            </div>
                            <section className={` flex items-end ml-auto`}>
                                <a href="#">READ MORE</a>
                                <a href="#">
                                    <img className={styleVoices.image_changing} style={{ ':hover': { transform: 'rotate(133deg)' } }} src={plus} alt="" width={40} />
                                </a>

                            </section>
                        </section>
                    </section>
                    <Swiper />
                </section>
                {/* this is the part for the Featured section */}

                <section className={`${styleVoices.wrapper_Featured} my-8 px-8`}>
                    <h2 className="text-5xl">Featured</h2>
                    <section className={`${styleVoices.wrapper_Featured_content} mt-4`}>

                        {/* Left Side */}
                        <section className={`${styleVoices.left}`}>
                            <section className={`${styleVoices.left_image_container}`}>
                                <img src={TestImage} alt="" style={{ minWidth: "200px", maxWidth: "600px" }} />
                                <h3>Sam Art</h3>
                                <p>this is the test paragraph</p>
                                <div>
                                    <span>1 March- 31March 2024</span>
                                </div>
                            </section>
                        </section>
                        {/* Right Side */}
                        {/* this is that shit that i want for changing classes {`${}`} */}

                        <section className={styleVoices.right}>

                            <section className={`${styleVoices.right_image_container}`}>
                                <img src={TestImage} alt="" width={"100px"} />
                                <h3>More Than One Memory</h3>
                                <p>thi is just a test paragraph for content</p>
                                <div>
                                    <span>
                                        8 February - 21 March 2024
                                    </span>
                                </div>
                            </section>

                            <section className={`${styleVoices.right_image_container}`}>
                                <img src={TestImage} alt="" width={"100px"} />
                                <h3>More Than One Memory</h3>
                                <p>thi is just a test paragraph for content</p>
                                <div>
                                    <span>
                                        8 February - 21 March 2024
                                    </span>
                                </div>
                            </section>
                            <section className={`${styleVoices.right_image_container}`}>
                                <img src={TestImage} alt="" width={"100px"} />
                                <h3>More Than One Memory</h3>
                                <p>thi is just a test paragraph for content</p>
                                <div>
                                    <span>
                                        8 February - 21 March 2024
                                    </span>
                                </div>
                            </section>

                            <section className={`${styleVoices.right_image_container}`}>
                                <img src={TestImage} alt="" width={"100px"} />
                                <h3>More Than One Memory</h3>
                                <p>thi is just a test paragraph for content</p>
                                <div>
                                    <span>
                                        8 February - 21 March 2024
                                    </span>
                                </div>
                            </section>
                            <section className={`${styleVoices.right_image_container}`}>
                                <img src={TestImage} alt="" width={"100px"} />
                                <h3>More Than One Memory</h3>
                                <p>thi is just a test paragraph for content</p>
                                <div>
                                    <span>
                                        8 February - 21 March 2024
                                    </span>
                                </div>
                            </section>

                            <section className={`${styleVoices.right_image_container}`}>
                                <img src={TestImage} alt="" width={"100px"} />
                                <h3>More Than One Memory</h3>
                                <p>thi is just a test paragraph for content</p>
                                <div>
                                    <span>
                                        8 February - 21 March 2024
                                    </span>
                                </div>
                            </section>
                            <section className={`${styleVoices.right_image_container}`}>
                                <img src={TestImage} alt="" width={"100px"} />
                                <h3>More Than One Memory</h3>
                                <p>thi is just a test paragraph for content</p>
                                <div>
                                    <span>
                                        8 February - 21 March 2024
                                    </span>
                                </div>
                            </section>

                            <section className={`${styleVoices.right_image_container}`}>
                                <img src={TestImage} alt="" width={"100px"} />
                                <h3>More Than One Memory</h3>
                                <p>thi is just a test paragraph for content</p>
                                <div>
                                    <span>
                                        8 February - 21 March 2024
                                    </span>
                                </div>
                            </section>
                            <section className={`${styleVoices.right_image_container}`}>
                                <img src={TestImage} alt="" width={"100px"} />
                                <h3>More Than One Memory</h3>
                                <p>thi is just a test paragraph for content</p>
                                <div>
                                    <span>
                                        8 February - 21 March 2024
                                    </span>
                                </div>
                            </section>

                            <section className={`${styleVoices.right_image_container}`}>
                                <img src={TestImage} alt="" width={"100px"} />
                                <h3>More Than One Memory</h3>
                                <p>thi is just a test paragraph for content</p>
                                <div>
                                    <span>
                                        8 February - 21 March 2024
                                    </span>
                                </div>
                            </section>
                            <section className={`${styleVoices.right_image_container}`}>
                                <img src={TestImage} alt="" width={"100px"} />
                                <h3>More Than One Memory</h3>
                                <p>thi is just a test paragraph for content</p>
                                <div>
                                    <span>
                                        8 February - 21 March 2024
                                    </span>
                                </div>
                            </section>


                        </section>
                    </section>


                </section>

                {/* THIS IS THE SECTION FOR   ABOUT CONTENT PART */}

                <section className={`${styleVoices.wrapper_AboutContent}`}>

                    <section className={`${styleVoices.wrapperImagesContent}`}>

                        <img src={TestImage} className={`${styleVoices.image_1}`} alt="" width={"300px"} />

                        <img src={TestImage} alt="" width={"300px"} />
                    </section>
                </section>

                <section className={`${styleVoices.wrapper_Web3_Exhibitions}`}>
                    <SwiperSlide />
                </section>

                <section className={`${styleVoices.wrapper_essays} mt-4`}>
                    <h2 className="text-5xl">Essays</h2>
                    <section className={`${styleVoices.wrapperEssays_picContent}`}>

                        <section className={`${styleVoices.essays_pic_content}`}>
                            <section className={`${styleVoices.pic_content_left} `}>
                                <section className={Redirect_Voices.lef_content_imageSticky}>
                                    <img src={TestImage} alt="" className={`${Redirect_Voices.imageStickyImg}`} />
                                    <h3 className="text-3xl max-w-[600px]"> Wet Round Time: Phyllida Bluemel on Nettle Grellier	</h3>
                                </section>

                            </section>

                            <section className={`${styleVoices.pic_content_right}`}>

                                <section>
                                    <img src={TestImage} alt="" />
                                    <h4>why do we doing this arts</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis.</p>
                                    <div className="wrapper_image_content wrapper_image_content flex">
                                        <p className="image_content">Essays</p>
                                        <p className="image_content">Exhibitions</p>
                                        <p className="image_content">Web3</p>
                                    </div>

                                </section>

                                <section>
                                    <img src={TestImage} alt="" />
                                    <h4>why do we doing this arts</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis.</p>
                                    <div className="wrapper_image_content flex">
                                        <p className="image_content">Essays</p>
                                        <p className="image_content">Exhibitions</p>
                                        <p className="image_content">Web3</p>
                                    </div>

                                </section>

                                <section>
                                    <img src={TestImage} alt="" />
                                    <h4>why do we doing this arts</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis.</p>
                                    <div className="wrapper_image_content flex">
                                        <p className="image_content">Essays</p>
                                        <p className="image_content">Exhibitions</p>
                                        <p className="image_content">Web3</p>
                                    </div>

                                </section>

                                <section>
                                    <img src={TestImage} alt="" />
                                    <h4>why do we doing this arts</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis.</p>
                                    <div className="wrapper_image_content flex">
                                        <p className="image_content">Essays</p>
                                        <p className="image_content">Exhibitions</p>
                                        <p className="image_content">Web3</p>
                                    </div>

                                </section>

                                <section>
                                    <img src={TestImage} alt="" />
                                    <h4>why do we doing this arts</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis.</p>
                                    <div className="wrapper_image_content flex">
                                        <p className="image_content">Essays</p>
                                        <p className="image_content">Exhibitions</p>
                                        <p className="image_content">Web3</p>
                                    </div>

                                </section>

                                <section>
                                    <img src={TestImage} alt="" />
                                    <h4>why do we doing this arts</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis.</p>
                                    <div className="wrapper_image_content flex">
                                        <p className="image_content">Essays</p>
                                        <p className="image_content">Exhibitions</p>
                                        <p className="image_content">Web3</p>
                                    </div>

                                </section>

                                <section>
                                    <img src={TestImage} alt="" />
                                    <h4>why do we doing this arts</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis.</p>
                                    <div className="wrapper_image_content flex">
                                        <p className="image_content">Essays</p>
                                        <p className="image_content">Exhibitions</p>
                                        <p className="image_content">Web3</p>
                                    </div>

                                </section>

                                <section>
                                    <img src={TestImage} alt="" />
                                    <h4>why do we doing this arts</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis.</p>
                                    <div className="wrapper_image_content flex">
                                        <p className="image_content">Essays</p>
                                        <p className="image_content">Exhibitions</p>
                                        <p className="image_content">Web3</p>
                                    </div>

                                </section>

                                <section>
                                    <img src={TestImage} alt="" />
                                    <h4>why do we doing this arts</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante in nibh mauris cursus mattis.</p>
                                    <div className="wrapper_image_content flex">
                                        <p className="image_content">Essays</p>
                                        <p className="image_content">Exhibitions</p>
                                        <p className="image_content">Web3</p>
                                    </div>

                                </section>

                            </section>
                        </section>
                    </section>

                </section>
                <section className={`${""} mt-8`}>
                    <h3 className="text-4xl">Exhibitions Archive</h3>
                    <Swiper_Slide_Archive />

                </section>
            </section>
            <Redirect_Exhibitions_Footer />



        </section>
    );
};

export default Redirect_Voices;


// for className  className={`${}`}