import  { useState} from 'react';
import Styles_main from "../Styles/main.module.css"
// Images START
import image_1 from "../assets/images/image-1.jpg";
import image_2 from "../assets/images/image-2.jpg";
import image_3 from "../assets/images/image-3.jpg";


import { getApi } from './ApiCoinPic';

const MainStructure = ({ EXHIBITIONS, VOICES, NEWS, EDITIONS, NFTs }) => {

    return (
        <section>
            {/* {section === "NFTs" && (
                <div> hi i'm workin in this part</div>
            )} */}
            {NFTs && (

                <div className='NfPtsWrapper'>
                    <section>
                   
                    </section>

                    <section id={Styles_main.main_grid}>
                        {/* Left Side */}
                        <div id={Styles_main.main__grid__left}>
                            <section>
                                <img src={image_1} alt="IMAGE" width={"100%"} style={{ display: "block" }} />
                                
                            </section>


                        </div>
                        {/* Left Side */}

                        {/* Right Side */}

                        <div className={Styles_main.main__grid__right} id={Styles_main.grid__right_left}>
                            {/* THIS IS JUST FOR RIGHT  */}

                            <section className={Styles_main.wrapper_right}>
                                <section className={Styles_main.grid__right__content__wrapper}>
                                    <img src={image_2} alt="IMAGE" style={{ display: "block" }} />
                                    <h3>Painting with Sculpture: Reflections on the State of Nature</h3>
                                    <p>Henry Hudson</p>
                                    <p> 20 June - 22 July 2023</p>

                                </section>

                                <section className={Styles_main.grid__right__content__wrapper}>
                                    <img src={image_2} alt="IMAGE" style={{ display: "block" }} />
                                    <h3>Painting with Sculpture: Reflections on the State of Nature</h3>
                                    <p>Henry Hudson</p>
                                    <p> 20 June - 22 July 2023</p>
                                </section>

                                <section className={Styles_main.grid__right__content__wrapper}>
                                    <img src={image_2} alt="IMAGE" style={{ display: "block" }} />
                                    <h3>Painting with Sculpture: Reflections on the State of Nature</h3>
                                    <p>Henry Hudson</p>
                                    <p> 20 June - 22 July 2023</p>
                                </section>

                                <section className={Styles_main.grid__right__content__wrapper}>
                                    <img src={image_2} alt="IMAGE" style={{ display: "block" }} />
                                    <h3>Painting with Sculpture: Reflections on the State of Nature</h3>
                                    <p>Henry Hudson</p>

                                    <p> 20 June - 22 July 2023</p>
                                </section>
                            </section>



                            {/* THIS IS FOR LEFT */}


                            <div className={Styles_main.main__grid__right_left}>


                                <section className={Styles_main.grid__right_left__content__wrapper}>
                                    <img src={image_3} alt="product" style={{ display: "block" }} />
                                    <h3>Month</h3>
                                    <p>Sho Shibuya</p>
                                    <p> 25 July - 24 August 2023</p>
                                    hi there
                                    {/* <section>
                                                    <p>hi there</p>
                                                </section> */}

                                </section>

                                <section className={Styles_main.grid__right_left__content__wrapper}>
                                    <img src={image_3} alt="product" style={{ display: "block" }} />
                                    <h3>Month</h3>
                                    <p>Sho Shibuya</p>
                                    <p> 25 July - 24 August 2023</p>
                                </section>

                                <section className={Styles_main.grid__right_left__content__wrapper}>
                                    <img src={image_3} alt="product" style={{ display: "block" }} />
                                    <h3>Month</h3>
                                    <p>Sho Shibuya</p>
                                    <p> 25 July - 24 August 2023</p>
                                </section>

                                <section className={Styles_main.grid__right_left__content__wrapper}>
                                    <img src={image_3} alt="product" style={{ display: "block" }} />
                                    <h3>Month</h3>
                                    <p>Sho Shibuya</p>
                                    <p> 25 July - 24 August 2023</p>
                                </section>

                                <section className={Styles_main.grid__right_left__content__wrapper}>
                                    <img src={image_3} alt="product" style={{ display: "block" }} />
                                    <h3>Month</h3>
                                    <p>Sho Shibuya</p>
                                    <p> 25 July - 24 August 2023</p>
                                </section>

                            </div>


                        </div>



                        {/* Right Side */}

                        {/* Right Side */}


                    </section>
                </div>



            )}

            {/* Not section */}
            
            {!NFTs && (
                <section id={Styles_main.main_grid}>
                    {/* Left Side */}
                    <div id={Styles_main.main__grid__left}>
                        <section>
                            <img src={image_1} alt="IMAGE" width={"100%"} style={{ display: "block" }} />
                            <p> this is our destiny </p>
                            <section> this is the grandpa story</section>
                            <section>this is test`</section>
                        </section>
                        


                    </div>
                    {/* Left Side */}

                    {/* Right Side */}

                    <div className={Styles_main.main__grid__right} id={Styles_main.grid__right_left}>
                        {/* THIS IS JUST FOR RIGHT  */}

                        <section className={Styles_main.wrapper_right}>
                            <section className={Styles_main.grid__right__content__wrapper}>
                                <img src={image_2} alt="IMAGE" style={{ display: "block" }} />
                                <h3>Painting with Sculpture: Reflections on the State of Nature</h3>
                                <p>Henry Hudson</p>
                                <p> 20 June - 22 July 2023</p>

                            </section>

                            <section className={Styles_main.grid__right__content__wrapper}>
                                <img src={image_2} alt="IMAGE" style={{ display: "block" }} />
                                <h3>Painting with Sculpture: Reflections on the State of Nature</h3>
                                <p>Henry Hudson</p>
                                <p> 20 June - 22 July 2023</p>
                            </section>

                            <section className={Styles_main.grid__right__content__wrapper}>
                                <img src={image_2} alt="IMAGE" style={{ display: "block" }} />
                                <h3>Painting with Sculpture: Reflections on the State of Nature</h3>
                                <p>Henry Hudson</p>
                                <p> 20 June - 22 July 2023</p>
                            </section>

                            <section className={Styles_main.grid__right__content__wrapper}>
                                <img src={image_2} alt="IMAGE" style={{ display: "block" }} />
                                <h3>Painting with Sculpture: Reflections on the State of Nature</h3>
                                <p>Henry Hudson</p>

                                <p> 20 June - 22 July 2023</p>
                            </section>
                        </section>



                        {/* THIS IS FOR LEFT */}


                        <div className={Styles_main.main__grid__right_left}>

                            <section className={Styles_main.grid__right_left__content__wrapper}>
                                <img src={image_3} alt="product" style={{ display: "block" }} />
                                <h3>Month</h3>
                                <p>Sho Shibuya</p>
                                <p> 25 July - 24 August 2023</p>
                                hi there
                                {/* <section>
                                        <p>hi there</p>
                                    </section> */}

                            </section>

                            <section className={Styles_main.grid__right_left__content__wrapper}>
                                <img src={image_3} alt="product" style={{ display: "block" }} />
                                <h3>Month</h3>
                                <p>Sho Shibuya</p>
                                <p> 25 July - 24 August 2023</p>
                            </section>

                            <section className={Styles_main.grid__right_left__content__wrapper}>
                                <img src={image_3} alt="product" style={{ display: "block" }} />
                                <h3>Month</h3>
                                <p>Sho Shibuya</p>
                                <p> 25 July - 24 August 2023</p>
                            </section>

                            <section className={Styles_main.grid__right_left__content__wrapper}>
                                <img src={image_3} alt="product" style={{ display: "block" }} />
                                <h3>Month</h3>
                                <p>Sho Shibuya</p>
                                <p> 25 July - 24 August 2023</p>
                            </section>

                            <section className={Styles_main.grid__right_left__content__wrapper}>
                                <img src={image_3} alt="product" style={{ display: "block" }} />
                                <h3>Month</h3>
                                <p>Sho Shibuya</p>
                                <p> 25 July - 24 August 2023</p>
                            </section>

                        </div>


                    </div>



                    {/* Right Side */}

                    {/* Right Side */}


                </section>
            )}
            {/* Right Side */}



        </section>
    );
};

export default MainStructure;