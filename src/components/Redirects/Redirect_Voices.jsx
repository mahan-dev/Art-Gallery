// import React from 'react';

import Navbar from "../Navbar";

// import icon
import arrow_left from "../../assets/images/redirectVoices-icons/arrow-up-left.svg";
import styleVoices from "../../Styles/Redirect_Voices.module.css";
import plus from "../../assets/images/redirectVoices-icons/plus.svg";


// import sweeper 
import Swiper from "./Swiper_redirect_voices_slider";

// import parallex of react scrolling 


const Redirect_Voices = () => {
    return (
        <section className={{display: "flex",}}>

            <section style={{
                backgroundColor: "grey",
                display: "flex",
                justifyContent: "center",
                minHeight: "100vh",
                scrollBehavior: 'smooth',   
                   }}>

                 <Navbar />
                 <h2 className="flex items-center justify-center text-[10rem] ">Voices</h2>

            </section>
            <section className="bg-slate-50 pt-8 w-full">
                <section className="relative">
                    <div className="sticky top-[100px]"><p className="text-[4rem]  mr-5 ">Voices</p></div>
                    <section className="flex mt-[0] mx-6 ">
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

                <section>
                    
                </section>
               
            </section>
            {/* </Parallax> */}

        </section>
    );
};

export default Redirect_Voices;