
import Styles_main from "../Styles/main.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import MainStructure from './MainStructure';
const Main = () => {

    return (

        <main id={Styles_main.main}>


            <section className={Styles_main.MainContentWrapper}>
                <section className={Styles_main.intro_main}>
                    <span id={Styles_main.intro_main_content}>EXHIBITIONS</span>
                </section>
                <MainStructure EXHIBITIONS={true} />
            </section>


            <section className={Styles_main.MainContentWrapper}>
                <section className={Styles_main.intro_main}>
                    <span>VOICES</span>
                </section>
                <MainStructure VOICES={true} />
            </section>

            <section className={Styles_main.MainContentWrapper}>
                <section className={Styles_main.intro_main}>
                    <span>NEWS</span>
                </section>
                <MainStructure NEWS={true} />
            </section>

            <section className={Styles_main.MainContentWrapper}>

                <section className={Styles_main.intro_main}>
                    <span>EDITIONS</span>
                </section>
                <MainStructure EDITIONS={true} />
            </section>


            <section className={Styles_main.MainContentWrapper}>

                <section className={Styles_main.intro_main}>
                    <span>NFTS</span>
                </section>
                <MainStructure NFTs={true} />
            </section>
            {/* <MainStructure /> */}

        </main>

    );
};



export default Main;
// <main id={Styles_main.main}>
//     <section id={Styles_main.intro_main}>
//         <span id={Styles_main.intro_main_content}>EXHIBITIONS</span>
//     </section>

//     <section id={Styles_main.main_grid}>
//         {/* Left Side */}
//         <div id={Styles_main.main__grid__left}>
//             <section>
//                 <img src={image_1} alt="IMAGE" width={"100%"} style={{ display: "block" }} />
//             </section>


//         </div>
//         {/* Left Side */}

//         {/* Right Side */}
//         <div className={Styles_main.main__grid__right} id={Styles_main.grid__right_left}>

//             <section className={Styles_main.grid__right__content__wrapper}>
//                 <img src={image_2} alt="IMAGE" style={{ display: "block" }} />
//                 <h3>Painting with Sculpture: Reflections on the State of Nature</h3>
//                 <p>Henry Hudson</p>
//                 <p> 20 June - 22 July 2023</p>

//             </section>

//             <section className={Styles_main.grid__right__content__wrapper}>
//                 <img src={image_2} alt="IMAGE" style={{ display: "block" }} />
//                 <h3>Painting with Sculpture: Reflections on the State of Nature</h3>
//                 <p>Henry Hudson</p>
//                 <p> 20 June - 22 July 2023</p>
//             </section>

//             <section className={Styles_main.grid__right__content__wrapper}>
//                 <img src={image_2} alt="IMAGE" style={{ display: "block" }} />
//                 <h3>Painting with Sculpture: Reflections on the State of Nature</h3>
//                 <p>Henry Hudson</p>
//                 <p> 20 June - 22 July 2023</p>
//             </section>

//             <section className={Styles_main.grid__right__content__wrapper}>
//                 <img src={image_2} alt="IMAGE" style={{ display: "block" }} />
//                 <h3>Painting with Sculpture: Reflections on the State of Nature</h3>
//                 <p>Henry Hudson</p>
//                 <p> 20 June - 22 July 2023</p>
//             </section>


//         </div>
//         {/* Right Side */}

//         {/* Right Side */}
//         <div className={Styles_main.main__grid__right}>

//             <section className={Styles_main.grid__right__content__wrapper}>
//                 <img src={image_3} alt="product" style={{ display: "block" }} />
//                 <h3>Month</h3>
//                 <p>Sho Shibuya</p>
//                 <p> 25 July - 24 August 2023</p>
//                 <section>
//                     <p>hi there</p>
//                 </section>

//             </section>

//             <section className={Styles_main.grid__right__content__wrapper}>
//                 <img src={image_3} alt="product" style={{ display: "block" }} />
//                 <h3>Month</h3>
//                 <p>Sho Shibuya</p>
//                 <p> 25 July - 24 August 2023</p>
//             </section>

//             <section className={Styles_main.grid__right__content__wrapper}>
//                 <img src={image_3} alt="product" style={{ display: "block" }} />
//                 <h3>Month</h3>
//                 <p>Sho Shibuya</p>
//                 <p> 25 July - 24 August 2023</p>
//             </section>

//             <section className={Styles_main.grid__right__content__wrapper}>
//                 <img src={image_3} alt="product" style={{ display: "block" }} />
//                 <h3>Month</h3>
//                 <p>Sho Shibuya</p>
//                 <p> 25 July - 24 August 2023</p>
//             </section>

//             <section className={Styles_main.grid__right__content__wrapper}>
//                 <img src={image_3} alt="product" style={{ display: "block" }} />
//                 <h3>Month</h3>
//                 <p>Sho Shibuya</p>
//                 <p> 25 July - 24 August 2023</p>
//             </section>

//         </div>
//     </section>
//     {/* Right Side */}

//     <section id={Styles_main.second_intro}>
//         <span>VOICES</span>
//     </section>

// </main>
