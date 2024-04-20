// import React from 'react';
import imageBack from "../../assets/images/image-1.jpg";
import Styles from "../../Styles/Redirect_About.module.css";
import Navbar from "../Navbar";
import Footer from "./Redirect_Exhibitions_Footer";

const Redirect_About = () => {
    return (
        <section className="flex mb-[100vh]" >
                <Navbar />
            <section className="" > 
                <section className={`${Styles.Redirect_About} relative z-50 `} >
                </section>
                <section className={`${Styles.About_Container} relative bg-slate-200 z-40 mb-[100vh] `}>
                    <h4>About Us</h4>
                    <section className={`${Styles.Container_Content} relative z-50  `}>
                        <section>

                            <div>
                                Unit seeks to preserve the artist’s essential role as the flag-bearer of
                                creativity in our future.
                            </div>
                        </section>
                        <section>
                            <div>
                                Since the gallery’s inception in 2013,
                                it has been committed to amplifying contemporary artistic voices
                                to ensure their vital contributions to creativity continue to inspire,
                                challenge and enrich the world.

                                Unit’s mission is to identify and maximise the reach and impact of
                                gifted artists by engaging new audiences and increasing accessibility to their work –
                                and in doing so,
                                the gallery seeks to preserve the artist’s essential role as the flag-bearer of
                                creativity in our future.

                                Headquartered in Mayfair, London, the gallery has been responsible for developing the careers of
                                numerous important international contemporary artists.
                            </div>
                        </section>
                    </section>

                </section>

            </section>
            <Footer />
        </section>

    );
};

export default Redirect_About;